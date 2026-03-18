/**
 * VPAT / Accessibility Conformance Report (ACR) Generator
 *
 * Generates a VPAT report in Markdown and HTML formats based on:
 *   1. Default Kendo UI VPAT config (embedded baseline)
 *   2. Bundled a11y and contrast test reports (baseline data)
 *   3. Optional consumer overrides (product info, extra exceptions, notes)
 *
 * Designed to be consumed by component libraries:
 *   import { generateVpatReport } from '@progress/kendo-themes-html';
 */

import type {
    VpatConfig,
    VpatOverrides,
    VpatReport,
    VpatTestAnalysis,
    VpatA11yReport,
    VpatContrastReport,
    VpatKnownException
} from './types';
import { WCAG_CRITERIA, AXE_TO_WCAG, AAA_DEFAULTS } from './wcag-criteria';
import { DEFAULT_VPAT_CONFIG } from './default-config';

// Baseline reports are embedded at build time by packages/html/scripts/build.js
// which generates baseline-data.ts with the JSON content from tests/_output/.
// In development (before build), baseline-data.ts exports nulls.
import { baselineA11yReport, baselineContrastReport } from './baseline-data';

// ============================================================================
// CONFIG MERGING
// ============================================================================

/**
 * Merge known exceptions: overrides with the same wcagCriteria+axeRuleId key
 * replace the base entry; new ones are appended.
 */
function mergeKnownExceptions(
    base?: VpatKnownException[],
    overrides?: VpatKnownException[]
): VpatKnownException[] | undefined {
    if (!overrides?.length) { return base; }
    if (!base?.length) { return overrides; }

    const exceptionKey = (e: VpatKnownException) => `${e.wcagCriteria}|${e.axeRuleId ?? ''}`;
    const overrideKeys = new Set(overrides.map(exceptionKey));
    const kept = base.filter(e => !overrideKeys.has(exceptionKey(e)));
    return [...kept, ...overrides];
}

function mergeConfig(base: VpatConfig, overrides?: VpatOverrides): VpatConfig {
    if (!overrides) { return { ...base }; }

    const merged: VpatConfig = {
        product: { ...base.product, ...overrides.product },
        generalStatements: { ...base.generalStatements, ...overrides.generalStatements },
        specialConsiderations: overrides.specialConsiderations
            ? [...(base.specialConsiderations || []), ...overrides.specialConsiderations]
            : base.specialConsiderations,
        knownExceptions: mergeKnownExceptions(base.knownExceptions, overrides.knownExceptions),
        contrastExclusions: overrides.contrastExclusions
            ? {
                ...base.contrastExclusions,
                ...overrides.contrastExclusions,
                excludedPages: [
                    ...(base.contrastExclusions?.excludedPages || []),
                    ...(overrides.contrastExclusions?.excludedPages || [])
                ],
                excludedFocusIndicators: [
                    ...(base.contrastExclusions?.excludedFocusIndicators || []),
                    ...(overrides.contrastExclusions?.excludedFocusIndicators || [])
                ]
            }
            : base.contrastExclusions,
        additionalProductNotes: {
            ...base.additionalProductNotes,
            ...overrides.additionalProductNotes
        }
    };

    return merged;
}

// ============================================================================
// TEST REPORT ANALYSIS
// ============================================================================

function analyzeA11yReport(report: VpatA11yReport | null): VpatTestAnalysis | null {
    if (!report) { return null; }

    const analysis: VpatTestAnalysis = {
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
// DOCUMENT GENERATION HELPERS
// ============================================================================

function getReportDate(config: VpatConfig): string {
    if (config.product.reportDate && config.product.reportDate !== 'auto') {
        return config.product.reportDate;
    }
    return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getVersion(config: VpatConfig): string {
    if (config.product.version && config.product.version !== 'auto') {
        return config.product.version;
    }
    return 'latest';
}

function buildExceptionsIndex(config: VpatConfig): Record<string, NonNullable<VpatConfig['knownExceptions']>> {
    const byCriteria: Record<string, NonNullable<VpatConfig['knownExceptions']>> = {};
    for (const exc of (config.knownExceptions || [])) {
        const key = exc.wcagCriteria;
        if (!byCriteria[key]) { byCriteria[key] = []; }
        byCriteria[key].push(exc);
    }
    return byCriteria;
}

function getConformanceForCriteria(criteriaNum: string, exceptionsIndex: Record<string, NonNullable<VpatConfig['knownExceptions']>>): string {
    const exceptions = exceptionsIndex[criteriaNum];
    if (!exceptions || exceptions.length === 0) { return 'Supports'; }
    if (exceptions.some(e => e.conformanceLevel === 'Does Not Support')) { return 'Does Not Support'; }
    if (exceptions.some(e => e.conformanceLevel === 'Partially Supports')) { return 'Partially Supports'; }
    return 'Supports';
}

function getRemarksForCriteria(criteriaNum: string, exceptionsIndex: Record<string, NonNullable<VpatConfig['knownExceptions']>>): string {
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

function generateMarkdown(config: VpatConfig, analysis: VpatTestAnalysis | null, contrastReport: VpatContrastReport | null): string {
    const version = getVersion(config);
    const reportDate = getReportDate(config);
    const exceptionsIndex = buildExceptionsIndex(config);

    const lines: string[] = [];
    const ln = (text = '') => lines.push(text);

    // Title page
    ln('# Accessibility Conformance Report');
    ln();
    ln('**WCAG Edition**');
    ln('*(Based on VPAT\u00ae Version 2.5Rev)*');
    ln();
    ln(`**Name of Product/Version:** ${config.product.name}, version: ${version}`);
    ln();
    ln(`**Report Date:** ${reportDate}`);
    ln();
    ln(`**Product Description:** ${config.product.description}`);
    ln();
    ln(`**Contact Information:** ${config.product.contactInfo}`);
    ln();
    ln(`**Notes:**`);
    ln();
    ln(`**Evaluation Methods Used:** ${config.product.evaluationMethods}`);
    ln();

    // Applicable Standards
    ln('## Applicable Standards/Guidelines');
    ln();
    ln('This report covers the degree of conformance for the following accessibility standard/guidelines:');
    ln();
    ln('| Standard/Guideline | Included In Report |');
    ln('|---|---|');
    ln('| [Web Content Accessibility Guidelines 2.0](https://www.w3.org/TR/WCAG20/) | Level A (Yes), Level AA (Yes), Level AAA (No) |');
    ln('| [Web Content Accessibility Guidelines 2.1](https://www.w3.org/TR/WCAG21/) | Level A (Yes), Level AA (Yes), Level AAA (No) |');
    ln('| [Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/) | Level A (Yes), Level AA (Yes), Level AAA (No) |');
    ln();

    // Terms
    ln('## Terms');
    ln();
    ln('The terms used in the Conformance Level information are defined as follows:');
    ln();
    ln('| Term | Definition |');
    ln('|---|---|');
    ln('| **Supports** | The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation. |');
    ln('| **Partially Supports** | Some functionality of the product does not meet the criterion. |');
    ln('| **Does Not Support** | The majority of product functionality does not meet the criterion. |');
    ln('| **Not Applicable** | The criterion is not relevant to the product. |');
    ln('| **Not Evaluated** | The product has not been evaluated against the criterion. This can only be used in WCAG Level AAA criteria. |');
    ln();

    // General compliance statements
    ln('## General Compliance Statements');
    ln();
    if (config.generalStatements) {
        for (const [key, value] of Object.entries(config.generalStatements)) {
            if (value === undefined) { continue; }
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
        ln(`*Automated accessibility validation was performed across ${analysis.totalTemplates} component configurations.*`);
        ln();
        ln('| Check | Result |');
        ln('|---|---|');
        ln(`| WAI-ARIA attribute validation | ${analysis.ariaPassed} passed, ${analysis.ariaViolations} violation(s) |`);
        ln(`| WCAG 2.2 automated checks (axe-core) | ${analysis.wcagPassed} passed, ${analysis.wcagViolations} violation(s) |`);
        ln(`| Known/documented exceptions | ${analysis.wcagAcceptable} |`);
        ln();
    }

    // Contrast test summary (if available)
    if (contrastReport) {
        ln('## Contrast Test Summary');
        ln();
        ln(`*Tested with theme: ${contrastReport.theme || 'default'}, swatch: ${contrastReport.swatch || 'default-ocean-blue-a11y'}.*`);
        ln();
        ln('| Metric | Result |');
        ln('|---|---|');
        ln(`| Text contrast violations (AA) | ${contrastReport.summary.violations} |`);
        ln(`| Focus indicator contrast violations | ${contrastReport.summary.focus} |`);
        ln(`| AAA contrast violations | ${contrastReport.summary.aaa} |`);
        ln(`| Incomplete checks | ${contrastReport.summary.incomplete} |`);
        ln();
    }

    // WCAG 2.x Report
    ln('## WCAG 2.x Report');
    ln();
    ln('Note: When reporting on conformance with the WCAG 2.x Success Criteria, they are scoped for full pages, complete processes, and accessibility-supported ways of using technology as documented in the [WCAG 2.0 Conformance Requirements](https://www.w3.org/TR/WCAG20/#conformance-reqs).');
    ln();

    // Table 1 — Level A
    ln('### Table 1: Success Criteria, Level A');
    ln();
    ln('Notes:');
    ln();
    ln('| Criteria | Conformance Level | Remarks and Explanations |');
    ln('|---|---|---|');

    for (const [num, crit] of Object.entries(WCAG_CRITERIA)) {
        if (crit.level !== 'A') { continue; }
        const versionSuffix = crit.versionNote ? ` ${crit.versionNote}` : '';
        // 4.1.1 Parsing has special pre-filled handling per VPAT 2.5
        if (num === '4.1.1') {
            ln(`| [${num} ${crit.name}](${crit.url}) (Level ${crit.level}) | Supports | WCAG 2.0 and 2.1: the September 2023 errata update indicates this criterion is always supported. WCAG 2.2: obsolete and removed. |`);
            continue;
        }
        const conformance = getConformanceForCriteria(num, exceptionsIndex);
        const remarks = getRemarksForCriteria(num, exceptionsIndex);
        const criteriaLink = `[${num} ${crit.name}](${crit.url}) (Level ${crit.level}${versionSuffix})`;
        ln(`| ${criteriaLink} | ${conformance} | ${remarks} |`);
    }
    ln();

    // Table 2 — Level AA
    ln('### Table 2: Success Criteria, Level AA');
    ln();
    ln('Notes:');
    ln();
    ln('| Criteria | Conformance Level | Remarks and Explanations |');
    ln('|---|---|---|');

    for (const [num, crit] of Object.entries(WCAG_CRITERIA)) {
        if (crit.level !== 'AA') { continue; }
        const versionSuffix = crit.versionNote ? ` ${crit.versionNote}` : '';
        const conformance = getConformanceForCriteria(num, exceptionsIndex);
        const remarks = getRemarksForCriteria(num, exceptionsIndex);
        const criteriaLink = `[${num} ${crit.name}](${crit.url}) (Level ${crit.level}${versionSuffix})`;
        ln(`| ${criteriaLink} | ${conformance} | ${remarks} |`);
    }
    ln();

    // Table 3 — Level AAA
    ln('### Table 3: Success Criteria, Level AAA');
    ln();
    ln('Notes:');
    ln();
    ln('| Criteria | Conformance Level | Remarks and Explanations |');
    ln('|---|---|---|');

    for (const [num, crit] of Object.entries(WCAG_CRITERIA)) {
        if (crit.level !== 'AAA') { continue; }
        const versionSuffix = crit.versionNote ? ` ${crit.versionNote}` : '';
        const criteriaLink = `[${num} ${crit.name}](${crit.url}) (Level ${crit.level}${versionSuffix})`;

        // Check for consumer-configured exceptions first, then fall back to library defaults
        const configuredConformance = getConformanceForCriteria(num, exceptionsIndex);
        const configuredRemarks = getRemarksForCriteria(num, exceptionsIndex);
        const hasConfigured = exceptionsIndex[num]?.length > 0;

        if (hasConfigured) {
            ln(`| ${criteriaLink} | ${configuredConformance} | ${configuredRemarks} |`);
        } else if (AAA_DEFAULTS[num]) {
            ln(`| ${criteriaLink} | ${AAA_DEFAULTS[num].conformance} | ${AAA_DEFAULTS[num].remarks} |`);
        } else {
            ln(`| ${criteriaLink} | Not Evaluated | |`);
        }
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
        if (config.contrastExclusions.note) {
            ln(config.contrastExclusions.note);
            ln();
        }

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
            ln('*The following violations were found by automated tests but are not yet documented in the known exceptions.*');
            ln();
            ln('| Component | axe Rule | Impact | Description |');
            ln('|---|---|---|---|');

            const seen = new Set<string>();
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
    ln('*"Voluntary Product Accessibility Template" and "VPAT" are registered service marks of the Information Technology Industry Council (ITI).*');
    ln();
    ln('## Legal Disclaimer');
    ln();
    ln('Include your company legal disclaimer here, if needed.');

    return lines.join('\n');
}

// ============================================================================
// HTML GENERATION
// ============================================================================

function markdownToHtml(md: string, productName: string): string {
    let html = md
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
        .replace(/^---$/gm, '<hr>')
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

    // Paragraphs — wrap non-empty lines that aren't block-level elements
    const blockTags = /^<(h[1-6]|table|thead|tbody|tr|th|td|hr|li|ul|ol|div|p)\b/i;
    html = html.split('\n').map(line => {
        if (!line.trim()) { return ''; }
        if (blockTags.test(line)) { return line; }
        if (line.match(/^<\//)) { return line; }
        return `<p>${line}</p>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Accessibility Conformance Report - ${productName}</title>
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
// PUBLIC API
// ============================================================================

/**
 * Generate a VPAT / Accessibility Conformance Report.
 *
 * Uses the bundled baseline config and test reports from kendo-themes,
 * with optional overrides for product-specific customizations.
 *
 * @param overrides - Optional product-specific overrides. Product info fields
 *   replace the defaults; knownExceptions and specialConsiderations are appended;
 *   additionalProductNotes are merged.
 * @param options - Optional report inputs: custom a11y or contrast reports.
 * @returns VpatReport with markdown, html, and structured data.
 *
 * @example
 * ```ts
 * import { generateVpatReport } from '@progress/kendo-themes-html';
 *
 * const report = generateVpatReport({
 *   product: { name: 'Kendo UI for Angular', version: '17.0.0' },
 *   knownExceptions: [{ ... }],
 *   additionalProductNotes: { 'Angular Notes': '...' }
 * });
 *
 * writeFileSync('vpat-report.md', report.markdown);
 * ```
 */
export function generateVpatReport(
    overrides?: VpatOverrides,
    options?: {
        a11yReport?: VpatA11yReport;
        contrastReport?: VpatContrastReport;
    }
): VpatReport {
    const config = mergeConfig(DEFAULT_VPAT_CONFIG, overrides);

    const a11yReport = options?.a11yReport || baselineA11yReport;
    const contrastReport = options?.contrastReport || baselineContrastReport;

    const analysis = analyzeA11yReport(a11yReport);
    const markdown = generateMarkdown(config, analysis, contrastReport);
    const html = markdownToHtml(markdown, config.product.name || 'Kendo UI');

    return {
        markdown,
        html,
        data: {
            config,
            a11yAnalysis: analysis,
            contrastReport
        }
    };
}
