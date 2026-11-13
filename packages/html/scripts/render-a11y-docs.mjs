#!/usr/bin/env node

// Flow: spec.tsx -> dist/meta/*.json -> nunjucks -> docs/*.md

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { globSync } from 'glob';
import nunjucks from 'nunjucks';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const htmlRoot = resolve(dirname(new URL(import.meta.url).pathname), '..');
const miscDir = join(htmlRoot, 'misc');
const srcDir = join(htmlRoot, 'src');
const outDir = join(htmlRoot, 'docs');
const jsonOutDir = join(htmlRoot, 'dist', 'meta');

const toPascalCase = (str) => str.replace(/(^|-)([a-z])/g, (_, _sep, ch) => ch.toUpperCase());

// Wrap bare HTML tags (<table>, </button>, etc.) in backticks for safe markdown rendering.
// Leaves already-backtick-wrapped tags untouched.
const env = nunjucks.configure(miscDir, { autoescape: false });
env.addFilter('mdtags', (str) =>
    String(str ?? '').replace(/`<[^`>]+>`|<(\/?[a-zA-Z][a-zA-Z0-9]*)>/g,
        (match, tag) => (tag ? `\`<${tag}>\`` : match))
);

const template = readFileSync(join(miscDir, 'accessibility.md.njk'), 'utf8');

// Requires `npm run build` in the html package to be run first.
let htmlPackage = null;
try {
    htmlPackage = require('../dist/cjs/index.js');
} catch {
    // Package not built — inline specs will be skipped.
}

/**
 * Scan spec files in every component directory and build the a11y data model
 * (raw values only) for each directory.
 */
function collectSpecData() {
    if (!htmlPackage) { return new Map(); }
    const map = new Map();

    const dirs = [...new Set(globSync('*/*.spec.tsx', { cwd: srcDir }).map(p => p.split('/')[0]))].sort();

    for (const dir of dirs) {
        const specFiles = globSync(`${dir}/*.spec.tsx`, { cwd: srcDir });
        const components = [];
        const resources = [];

        for (const specFile of specFiles) {
            const content = readFileSync(join(srcDir, specFile), 'utf-8');

            // Determine which component owns file-level annotations.
            // Prefer explicit `export default X`; fall back to the only exported function component.
            const defaultExportMatch = content.match(/export\s+default\s+(\w+)/);
            let defaultExport = defaultExportMatch ? defaultExportMatch[1] : null;
            if (!defaultExport) {
                const fnExports = [...content.matchAll(/export\s+const\s+(\w+)\s*:\s*KendoComponent/g)]
                    .map(m => m[1]);
                if (fnExports.length === 1) {defaultExport = fnExports[0];}
            }

            // File-level JSDoc annotations (associated with the primary component)
            const fileKbSpec = [...content.matchAll(/^\s*\*\s*@keyboard\s+\{([^}]+)\}\s+(.+)/gm)]
                .map(m => ({ trigger: m[1].trim(), behavior: m[2].trim() }));
            const fileUxSpec = [...content.matchAll(/^\s*\*\s*@ux\s+\{([^}]+)\}\s+(.+)/gm)]
                .map(m => ({ trigger: m[1].trim(), behavior: m[2].trim() }));

            [...content.matchAll(/^\s*\*\s*@see\s+(https?:\/\/[^\s]+)\s+(.+)/gm)]
                .forEach(m => resources.push({ url: m[1].trim(), text: m[2].trim() }));

            // @aria annotations — extract from all JSDoc blocks in the file.
            // Format: @aria {attribute="value"} Description
            // Each JSDoc block may be on a prop type (followed by "propName?:") or on the component itself.
            const fileAriaAnnotations = [];
            for (const block of content.matchAll(/\/\*\*([\s\S]*?)\*\/\s*\n([ \t]+(\w+)\??:)?/gm)) {
                const propName = block[3] ?? null;
                for (const a of block[1].matchAll(/@aria\s+\{([^}]+)\}\s+(.+)/g)) {
                    fileAriaAnnotations.push({ prop: propName, attribute: a[1].trim(), description: a[2].trim() });
                }
            }

            for (const match of [...content.matchAll(/export\s+const\s+(\w+)\s*[=:]/g)]) {
                const exp = htmlPackage[match[1]];
                if (typeof exp !== 'function') { continue; }

                const isPrimary = Boolean(exp.folderName);
                // File-level @keyboard/@ux belong to the primary component
                const keyboard = isPrimary ? fileKbSpec : [];
                const ux = isPrimary ? fileUxSpec : [];
                // @aria annotations belong to the default export of each spec file
                const aria = (match[1] === defaultExport) ? fileAriaAnnotations : [];

                const options = Object.entries(exp.options ?? {})
                    .map(([name, values]) => ({
                        name,
                        values: values.filter(v => v !== null && v !== undefined && v !== ''),
                        default: exp.defaultOptions?.[name] ?? null
                    }))
                    .filter(o => o.values.length);
                const states = (exp.states ?? []).filter(s => s !== null && s !== undefined && s !== '');
                const rootClass = exp.className ?? null;

                if (!options.length && !states.length && !keyboard.length && !ux.length && !aria.length) { continue; }
                components.push({ name: match[1], isPrimary, rootClass, options, states, aria, keyboard, ux });
            }
        }

        // Primary component first, then alphabetically
        components.sort((a, b) => {
            if (a.isPrimary !== b.isPrimary) { return a.isPrimary ? -1 : 1; }
            return a.name.localeCompare(b.name);
        });

        if (components.length) { map.set(dir, { component: dir, name: toPascalCase(dir), components, resources }); }
    }

    return map;
}

// ─── spec.tsx -> JSON ────────────────────────────────────────────────────────
mkdirSync(outDir, { recursive: true });
rmSync(jsonOutDir, { recursive: true, force: true });
mkdirSync(jsonOutDir, { recursive: true });

const a11yIndex = {};
for (const [dir, data] of collectSpecData()) {
    a11yIndex[dir] = data;
    writeFileSync(join(jsonOutDir, `${dir}.json`), JSON.stringify(data, null, 2) + '\n');
}
writeFileSync(join(jsonOutDir, 'index.json'), JSON.stringify(a11yIndex, null, 2) + '\n');

// ─── JSON -> nunjucks -> docs/*.md ───────────────────────────────────────────
const jsonFiles = readdirSync(jsonOutDir).filter(f => f.endsWith('.json') && f !== 'index.json').sort();

for (const file of jsonFiles) {
    const data = JSON.parse(readFileSync(join(jsonOutDir, file), 'utf8'));

    const md = nunjucks.renderString(template, {
        name: data.name,
        componentDir: data.component,
        components: data.components,
        resources: data.resources,
        hasKbSpec: data.components.some(c => c.keyboard.length > 0)
    });

    writeFileSync(join(outDir, `${data.component}.md`), md.trim() + '\n');
}

