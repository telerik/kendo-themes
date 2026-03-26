/**
 * TypeScript interfaces for the VPAT / Accessibility Conformance Report generator.
 */

export interface VpatProductInfo {
    name?: string;
    version?: string;
    description?: string;
    contactInfo?: string;
    reportDate?: string;
    evaluationMethods?: string;
}

export interface VpatGeneralStatements {
    colorContrast?: string;
    targetSize?: string;
    keyboardNavigation?: string;
    ariaCompliance?: string;
    [key: string]: string | undefined;
}

export interface VpatKnownException {
    wcagCriteria: string;
    criteriaName: string;
    wcagLevel: string;
    wcagUrl?: string;
    axeRuleId?: string | null;
    conformanceLevel: 'Supports' | 'Partially Supports' | 'Does Not Support' | 'Not Applicable';
    affectedComponents?: string[];
    explanation: string;
}

export interface VpatContrastExcludedPage {
    component: string;
    reason: string;
}

export interface VpatContrastExclusions {
    note?: string;
    excludedPages?: VpatContrastExcludedPage[];
    excludedFocusIndicators?: string[];
}

export interface VpatConfig {
    product: VpatProductInfo;
    generalStatements?: VpatGeneralStatements;
    specialConsiderations?: string[];
    knownExceptions?: VpatKnownException[];
    contrastExclusions?: VpatContrastExclusions;
    additionalProductNotes?: Record<string, string>;
}

export interface VpatOverrides {
    product?: Partial<VpatProductInfo>;
    generalStatements?: Partial<VpatGeneralStatements>;
    specialConsiderations?: string[];
    knownExceptions?: VpatKnownException[];
    contrastExclusions?: Partial<VpatContrastExclusions>;
    additionalProductNotes?: Record<string, string>;
}

export interface VpatTestAnalysis {
    totalTemplates: number;
    ariaPassed: number;
    ariaViolations: number;
    wcagPassed: number;
    wcagViolations: number;
    wcagAcceptable: number;
    componentResults: Record<string, VpatComponentResult>;
    discoveredViolations: VpatDiscoveredViolation[];
}

export interface VpatComponentResult {
    ariaPass: number;
    ariaFail: number;
    wcagPass: number;
    wcagFail: number;
    wcagAcceptable: number;
    violations: VpatComponentViolation[];
}

export interface VpatComponentViolation {
    ruleId: string;
    description: string;
    impact: string;
    wcagCriteria: string | null;
    nodeCount: number;
}

export interface VpatDiscoveredViolation {
    component: string;
    ruleId: string;
    description: string;
    impact: string;
    wcagCriteria: string | null;
}

export interface VpatContrastSummary {
    violations: number;
    incomplete: number;
    aaa: number;
    focus: number;
}

export interface VpatContrastReport {
    generatedAt?: string;
    version?: string;
    theme?: string;
    swatch?: string;
    summary: VpatContrastSummary;
    excludedPages?: string[];
    excludedFocusElements?: string[];
    violations: Record<string, unknown>;
    incomplete: Record<string, unknown>;
    aaa: Record<string, unknown>;
    focusContrast: Record<string, unknown>;
}

export interface VpatA11yReport {
    generatedAt?: string;
    version?: string;
    summary: {
        templates: number;
        ariaPassed: number;
        ariaViolations: number;
        ariaSkipped: number;
        wcagPassed: number;
        wcagViolations: number;
        wcagAcceptable: number;
    };
    results: Array<{
        component: string;
        template: string;
        aria?: { passed: number; violations: unknown[]; skipped: number; total: number };
        wcag?: { violations: Array<{ id: string; impact: string; description: string; nodes?: unknown[] }>; passes: number };
    }>;
    coverageGaps?: unknown[];
}

export interface VpatReport {
    markdown: string;
    data: {
        config: VpatConfig;
        a11yAnalysis: VpatTestAnalysis | null;
        contrastReport: VpatContrastReport | null;
    };
}
