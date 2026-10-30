// THROWAWAY: ActionSheet backwards-compatibility check. Drop this commit before merging.
// Usage (from repo root, after `npm ci`):  node tests/_temp-compat/run.mjs [baseRef=origin/develop]
// Renders the legacy (develop) ActionSheet fixtures with CSS built from the base ref and from the
// current checkout, pixel-diffs them for every theme, and writes tests/_temp-compat/out/index.html
// with side-by-side images (open it in a browser).
import {execSync} from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import {fileURLToPath} from 'url';
import http from 'http';
import {chromium} from 'playwright';
import {PNG} from 'pngjs';
import pixelmatch from 'pixelmatch';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const out = path.join(here, 'out');
const baseRef = process.argv[2] || 'origin/develop';
const themes = ['default', 'bootstrap', 'classic', 'material', 'fluent', 'meridian'];
const sh = (c, cwd = root) => execSync(c, {cwd, stdio: 'pipe', maxBuffer: 1e9}).toString();

fs.rmSync(out, {recursive: true, force: true});
fs.mkdirSync(path.join(out, 'css'), {recursive: true});
fs.mkdirSync(path.join(out, 'shots'), {recursive: true});

// Builds all theme CSS for a checkout by pointing @progress/kendo-theme-* at its packages.
function build(checkout, prefix) {
    const nm = fs.mkdtempSync(path.join(os.tmpdir(), 'nm-'));
    fs.mkdirSync(path.join(nm, '@progress'));
    for (const d of fs.readdirSync(path.join(root, 'node_modules'))) {
        if (d !== '@progress') fs.symlinkSync(path.join(root, 'node_modules', d), path.join(nm, d));
    }
    for (const d of fs.readdirSync(path.join(root, 'node_modules/@progress'))) {
        fs.symlinkSync(path.join(root, 'node_modules/@progress', d), path.join(nm, '@progress', d));
    }
    for (const t of ['core', ...themes]) {
        const link = path.join(nm, '@progress', `kendo-theme-${t}`);
        fs.rmSync(link, {force: true});
        fs.symlinkSync(path.join(checkout, 'packages', t), link);
    }
    for (const t of themes) {
        sh(`node_modules/.bin/sass --quiet --load-path=${nm} ${checkout}/packages/${t}/scss/all.scss ${out}/css/${prefix}-${t}.css`);
    }
    fs.rmSync(nm, {recursive: true, force: true});
}

const wt = fs.mkdtempSync(path.join(os.tmpdir(), 'base-'));
sh(`git worktree add --detach ${wt} ${baseRef}`);
try {
    console.log('Building base CSS from', baseRef);
    build(wt, 'base');
} finally {
    sh(`git worktree remove --force ${wt}`);
}
console.log('Building branch CSS');
build(root, 'new');

const fixtures = fs.readdirSync(path.join(here, 'fixtures')).filter(f => f.endsWith('.html'));
const server = http.createServer((req, res) => {
    const f = path.join(root, decodeURIComponent(req.url.split('?')[0]));
    if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.statusCode = 404; return res.end(); }
    res.end(fs.readFileSync(f));
}).listen(0);
const origin = `http://localhost:${server.address().port}`;
const browser = await chromium.launch();
const page = await browser.newPage({viewport: {width: 1000, height: 1300}});
const rows = [];
for (const t of themes) {
    for (const f of fixtures) {
        const html = fs.readFileSync(path.join(here, 'fixtures', f), 'utf8');
        const img = {};
        for (const v of ['base', 'new']) {
            const css = `/tests/_temp-compat/out/css/${v}-${t}.css`;
            await page.setContent(html.replace(/\/packages\/[a-z]+\/dist\/all\.css/, css).replace('<head>', `<head><base href="${origin}/">`), {waitUntil: 'load'});
            await page.waitForTimeout(80);
            img[v] = PNG.sync.read(await page.screenshot());
        }
        const diff = new PNG({width: img.base.width, height: img.base.height});
        const px = pixelmatch(img.base.data, img.new.data, diff.data, diff.width, diff.height, {threshold: 0.1});
        const name = `${t}-${f.replace('.html', '')}`;
        for (const [k, v] of [['base', img.base], ['new', img.new], ['diff', diff]]) {
            fs.writeFileSync(path.join(out, 'shots', `${name}-${k}.png`), PNG.sync.write(v));
        }
        rows.push({t, f, name, px});
    }
}
await browser.close();
server.close();

const bad = rows.filter(r => r.px);
const cell = (r, k) => `<td><img loading="lazy" src="shots/${r.name}-${k}.png"></td>`;
fs.writeFileSync(path.join(out, 'index.html'), `<!doctype html><meta charset="utf-8"><title>ActionSheet compat</title>
<style>body{font:14px sans-serif}img{width:100%}td{width:33%;vertical-align:top}.bad{color:#c00}</style>
<h1>${rows.length - bad.length}/${rows.length} identical (base: ${baseRef})</h1>
${[...bad, ...rows.filter(r => !r.px)].map(r => `<details ${r.px ? 'open' : ''}><summary class="${r.px ? 'bad' : ''}">${r.t} / ${r.f} — ${r.px} px differ</summary>
<table><tr><th>base (legacy CSS)</th><th>branch</th><th>diff</th></tr><tr>${cell(r, 'base')}${cell(r, 'new')}${cell(r, 'diff')}</tr></table></details>`).join('\n')}`);

console.log(`${bad.length} of ${rows.length} differ`);
bad.forEach(r => console.log(' ', r.t, r.f, r.px));
console.log('Report:', path.join(out, 'index.html'));
