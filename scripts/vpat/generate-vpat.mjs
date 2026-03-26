#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * VPAT / Accessibility Conformance Report (ACR) Generator — CLI wrapper
 *
 * Thin CLI that delegates to the generateVpatReport() function exported
 * by @progress/kendo-themes-html.
 *
 * Requires the HTML package to be built first (npm run build --prefix packages/html).
 *
 * Usage:
 *   node scripts/vpat/generate-vpat.mjs
 *   node scripts/vpat/generate-vpat.mjs --overrides overrides.json
 *   node scripts/vpat/generate-vpat.mjs --out path/to/output.md
 *   node scripts/vpat/generate-vpat.mjs --a11y-report report.json
 *   node scripts/vpat/generate-vpat.mjs --contrast-report report.json
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { generateVpatReport } = require('../../packages/html/dist/cjs/index.js');

// ============================================================================
// CLI ARGS
// ============================================================================

const args = process.argv.slice(2);

function getArg(name, defaultValue) {
    const idx = args.indexOf(`--${name}`);
    return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultValue;
}

const overridesPath = getArg('overrides', null);
const a11yReportPath = getArg('a11y-report', null);
const contrastReportPath = getArg('contrast-report', null);
const outputPath = getArg('out', null);

// ============================================================================
// GENERATE
// ============================================================================

function loadJSON(path) {
    return JSON.parse(readFileSync(resolve(path), 'utf-8'));
}

function main() {
    console.log('VPAT / Accessibility Conformance Report Generator\n');

    const overrides = overridesPath ? loadJSON(overridesPath) : undefined;
    const options = {};
    if (a11yReportPath) { options.a11yReport = loadJSON(a11yReportPath); }
    if (contrastReportPath) { options.contrastReport = loadJSON(contrastReportPath); }

    const report = generateVpatReport(overrides, options);

    console.log(`Config: ${report.data.config.knownExceptions?.length || 0} known exceptions`);

    if (report.data.a11yAnalysis) {
        const a = report.data.a11yAnalysis;
        console.log(`A11y: ${a.totalTemplates} templates, ARIA ${a.ariaPassed}/${a.ariaViolations}, WCAG ${a.wcagPassed}/${a.wcagViolations}`);
    }

    if (report.data.contrastReport) {
        const c = report.data.contrastReport.summary;
        console.log(`Contrast: ${c.violations} violations, ${c.focus} focus, ${c.aaa} AAA`);
    }

    const outFile = outputPath || resolve(process.cwd(), 'vpat-report.md');
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, report.markdown, 'utf-8');

    console.log(`\nReport generated: ${outFile}`);
}

main();

