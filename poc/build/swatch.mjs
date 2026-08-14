/*
 * Kendo Themes — native CSS POC
 * build/swatch.mjs
 *
 * A swatch is a pure colour map — all 62 swatches in the repo contain zero
 * component overrides and zero non-colour values. In the Sass build each one
 * recompiles the entire theme (~900 KB per swatch); as CSS a swatch is just
 * the handful of root colours it changes, layered over the same theme file.
 *
 *   node poc/build/swatch.mjs <path-to-swatch.json> > out.css
 */

import fs from 'node:fs';
import path from 'node:path';

const src = process.argv[2];
if (!src) {
    console.error('usage: node poc/build/swatch.mjs <swatch.json>');
    process.exit(1);
}

const swatch = JSON.parse(fs.readFileSync(src, 'utf8'));
const decls = [];

for (const group of swatch.groups ?? []) {
    for (const [key, entry] of Object.entries(group.colorsMap ?? {})) {
        if (entry?.value === undefined || entry?.value === null) continue;
        // Swatch JSON stores raw colours, but relative-colour expressions are
        // wrapped in a Sass interpolation escape (`#{"…"}`) so the Sass
        // compiler emits them verbatim. In CSS that wrapper is meaningless.
        const value = String(entry.value).replace(/^#\{"(.*)"\}$/s, '$1');
        decls.push(`    --kendo-color-${key}: ${value};`);
    }
}

if (swatch.components?.length) {
    console.error(
        `note: ${path.basename(src)} declares ${swatch.components.length} component override(s) ` +
        `— not handled by this generator`
    );
}

process.stdout.write(
`/* Generated from ${path.basename(src)} — ${swatch.name} */
@layer kendo.tokens {
  :root {
${decls.join('\n')}
  }
}
`);

console.error(`${decls.length} colour tokens`);
