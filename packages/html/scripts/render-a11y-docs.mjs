#!/usr/bin/env node

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname, join } from 'path';
import { globSync } from 'glob';
import nunjucks from 'nunjucks';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const htmlRoot = resolve(dirname(new URL(import.meta.url).pathname), '..');
const miscDir = join(htmlRoot, 'misc');
const srcDir = join(htmlRoot, 'src');
const outDir = join(htmlRoot, 'docs');

const toPascalCase = (str) => str.replace(/(^|-)([a-z])/g, (_, _sep, ch) => ch.toUpperCase());

// Wrap bare HTML tags (<table>, </button>, etc.) in backticks for safe markdown rendering.
// Leaves already-backtick-wrapped tags untouched.
const env = nunjucks.configure(miscDir, { autoescape: false });
env.addFilter('mdtags', (str) =>
    String(str ?? '').replace(/`<[^`>]+>`|<(\/?[a-zA-Z][a-zA-Z0-9]*)>/g,
        (match, tag) => (tag ? `\`<${tag}>\`` : match))
);

const template = readFileSync(join(miscDir, 'accessibility.md.njk'), 'utf8');

// ─── JSON-based components (chart has no spec files so stays JSON) ───────────
const jsonFiles = globSync('*/behavior/accessibility.json', { cwd: srcDir });

// ─── Package-based components (all fully-migrated components) ────────────────
// Requires `npm run build` in the html package to be run first.
let htmlPackage = null;
try {
    htmlPackage = require('../dist/cjs/index.js');
} catch {
    // Package not built — inline specs will be skipped.
}

/**
 * Scan spec files in each component directory and build a per-spec `components`
 * array for every directory that has templates (all fully-migrated components).
 */
function buildPackageSpecMap() {
    if (!htmlPackage) { return new Map(); }
    const map = new Map();

    const templateDirs = globSync('*/templates/', { cwd: srcDir })
        .map(p => p.replace(/\/+$/, '').split('/').at(-2))
        .filter(Boolean);

    for (const dir of templateDirs) {
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
                const kbSpec = isPrimary ? fileKbSpec : [];
                const uxSpec = isPrimary ? fileUxSpec : [];
                // @aria annotations belong to the default export of each spec file
                const ariaAnnotations = (match[1] === defaultExport) ? fileAriaAnnotations : [];

                // Options table from primary component only
                const apiRows = [];
                if (isPrimary && exp.options) {
                    for (const [key, values] of Object.entries(exp.options)) {
                        const valid = values.filter(v => v !== null && v !== undefined && v !== '');
                        if (valid.length) {
                            apiRows.push({
                                option: key,
                                values: valid.map(v => `\`${v}\``).join(', '),
                                default: exp.defaultOptions?.[key] !== undefined ? `\`${exp.defaultOptions[key]}\`` : null
                            });
                        }
                    }
                }

                // States table from primary component only
                const stateRows = [];
                if (isPrimary && exp.states) {
                    for (const state of exp.states) {
                        if (state !== null && state !== undefined && state !== '') {
                            stateRows.push({ state, cssClass: `k-${state}` });
                        }
                    }
                }

                const rootClass = (isPrimary && exp.className) ? exp.className : null;

                if (!apiRows.length && !stateRows.length && !kbSpec.length && !uxSpec.length && !ariaAnnotations.length) { continue; }
                components.push({ name: match[1], isPrimary, rootClass, apiRows, stateRows, kbSpec, uxSpec, ariaAnnotations });
            }
        }

        // Primary component first, then alphabetically
        components.sort((a, b) => {
            if (a.isPrimary !== b.isPrimary) { return a.isPrimary ? -1 : 1; }
            return a.name.localeCompare(b.name);
        });

        if (components.length) { map.set(dir, { components, resources }); }
    }

    return map;
}

mkdirSync(outDir, { recursive: true });

// ─── Generate docs for JSON-based components ─────────────────────────────────
for (const file of jsonFiles.sort()) {
    const component = file.split('/')[0];
    const json = JSON.parse(readFileSync(join(srcDir, file), 'utf8'));

    const ariaSpec = json.ariaSpec || [];
    const kbSpec = json.kbSpec || [];
    const uxSpec = json.uxSpec || [];
    const resources = json.resources || [];

    if (!ariaSpec.length && !kbSpec.length && !uxSpec.length) { continue; }

    const name = toPascalCase(component);
    const components = [{ name, isPrimary: true, apiRows: [], kbSpec, uxSpec }];

    const md = nunjucks.renderString(template, {
        name,
        componentDir: component,
        components,
        resources,
        hasKbSpec: kbSpec.length > 0
    });

    writeFileSync(join(outDir, `${component}.md`), md.trim() + '\n');
}

// ─── Generate docs for inline-spec components (no JSON) ──────────────────────
const packageSpecMap = buildPackageSpecMap();

for (const [dir, { components, resources }] of [...packageSpecMap.entries()].sort()) {
    const md = nunjucks.renderString(template, {
        name: toPascalCase(dir),
        componentDir: dir,
        components,
        resources,
        hasKbSpec: components.some(c => c.kbSpec.length > 0)
    });

    writeFileSync(join(outDir, `${dir}.md`), md.trim() + '\n');
}

