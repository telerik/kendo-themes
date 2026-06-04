#!/usr/bin/env node
/* eslint-disable no-console */
// Devkit-driven local visual loop. Assumes `npm start` is running (proxy :3000).
//   npm run test:visual:dev button meridian bootstrap
import { chromium } from 'playwright';
import { watch } from 'node:fs';
import { mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { globSync } from 'glob';

const [ component, ...themes ] = process.argv.slice(2);

if (!component) {
    console.error('Usage: npm run test:visual:dev <component> [theme...]');
    process.exit(1);
}

const THEMES = themes.length ? themes : ['meridian'];
const BASE = 'http://localhost:3000';

// Discover this component's test pages from the built devkit output
const variants = globSync(`./packages/html/dist/${component}/tests/**/app.js`)
    .map(p => p.replace(/\\/g, '/').replace(/\/app\.js$/, '/'));

if (variants.length === 0) {
    console.error(`No test variants found for component "${component}". Did you run npm run build:tests?`);
    process.exit(1);
}

async function capture() {
    const browser = await chromium.launch();
    const page = await browser.newPage({ deviceScaleFactor: 1 });
    for (const theme of THEMES) {
        for (const v of variants) {
            const variantName = v.split('/').at(-2);
            const outDir = `tests/_output/${theme}/${component}`;
            mkdirSync(outDir, { recursive: true });
            await page.goto(`${BASE}/${v}?theme=${theme}`, { waitUntil: 'networkidle' });
            await page.locator('#test-area, #app').first()
                .screenshot({ path: `${outDir}/${variantName}.png` });
        }
    }
    await browser.close();

    // Diff just this component against the saved baseline -> report
    execFileSync('npx', ['reg-cli',
        'tests/_output', '.reg/expected', '.reg/diff',
        '--report', '.reg/report.html', '--json', '.reg/out.json'],
    { stdio: 'inherit', shell: true });
    console.log('Report: .reg/report.html  (refresh the tab)');
}

await capture();

// Watch the edited theme(s)' SCSS, debounce 300ms, re-capture on change
let debounce;
const scheduleCapture = (theme) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        execFileSync('npx', ['nx', 'run', `@progress/kendo-theme-${theme}:sass`], { stdio: 'inherit', shell: true });
        capture();
    }, 300);
};

for (const theme of THEMES) {
    watch(`packages/${theme}/scss`, { recursive: true }, () => scheduleCapture(theme));
}
