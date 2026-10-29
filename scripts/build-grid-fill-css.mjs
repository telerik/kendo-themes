// Builds packages/<theme>/dist/all-fill.css: the theme compiled with $kendo-grid-edit-cell-fill: true.
// Used by playground-grid-inline-editing.html ("Fill the cell" option). Run `npm run sass` first for all.css.
// Usage: node scripts/build-grid-fill-css.mjs [theme ...]
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as sass from 'sass';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const allThemes = [ 'default', 'classic', 'bootstrap', 'material', 'fluent', 'meridian' ];
const themes = process.argv.length > 2 ? process.argv.slice(2) : allThemes;

for (const theme of themes) {
    const themeDir = join(root, 'packages', theme);
    const source = `
        @use "${pathToFileURL(join(themeDir, 'scss/grid/_variables.scss')).href}" with ($kendo-grid-edit-cell-fill: true);
        @use "${pathToFileURL(join(themeDir, 'scss/all.scss')).href}";
    `;

    const { css } = sass.compileString(source, {
        loadPaths: [ join(root, 'node_modules') ],
        silenceDeprecations: [ 'import', 'global-builtin', 'mixed-decls' ],
        quietDeps: true,
        logger: sass.Logger.silent
    });

    const out = join(themeDir, 'dist', 'all-fill.css');
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, css);
    process.stdout.write(`${theme}: ${out}\n`);
}
