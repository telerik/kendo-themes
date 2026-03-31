/**
 * TypeScript interfaces for the VPAT / Accessibility Conformance Report generator.
 *
 * Public API exports: VpatConfig, VpatOverrides, VpatKnownException, VpatReport.
 * Internal types (VpatTestAnalysis) are not re-exported from the package index.
 */

// ============================================================================
// Public types
// ============================================================================

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

export interface VpatConfig {
    product: {
        name?: string;
        version?: string;
        description?: string;
        contactInfo?: string;
        reportDate?: string;
        evaluationMethods?: string;
    };
    generalStatements?: {
        colorContrast?: string;
        targetSize?: string;
        keyboardNavigation?: string;
        ariaCompliance?: string;
        [key: string]: string | undefined;
    };
    specialConsiderations?: string[];
    knownExceptions?: VpatKnownException[];
    contrastExclusions?: {
        note?: string;
        excludedPages?: Array<{ component: string; reason: string }>;
        excludedFocusIndicators?: string[];
    };
    additionalProductNotes?: Record<string, string>;
}

export interface VpatOverrides {
    product?: {
        name?: string;
        version?: string;
        description?: string;
        contactInfo?: string;
        reportDate?: string;
        evaluationMethods?: string;
    };
    generalStatements?: {
        colorContrast?: string;
        targetSize?: string;
        keyboardNavigation?: string;
        ariaCompliance?: string;
        [key: string]: string | undefined;
    };
    specialConsiderations?: string[];
    knownExceptions?: VpatKnownException[];
    contrastExclusions?: {
        note?: string;
        excludedPages?: Array<{ component: string; reason: string }>;
        excludedFocusIndicators?: string[];
    };
    additionalProductNotes?: Record<string, string>;
}

export interface VpatReport {
    markdown: string;
    data: {
        config: VpatConfig;
        a11yAnalysis: VpatTestAnalysis | null;
        contrastReport: unknown;
    };
}

// ============================================================================
// Internal types (used by vpat-generator, not re-exported from package index)
// ============================================================================

export interface VpatTestAnalysis {
    totalTemplates: number;
    ariaPassed: number;
    ariaViolations: number;
    wcagPassed: number;
    wcagViolations: number;
    wcagAcceptable: number;
    componentResults: Record<string, {
        ariaPass: number;
        ariaFail: number;
        wcagPass: number;
        wcagFail: number;
        wcagAcceptable: number;
        violations: Array<{
            ruleId: string;
            description: string;
            impact: string;
            wcagCriteria: string | null;
            nodeCount: number;
        }>;
    }>;
    discoveredViolations: Array<{
        component: string;
        ruleId: string;
        description: string;
        impact: string;
        wcagCriteria: string | null;
    }>;
}
