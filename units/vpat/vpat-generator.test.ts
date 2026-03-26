import { describe, it, expect } from 'vitest';
import { generateVpatReport } from '../../packages/html/src/vpat/vpat-generator';
import { WCAG_CRITERIA } from '../../packages/html/src/vpat/wcag-criteria';
import type { VpatA11yReport, VpatContrastReport, VpatOverrides } from '../../packages/html/src/vpat/types';

// ============================================================================
// Fixtures
// ============================================================================

const fakeA11yReport: VpatA11yReport = {
    generatedAt: '2026-03-17T00:00:00.000Z',
    version: '13.0.0-test',
    summary: {
        templates: 10,
        ariaPassed: 50,
        ariaViolations: 2,
        ariaSkipped: 0,
        wcagPassed: 80,
        wcagViolations: 1,
        wcagAcceptable: 5
    },
    results: [
        {
            component: 'button',
            template: 'ButtonNormal',
            aria: { passed: 10, violations: [], skipped: 0, total: 10 },
            wcag: { violations: [], passes: 15 }
        },
        {
            component: 'grid',
            template: 'GridNormal',
            aria: { passed: 20, violations: [{ type: 'missing-role' }], skipped: 0, total: 21 },
            wcag: {
                violations: [
                    { id: 'color-contrast', impact: 'serious', description: 'Elements must meet minimum color contrast ratio thresholds', nodes: [{}, {}] },
                    { id: 'label', impact: 'critical', description: 'Form elements must have labels', nodes: [{}] }
                ],
                passes: 30
            }
        },
        {
            component: 'dropdownlist',
            template: 'DropDownListNormal',
            aria: { passed: 15, violations: [], skipped: 0, total: 15 },
            wcag: { violations: [], passes: 20 }
        }
    ]
};

const fakeContrastReport: VpatContrastReport = {
    generatedAt: '2026-03-17T00:00:00.000Z',
    version: '13.0.0-test',
    theme: 'default',
    swatch: 'default-ocean-blue-a11y',
    summary: { violations: 3, incomplete: 1, aaa: 10, focus: 2 },
    excludedPages: ['tests/bottom-nav/bottom-nav.html'],
    excludedFocusElements: ['k-chip-outline'],
    violations: { 'tests/chip/chip.html': ['<span class="k-chip-text">'] },
    incomplete: {},
    aaa: {},
    focusContrast: {}
};

// ============================================================================
// Tests
// ============================================================================

describe('generateVpatReport', () => {

    describe('default output (no overrides, no reports)', () => {
        const report = generateVpatReport();

        it('returns markdown string', () => {
            expect(typeof report.markdown).toBe('string');
            expect(report.markdown.length).toBeGreaterThan(0);
        });

        it('uses VPAT 2.5Rev WCAG Edition format', () => {
            expect(report.markdown).toContain('WCAG Edition');
            expect(report.markdown).toContain('VPAT\u00ae Version 2.5Rev');
        });

        it('does not contain VPAT 2.4 artifacts', () => {
            expect(report.markdown).not.toContain('International Edition');
            expect(report.markdown).not.toContain('2.4 Rev');
            expect(report.markdown).not.toContain('Section 508');
        });

        it('lists WCAG 2.0, 2.1, and 2.2 in the standards table', () => {
            expect(report.markdown).toContain('Web Content Accessibility Guidelines 2.0');
            expect(report.markdown).toContain('Web Content Accessibility Guidelines 2.1');
            expect(report.markdown).toContain('Web Content Accessibility Guidelines 2.2');
        });

        it('includes all three WCAG tables', () => {
            expect(report.markdown).toContain('Table 1: Success Criteria, Level A');
            expect(report.markdown).toContain('Table 2: Success Criteria, Level AA');
            expect(report.markdown).toContain('Table 3: Success Criteria, Level AAA');
        });

        it('includes version annotations on criteria rows', () => {
            expect(report.markdown).toContain('2.1 and 2.2');
            expect(report.markdown).toContain('2.2 only');
        });

        it('includes 4.1.1 Parsing with pre-filled response', () => {
            expect(report.markdown).toContain('4.1.1 Parsing');
            expect(report.markdown).toContain('errata');
        });

        it('includes Not Evaluated term definition', () => {
            expect(report.markdown).toContain('Not Evaluated');
            expect(report.markdown).toContain('WCAG Level AAA criteria');
        });

        it('includes Legal Disclaimer section', () => {
            expect(report.markdown).toContain('Legal Disclaimer');
        });

        it('includes all VPAT 2.5 terms', () => {
            expect(report.markdown).toContain('Supports');
            expect(report.markdown).toContain('Partially Supports');
            expect(report.markdown).toContain('Does Not Support');
            expect(report.markdown).toContain('Not Applicable');
            expect(report.markdown).toContain('Not Evaluated');
        });
    });

    describe('WCAG criteria coverage', () => {
        it('covers all Level A criteria from the VPAT 2.5 template', () => {
            const levelA = Object.entries(WCAG_CRITERIA).filter(([, c]) => c.level === 'A');
            expect(levelA.length).toBe(32); // 30 original + 4.1.1 Parsing + 3.2.6 + 3.3.7
        });

        it('covers all Level AA criteria', () => {
            const levelAA = Object.entries(WCAG_CRITERIA).filter(([, c]) => c.level === 'AA');
            expect(levelAA.length).toBe(24);
        });

        it('covers all Level AAA criteria', () => {
            const levelAAA = Object.entries(WCAG_CRITERIA).filter(([, c]) => c.level === 'AAA');
            expect(levelAAA.length).toBe(31);
        });

        it('has all criteria present in the generated markdown', () => {
            const report = generateVpatReport();
            for (const [num] of Object.entries(WCAG_CRITERIA)) {
                expect(report.markdown).toContain(num);
            }
        });
    });

    describe('AAA criteria', () => {
        const report = generateVpatReport();

        it('marks all AAA criteria as Not Evaluated by default', () => {
            // Without configured exceptions, all AAA criteria should be "Not Evaluated"
            expect(report.markdown).toMatch(/2\.2\.3.*Not Evaluated/);
            expect(report.markdown).toMatch(/1\.2\.6.*Not Evaluated/);
            expect(report.markdown).toMatch(/2\.1\.3.*Not Evaluated/);
        });
    });

    describe('with fake a11y report', () => {
        const report = generateVpatReport(undefined, { a11yReport: fakeA11yReport });

        it('includes test summary section', () => {
            expect(report.markdown).toContain('Automated Test Summary');
            expect(report.markdown).toContain('10'); // 10 templates
        });

        it('exposes a11y analysis in report data', () => {
            const analysis = report.data.a11yAnalysis;
            expect(analysis).not.toBeNull();
            expect(analysis!.totalTemplates).toBe(10);
            expect(analysis!.ariaPassed).toBe(50);
            expect(analysis!.ariaViolations).toBe(2);
            expect(analysis!.wcagPassed).toBe(80);
        });

        it('discovers violations from the report', () => {
            const analysis = report.data.a11yAnalysis!;
            expect(analysis.discoveredViolations.length).toBe(2);
            expect(analysis.discoveredViolations[0].ruleId).toBe('color-contrast');
            expect(analysis.discoveredViolations[1].ruleId).toBe('label');
        });

        it('maps axe rule IDs to WCAG criteria', () => {
            const analysis = report.data.a11yAnalysis!;
            expect(analysis.discoveredViolations[0].wcagCriteria).toBe('1.4.3');
            expect(analysis.discoveredViolations[1].wcagCriteria).toBe('1.3.1');
        });

        it('tracks component-level results', () => {
            const analysis = report.data.a11yAnalysis!;
            expect(analysis.componentResults['button']).toBeDefined();
            expect(analysis.componentResults['grid']).toBeDefined();
            expect(analysis.componentResults['grid'].violations.length).toBe(2);
        });
    });

    describe('with fake contrast report', () => {
        const report = generateVpatReport(undefined, { contrastReport: fakeContrastReport });

        it('includes contrast summary section', () => {
            expect(report.markdown).toContain('Contrast Test Summary');
            expect(report.markdown).toContain('default-ocean-blue-a11y');
        });

        it('includes contrast metrics', () => {
            expect(report.markdown).toContain('3'); // violations
            expect(report.markdown).toContain('2'); // focus issues
        });

        it('exposes contrast data in report output', () => {
            expect(report.data.contrastReport).not.toBeNull();
            expect(report.data.contrastReport!.summary.violations).toBe(3);
            expect(report.data.contrastReport!.summary.focus).toBe(2);
        });
    });

    describe('with overrides', () => {
        const overrides: VpatOverrides = {
            product: {
                name: 'Kendo UI for Angular',
                version: '17.0.0',
                reportDate: 'March 2026'
            },
            knownExceptions: [
                {
                    wcagCriteria: '2.5.8',
                    criteriaName: 'Target Size (Minimum)',
                    wcagLevel: 'AA',
                    wcagUrl: 'https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html',
                    conformanceLevel: 'Partially Supports',
                    affectedComponents: ['Chip remove icon', 'Grid filter icon'],
                    explanation: 'Some compact interactive elements fall below the 24x24px minimum at the small size option. Use size: large to resolve.'
                }
            ],
            additionalProductNotes: {
                'Angular-Specific Notes': 'Angular change detection handles ARIA attribute updates.'
            }
        };

        const report = generateVpatReport(overrides, {
            a11yReport: fakeA11yReport,
            contrastReport: fakeContrastReport
        });

        it('uses overridden product name and version', () => {
            expect(report.markdown).toContain('Kendo UI for Angular');
            expect(report.markdown).toContain('17.0.0');
        });

        it('uses overridden report date', () => {
            expect(report.markdown).toContain('March 2026');
        });

        it('appends consumer known exceptions', () => {
            expect(report.markdown).toContain('Target Size (Minimum)');
            expect(report.markdown).toContain('Chip remove icon');
        });

        it('sets conformance level for overridden criteria', () => {
            // 2.5.8 should show Partially Supports from the override
            expect(report.markdown).toMatch(/2\.5\.8.*Partially Supports/);
        });

        it('includes additional product notes', () => {
            expect(report.markdown).toContain('Angular-Specific Notes');
            expect(report.markdown).toContain('Angular change detection');
        });

        it('preserves baseline known exceptions', () => {
            // The default config has 6 exceptions; override adds 1 more
            const totalExceptions = report.data.config.knownExceptions?.length || 0;
            expect(totalExceptions).toBeGreaterThan(1);
        });
    });

    describe('no HTML output', () => {
        const report = generateVpatReport();

        it('does not include html in the report', () => {
            expect(report).not.toHaveProperty('html');
        });
    });

    describe('config merging', () => {
        it('merges specialConsiderations by appending', () => {
            const report = generateVpatReport({
                specialConsiderations: ['Custom consideration from consumer']
            });
            expect(report.markdown).toContain('Custom consideration from consumer');
        });

        it('merges contrastExclusions by appending arrays', () => {
            const report = generateVpatReport({
                contrastExclusions: {
                    excludedPages: [{ component: 'CustomWidget', reason: 'Intentional low contrast' }]
                }
            });
            expect(report.data.config.contrastExclusions?.excludedPages?.length).toBeGreaterThan(0);
            const hasCustom = report.data.config.contrastExclusions?.excludedPages?.some(p => p.component === 'CustomWidget');
            expect(hasCustom).toBe(true);
        });

        it('does not remove base exceptions when overriding', () => {
            const base = generateVpatReport();
            const baseCount = base.data.config.knownExceptions?.length || 0;
            const overridden = generateVpatReport({
                knownExceptions: [{
                    wcagCriteria: '9.9.9',
                    criteriaName: 'Test',
                    wcagLevel: 'AA',
                    conformanceLevel: 'Partially Supports',
                    explanation: 'Test exception'
                }]
            });
            expect(overridden.data.config.knownExceptions?.length).toBe(baseCount + 1);
        });
    });
});
