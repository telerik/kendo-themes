import type { Plugin, ViteDevServer } from "vite";
import { existsSync } from "fs";
import { globSync } from "glob";
import { resolve } from "path";

interface TestEntry {
    component: string;
    test: string;
    filePath: string;
}

function discoverTests(): TestEntry[] {
    const files = globSync("packages/html/src/**/tests/**/*.tsx", { dotRelative: false });
    return files.map((filePath) => {
        const parts = filePath.split("/");
        // packages/html/src/<component>/tests/<test>.tsx
        const component = parts[3];
        const test = parts[5].replace(".tsx", "");
        return { component, test, filePath };
    });
}

function renderTestPage(component: string, test: string, filePath: string): string {
    return `<!DOCTYPE html>
<html lang="en" class="k-no-animations">
<head>
    <title>${component} / ${test}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" data-role="kendo-theme" href="/packages/meridian/dist/all.css" />
    <link rel="stylesheet" data-role="kendo-theme-utils" href="/packages/utils/dist/all.css" />
    <link rel="stylesheet" href="/packages/html/assets/styles.css"/>
    <script src="/packages/html/assets/scripts.js"></script>
</head>
<body id="app" class="k-body">
    <script type="module">
        import { createElement } from "react";
        import { createRoot } from "react-dom/client";
        import App from "/${filePath}";
        createRoot(document.getElementById("app")).render(createElement(App));
    </script>
</body>
</html>`;
}

function renderListingPage(tests: TestEntry[]): string {
    const grouped: Record<string, TestEntry[]> = {};
    for (const entry of tests) {
        if (!grouped[entry.component]) grouped[entry.component] = [];
        grouped[entry.component].push(entry);
    }

    const components = Object.keys(grouped).sort();
    const totalTests = tests.length;

    const componentLinks = components.map((name) => {
        const entries = grouped[name].sort((a, b) => a.test.localeCompare(b.test));
        const items = entries
            .map((e) => `                <li><a href="/${e.component}/${e.test}">${e.test}</a></li>`)
            .join("\n");
        return `            <details>
                <summary><strong>${name}</strong> <span class="count">(${entries.length})</span></summary>
                <ul>
${items}
                </ul>
            </details>`;
    }).join("\n");

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Kendo Themes — Test Server</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 2rem; max-width: 900px; margin: 0 auto; color: #1a1a1a; }
        h1 { margin-bottom: 0.25rem; }
        .subtitle { color: #666; margin-bottom: 1.5rem; }
        details { margin-bottom: 0.25rem; padding: 0.5rem 0; border-bottom: 1px solid #eee; }
        summary { cursor: pointer; padding: 0.25rem 0; }
        summary strong { font-size: 0.95rem; }
        .count { color: #888; font-size: 0.85rem; font-weight: normal; }
        ul { list-style: none; padding: 0.5rem 0 0 1.25rem; }
        li { padding: 0.15rem 0; }
        a { color: #0066cc; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .search { width: 100%; padding: 0.6rem 0.8rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 6px; font-size: 0.95rem; }
        .search:focus { outline: none; border-color: #0066cc; }
    </style>
</head>
<body>
    <h1>Kendo Themes Test Server</h1>
    <p class="subtitle">${components.length} components · ${totalTests} test pages</p>
    <input type="text" class="search" placeholder="Filter components..." autofocus />
    <div id="components">
${componentLinks}
    </div>
    <script>
        document.querySelector('.search').addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            document.querySelectorAll('details').forEach(d => {
                const name = d.querySelector('summary strong').textContent.toLowerCase();
                const links = [...d.querySelectorAll('a')].map(a => a.textContent.toLowerCase());
                const match = name.includes(q) || links.some(l => l.includes(q));
                d.style.display = match ? '' : 'none';
                if (match && q) d.open = true;
            });
        });
    </script>
</body>
</html>`;
}

export function kendoTestServer(): Plugin {
    let tests: TestEntry[] = [];

    return {
        name: "kendo-test-server",

        configureServer(server: ViteDevServer) {
            tests = discoverTests();
            // eslint-disable-next-line no-console
            console.log(`[kendo] Discovered ${tests.length} test pages across ${new Set(tests.map(t => t.component)).size} components`);

            // Return a function so middleware runs AFTER Vite's static file serving
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    const url = new URL(req.url!, `http://${req.headers.host}`);
                    const pathname = url.pathname.replace(/\/+$/, "") || "/";

                    // Serve listing page at root
                    if (pathname === "/") {
                        tests = discoverTests();
                        const html = renderListingPage(tests);
                        res.setHeader("Content-Type", "text/html");
                        res.statusCode = 200;
                        res.end(html);
                        return;
                    }

                    // Match test URLs: /:component/:test
                    const match = pathname.match(/^\/([^/.]+)\/([^/.]+)$/);
                    if (!match) return next();

                    const [, component, test] = match;
                    const filePath = `packages/html/src/${component}/tests/${test}.tsx`;

                    if (!existsSync(resolve(filePath))) return next();

                    const html = renderTestPage(component, test, filePath);
                    const transformed = await server.transformIndexHtml(url.pathname, html);
                    res.setHeader("Content-Type", "text/html");
                    res.statusCode = 200;
                    res.end(transformed);
                });
            };
        },
    };
}
