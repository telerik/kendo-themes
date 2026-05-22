import type { Plugin, ViteDevServer } from "vite";
import { existsSync } from "fs";
import { globSync } from "glob";
import { resolve } from "path";

// ─── Theme / swatch data (shared between server HTML template and client script) ──────────────────

const THEMES = ["default", "bootstrap", "classic", "material", "fluent", "meridian"];
const DEFAULT_THEME = "meridian";

const SWATCHES: Record<string, string[]> = {
  default: ["all", "default-main", "default-main-dark", "default-blue", "default-green", "default-nordic", "default-ocean-blue", "default-ocean-blue-a11y", "default-orange", "default-purple", "default-dataviz-v4"],
  bootstrap: ["all", "bootstrap-main", "bootstrap-main-dark", "bootstrap-3", "bootstrap-3-dark", "bootstrap-4", "bootstrap-4-dark", "bootstrap-nordic", "bootstrap-turquoise", "bootstrap-turquoise-dark", "bootstrap-urban", "bootstrap-vintage", "bootstrap-dataviz-v4"],
  classic: ["all", "classic-main", "classic-main-dark", "classic-green", "classic-green-dark", "classic-lavender", "classic-lavender-dark", "classic-metro", "classic-metro-dark", "classic-moonlight", "classic-opal", "classic-opal-dark", "classic-silver", "classic-silver-dark"],
  material: ["all", "material-main", "material-main-dark", "material-2", "material-2-dark", "material-aqua-dark", "material-arctic", "material-burnt-teal", "material-eggplant", "material-lime", "material-lime-dark", "material-nova", "material-smoke", "material-dataviz-v4"],
  fluent: ["all", "fluent-main", "fluent-main-dark", "fluent-1", "fluent-1-dark"],
  meridian: ["all", "meridian-main", "meridian-main-dark"],
};

// ─── Client-side theme switcher (inlined into every test page) ─────────────────────────────────

const THEME_SWITCHER_JS = /* js */ `
(function() {
    const THEMES = ${JSON.stringify(THEMES)};
    const SWATCHES = ${JSON.stringify(SWATCHES)};
    const DEFAULT_THEME = "${DEFAULT_THEME}";
    const themeLink = document.getElementById("kendo-theme");

    function themeHref(theme, swatch) {
        return swatch === "all"
            ? "/packages/" + theme + "/scss/all.scss"
            : "/packages/" + theme + "/dist/" + swatch + ".scss";
    }

    const saved = localStorage.getItem("kendo-dev-theme");
    const initial = saved ? JSON.parse(saved) : { theme: DEFAULT_THEME, swatch: "all" };

    const container = document.createElement("div");
    Object.assign(container.style, {
        position: "fixed", top: "16px", right: "16px", zIndex: "999999",
        font: "12px/1.4 sans-serif", display: "flex", alignItems: "center", gap: "8px",
        background: "#fff", border: "1px solid #ccc", borderRadius: "6px",
        padding: "8px 16px", boxShadow: "0 1px 4px rgba(0,0,0,.12)",
    });

    function makeSelect() {
        const el = document.createElement("select");
        Object.assign(el.style, { font: "inherit", border: "1px solid #ddd", borderRadius: "4px", padding: "4px 6px", width: "100px" });
        return el;
    }
    function makeLabel(text) {
        const el = document.createElement("label");
        el.textContent = text;
        el.style.color = "#555";
        return el;
    }

    const themeSelect = makeSelect();
    for (const t of THEMES) themeSelect.add(new Option(t, t, false, t === initial.theme));

    const swatchSelect = makeSelect();
    function populateSwatches(theme, selected) {
        swatchSelect.innerHTML = "";
        for (const s of SWATCHES[theme] || ["all"]) swatchSelect.add(new Option(s, s, false, s === (selected || "all")));
    }
    populateSwatches(initial.theme, initial.swatch);

    container.append(makeLabel("Theme:"), themeSelect, makeLabel("Swatch:"), swatchSelect);
    document.body.prepend(container);

    function applyTheme() {
        const theme = themeSelect.value;
        const swatch = swatchSelect.value;
        localStorage.setItem("kendo-dev-theme", JSON.stringify({ theme, swatch }));
        themeLink.href = themeHref(theme, swatch);
    }

    themeSelect.addEventListener("change", () => { populateSwatches(themeSelect.value, "all"); applyTheme(); });
    swatchSelect.addEventListener("change", applyTheme);
})();
`;

// ─── Test discovery ──────────────────────────────────────────────────────────────────────────────

interface TestEntry {
  component: string;
  test: string;
  filePath: string;
}

function discoverTests(): TestEntry[] {
  return globSync("packages/html/src/**/tests/**/*.tsx").map((filePath) => {
    const parts = filePath.split("/");
    return { component: parts[3], test: parts[5].replace(".tsx", ""), filePath };
  });
}

// ─── HTML templates ──────────────────────────────────────────────────────────────────────────────

function renderTestPage(component: string, test: string, filePath: string): string {
  return `<!DOCTYPE html>
<html lang="en" class="k-no-animations">
<head>
    <title>${test}</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/packages/html/assets/styles.css"/>
    <link id="kendo-theme" rel="stylesheet" href="/packages/${DEFAULT_THEME}/scss/all.scss"/>
    <link rel="stylesheet" href="/packages/utils/scss/all.scss"/>
    <script>
        (function() {
            var saved = localStorage.getItem("kendo-dev-theme");
            if (saved) {
                var d = JSON.parse(saved), theme = d.theme || "${DEFAULT_THEME}", swatch = d.swatch || "all";
                document.getElementById("kendo-theme").href = swatch === "all"
                    ? "/packages/" + theme + "/scss/all.scss"
                    : "/packages/" + theme + "/dist/" + swatch + ".scss";
            }
        })();
    </script>
</head>
<body class="k-body">
    <div id="app"></div>
    <script type="module">
        ${THEME_SWITCHER_JS}
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
  for (const e of tests) {
    (grouped[e.component] ??= []).push(e);
  }
  const components = Object.keys(grouped).sort();

  const componentLinks = components
    .map((name) => {
      const entries = grouped[name].sort((a, b) => a.test.localeCompare(b.test));
      const items = entries.map((e) => `                <li><a href="/${e.component}/${e.test}">${e.test}</a></li>`).join("\n");
      return `            <details>
                <summary><strong>${name}</strong> <span class="count">(${entries.length})</span></summary>
                <ul>\n${items}\n                </ul>
            </details>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Dev Server</title>
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
    <h1>Kendo Themes - Dev Server</h1>
    <p class="subtitle">${components.length} components · ${tests.length} test pages</p>
    <input type="text" class="search" placeholder="Filter components..." autofocus />
    <div id="components">
${componentLinks}
    </div>
    <script>
        const container = document.getElementById('components');
        document.querySelector('.search').addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase();
            const details = [...container.querySelectorAll('details')];
            const scored = details.map(d => {
                const name = d.querySelector('summary strong').textContent.toLowerCase();
                let score = 0;
                if (!q) { score = -1; }
                else if (name === q) { score = 3; }
                else if (name.startsWith(q)) { score = 2; }
                else if (name.includes(q)) { score = 1; }
                d.style.display = score === 0 ? 'none' : '';
                if (score > 0 && q) d.open = true;
                return { d, score };
            });
            scored.filter(x => x.score > 0)
                  .sort((a, b) => b.score - a.score)
                  .forEach(({ d }) => container.appendChild(d));
        });
    </script>
</body>
</html>`;
}

// ─── Plugin ───────────────────────────────────────────────────────────────────────────────────────

export function kendoDevServer(): Plugin {
  return {
    name: "kendo-dev-server",

    configureServer(server: ViteDevServer) {
      const tests = discoverTests();
      // eslint-disable-next-line no-console
      console.log(`[kendo] ${tests.length} test pages · ${new Set(tests.map((t) => t.component)).size} components`);

      return () => {
        server.middlewares.use(async (req, res, next) => {
          const url = new URL(req.url!, `http://${req.headers.host}`);
          const pathname = url.pathname.replace(/\/+$/, "") || "/";

          if (pathname === "/") {
            const html = renderListingPage(discoverTests());
            res.setHeader("Content-Type", "text/html");
            res.end(html);
            return;
          }

          const match = pathname.match(/^\/([^/.]+)\/([^/.]+)$/);
          if (!match) return next();

          const [, component, test] = match;
          const filePath = `packages/html/src/${component}/tests/${test}.tsx`;
          if (!existsSync(resolve(filePath))) return next();

          const html = await server.transformIndexHtml(url.pathname, renderTestPage(component, test, filePath));
          res.setHeader("Content-Type", "text/html");
          res.end(html);
        });
      };
    },
  };
}
