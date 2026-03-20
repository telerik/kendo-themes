/**
 * Core page generator — composes a full a11y documentation page for a
 * single component from its ariaSpec and generator options.
 */

import type {
    A11yDocData,
    A11yDocPage,
    A11yGeneratorOptions,
    ComponentMeta,
} from './types';
import { resolveDisplayName } from './component-registry';
import {
    defaultFrontmatter,
    groupRulesIntoSections,
    renderAriaTable,
    renderFrontmatter,
    renderKeyboardNavRef,
    renderSection508ForComponent,
    renderSeeAlsoSection,
    renderTestingSection,
} from './markdown-renderer';

// ---------------------------------------------------------------------------
// Defaults
// ---------------------------------------------------------------------------

const DEFAULT_OPTIONS: Required<
    Pick<
        A11yGeneratorOptions,
        | 'includeSection508'
        | 'includeTestingSection'
        | 'includeKeyboardNavRef'
        | 'outputFormat'
        | 'linkFormat'
    >
> = {
    includeSection508: true,
    includeTestingSection: true,
    includeKeyboardNavRef: true,
    outputFormat: 'markdown',
    linkFormat: 'markdown',
};

// ---------------------------------------------------------------------------
// Markdown page builder
// ---------------------------------------------------------------------------

function buildMarkdown(
    component: ComponentMeta,
    options: A11yGeneratorOptions,
): string {
    const opts = { ...DEFAULT_OPTIONS, ...options };
    const displayName = resolveDisplayName(component.id, options.componentNameMap);

    const parts: string[] = [];

    // 1. Frontmatter
    const fm = opts.frontmatter
        ? opts.frontmatter(component)
        : defaultFrontmatter(component, opts);
    parts.push(renderFrontmatter(fm));

    // 2. Page heading
    parts.push(`\n# ${displayName} WAI-ARIA Support\n`);

    // 3. Description (from JSDoc @ariaSpec block)
    if (component.description) {
        parts.push(`${component.description}\n`);
    }

    // 4. Prepend hook
    if (opts.prependContent) {
        const prepend = opts.prependContent(component);
        if (prepend) parts.push(`${prepend}\n`);
    }

    // 5. ARIA rules — grouped into sections
    const sections = groupRulesIntoSections(
        component.ariaSpec.rules,
        displayName,
    );

    if (sections.length === 1 && component.ariaSpec.rules.length > 0) {
        // Single section — no sub-headings needed
        parts.push(renderAriaTable(sections[0].rules));
    } else {
        for (const section of sections) {
            parts.push(`\n### ${section.title}\n`);
            parts.push(renderAriaTable(section.rules));
        }
    }

    // 6. Cross-reference links (child component specs)
    if (component.seeAlso && component.seeAlso.length > 0) {
        parts.push('');
        parts.push(renderSeeAlsoSection(component.seeAlso, opts));
    }

    // 7. Section 508
    if (opts.includeSection508) {
        parts.push('');
        parts.push(renderSection508ForComponent(displayName));
    }

    // 8. Testing
    if (opts.includeTestingSection) {
        parts.push('');
        parts.push(renderTestingSection());
    }

    // 9. Keyboard navigation
    if (opts.includeKeyboardNavRef) {
        parts.push('');
        parts.push(renderKeyboardNavRef(component, opts));
    }

    // 10. Append hook
    if (opts.appendContent) {
        const append = opts.appendContent(component);
        if (append) parts.push(`\n${append}`);
    }

    return parts.join('\n');
}

// ---------------------------------------------------------------------------
// Structured data builder
// ---------------------------------------------------------------------------

function buildData(
    component: ComponentMeta,
    options: A11yGeneratorOptions,
): A11yDocData {
    const displayName = resolveDisplayName(component.id, options.componentNameMap);
    const sections = groupRulesIntoSections(
        component.ariaSpec.rules,
        displayName,
    );

    return {
        componentId: component.id,
        displayName,
        description: component.description,
        ariaSpec: component.ariaSpec,
        seeAlso: component.seeAlso || [],
        sections,
    };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Generate an a11y documentation page for a single component.
 */
export function generateA11yDoc(
    component: ComponentMeta,
    options: A11yGeneratorOptions = {},
): A11yDocPage {
    const format = options.outputFormat || 'markdown';
    const displayName = resolveDisplayName(component.id, options.componentNameMap);

    const page: A11yDocPage = {
        componentId: component.id,
        displayName,
    };

    if (format === 'markdown' || format === 'both') {
        page.markdown = buildMarkdown(component, options);
    }
    if (format === 'json' || format === 'both') {
        page.data = buildData(component, options);
    }
    if (options.outputPath) {
        page.outputPath = options.outputPath(component);
    }

    return page;
}

/**
 * Generate a11y documentation pages for multiple components.
 *
 * Applies include/exclude filtering from options.
 */
export function generateA11yDocs(
    components: Map<string, ComponentMeta>,
    options: A11yGeneratorOptions = {},
): A11yDocPage[] {
    const pages: A11yDocPage[] = [];

    for (const [id, component] of components) {
        // Filtering
        if (options.includeComponents && !options.includeComponents.includes(id)) {
            continue;
        }
        if (options.excludeComponents && options.excludeComponents.includes(id)) {
            continue;
        }

        pages.push(generateA11yDoc(component, options));
    }

    return pages;
}
