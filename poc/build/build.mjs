/*
 * Kendo Themes — native CSS POC
 * build/build.mjs
 *
 * The whole build. No Sass, no Gulp, no PostCSS chain — lightningcss bundles
 * @import, lowers what the browserslist target still needs, and minifies.
 *
 *   node poc/build/build.mjs [--no-min]
 */

import { bundle, browserslistToTargets, Features } from 'lightningcss';
import browserslist from 'browserslist';
import { gzipSync } from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'dist');
const minify = !process.argv.includes('--no-min');

const targets = browserslistToTargets(browserslist('last 2 versions'));

fs.mkdirSync(outDir, { recursive: true });

function build(entry, outName) {
    const { code } = bundle({
        filename: path.join(root, 'src', entry),
        minify,
        targets,
        // Keep native nesting and cascade layers intact — the whole point is
        // to ship what the browser already understands.
        //
        // Colour lowering must stay off: the token layer is built on relative
        // colour syntax (`oklch(from var(--x) ...)`), and lowering the *base*
        // colour to a `lab()` fallback silently changes what `h` resolves to
        // downstream. The Sass build emits these verbatim too.
        include: 0,
        exclude: Features.Colors | Features.Nesting
    });
    const out = path.join(outDir, outName);
    fs.writeFileSync(out, code);
    return { out, bytes: code.length, gzip: gzipSync(code).length };
}

const results = [];

// The distributable: one file, exactly like the Sass build ships all.css.
results.push(['meridian/all.css', build('meridian/index.css', 'all.css')]);

// The same content, split, to show what a consumer could cache across themes.
for (const [entry, name, label] of [
    ['meridian/core-only.css', 'core.css', '  |- core (shared by all themes)'],
    ['meridian/theme-only.css', 'meridian.css', '  `- meridian (tokens+deltas)'],
    // Named `poc-main-dark` to match the devkit's `{theme}-{swatch}.css`
    // convention, so the dev server can serve it like any other theme swatch.
    ['meridian/swatch-dark.css', 'swatch-main-dark.css', 'swatch delta: meridian-main-dark'],
    ['meridian/index-dark.css', 'poc-main-dark.css', 'swatch full: meridian-main-dark']
]) {
    const src = path.join(root, 'src', entry);
    if (fs.existsSync(src)) results.push([label, build(entry, name)]);
}

const pad = (s, n) => String(s).padEnd(n);
const num = (n) => n.toLocaleString('en-US').padStart(9);

console.log('');
console.log(pad('artifact', 34) + num('bytes') + num('gzip'));
console.log('-'.repeat(52));
for (const [label, r] of results) {
    console.log(pad(label, 34) + num(r.bytes) + num(r.gzip));
}

// Baseline comparison: the button + input slice of the compiled Sass theme.
const baselinePath = path.join(root, '..', 'packages/meridian/dist/all.css');
if (fs.existsSync(baselinePath)) {
    const css = fs.readFileSync(baselinePath, 'utf8');
    let bytes = 0;
    let rules = 0;
    for (const chunk of css.split(/}\s*/)) {
        const i = chunk.indexOf('{');
        if (i < 0) continue;
        const sel = chunk.slice(0, i).trim();
        if (!sel || sel.startsWith('@')) continue;
        if (!/\.k-button|\.k-input|\.k-textbox/.test(sel)) continue;
        bytes += chunk.length + 1;
        rules++;
    }
    const poc = results[0][1];
    console.log('-'.repeat(52));
    console.log(pad(`sass baseline (${rules} rules)`, 34) + num(bytes));
    console.log(
        pad('reduction', 34) +
        String(`${(100 - (poc.bytes / bytes) * 100).toFixed(1)}%`).padStart(9)
    );
}
console.log('');
