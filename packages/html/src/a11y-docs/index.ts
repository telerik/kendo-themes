/**
 * Public API for the a11y documentation generator.
 *
 * This module is consumed by product repos (Angular, React, Blazor, Design
 * System) to generate WAI-ARIA accessibility documentation pages from the
 * ariaSpec objects defined on html package components.
 *
 * No .md/.json output is produced inside kendo-themes itself — the generator
 * returns pages in memory and consumers write them to their own docs folders.
 *
 * Typical consumer usage:
 *
 *   import {
 *       buildRegistry,
 *       generateA11yDocs,
 *       type A11yGeneratorOptions,
 *   } from '@progress/kendo-themes-html';
 *   import * as htmlExports from '@progress/kendo-themes-html';
 *
 *   const registry = buildRegistry(htmlExports, sourceReader);
 *   const options: A11yGeneratorOptions = {
 *       productName: 'Telerik UI for Angular',
 *       linkFormat: 'slug',
 *       outputPath: (c) => `docs/${c.id}/accessibility/aria-support_${c.id}.md`,
 *   };
 *   const pages = generateA11yDocs(registry, options);
 *   for (const page of pages) {
 *       fs.writeFileSync(page.outputPath!, page.markdown!, 'utf-8');
 *   }
 */

// Types
export type {
    AriaRule,
    AriaSpec,
    ComponentMeta,
    CrossReference,
    FrontmatterData,
    A11yGeneratorOptions,
    A11yDocPage,
    A11yDocData,
    A11ySection,
} from './types';

// Registry
export { buildRegistry, resolveDisplayName, DEFAULT_DISPLAY_NAMES } from './component-registry';

// Generator
export { generateA11yDoc, generateA11yDocs } from './page-generator';

// Presets (reference examples — in production, each product repo owns its preset)
export {
    ANGULAR_PRESET,
    REACT_PRESET,
    DESIGN_SYSTEM_PRESET,
    BLAZOR_PRESET,
    JQUERY_PRESET,
    ASPNET_PRESET,
} from './presets';

// Markdown rendering utilities (for consumers that need fine-grained control)
export {
    renderFrontmatter,
    defaultFrontmatter,
    renderAriaTable,
    groupRulesIntoSections,
    renderCrossReferenceLink,
    renderSeeAlsoSection,
    renderSection508ForComponent,
    renderTestingSection,
    renderKeyboardNavRef,
} from './markdown-renderer';
