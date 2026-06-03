import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { existsSync, readFileSync } from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';
import { globSync } from 'glob';
import type { Plugin, ViteDevServer } from 'vite';

// __dirname is provided by Vite's esbuild config bundler
const devkitDir = __dirname;
const repoRoot = resolve(devkitDir, '../../..');

// Packages under packages/* that are not selectable themes.
const NON_THEME_PACKAGES = new Set(['utils', 'html']);

const execAsync = promisify(exec);
const sassBin = resolve(repoRoot, 'node_modules/.bin/sass');

/** Compile a package's `scss/all.scss` → `dist/all.css` (expanded, dev mode). */
function compileAllCss(pkg: string): Promise<unknown> {
    const cmd = `"${sassBin}" --no-source-map --load-path=../../node_modules ./scss/all.scss ./dist/all.css`;
    return execAsync(cmd, { cwd: resolve(repoRoot, `packages/${pkg}`) });
}

/** Build every swatch CSS for a theme (gulp → sass → postcss) via its npm script. */
function buildSwatches(pkg: string): Promise<unknown> {
    return execAsync('npm run sass:dist', { cwd: resolve(repoRoot, `packages/${pkg}`) });
}

/** Extracts the most useful error text from a failed exec. */
function execError(err: unknown): string {
    return (err as { stderr?: string }).stderr?.trim() || String(err);
}

/**
 * Serves devkit/index.html for all SPA navigation requests (routes without a
 * file extension that aren't Vite-internal paths). Registered as a pre-middleware
 * so it intercepts navigation requests before Vite's built-in 404 handling.
 * Requests with file extensions are skipped and handled normally by Vite.
 */
function htmlFallbackPlugin(): Plugin {
    const indexHtmlPath = resolve(devkitDir, 'index.html');

    return {
        name: 'devkit-html-fallback',
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                const url = req.url ?? '/';

                // Skip Vite internals, HMR, and requests that look like file assets
                if (
                    url.startsWith('/@') ||
                    url.startsWith('/__') ||
                    /\.\w{1,10}(\?.*)?$/.test(url)
                ) {
                    return next();
                }

                try {
                    const rawHtml = readFileSync(indexHtmlPath, 'utf-8');
                    const transformed = await server.transformIndexHtml(url, rawHtml);
                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(transformed);
                } catch (e) {
                    next(e as Error);
                }
            });
        },
    };
}

/**
 * Redirects legacy esbuild dev-server URLs to clean devkit routes so that
 * existing bookmarks and render-test-pages URLs continue to work.
 *
 * Legacy:  /packages/html/dist/{component}/tests/{test}/
 * Devkit:  /{component}/{test}?...
 */
function legacyRedirectPlugin(): Plugin {
    return {
        name: 'devkit-legacy-redirect',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                const url = req.url ?? '/';
                const m = url.match(/^\/packages\/html\/dist\/([^/?]+)\/tests\/([^/?]+)\/?(\?.*)?$/);
                if (m) {
                    const [, comp, test, qs = ''] = m;
                    res.writeHead(301, { Location: `/${comp}/${test}${qs}` });
                    res.end();
                    return;
                }
                next();
            });
        },
    };
}

/**
 * Generates the `virtual:test-routes` module — a static map of
 * `{ [component]: testName[] }` derived from `packages/html/src` at startup.
 */
function testRoutesPlugin(): Plugin {
    const virtualId = 'virtual:test-routes';
    const resolvedId = `\0${virtualId}`;

    return {
        name: 'devkit-test-routes',
        resolveId(id) {
            if (id === virtualId) return resolvedId;
        },
        load(id) {
            if (id !== resolvedId) return;

            const files = globSync('packages/html/src/**/tests/*.tsx', {
                cwd: repoRoot,
                posix: true,
            });

            const routes: Record<string, string[]> = {};
            for (const file of files) {
                const m = file.match(/packages\/html\/src\/([^/]+)\/tests\/([^/]+)\.tsx$/);
                if (m) {
                    const [, component, test] = m;
                    if (!routes[component]) routes[component] = [];
                    routes[component].push(test);
                }
            }

            return `export const testRoutes = ${JSON.stringify(routes)};`;
        },
    };
}

/**
 * Generates the `virtual:swatch-map` module — a static map of
 * `{ [theme]: swatchName[] }` derived from each theme's swatch *source*
 * (`lib/swatches/*.json`). Sourcing from definitions rather than compiled dist
 * means the dropdown is fully populated even before anything is built; the CSS
 * is compiled lazily on first request (see `lazyCssPlugin`).
 */
function swatchMapPlugin(): Plugin {
    const virtualId = 'virtual:swatch-map';
    const resolvedId = `\0${virtualId}`;

    return {
        name: 'devkit-swatch-map',
        resolveId(id) {
            if (id === virtualId) return resolvedId;
        },
        load(id) {
            if (id !== resolvedId) return;

            const files = globSync('packages/*/lib/swatches/*.json', {
                cwd: repoRoot,
                posix: true,
            });

            const map: Record<string, string[]> = {};
            for (const file of files) {
                const m = file.match(/packages\/([^/]+)\/lib\/swatches\/([^/]+)\.json$/);
                if (m) {
                    const [, theme, swatch] = m;
                    if (NON_THEME_PACKAGES.has(theme)) continue;
                    (map[theme] ??= []).push(swatch);
                }
            }
            for (const swatches of Object.values(map)) swatches.sort();

            return `export const swatchMap = ${JSON.stringify(map)};`;
        },
    };
}

/**
 * Watches theme SCSS sources for changes, recompiles the affected theme's
 * `all.css` using the sass binary, then sends a custom `kendo:css-update` HMR
 * event so the browser hot-swaps the CSS link without a full page reload.
 *
 * Only active in dev server mode (`apply: 'serve'`).
 */
function scssWatchPlugin(): Plugin {
    const pending = new Map<string, ReturnType<typeof setTimeout>>();

    return {
        name: 'devkit-scss-watch',
        apply: 'serve',
        configureServer(server) {
            // Tell chokidar to watch all theme SCSS source trees
            server.watcher.add(`${repoRoot}/packages/*/scss/**/*.scss`);

            server.watcher.on('change', (filePath: string) => {
                const normalised = filePath.replace(/\\/g, '/');
                const m = normalised.match(/packages\/([^/]+)\/scss\//);
                if (!m) return;

                const theme = m[1];
                if (NON_THEME_PACKAGES.has(theme)) return;

                // Debounce rapid saves — only compile once per 300 ms quiet window
                const existing = pending.get(theme);
                if (existing) clearTimeout(existing);

                pending.set(theme, setTimeout(async () => {
                    pending.delete(theme);
                    server.config.logger.info(`  → [kendo] recompiling ${theme}/all.css…`, { timestamp: true });

                    try {
                        await compileAllCss(theme);
                        server.config.logger.info(`  ✓ [kendo] ${theme}/all.css ready`, { timestamp: true });
                        // Notify any connected browser to hot-swap the CSS link
                        server.ws.send({ type: 'custom', event: 'kendo:css-update', data: { theme } });
                    } catch (err) {
                        server.config.logger.error(`  ✗ [kendo] ${theme} sass error:\n${execError(err)}`);
                    }
                }, 300));
            });
        },
    };
}

/**
 * Compiles theme CSS on demand: when the browser requests a
 * `/packages/{pkg}/dist/{name}.css` that doesn't exist yet, build it, then let
 * Vite serve the freshly written file. `all.css` uses the fast single-file sass
 * command; any other name triggers the theme's full swatch build (once). This
 * removes the pre-build requirement — `npm start` just works and only the CSS
 * you actually view is compiled (and cached to disk for next time).
 */
function lazyCssPlugin(): Plugin {
    const building = new Map<string, Promise<unknown>>();

    function ensureBuilt(server: ViteDevServer, pkg: string, name: string): Promise<unknown> {
        const isAll = name === 'all';
        const key = isAll ? `${pkg}/all` : `${pkg}/__swatches__`;

        let job = building.get(key);
        if (!job) {
            const label = isAll ? `${pkg}/all.css` : `${pkg} swatches`;
            server.config.logger.info(`  → [kendo] compiling ${label}…`, { timestamp: true });
            job = (isAll ? compileAllCss(pkg) : buildSwatches(pkg))
                .then(() => server.config.logger.info(`  ✓ [kendo] ${label} ready`, { timestamp: true }))
                .finally(() => building.delete(key));
            building.set(key, job);
        }
        return job;
    }

    return {
        name: 'devkit-lazy-css',
        apply: 'serve',
        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                const url = (req.url ?? '').split('?')[0];
                const m = url.match(/^\/packages\/([^/]+)\/dist\/([^/]+)\.css$/);
                if (!m) return next();

                const [, pkg, name] = m;
                const distPath = resolve(repoRoot, `packages/${pkg}/dist/${name}.css`);
                if (existsSync(distPath)) return next(); // already built — Vite serves it

                // Only packages with an scss entry are buildable; others 404 as before.
                if (!existsSync(resolve(repoRoot, `packages/${pkg}/scss/all.scss`))) return next();

                try {
                    await ensureBuilt(server, pkg, name);
                } catch (err) {
                    const message = execError(err);
                    server.config.logger.error(`  ✗ [kendo] ${pkg}/${name}.css build failed:\n${message}`);
                    server.ws.send({ type: 'custom', event: 'kendo:css-error', data: { pkg, name, message } });
                    // Respond with a valid (empty) stylesheet so the <link> still fires `load`.
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.end(`/* devkit: failed to build ${pkg}/${name}.css — see terminal */`);
                    return;
                }
                return next(); // file now exists — hand off to Vite's static serving
            });
        },
    };
}

export default defineConfig({
    root: repoRoot,
    appType: 'custom',
    server: {
        port: 3000,
        fs: {
            // Allow serving files from outside the root (e.g. node_modules hoisted to repo root)
            strict: false,
        },
    },
    optimizeDeps: {
        entries: ['packages/html/devkit/main.tsx'],
        include: ['react', 'react-dom/client'],
    },
    plugins: [
        legacyRedirectPlugin(),
        lazyCssPlugin(),
        htmlFallbackPlugin(),
        react(),
        testRoutesPlugin(),
        swatchMapPlugin(),
        scssWatchPlugin(),
    ],
});
