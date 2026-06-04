#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Shared Playwright screenshot capture for CI and local dev loops.
 *
 * Usage (CLI):
 *   node scripts/capture.mjs --themes meridian --components '*'
 *   node scripts/capture.mjs --themes default,bootstrap --components button,checkbox
 *
 * Usage (API):
 *   import { capture } from './capture.mjs';
 *   await capture({ themes: ['meridian'], components: ['button'] });
 */
import { chromium } from 'playwright';
import { readFileSync, mkdirSync } from 'node:fs';
import { createServer as createHttpServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { parseArgs } from 'node:util';
import { fileURLToPath } from 'node:url';
import { globSync } from 'glob';
import os from 'node:os';

const MIME = {
    '.js':    'application/javascript',
    '.css':   'text/css',
    '.html':  'text/html; charset=utf-8',
    '.json':  'application/json',
    '.png':   'image/png',
    '.svg':   'image/svg+xml',
    '.woff':  'font/woff',
    '.woff2': 'font/woff2',
    '.ttf':   'font/ttf',
};

function startServer(port) {
    const cwd = process.cwd();
    const sharedIndex = readFileSync(join(cwd, 'packages/html/shared/index.html'));

    const server = createHttpServer((req, res) => {
        const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

        // Block path traversal
        const filePath = resolve(cwd, pathname.replace(/^\//, ''));
        if (!filePath.startsWith(cwd)) {
            res.writeHead(403); res.end(); return;
        }

        // Redirect extensionless paths to trailing-slash variant (devkit convention)
        if (!pathname.endsWith('/') && !extname(pathname)) {
            res.writeHead(301, { Location: pathname + '/' });
            res.end(); return;
        }

        // Directory request: serve shared index.html (devkit page shell)
        if (pathname.endsWith('/')) {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(sharedIndex); return;
        }

        // Static file
        try {
            const content = readFileSync(filePath);
            res.writeHead(200, { 'Content-Type': MIME[extname(pathname)] || 'application/octet-stream' });
            res.end(content);
        } catch {
            res.writeHead(404); res.end();
        }
    });

    return new Promise((resolve) => server.listen(port, '127.0.0.1', () => resolve(server)));
}

/**
 * Capture screenshots for the given themes and components.
 *
 * @param {object} opts
 * @param {string[]}  opts.themes      - Theme names to capture (e.g. ['meridian', 'default'])
 * @param {string[]} [opts.components] - Component names, or ['*'] for all (default: ['*'])
 * @param {string}   [opts.outDir]     - Output directory (default: 'tests/_output')
 * @param {number}   [opts.port]       - Port for the built-in server (default: 18222)
 * @param {number}   [opts.serverPort] - Reuse an existing server on this port (skips starting one)
 */
export async function capture({
    themes,
    components = ['*'],
    outDir = 'tests/_output',
    port = 18222,
    serverPort = null,
} = {}) {
    let server = null;
    const basePort = serverPort ?? port;
    const baseUrl  = `http://127.0.0.1:${basePort}`;

    if (!serverPort) {
        server = await startServer(basePort);
    }

    const compGlob = components.includes('*') ? '*' : `{${components.join(',')}}`;
    const variants = globSync(`./packages/html/dist/${compGlob}/tests/**/app.js`)
        .map(p => p.replace(/\\/g, '/').replace(/\/app\.js$/, '/'));

    if (variants.length === 0) {
        console.warn(`No test variants found for components: ${components.join(', ')}`);
    }

    const CONCURRENCY = Math.min(4, Math.max(2, os.cpus().length - 1));
    const browser = await chromium.launch();
    const queue   = [...variants];

    async function worker() {
        const page = await browser.newPage({
            viewport: { width: 1280, height: 720 },
            deviceScaleFactor: 1,
        });

        for (let v = queue.shift(); v; v = queue.shift()) {
            // Derive component name and variant name from the path
            // e.g. packages/html/dist/button/tests/button-solid/ → comp=button, name=button-solid
            const compName = v.split('/dist/')[1].split('/')[0];
            const name     = v.split('/').at(-2);

            for (const theme of themes) {
                const url = `${baseUrl}/${v}?theme=${theme}&swatch=all`;
                await page.goto(url, { waitUntil: 'load' });
                // Ensure fonts are ready after the theme CSS loads
                await page.evaluate(() => document.fonts.ready);

                // Guard: the shared index.html must have the kendo-theme link
                const hasThemeLink = await page.evaluate(
                    () => Boolean(document.querySelector('link[data-role="kendo-theme"]'))
                );
                if (!hasThemeLink) {
                    console.error(`Page missing link[data-role="kendo-theme"]: ${url}`);
                    continue;
                }

                const outPath = join(outDir, theme, compName, `${name}.png`);
                mkdirSync(join(outDir, theme, compName), { recursive: true });
                await page.locator('#test-area, #app').first()
                    .screenshot({ path: outPath, animations: 'disabled' });
            }
        }

        await page.close();
    }

    try {
        await Promise.all(Array.from({ length: CONCURRENCY }, worker));
    } finally {
        await browser.close();
        if (server) { server.close(); }
    }
}

// CLI entry point
const isMain = process.argv[1] === fileURLToPath(import.meta.url);
if (isMain) {
    const { values } = parseArgs({
        options: {
            themes:     { type: 'string', default: 'meridian' },
            components: { type: 'string', default: '*' },
            outDir:     { type: 'string', default: 'tests/_output' },
            port:       { type: 'string', default: '18222' },
        },
    });

    const themes     = values.themes.split(',').map(t => t.trim());
    const components = values.components === '*'
        ? ['*']
        : values.components.split(',').map(c => c.trim());

    try {
        await capture({ themes, components, outDir: values.outDir, port: Number(values.port) });
        console.log(`✓ Captured ${themes.join(', ')} → ${values.outDir}`);
    } catch (err) {
        console.error('Capture failed:', err.message);
        process.exit(1);
    }
}
