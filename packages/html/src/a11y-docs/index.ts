/**
 * Public API for the a11y documentation generator.
 *
 * Produces JSON files in the format consumed by the Kendo UI Design System docs,
 * as a replacement for @progress/wct-a11y-spec.
 *
 * Usage:
 *
 *   import { buildRegistry, generateA11yDocs } from '@progress/kendo-themes-html';
 *   import * as htmlExports from '@progress/kendo-themes-html';
 *
 *   const registry = buildRegistry(htmlExports, sourceReader);
 *   const pages = generateA11yDocs(registry);
 *   for (const page of pages) {
 *       fs.writeFileSync(`dist/${page.displayName}.json`, JSON.stringify(page.json, null, 4));
 *   }
 */

// Types
export type {
    AriaRule,
    AriaSpec,
    ComponentMeta,
    CrossReference,
    A11yJsonElement,
    A11yTable,
    A11yLink,
    A11yListItem,
    A11yGeneratorOptions,
    A11yDocPage,
} from './types';

// Registry
export { buildRegistry, resolveDisplayName, DEFAULT_DISPLAY_NAMES } from './component-registry';

// Generator
export { generateA11yDoc, generateA11yDocs } from './page-generator';

// JSON rendering utilities
export { buildA11yJson, buildAriaTable, groupRulesIntoSections, parseDescription } from './json-renderer';
export type { RuleSection } from './json-renderer';
