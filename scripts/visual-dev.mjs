#!/usr/bin/env node
/* eslint-disable no-console */
// Devkit-driven local visual loop. Assumes `npm start` is running (proxy :3000).
//   npm run test:visual:dev button meridian bootstrap
import { capture } from './capture.mjs';
import { watch } from 'node:fs';
import { execFileSync } from 'node:child_process';

const [ component, ...themes ] = process.argv.slice(2);

if (!component) {
    console.error('Usage: npm run test:visual:dev <component> [theme...]');
    process.exit(1);
}

const THEMES = themes.length ? themes : ['meridian'];

async function captureAndDiff() {
    // Reuse the running dev server on port 3000 (npm start)
    await capture({ themes: THEMES, components: [component], serverPort: 3000 });

    // Diff this component's output against the saved baseline → update report
    execFileSync('npx', ['reg-cli',
        'tests/_output', '.reg/expected', '.reg/diff',
        '--report', '.reg/report.html', '--json', '.reg/out.json'],
    { stdio: 'inherit', shell: true });
    console.log('Report: .reg/report.html  (refresh the tab)');
}

await captureAndDiff();

// Watch the edited theme(s)' SCSS, debounce 300ms, re-capture on change
let debounce;
const scheduleCapture = (theme) => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        execFileSync('npx', ['nx', 'run', `@progress/kendo-theme-${theme}:sass`], { stdio: 'inherit', shell: true });
        captureAndDiff();
    }, 300);
};

for (const theme of THEMES) {
    watch(`packages/${theme}/scss`, { recursive: true }, () => scheduleCapture(theme));
}
