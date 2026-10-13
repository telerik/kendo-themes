#!/usr/bin/env node
/* eslint-disable no-console */
// Local visual-regression sandbox. No CI / gh-pages needed.
//   node scripts/visual-local.mjs   # compare tests/_output with the last commit's -> .reg/report.html
import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { exportBaseline } from './visual-baseline.mjs';

const ACTUAL = 'tests/_output', DIFF = '.reg/diff';
const REPORT = '.reg/report.html', JSON_OUT = '.reg/out.json';

if (!existsSync(ACTUAL)) {
    console.error(`No screenshots at ${ACTUAL}. Run: npm run test:create-screenshots <theme>`);
    process.exit(1);
}

const EXPECTED = exportBaseline();

execFileSync('npx', ['reg-cli', ACTUAL, EXPECTED, DIFF,
    '--matchingThreshold', '0.05', '--enableAntialias',
    '--report', REPORT, '--json', JSON_OUT],
{ stdio: 'inherit', shell: true });
console.log(`\nReport: ${REPORT}`);
