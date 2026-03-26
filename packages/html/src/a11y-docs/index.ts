/**
 * Public API for the a11y documentation generator.
 *
 * Produces JSON files in the format consumed by the Kendo UI Design System docs,
 * as a replacement for @progress/wct-a11y-spec.
 */

// Types
export type {
    AriaRule,
    AriaSpec,
    ComponentMeta,
    A11yJsonElement,
    A11yTable,
    A11yLink,
    A11yListItem,
    A11yGeneratorOptions,
    A11yDocPage,
} from './types';

// Registry
export { buildRegistry, resolveDisplayName } from './component-registry';

// Generator
export { generateA11yDoc, generateA11yDocs } from './page-generator';

// JSON rendering utilities
export { buildA11yJson, buildAriaTable, groupRulesIntoSections, parseDescription } from './json-renderer';
export type { RuleSection } from './json-renderer';
