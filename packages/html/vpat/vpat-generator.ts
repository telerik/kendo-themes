/**
 * VPAT / Accessibility Conformance Report (ACR) Generator
 *
 * Generates a VPAT report in Markdown format based on:
 *   1. Default Kendo UI VPAT config
 *   2. Optional a11y and contrast test report data
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
} from './types';
import { WCAG_CRITERIA, AXE_TO_WCAG } from './wcag-criteria';
import { DEFAULT_VPAT_CONFIG } from './default-config';

// ============================================================================
// CONFIG MERGING
// ============================================================================

function mergeConfig(base: VpatConfig, overrides?: VpatOverrides): VpatConfig {
    if (!overrides) { return { ...base }; }

    // Known exceptions: override entries with matching wcagCriteria replace base entries; new ones append
    let knownExceptions = base.knownExceptions;
    if (overrides.knownExceptions?.length) {
        if (!base.knownExceptions?.length) {
            knownExceptions = overrides.knownExceptions;
        } else {
            const overrideKeys = new Set(overrides.knownExceptions.map(e => e.wcagCriteria));
            const kept = base.knownExceptions.filter(e => !overrideKeys.has(e.wcagCriteria));
            knownExceptions = [...kept, ...overrides.knownExceptions];
        }
    }

    return {
        product: { ...base.product, ...overrides.product },
        generalStatements: { ...base.generalStatements, ...overrides.generalStatements },
        specialConsiderations: overrides.specialConsiderations
            ? [...(base.specialConsiderations || []), ...overrides.specialConsiderations]
            : base.specialConsiderations,
        knownExceptions,
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
}

// ============================================================================
// TEST REPORT ANALYSIS
// ============================================================================

 
function analyzeA11yReport(report: any): VpatTestAnalysis | null {
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
    return new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
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

 
function generateMarkdown(config: VpatConfig, analysis: VpatTestAnalysis | null, contrastReport: any): string {
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

        // Check for consumer-configured exceptions; otherwise mark as Not Evaluated
        const hasConfigured = exceptionsIndex[num]?.length > 0;

        if (hasConfigured) {
            const configuredConformance = getConformanceForCriteria(num, exceptionsIndex);
            const configuredRemarks = getRemarksForCriteria(num, exceptionsIndex);
            ln(`| ${criteriaLink} | ${configuredConformance} | ${configuredRemarks} |`);
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
// PUBLIC API
// ============================================================================

/**
 * Generate a VPAT / Accessibility Conformance Report.
 *
 * Uses the default Kendo UI VPAT config with optional overrides for
 * product-specific customizations.
 *
 * @param overrides - Optional product-specific overrides. Product info fields
 *   replace the defaults; knownExceptions with matching wcagCriteria replace
 *   the base entry, new ones are appended; specialConsiderations are appended;
 *   additionalProductNotes are merged.
 * @param options - Optional report inputs: custom a11y or contrast reports.
 * @returns VpatReport with markdown and structured data.
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
        a11yReport?: unknown;
        contrastReport?: unknown;
    }
): VpatReport {
    const config = mergeConfig(DEFAULT_VPAT_CONFIG, overrides);

    const a11yReport = options?.a11yReport || null;
    const contrastReport = options?.contrastReport || null;

    const analysis = analyzeA11yReport(a11yReport);
    const markdown = generateMarkdown(config, analysis, contrastReport);

    return {
        markdown,
        data: {
            config,
            a11yAnalysis: analysis,
            contrastReport
        }
    };
}
