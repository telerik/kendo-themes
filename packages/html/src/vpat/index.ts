/**
 * VPAT / Accessibility Conformance Report generator.
 *
 * Public API for generating VPAT reports from kendo-themes baseline data
 * with optional product-specific overrides.
 */
export { generateVpatReport } from './vpat-generator';
export type {
    VpatOverrides,
    VpatReport,
    VpatConfig,
    VpatProductInfo,
    VpatKnownException,
    VpatContrastReport,
    VpatA11yReport,
    VpatTestAnalysis
} from './types';
