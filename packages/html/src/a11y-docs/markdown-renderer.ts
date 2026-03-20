/**
 * Markdown rendering utilities for a11y documentation pages.
 *
 * Each function produces a Markdown fragment. The page generator
 * composes these fragments into a complete page.
 */

import type {
    AriaRule,
    A11ySection,
    ComponentMeta,
    CrossReference,
    FrontmatterData,
    A11yGeneratorOptions,
} from './types';
import { resolveDisplayName } from './component-registry';

// ---------------------------------------------------------------------------
// YAML frontmatter
// ---------------------------------------------------------------------------

export function renderFrontmatter(data: FrontmatterData): string {
    const lines = Object.entries(data).map(([key, value]) => {
        if (typeof value === 'string' && (value.includes(':') || value.includes('"') || value.includes('\n'))) {
            return `${key}: "${value.replace(/"/g, '\\"')}"`;
        }
        return `${key}: ${value}`;
    });
    return `---\n${lines.join('\n')}\n---`;
}

export function defaultFrontmatter(
    component: ComponentMeta,
    options: A11yGeneratorOptions
): FrontmatterData {
    const displayName = resolveDisplayName(component.id, options.componentNameMap);
    const productName = options.productName || 'Kendo UI';
    const slugFn = options.slugPattern || ((id: string) => `wai_aria_support_${id}`);
    return {
        title: 'Wai-Aria Support',
        description: `Get started with the ${productName} ${displayName} and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.2.`,
        slug: slugFn(component.id),
        position: 2,
    };
}

// ---------------------------------------------------------------------------
// ARIA rules table
// ---------------------------------------------------------------------------

function escapeCell(text: string): string {
    return text.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

export function renderAriaTable(rules: AriaRule[]): string {
    if (rules.length === 0) return '';

    const lines: string[] = [
        '| Selector | Attribute | Usage |',
        '| -------- | --------- | ----- |',
    ];

    for (const rule of rules) {
        lines.push(
            `| ${escapeCell(rule.selector)} | ${escapeCell(rule.attribute)} | ${escapeCell(rule.usage)} |`
        );
    }

    return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Section grouping
// ---------------------------------------------------------------------------

/**
 * Group a flat array of rules into labelled sections based on inline
 * comment markers in the ariaSpec source.
 *
 * The ariaSpec rules use a naming convention in their selectors to hint
 * at logical grouping. We derive section titles from common selector
 * prefixes:
 * - `.k-grid-toolbar` → Grid Toolbar
 * - `.k-grid-header` → Grid Header
 * - `.k-grid-content` → Grid Content
 *
 * If no grouping can be inferred, all rules go into a single section.
 */
export function groupRulesIntoSections(
    rules: AriaRule[],
    componentDisplayName: string,
): A11ySection[] {
    if (rules.length === 0) return [];

    // Try to detect section comment markers from the inline comments
    // The ariaSpec objects use `// ── Section Name ──` comments, but those
    // are not available at runtime. Instead we group by selector prefix patterns.

    const sectionMap = new Map<string, AriaRule[]>();
    const sectionOrder: string[] = [];

    for (const rule of rules) {
        const sectionTitle = inferSectionTitle(rule.selector, componentDisplayName);

        if (!sectionMap.has(sectionTitle)) {
            sectionMap.set(sectionTitle, []);
            sectionOrder.push(sectionTitle);
        }
        sectionMap.get(sectionTitle)!.push(rule);
    }

    // If everything ended up in one group, skip sectioning
    if (sectionOrder.length <= 1) {
        return [{ title: componentDisplayName, rules }];
    }

    return sectionOrder.map((title) => ({
        title,
        rules: sectionMap.get(title)!,
    }));
}

/**
 * Infer a human-readable section title from a CSS selector.
 */
function inferSectionTitle(selector: string, componentName: string): string {
    // Common Grid/TreeList patterns
    const patterns: Array<[RegExp, string]> = [
        [/\.k-grid-toolbar/, `${componentName} Toolbar`],
        [/\.k-grouping-header/, `${componentName} Grouping Header`],
        [/\.k-grid-aria-root/, `${componentName} Element`],
        [/\.k-grid-header/, `${componentName} Header`],
        [/\.k-filter-row/, `${componentName} Filter Row`],
        [/\.k-grid-filter-popup/, `${componentName} Filter Menu`],
        [/\.k-grid-columnmenu-popup/, `${componentName} Column Menu`],
        [/\.k-grid-content(?!-)/, `${componentName} Content`],
        [/\.k-grid-pinned-container/, `${componentName} Pinned Rows`],
        [/\.k-grid-sticky-container/, `${componentName} Sticky Group Header`],
        [/\.k-grid-lockedcolumns|\.k-grid-header-locked|\.k-grid-content-locked/, `${componentName} Locked Columns`],
        [/\.k-grid-selection-aggregates/, `${componentName} Selection Aggregates`],
        [/\.k-grid-stack-cell/, `${componentName} Stacked Layout`],
        [/\.k-pin-cell/, `${componentName} Pinned Rows`],
        [/tfoot/, `${componentName} Footer`],
        [/tr\.k-selected|td\.k-selected/, `${componentName} Selection`],
        [/\.k-master-row|\.k-grouping-row|\.k-group-cell|\.k-drag-cell/, `${componentName} Content`],

        // Toolbar component
        [/\.k-toolbar/, `${componentName}`],

        // Pager component
        [/\.k-pager/, `${componentName}`],

        // Dropdown components
        [/\.k-input-inner/, `${componentName} Input`],
        [/\.k-input-button/, `${componentName} Button`],
        [/-popup\s/, `${componentName} Popup`],

        // Dialog/Window
        [/\.k-dialog/, `${componentName}`],
        [/\.k-window/, `${componentName}`],
    ];

    for (const [pattern, title] of patterns) {
        if (pattern.test(selector)) return title;
    }

    return componentName;
}

// ---------------------------------------------------------------------------
// Cross-reference links
// ---------------------------------------------------------------------------

export function renderCrossReferenceLink(
    ref: CrossReference,
    options: A11yGeneratorOptions,
): string {
    const displayName = resolveDisplayName(ref.targetId, options.componentNameMap);
    const label = ref.label
        ? `${displayName} accessibility specification (${ref.label})`
        : `${displayName} accessibility specification`;

    const linkFormat = options.linkFormat || 'markdown';

    if (typeof linkFormat === 'function') {
        return linkFormat(ref.targetId, label);
    }

    switch (linkFormat) {
        case 'slug': {
            const slugFn = options.slugPattern || ((id: string) => `wai_aria_support_${id}`);
            return `[${label}](slug:${slugFn(ref.targetId)})`;
        }
        case 'jekyll': {
            const slugFn = options.slugPattern || ((id: string) => `accessibility_${id}`);
            return `[${label}]({%slug ${slugFn(ref.targetId)}%})`;
        }
        case 'markdown':
        default:
            return `[${label}](./${ref.targetId}.md)`;
    }
}

export function renderSeeAlsoSection(
    seeAlso: CrossReference[],
    options: A11yGeneratorOptions,
): string {
    if (seeAlso.length === 0) return '';

    const links = seeAlso.map((ref) => `- ${renderCrossReferenceLink(ref, options)}`);
    return `## Child Component Specifications\n\nThe following component specifications are also applicable:\n\n${links.join('\n')}`;
}

// ---------------------------------------------------------------------------
// Standard sections
// ---------------------------------------------------------------------------

export function renderSection508(): string {
    return `## Section 508

The ${
        'component'
    } is fully compliant with the [Section 508 requirements](https://www.section508.gov/).`;
}

export function renderSection508ForComponent(displayName: string): string {
    return `## Section 508

The ${displayName} is fully compliant with the [Section 508 requirements](https://www.section508.gov/).`;
}

export function renderTestingSection(): string {
    return [
        '## Testing',
        '',
        'The component has been extensively tested with the following assistive technologies:',
        '',
        '| Environment | Tool |',
        '| ----------- | ---- |',
        '| Firefox | NVDA |',
        '| Chrome | JAWS |',
        '| Microsoft Edge | JAWS |',
        '',
        'Automated testing is performed with [axe-core](https://github.com/dequelabs/axe-core).',
    ].join('\n');
}

export function renderKeyboardNavRef(
    component: ComponentMeta,
    options: A11yGeneratorOptions,
): string {
    const displayName = resolveDisplayName(component.id, options.componentNameMap);
    return `## Keyboard Navigation

For more details on how the ${displayName} keyboard navigation works, refer to the [${displayName} Keyboard Navigation]({%slug keyboard_navigation_${component.id}%}) article.`;
}
