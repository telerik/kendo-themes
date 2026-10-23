import { createServer } from "node:http";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { joinSession, createCanvas } from "@github/copilot-sdk/extension";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(HERE, "../../..");
const THEMES = ["meridian", "default", "bootstrap", "material", "classic", "fluent"];
const CATEGORIES = ["color", "spacing", "typography", "elevation", "radius", "motion", "components"];
// SassDoc group id for each token category
const GROUPS = { spacing: "spacing", color: "color-system", typography: "typography", elevation: "elevation", radius: "radii", motion: "motion" };

// Resolves SCSS nesting to find the selectors that receive k-translucency-blur(), plus bg usage, per component
function scanTranslucency(theme) {
    const dir = join(REPO_ROOT, "packages", theme, "scss");
    if (!existsSync(dir)) {return [];}
    const join2 = (parents, header) => {
        const own = header.split(",").map((x) => x.trim()).filter(Boolean);
        const out = [];
        for (const p of parents) {
            for (const o of own) {
                if (o.includes("&")) {out.push(o.replace(/&/g, p));} else {out.push(p ? p + " " + o : o);}
            }
        }
        return out;
    };
    const out = [];
    for (const id of readdirSync(dir)) {
        const bg = [], blurs = [];
        let themeBg = false;
        const vf = join(dir, id, "_variables.scss");
        if (existsSync(vf)) {
            for (const line of readFileSync(vf, "utf8").split("\n")) {
                const m = /^\s*\$(kendo-[\w-]+)\s*:.*k-translucency-bg\(/.exec(line);
                if (m) {bg.push(m[1]);}
            }
        }
        const tf = join(dir, id, "_theme.scss");
        if (existsSync(tf)) {
            const src = readFileSync(tf, "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
            const stack = [[""]];
            let buf = "";
            for (const ch of src) {
                if (ch === "{") {
                    const h = buf.trim();
                    const top = stack[stack.length - 1];
                    stack.push(h.startsWith("@") || h.endsWith("#") ? top : join2(top, h));
                    buf = "";
                } else if (ch === "}") {
                    stack.pop();
                    buf = "";
                } else if (ch === ";") {
                    const top = stack[stack.length - 1];
                    const b = /backdrop-filter:\s*k-translucency-blur\((\d+)\)/.exec(buf);
                    if (b) {
                        for (const sel of top) {blurs.push({ selector: sel, level: Number(b[1]) });}
                    }
                    if (buf.includes("k-translucency-bg(")) {themeBg = true;}
                    buf = "";
                } else {
                    buf += ch;
                }
            }
        }
        if (bg.length || themeBg || blurs.length) {out.push({ id, bg, themeBg, blurs });}
    }
    return out;
}

// Dark swatch overrides for the color map; values may be wrapped as #{"..."}
function loadDark(theme) {
    const file = join(REPO_ROOT, "packages", theme, "lib", "swatches", theme + "-main-dark.json");
    if (!existsSync(file)) {return null;}
    try {
        const out = {};
        for (const g of JSON.parse(readFileSync(file, "utf8")).groups || []) {
            for (const [key, v] of Object.entries(g.colorsMap || {})) {
                const m = /^#\{"(.*)"\}$/.exec(String(v.value));
                out[key] = m ? m[1] : String(v.value);
            }
        }
        return out;
    } catch {
        return null;
    }
}

function toToken(item) {
    const name = item.context.name;
    const type = item.resolvedType || item.type || "";
    if (type === "Map" && item.prettyValue) {
        const items = Object.entries(item.prettyValue).map(([key, value]) => ({ key, value: typeof value === "object" ? value : String(value) }));
        return { name, type, items };
    }
    return { name, type, value: String(item.resolvedValue ?? item.context.value ?? "") };
}

// Reads <theme>/dist/meta/sassdoc-data.json, produced by `npm run docs`
function load(repo) {
    const data = { themes: {}, components: {}, index: {}, missing: [] };
    for (const theme of THEMES) {
        const file = join(repo, "packages", theme, "dist", "meta", "sassdoc-data.json");
        if (!existsSync(file)) {
            data.missing.push(theme);
            continue;
        }
        const { variableGroups = [] } = JSON.parse(readFileSync(file, "utf8"));
        const idx = new Map();
        for (const g of variableGroups) {
            for (const v of g.variables) {
                if (v.access !== "private") {
                    idx.set(v.context.name, { group: g.id, type: v.resolvedType || "", description: (v.description || "").trim(), source: String(v.context.value ?? ""), computed: String(v.resolvedValue ?? "") });
                }
            }
        }
        data.index[theme] = idx;
        const t = {};
        for (const cat of CATEGORIES.filter((c) => c !== "components")) {
            const group = variableGroups.find((g) => g.id === GROUPS[cat]);
            t[cat] = (group?.variables || []).filter((v) => v.access !== "private").map(toToken);
        }
        const foundation = new Set(Object.values(GROUPS));
        data.components[theme] = variableGroups
            .filter((g) => !foundation.has(g.id))
            .map((g) => ({
                id: g.id,
                vars: g.variables
                    .filter((v) => v.access !== "private")
                    .map((v) => ({
                        name: v.context.name,
                        type: v.resolvedType || "",
                        value: String(v.resolvedValue ?? v.context.value ?? ""),
                        description: (v.description || "").trim(),
                    })),
            }))
            .filter((g) => g.vars.length);
        t.components = [];
        t.dark = loadDark(theme);
        data.themes[theme] = t;
    }
    return data;
}

const send = (res, code, body, type = "application/json") => {
    res.statusCode = code;
    res.setHeader("Content-Type", type);
    res.setHeader("Cache-Control", "no-store");
    res.end(typeof body === "string" ? body : JSON.stringify(body));
};

async function startServer() {
    let data = load(REPO_ROOT);
    // Re-read while metadata is missing, so running `npm run docs` takes effect without reopening
    const fresh = () => {
        if (data.missing.length) {data = load(REPO_ROOT);}
        return data;
    };
    const server = createServer((req, res) => {
        const u = new URL(req.url, "http://x");
        try {
            if (u.pathname === "/api/data") {const d = fresh(); send(res, 200, { themes: d.themes, missing: d.missing }); return;}
            if (u.pathname === "/api/components") {send(res, 200, fresh().components[u.searchParams.get("theme")] || []); return;}
            if (u.pathname === "/api/translucency") {send(res, 200, scanTranslucency(u.searchParams.get("theme") || "meridian")); return;}
            if (u.pathname === "/api/compare") {
                const d = fresh();
                const name = u.searchParams.get("name") || "";
                const rows = Object.keys(d.index).map((theme) => ({ theme, ...(d.index[theme].get(name) || {}) }));
                const first = rows.find((r) => r.group) || {};
                send(res, 200, { name, group: first.group || "", type: first.type || "", description: first.description || "", rows: rows.map((r) => ({ theme: r.theme, source: r.source ?? null, computed: r.computed ?? null })) });
                return;
            }
            send(res, 200, readFileSync(join(HERE, "ui.html"), "utf8"), "text/html; charset=utf-8");
        } catch (e) {
            send(res, 500, { error: String(e.message || e) });
        }
    });
    await new Promise((r) => server.listen(0, "127.0.0.1", r));
    return { server, get data() { return data; }, url: `http://127.0.0.1:${server.address().port}/` };
}

const servers = new Map();

await joinSession({
    canvases: [
        createCanvas({
            id: "token-explorer",
            displayName: "Token explorer",
            description: "Browse Kendo design tokens (color, spacing, typography, elevation, border-radius, motion) with live visual swatches per theme. Requires `npm run docs`.",
            inputSchema: {
                type: "object",
                properties: {
                    theme: { type: "string", enum: THEMES },
                    category: { type: "string", enum: CATEGORIES },
                    query: { type: "string" },
                },
            },
            actions: [
                {
                    name: "list_tokens",
                    description: "List token names for a theme and category",
                    inputSchema: {
                        type: "object",
                        properties: { theme: { type: "string", enum: THEMES }, category: { type: "string", enum: CATEGORIES } },
                        required: ["theme", "category"],
                    },
                    handler: async (ctx) => {
                        const e = servers.get(ctx.instanceId);
                        const { theme, category } = ctx.input || {};
                        const list = e?.data.themes[theme]?.[category] || [];
                        return list.map((v) => (v.items ? { name: v.name, entries: v.items.length } : { name: v.name, value: v.value }));
                    },
                },
            ],
            open: async (ctx) => {
                let entry = servers.get(ctx.instanceId);
                if (!entry) {
                    entry = await startServer();
                    servers.set(ctx.instanceId, entry);
                }
                const p = new URLSearchParams();
                for (const k of ["theme", "category", "query"]) {if (ctx.input?.[k]) {p.set(k === "query" ? "q" : k, ctx.input[k]);}}
                const qs = p.toString();
                return { title: "Token explorer", url: entry.url + (qs ? "?" + qs : "") };
            },
            onClose: async (ctx) => {
                const e = servers.get(ctx.instanceId);
                if (e) {
                    servers.delete(ctx.instanceId);
                    await new Promise((r) => e.server.close(() => r()));
                }
            },
        }),
    ],
});
