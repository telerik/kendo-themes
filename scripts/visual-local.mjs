#!/usr/bin/env node
/* eslint-disable no-console */
// Local visual-regression sandbox. No CI / gh-pages / git needed.
//   node scripts/visual-local.mjs --save   # overlay current tests/_output onto the baseline
//   node scripts/visual-local.mjs          # compare tests/_output vs baseline -> .reg/report.html
import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const ACTUAL = 'tests/_output', EXPECTED = 'tests/_baseline', DIFF = '.reg/diff';
const REPORT = '.reg/report.html', JSON_OUT = '.reg/out.json';

if (!existsSync(ACTUAL)) {
    console.error(`No screenshots at ${ACTUAL}. Run: npm run test:create-screenshots <theme>`);
    process.exit(1);
}

if (process.argv.includes('--save')) {
    // tests/_baseline is git-tracked (develop is always the baseline), so this
    // is an overlay copy, not a wipe-and-recreate: removed/renamed items stay
    // on disk unless `git rm`'d separately.
    mkdirSync(EXPECTED, { recursive: true });
    cpSync(ACTUAL, EXPECTED, { recursive: true });
    console.log(`Saved baseline: ${ACTUAL} -> ${EXPECTED}`);
    process.exit(0);
}

if (!existsSync(EXPECTED)) {
    console.error(`No baseline yet. First run: node scripts/visual-local.mjs --save`);
    process.exit(1);
}

execFileSync('npx', ['reg-cli', ACTUAL, EXPECTED, DIFF,
    '--matchingThreshold', '0.05', '--enableAntialias',
    '--report', REPORT, '--json', JSON_OUT],
{ stdio: 'inherit', shell: true });
console.log(`\nReport: ${REPORT}`);
