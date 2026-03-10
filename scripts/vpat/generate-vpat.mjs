#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * VPAT / Accessibility Conformance Report (ACR) Generator
 *
 * Generates a concise ACR document in Markdown format based on:
 *   1. Automated a11y test results (tests/_output/a11y-unified-report.json)
 *   2. Configurable known exceptions & product info (scripts/vpat/vpat-config.json)
 *   3. Product-specific overrides (optional JSON passed via --overrides)
 *
 * The output follows the VPAT® 2.4 Rev International Edition structure but in
 * a concise format suitable for periodic regeneration.
 *
 * Usage:
 *   node scripts/vpat/generate-vpat.mjs                          # Generate from config
 *   node scripts/vpat/generate-vpat.mjs --report path/to/report  # Use specific test report
 *   node scripts/vpat/generate-vpat.mjs --overrides overrides.json
 *   node scripts/vpat/generate-vpat.mjs --format md              # Markdown (default)
 *   node scripts/vpat/generate-vpat.mjs --format html            # HTML output
 *   node scripts/vpat/generate-vpat.mjs --out path/to/output     # Custom output path
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ============================================================================
// CLI ARGS
// ============================================================================

const args = process.argv.slice(2);

function getArg(name, defaultValue) {
    const idx = args.indexOf(`--${name}`);
    return idx !== -1 && args[idx + 1] ? args[idx + 1] : defaultValue;
}

const reportPath = getArg('report', resolve(__dirname, '../../tests/_output/a11y-unified-report.json'));
const configPath = getArg('config', resolve(__dirname, 'vpat-config.json'));
const overridesPath = getArg('overrides', null);
const format = getArg('format', 'md');
const outputPath = getArg('out', null);

// ============================================================================
// DATA LOADING
// ============================================================================

function loadJSON(path, label) {
    if (!existsSync(path)) {
        console.warn(`⚠️  ${label} not found: ${path}`);
        return null;
    }
    return JSON.parse(readFileSync(path, 'utf-8'));
}

const config = loadJSON(configPath, 'Config');
if (!config) {
    console.error('❌ Config file is required. Run: node scripts/vpat/generate-vpat.mjs');
    process.exit(1);
}

const testReport = loadJSON(reportPath, 'Test report');
const overrides = overridesPath ? loadJSON(overridesPath, 'Overrides') : null;

// Merge overrides into config
if (overrides) {
    if (overrides.product) { Object.assign(config.product, overrides.product); }
    if (overrides.generalStatements) { Object.assign(config.generalStatements, overrides.generalStatements); }
    if (overrides.knownExceptions) {
        config.knownExceptions = [...(config.knownExceptions || []), ...overrides.knownExceptions];
    }
    if (overrides.specialConsiderations) {
        config.specialConsiderations = [...(config.specialConsiderations || []), ...overrides.specialConsiderations];
    }
    if (overrides.additionalProductNotes) {
        Object.assign(config.additionalProductNotes, overrides.additionalProductNotes);
    }
}

// ============================================================================
// WCAG 2.2 CRITERIA REFERENCE
// ============================================================================

const WCAG_CRITERIA = {
    // Level A
    '1.1.1': { name: 'Non-text Content', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html' },
    '1.2.1': { name: 'Audio-only and Video-only (Prerecorded)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html' },
    '1.2.2': { name: 'Captions (Prerecorded)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html' },
    '1.2.3': { name: 'Audio Description or Media Alternative (Prerecorded)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded.html' },
    '1.3.1': { name: 'Info and Relationships', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html' },
    '1.3.2': { name: 'Meaningful Sequence', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html' },
    '1.3.3': { name: 'Sensory Characteristics', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html' },
    '1.4.1': { name: 'Use of Color', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html' },
    '1.4.2': { name: 'Audio Control', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html' },
    '2.1.1': { name: 'Keyboard', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html' },
    '2.1.2': { name: 'No Keyboard Trap', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html' },
    '2.1.4': { name: 'Character Key Shortcuts', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/character-key-shortcuts.html' },
    '2.2.1': { name: 'Timing Adjustable', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html' },
    '2.2.2': { name: 'Pause, Stop, Hide', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html' },
    '2.3.1': { name: 'Three Flashes or Below Threshold', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html' },
    '2.4.1': { name: 'Bypass Blocks', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html' },
    '2.4.2': { name: 'Page Titled', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html' },
    '2.4.3': { name: 'Focus Order', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html' },
    '2.4.4': { name: 'Link Purpose (In Context)', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html' },
    '2.5.1': { name: 'Pointer Gestures', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html' },
    '2.5.2': { name: 'Pointer Cancellation', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html' },
    '2.5.3': { name: 'Label in Name', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html' },
    '2.5.4': { name: 'Motion Actuation', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html' },
    '3.1.1': { name: 'Language of Page', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html' },
    '3.2.1': { name: 'On Focus', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html' },
    '3.2.2': { name: 'On Input', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/on-input.html' },
    '3.2.6': { name: 'Consistent Help', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-help.html' },
    '3.3.1': { name: 'Error Identification', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html' },
    '3.3.2': { name: 'Labels or Instructions', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html' },
    '3.3.7': { name: 'Redundant Entry', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html' },
    '4.1.2': { name: 'Name, Role, Value', level: 'A', url: 'https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html' },

    // Level AA
    '1.2.4': { name: 'Captions (Live)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html' },
    '1.2.5': { name: 'Audio Description (Prerecorded)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html' },
    '1.3.4': { name: 'Orientation', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/orientation.html' },
    '1.3.5': { name: 'Identify Input Purpose', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html' },
    '1.4.3': { name: 'Contrast (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html' },
    '1.4.4': { name: 'Resize Text', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html' },
    '1.4.5': { name: 'Images of Text', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html' },
    '1.4.10': { name: 'Reflow', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/reflow.html' },
    '1.4.11': { name: 'Non-text Contrast', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html' },
    '1.4.12': { name: 'Text Spacing', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html' },
    '1.4.13': { name: 'Content on Hover or Focus', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html' },
    '2.4.5': { name: 'Multiple Ways', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html' },
    '2.4.6': { name: 'Headings and Labels', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html' },
    '2.4.7': { name: 'Focus Visible', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html' },
    '2.4.11': { name: 'Focus Not Obscured (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html' },
    '2.5.7': { name: 'Dragging Movements', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html' },
    '2.5.8': { name: 'Target Size (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html' },
    '3.1.2': { name: 'Language of Parts', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html' },
    '3.2.3': { name: 'Consistent Navigation', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html' },
    '3.2.4': { name: 'Consistent Identification', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html' },
    '3.3.3': { name: 'Error Suggestion', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html' },
    '3.3.4': { name: 'Error Prevention (Legal, Financial, Data)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html' },
    '3.3.8': { name: 'Accessible Authentication (Minimum)', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html' },
    '4.1.3': { name: 'Status Messages', level: 'AA', url: 'https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html' }
};

// Map axe-core rule IDs to WCAG criteria numbers
const AXE_TO_WCAG = {
    'target-size': '2.5.8',
    'label': '1.3.1',
    'nested-interactive': '4.1.2',
    'aria-required-children': '1.3.1',
    'scrollable-region-focusable': '2.1.1',
    'color-contrast': '1.4.3',
    'color-contrast-enhanced': '1.4.6',
    'link-name': '2.4.4',
    'image-alt': '1.1.1',
    'button-name': '4.1.2',
    'aria-label': '4.1.2',
    'aria-hidden-focus': '4.1.2',
    'focus-order-semantics': '2.4.3'
};

// ============================================================================
// TEST REPORT ANALYSIS
// ============================================================================

function analyzeTestReport(report) {
    if (!report) { return null; }

    const analysis = {
        totalTemplates: report.summary?.templates || 0,
        ariaPassed: report.summary?.ariaPassed || 0,
        ariaViolations: report.summary?.ariaViolations || 0,
        wcagPassed: report.summary?.wcagPassed || 0,
        wcagViolations: report.summary?.wcagViolations || 0,
        wcagAcceptable: report.summary?.wcagAcceptable || 0,
        componentResults: {},
        discoveredViolations: []
    };

    for (const result of (report.results || [])) {
        const comp = result.component;
        if (!analysis.componentResults[comp]) {
            analysis.componentResults[comp] = { ariaPass: 0, ariaFail: 0, wcagPass: 0, wcagFail: 0, wcagAcceptable: 0, violations: [] };
        }
        const cr = analysis.componentResults[comp];
        cr.ariaPass += result.aria?.passed || 0;
        cr.ariaFail += result.aria?.violations?.length || 0;
        cr.wcagPass += result.wcag?.passes || 0;

        for (const v of (result.wcag?.violations || [])) {
            cr.violations.push({
                ruleId: v.id,
                description: v.description,
                impact: v.impact,
                wcagCriteria: AXE_TO_WCAG[v.id] || null,
                nodeCount: v.nodes?.length || 0
            });

            analysis.discoveredViolations.push({
                component: comp,
                ruleId: v.id,
                description: v.description,
                impact: v.impact,
                wcagCriteria: AXE_TO_WCAG[v.id] || null
            });
        }
    }

    return analysis;
}

// ============================================================================
// DOCUMENT GENERATION
// ============================================================================

function getReportDate() {
    if (config.product.reportDate !== 'auto') { return config.product.reportDate; }
    const now = new Date();
    return now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getVersion() {
    if (config.product.version !== 'auto') { return config.product.version; }
    try {
        const pkg = JSON.parse(readFileSync(resolve(__dirname, '../../lerna.json'), 'utf-8'));
        return pkg.version || 'latest';
    } catch {
        return 'latest';
    }
}

function buildExceptionsIndex() {
    const byCriteria = {};
    for (const exc of (config.knownExceptions || [])) {
        const key = exc.wcagCriteria;
        if (!byCriteria[key]) { byCriteria[key] = []; }
        byCriteria[key].push(exc);
    }
    return byCriteria;
}

function getConformanceForCriteria(criteriaNum, exceptionsIndex) {
    const exceptions = exceptionsIndex[criteriaNum];
    if (!exceptions || exceptions.length === 0) { return 'Supports'; }
    // If any exception for this criteria says "Does Not Support", use that
    if (exceptions.some(e => e.conformanceLevel === 'Does Not Support')) { return 'Does Not Support'; }
    if (exceptions.some(e => e.conformanceLevel === 'Partially Supports')) { return 'Partially Supports'; }
    return 'Supports';
}

function getRemarksForCriteria(criteriaNum, exceptionsIndex) {
    const exceptions = exceptionsIndex[criteriaNum];
    if (!exceptions || exceptions.length === 0) { return ''; }

    return exceptions.map(exc => {
        const components = exc.affectedComponents?.join(', ') || 'Various';
        return `**Affected:** ${components}. ${exc.explanation}`;
    }).join('<br><br>');
}

// ============================================================================
// MARKDOWN GENERATION
// ============================================================================

function generateMarkdown(analysis) {
    const version = getVersion();
    const reportDate = getReportDate();
    const exceptionsIndex = buildExceptionsIndex();

    const lines = [];
    const ln = (text = '') => lines.push(text);

    // Title page
    ln('# Accessibility Conformance Report');
    ln();
    ln('**International Edition**');
    ln('*(Based on VPAT® Version 2.4 Rev)*');
    ln();
    ln(`**Name of Product/Version:** ${config.product.name}, version: ${version}`);
    ln(`**Report Date:** ${reportDate}`);
    ln(`**Product Description:** ${config.product.description}`);
    ln(`**Contact Information:** ${config.product.contactInfo}`);
    ln(`**Evaluation Methods Used:** ${config.product.evaluationMethods}`);
    ln();

    // Applicable Standards
    ln('## Applicable Standards/Guidelines');
    ln();
    ln('This report covers the degree of conformance for the following accessibility standards/guidelines:');
    ln();
    ln('| Standard/Guideline | Included In Report |');
    ln('|---|---|');
    ln('| [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) | Level A (Yes), Level AA (Yes) |');
    ln('| [Revised Section 508 standards](https://www.access-board.gov/ict/) | (Yes) |');
    ln();

    // Terms
    ln('## Terms');
    ln();
    ln('| Term | Definition |');
    ln('|---|---|');
    ln('| **Supports** | The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation. |');
    ln('| **Partially Supports** | Some functionality of the product does not meet the criterion. |');
    ln('| **Does Not Support** | The majority of product functionality does not meet the criterion. |');
    ln('| **Not Applicable** | The criterion is not relevant to the product. |');
    ln();

    // General compliance statements
    ln('## General Compliance Statements');
    ln();
    if (config.generalStatements) {
        for (const [key, value] of Object.entries(config.generalStatements)) {
            const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
            ln(`**${title}:** ${value}`);
            ln();
        }
    }

    // Special Considerations
    if (config.specialConsiderations?.length) {
        ln('## Special Considerations');
        ln();
        config.specialConsiderations.forEach((note, i) => {
            ln(`${i + 1}. ${note}`);
        });
        ln();
    }

    // Test results summary (if available)
    if (analysis) {
        ln('## Automated Test Summary');
        ln();
        ln(`*Based on automated test run covering ${analysis.totalTemplates} component template(s).*`);
        ln();
        ln('| Metric | Result |');
        ln('|---|---|');
        ln(`| ARIA checks passed | ${analysis.ariaPassed} |`);
        ln(`| ARIA violations | ${analysis.ariaViolations} |`);
        ln(`| WCAG checks passed (axe-core) | ${analysis.wcagPassed} |`);
        ln(`| WCAG violations (blocking) | ${analysis.wcagViolations} |`);
        ln(`| WCAG violations (acceptable/documented) | ${analysis.wcagAcceptable} |`);
        ln();
    }

    // WCAG 2.2 Table — Level A
    ln('## Table 1: Success Criteria, Level A');
    ln();
    ln('| Criteria | Conformance Level | Remarks and Explanations |');
    ln('|---|---|---|');

    for (const [num, crit] of Object.entries(WCAG_CRITERIA)) {
        if (crit.level !== 'A') { continue; }
        const conformance = getConformanceForCriteria(num, exceptionsIndex);
        const remarks = getRemarksForCriteria(num, exceptionsIndex);
        const criteriaLink = `[${num} ${crit.name}](${crit.url}) (Level ${crit.level})`;
        ln(`| ${criteriaLink} | ${conformance} | ${remarks} |`);
    }
    ln();

    // WCAG 2.2 Table — Level AA
    ln('## Table 2: Success Criteria, Level AA');
    ln();
    ln('| Criteria | Conformance Level | Remarks and Explanations |');
    ln('|---|---|---|');

    for (const [num, crit] of Object.entries(WCAG_CRITERIA)) {
        if (crit.level !== 'AA') { continue; }
        const conformance = getConformanceForCriteria(num, exceptionsIndex);
        const remarks = getRemarksForCriteria(num, exceptionsIndex);
        const criteriaLink = `[${num} ${crit.name}](${crit.url}) (Level ${crit.level})`;
        ln(`| ${criteriaLink} | ${conformance} | ${remarks} |`);
    }
    ln();

    // Known Exceptions Summary Table
    if (config.knownExceptions?.length) {
        ln('## Known Exceptions');
        ln();
        ln('The following table summarizes known accessibility exceptions with their justifications:');
        ln();
        ln('| WCAG Criteria | Criteria Name | Affected Components | Conformance | Explanation |');
        ln('|---|---|---|---|---|');

        for (const exc of config.knownExceptions) {
            const components = exc.affectedComponents?.join(', ') || 'Various';
            const criteriaLink = exc.wcagUrl
                ? `[${exc.wcagCriteria}](${exc.wcagUrl})`
                : exc.wcagCriteria;
            ln(`| ${criteriaLink} | ${exc.criteriaName} | ${components} | ${exc.conformanceLevel} | ${exc.explanation} |`);
        }
        ln();
    }

    // Contrast exclusions
    if (config.contrastExclusions) {
        ln('## Contrast Compliance Notes');
        ln();
        ln(config.contrastExclusions.note);
        ln();

        if (config.contrastExclusions.excludedPages?.length) {
            ln('### Components with Known Contrast Limitations');
            ln();
            ln('| Component | Reason |');
            ln('|---|---|');
            for (const exc of config.contrastExclusions.excludedPages) {
                ln(`| ${exc.component} | ${exc.reason} |`);
            }
            ln();
        }

        if (config.contrastExclusions.excludedFocusIndicators?.length) {
            ln('### Focus Indicator Contrast Exceptions');
            ln();
            ln('The following elements have known focus indicator contrast limitations:');
            ln(config.contrastExclusions.excludedFocusIndicators.join(', ') + '.');
            ln();
        }
    }

    // Discovered violations from test output (not in config)
    if (analysis?.discoveredViolations?.length) {
        const unconfigured = analysis.discoveredViolations.filter(v => {
            const configured = (config.knownExceptions || []).some(e => e.axeRuleId === v.ruleId);
            return !configured;
        });

        if (unconfigured.length) {
            ln('## Violations Detected in Tests (Not Yet Documented)');
            ln();
            ln('*The following violations were found by automated tests but are not yet documented in the known exceptions. Review and add to `vpat-config.json` as appropriate.*');
            ln();
            ln('| Component | axe Rule | Impact | Description |');
            ln('|---|---|---|---|');

            const seen = new Set();
            for (const v of unconfigured) {
                const key = `${v.component}|${v.ruleId}`;
                if (seen.has(key)) { continue; }
                seen.add(key);
                ln(`| ${v.component} | ${v.ruleId} | ${v.impact || '-'} | ${v.description || '-'} |`);
            }
            ln();
        }
    }

    // Product-specific notes
    if (config.additionalProductNotes && Object.keys(config.additionalProductNotes).length) {
        ln('## Additional Product Notes');
        ln();
        for (const [key, value] of Object.entries(config.additionalProductNotes)) {
            ln(`### ${key}`);
            ln();
            ln(value);
            ln();
        }
    }

    // Footer
    ln('---');
    ln();
    ln(`*This report was generated on ${reportDate} using automated accessibility testing infrastructure.*`);
    ln(`*"Voluntary Product Accessibility Template" and "VPAT" are registered service marks of the Information Technology Industry Council (ITI).*`);

    return lines.join('\n');
}

// ============================================================================
// HTML GENERATION
// ============================================================================

function markdownToHtml(md) {
    // Minimal markdown-to-HTML for the VPAT output
    let html = md
        // Headers
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        // Bold
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        // Horizontal rule
        .replace(/^---$/gm, '<hr>')
        // Ordered list items
        .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');

    // Tables
    const tableRegex = /(\|.+\|\n\|[-|: ]+\|\n(?:\|.+\|\n?)+)/g;
    html = html.replace(tableRegex, (table) => {
        const rows = table.trim().split('\n');
        const headerCells = rows[0].split('|').filter(c => c.trim());
        const dataRows = rows.slice(2);

        let tableHtml = '<table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;width:100%">\n<thead><tr>';
        for (const cell of headerCells) {
            tableHtml += `<th style="background:#e0e0e0;text-align:left">${cell.trim()}</th>`;
        }
        tableHtml += '</tr></thead>\n<tbody>';

        for (const row of dataRows) {
            const cells = row.split('|').filter(c => c.trim());
            tableHtml += '<tr>';
            for (const cell of cells) {
                tableHtml += `<td>${cell.trim()}</td>`;
            }
            tableHtml += '</tr>';
        }
        tableHtml += '</tbody></table>\n';
        return tableHtml;
    });

    // Paragraphs (lines that aren't already HTML)
    html = html.split('\n').map(line => {
        if (!line.trim()) { return ''; }
        if (line.match(/^<[a-z]/i)) { return line; }
        if (line.match(/^<\//)) { return line; }
        return `<p>${line}</p>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Accessibility Conformance Report - ${config.product.name}</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 960px; margin: 2em auto; padding: 0 1em; line-height: 1.6; color: #333; }
  h1 { border-bottom: 2px solid #333; padding-bottom: 0.3em; }
  h2 { border-bottom: 1px solid #ccc; padding-bottom: 0.2em; margin-top: 2em; }
  table { margin: 1em 0; }
  th { background: #e0e0e0; }
  td, th { padding: 8px 12px; border: 1px solid #ccc; text-align: left; vertical-align: top; }
  a { color: #0066cc; }
  hr { margin: 2em 0; }
</style>
</head>
<body>
${html}
</body>
</html>`;
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
    console.log('📝 VPAT / Accessibility Conformance Report Generator\n');

    const analysis = analyzeTestReport(testReport);

    if (analysis) {
        console.log(`📊 Test report loaded: ${analysis.totalTemplates} templates tested`);
        console.log(`   ARIA: ${analysis.ariaPassed} passed, ${analysis.ariaViolations} violations`);
        console.log(`   WCAG: ${analysis.wcagPassed} passed, ${analysis.wcagViolations} violations, ${analysis.wcagAcceptable} acceptable`);
    } else {
        console.log('⚠️  No test report found — generating from config only');
    }

    console.log(`📋 Known exceptions: ${config.knownExceptions?.length || 0}`);

    const md = generateMarkdown(analysis);

    let output;
    let ext;
    if (format === 'html') {
        output = markdownToHtml(md);
        ext = 'html';
    } else {
        output = md;
        ext = 'md';
    }

    const outFile = outputPath || resolve(__dirname, `../../tests/_output/vpat-report.${ext}`);
    mkdirSync(dirname(outFile), { recursive: true });
    writeFileSync(outFile, output, 'utf-8');

    console.log(`\n✅ Report generated: ${outFile}`);
}

main();
