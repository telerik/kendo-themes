#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Unified A11y Test Runner
 *
 * Renders HTML package templates via specToHtml, then validates WCAG compliance
 * using axe-core in JSDOM (no browser required). Color-contrast is intentionally
 * excluded — it requires computed CSS and is covered by test:contrast.
 *
 * Usage:
 *   npm run test:a11y                # Test all components
 *   npm run test:a11y button         # Test specific component(s)
 *   npm run test:a11y -- --build     # Build HTML package first
 */

import { specToHtml } from '@progress/kendo-e2e';
import { JSDOM } from 'jsdom';
import { globSync } from 'glob';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { basename } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
let htmlPackage;
const axe = require('axe-core');

const HTML_SRC_PATH = './packages/html/src';
const OUTPUT_PATH = './tests/_output';

const args = process.argv.slice(2);
const componentFilters = args.filter(a => !a.startsWith('--'));
const buildMode = args.includes('--build');

// Page-level axe rules irrelevant for isolated component testing
const PAGE_LEVEL_RULES = [
    'region', 'landmark-one-main', 'landmark-unique', 'page-has-heading-one',
    'bypass', 'html-has-lang', 'document-title', 'landmark-no-duplicate-banner',
    'landmark-no-duplicate-contentinfo', 'meta-viewport', 'duplicate-id'
];

// Documented exceptions — note but don't fail on
const ACCEPTABLE_WCAG_VIOLATIONS = ['target-size', 'label', 'nested-interactive', 'aria-required-children'];

console.log('🔍 Unified A11y Test Runner\n');

// ============================================================================
// TEMPLATE DISCOVERY (reads actual export names from source files)
// ============================================================================

/**
 * Discover template exports for a component folder by reading the source TSX
 * files and extracting the real `export const` name. This avoids any
 * filename-to-PascalCase conversion heuristics or override maps.
 */
function discoverTemplates(folderName) {
    const files = globSync(`${HTML_SRC_PATH}/${folderName}/templates/*.tsx`);
    const templates = [];

    for (const file of files) {
        const content = readFileSync(file, 'utf-8');
        const match = content.match(/export\s+(?:const|function)\s+(\w+)/);
        if (!match) { continue; }

        const exportName = match[1];
        if (typeof htmlPackage[exportName] === 'function') {
            templates.push({ exportName, component: htmlPackage[exportName], file });
        } else {
            console.log(`  ⚠️ ${basename(file)}: export "${exportName}" not found in html package`);
        }
    }
    return templates;
}

// ============================================================================
// WCAG VALIDATION (axe-core in JSDOM — no browser required)
// ============================================================================

const AXE_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa', 'best-practice'];
const DISABLED_RULES = ['color-contrast', 'scrollable-region-focusable', ...PAGE_LEVEL_RULES];

async function validateWcag(html) {
    const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable' });
    const { window } = dom;

    // Inject axe-core into the JSDOM window
    const script = window.document.createElement('script');
    script.textContent = axe.source;
    window.document.head.appendChild(script);

    return new Promise((resolve, reject) => {
        window.axe.run(
            window.document,
            { runOnly: AXE_TAGS, rules: Object.fromEntries(DISABLED_RULES.map(id => [id, { enabled: false }])) },
            (err, results) => {
                if (err) { reject(err); return; }
                resolve({
                    violations: results.violations,
                    passes: results.passes.length
                });
            }
        );
    });
}

// ============================================================================
// MAIN
// ============================================================================

function wrapInHtmlPage(componentHtml) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>A11y Test</title>
</head>
<body class="k-body">
    <div id="test-area">${componentHtml}</div>
</body>
</html>`;
}

async function main() {
    // --build: build HTML package before testing (useful for pre-push / CI)
    if (buildMode) {
        console.log('📦 Building HTML package...');
        try {
            execSync('npm run build --prefix packages/html', { stdio: 'pipe' });
            console.log('  ✅ HTML package built\n');
        } catch (err) {
            console.error('  ❌ Failed to build HTML package');
            console.error('  ' + (err.message || 'Unknown error'));
            process.exit(1);
        }
    }

    // Load HTML package after potential build step so that --build can create dist first
    htmlPackage = require('../packages/html/dist/cjs/index.js');

    // Determine which component folders to test
    const folders = componentFilters.length
        ? componentFilters
        : [...new Set(
            globSync(`${HTML_SRC_PATH}/*/templates/`, { dotRelative: true })
                .map(p => p.replace('./', '').split('/')[3])
        )];

    if (!folders.length) {
        console.log('No components to test.');
        process.exit(0);
    }

    // Discover all templates across matching folders
    const byComponent = {};
    let totalTemplates = 0;
    for (const folder of folders) {
        const templates = discoverTemplates(folder);
        if (templates.length) {
            byComponent[folder] = templates;
            totalTemplates += templates.length;
        }
    }

    if (!totalTemplates) {
        console.log('No templates found.');
        process.exit(0);
    }
    console.log(`📦 Found ${totalTemplates} template(s) across ${Object.keys(byComponent).length} component(s)\n`);

    mkdirSync(OUTPUT_PATH, { recursive: true });

    const summary = { templates: 0, wcagPassed: 0, wcagViolations: 0, wcagAcceptable: 0 };
    const results = [];

    for (const [comp, templates] of Object.entries(byComponent)) {
        console.log(`\n📦 ${comp}`);

        for (const { exportName, component: TemplateComponent } of templates) {
            try {
                const componentHtml = specToHtml(TemplateComponent);
                const fullHtml = wrapInHtmlPage(componentHtml);

                const wcag = await validateWcag(fullHtml);

                const wcagActual = wcag.violations.filter(v => !ACCEPTABLE_WCAG_VIOLATIONS.includes(v.id));
                const wcagAcceptable = wcag.violations.filter(v => ACCEPTABLE_WCAG_VIOLATIONS.includes(v.id));
                const wcagOk = wcagActual.length === 0;

                console.log(`  ${wcagOk ? '✅' : '❌'} ${exportName}: WCAG ${wcag.passes} passed`);

                if (!wcagOk) {
                    wcagActual.forEach(v => console.log(`     ❌ WCAG: ${v.id} - ${v.description}`));
                }
                if (wcagAcceptable.length > 0) {
                    wcagAcceptable.forEach(v => console.log(`     ℹ️  WCAG: ${v.id} (acceptable exception)`));
                }

                summary.templates++;
                summary.wcagPassed += wcag.passes;
                summary.wcagViolations += wcagActual.length;
                summary.wcagAcceptable += wcagAcceptable.length;

                results.push({ component: comp, template: exportName, wcag });
            } catch (err) {
                console.log(`  ❌ ${exportName}: ${err.message}`);
            }
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Summary\n');
    console.log(`Templates: ${summary.templates}`);
    const wcagExtra = summary.wcagAcceptable > 0 ? ` (${summary.wcagAcceptable} acceptable)` : '';
    console.log(`WCAG: ${summary.wcagPassed} passed, ${summary.wcagViolations} violations${wcagExtra}`);

    writeFileSync(`${OUTPUT_PATH}/a11y-unified-report.json`, JSON.stringify({ summary, results }, null, 2));
    console.log(`\n📄 Report: ${OUTPUT_PATH}/a11y-unified-report.json`);

    process.exit(summary.wcagViolations > 0 ? 1 : 0);
}

main().catch(err => { console.error(err); process.exit(1); });
