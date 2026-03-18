#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * VPAT / Accessibility Conformance Report (ACR) Generator — CLI wrapper
 *
 * Thin CLI that delegates to the generateVpatReport() function exported
 * by @progress/kendo-themes-html. Uses baseline test data bundled in the
 * package, with optional overrides and custom report data from disk.
 *
 * Usage:
 *   node scripts/vpat/generate-vpat.mjs                          # Generate from bundled baselines
 *   node scripts/vpat/generate-vpat.mjs --overrides overrides.json
 *   node scripts/vpat/generate-vpat.mjs --format md              # Markdown (default)
 *   node scripts/vpat/generate-vpat.mjs --format html            # HTML output
 *   node scripts/vpat/generate-vpat.mjs --out path/to/output     # Custom output path
 *   node scripts/vpat/generate-vpat.mjs --a11y-report report.json
 *   node scripts/vpat/generate-vpat.mjs --contrast-report report.json
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Load the generator from the html package's built output
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
const format = getArg('format', 'md');
const outputPath = getArg('out', null);

// ============================================================================
// DATA LOADING
// ============================================================================

function loadJSON(path) {
    return JSON.parse(readFileSync(resolve(path), 'utf-8'));
}

const overrides = overridesPath ? loadJSON(overridesPath) : null;
const a11yReport = a11yReportPath ? loadJSON(a11yReportPath) : null;
const contrastReport = contrastReportPath ? loadJSON(contrastReportPath) : null;

// ============================================================================
// GENERATE
// ============================================================================

function main() {
    console.log('📝 VPAT / Accessibility Conformance Report Generator\n');

    const report = generateVpatReport(overrides || undefined, {
        ...(a11yReport ? { a11yReport } : {}),
        ...(contrastReport ? { contrastReport } : {})
    });

    console.log(`📋 Config loaded with ${report.data.config.knownExceptions?.length || 0} known exceptions`);

    if (report.data.a11yAnalysis) {
        const a = report.data.a11yAnalysis;
        console.log(`📊 A11y report: ${a.totalTemplates} templates, ARIA ${a.ariaPassed} passed / ${a.ariaViolations} violations, WCAG ${a.wcagPassed} passed / ${a.wcagViolations} violations`);
    } else {
        console.log('⚠️  No a11y test report — generating from config only');
    }

    if (report.data.contrastReport) {
        const c = report.data.contrastReport.summary;
        console.log(`📊 Contrast report: ${c.violations} violations, ${c.focus} focus issues, ${c.aaa} AAA violations`);
    } else {
        console.log('⚠️  No contrast report — contrast summary will be omitted');
    }

    const output = format === 'html' ? report.html : report.markdown;
    const ext = format === 'html' ? 'html' : 'md';

    const outFile = outputPath || resolve(process.cwd(), `vpat-report.${ext}`);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, output, 'utf-8');

    console.log(`\n✅ Report generated: ${outFile}`);
}

main();

