/**
 * JSON renderer for a11y documentation pages.
 *
 * Produces the JSON array format consumed by the Design System docs:
 * each element is an object with a single key (h2, h3, h4, p, table, ul, link).
 *
 * This matches the format previously provided by @progress/wct-a11y-spec.
 */

import type { AriaRule, A11yJsonElement, ComponentMeta, CrossReference } from './types';
import { resolveDisplayName } from './component-registry';

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

/**
 * Wrap an attribute value in backticks, splitting on ` or `.
 * `'role=link or nodeName=a'` → `` `role=link` or `nodeName=a` ``
 */
function formatAttribute(value: string): string {
    if (!value) return '';
    return value.split(' or ').map(part => `\`${part.trim()}\``).join(' or ');
}

/**
 * Wrap a selector in backticks.
 */
function formatSelector(value: string): string {
    if (!value) return '';
    return `\`${value}\``;
}

/**
 * Format a JSDoc list item: wrap parenthesized role/attribute values
 * in backticks and append a semicolon.
 *
 * `'Toolbar (role=toolbar)'` → `` 'Toolbar (`role=toolbar`);' ``
 */
function formatListItem(item: string): string {
    return item.replace(/\(([^)]*=[^)]+)\)/g, '(`$1`)') + ';';
}

/**
 * Template variable for a cross-link to another component's a11y page.
 * Resolved by the Design System rendering pipeline.
 */
function crossLinkVar(targetId: string): string {
    return `{{${targetId}_a11y_link}}`;
}

// ---------------------------------------------------------------------------
// ARIA rules table
// ---------------------------------------------------------------------------

/**
 * Build a table element from ARIA rules.
 * Consecutive rules with the same selector show empty selector after the first.
 */
export function buildAriaTable(rules: AriaRule[]): A11yJsonElement {
    let lastSelector = '';
    const rows = rules.map(rule => {
        const showSelector = rule.selector !== lastSelector;
        lastSelector = rule.selector;
        return {
            Selector: showSelector ? formatSelector(rule.selector) : '',
            Attribute: formatAttribute(rule.attribute),
            Usage: rule.usage,
        };
    });

    return {
        table: {
            headers: ['Selector', 'Attribute', 'Usage'],
            rows,
        }
    };
}

// ---------------------------------------------------------------------------
// Screen readers table
// ---------------------------------------------------------------------------

function buildScreenReadersTable(): A11yJsonElement {
    return {
        table: {
            headers: ['Environment', 'Tool'],
            rows: [
                ['Firefox', 'NVDA'],
                ['Chrome', 'JAWS'],
                ['Microsoft Edge', 'JAWS'],
            ],
        }
    };
}

// ---------------------------------------------------------------------------
// Description parser
// ---------------------------------------------------------------------------

/**
 * Parse a JSDoc description string into JSON elements.
 * Handles paragraph breaks and list items (lines starting with `- `).
 */
export function parseDescription(description: string): A11yJsonElement[] {
    const elements: A11yJsonElement[] = [];
    const blocks = description.split(/\n\n+/);

    for (const block of blocks) {
        const lines = block.split('\n');
        const listItems: string[] = [];
        const textLines: string[] = [];

        for (const line of lines) {
            if (/^\s*-\s+/.test(line)) {
                if (textLines.length > 0) {
                    elements.push({ p: textLines.join(' ').trim() });
                    textLines.length = 0;
                }
                listItems.push(line.replace(/^\s*-\s+/, '').trim());
            } else {
                if (listItems.length > 0) {
                    elements.push({ ul: listItems.map(formatListItem) });
                    listItems.length = 0;
                }
                if (line.trim()) {
                    textLines.push(line.trim());
                }
            }
        }

        if (textLines.length > 0) {
            elements.push({ p: textLines.join(' ').trim() });
        }
        if (listItems.length > 0) {
            elements.push({ ul: listItems.map(formatListItem) });
        }
    }

    return elements;
}

// ---------------------------------------------------------------------------
// Section grouping
// ---------------------------------------------------------------------------

export interface RuleSection {
    title: string;
    rules: AriaRule[];
}

/**
 * Group rules into labelled sections based on selector patterns.
 * If all rules fall into a single group, returns one section.
 */
export function groupRulesIntoSections(
    rules: AriaRule[],
    componentDisplayName: string,
): RuleSection[] {
    if (rules.length === 0) return [];

    const sectionMap = new Map<string, AriaRule[]>();
    const sectionOrder: string[] = [];

    for (const rule of rules) {
        const title = inferSectionTitle(rule.selector, componentDisplayName);
        if (!sectionMap.has(title)) {
            sectionMap.set(title, []);
            sectionOrder.push(title);
        }
        sectionMap.get(title)!.push(rule);
    }

    if (sectionOrder.length <= 1) {
        return [{ title: componentDisplayName, rules }];
    }

    return sectionOrder.map(title => ({
        title,
        rules: sectionMap.get(title)!,
    }));
}

function inferSectionTitle(selector: string, componentName: string): string {
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

        [/\.k-toolbar/, componentName],
        [/\.k-pager/, componentName],
        [/\.k-input-inner/, `${componentName} Input`],
        [/\.k-input-button/, `${componentName} Button`],
        [/-popup\s/, `${componentName} Popup`],
        [/\.k-dialog/, componentName],
        [/\.k-window/, componentName],
    ];

    for (const [pattern, title] of patterns) {
        if (pattern.test(selector)) return title;
    }

    return componentName;
}

// ---------------------------------------------------------------------------
// Cross-link matching
// ---------------------------------------------------------------------------

/**
 * Find a @see reference that matches a given section title.
 * Matches when the section title contains the target component's display name or id.
 */
function findMatchingSeeAlso(
    sectionTitle: string,
    seeAlsoMap: Map<string, CrossReference>,
    nameMap?: Record<string, string>,
): CrossReference | null {
    const titleLower = sectionTitle.toLowerCase();
    for (const [targetId, ref] of seeAlsoMap) {
        const displayName = resolveDisplayName(targetId, nameMap).toLowerCase();
        if (titleLower.includes(displayName) || titleLower.includes(targetId)) {
            return ref;
        }
    }
    return null;
}

// ---------------------------------------------------------------------------
// Full page builder
// ---------------------------------------------------------------------------

/**
 * Build the complete JSON array for a component's a11y documentation page.
 */
export function buildA11yJson(
    component: ComponentMeta,
    nameMap?: Record<string, string>,
): A11yJsonElement[] {
    const displayName = resolveDisplayName(component.id, nameMap);
    const elements: A11yJsonElement[] = [];

    // --- Intro ---
    elements.push({ h2: 'Accessibility Support' });
    elements.push({
        p: `Out of the box, the Telerik and Kendo UI ${displayName} provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.`
    });
    elements.push({
        p: `The ${displayName} is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](http://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) for its \`component\` role, provides options for [managing its focus](#managing-the-focus) and is tested against the most popular [screen readers](#screen-readers).`
    });

    // --- WAI-ARIA ---
    elements.push({ h3: 'WAI-ARIA' });
    elements.push({
        p: 'This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.'
    });

    // Component description from JSDoc
    if (component.description) {
        elements.push(...parseDescription(component.description));
    }

    // Group rules into sections
    const sections = groupRulesIntoSections(component.ariaSpec.rules, displayName);

    // Build @see cross-reference lookup
    const seeAlsoMap = new Map<string, CrossReference>();
    if (component.seeAlso) {
        for (const ref of component.seeAlso) {
            seeAlsoMap.set(ref.targetId, ref);
        }
    }

    const matchedSeeAlso = new Set<string>();

    if (sections.length === 1) {
        // Simple component — just the table, no sub-headings
        elements.push(buildAriaTable(sections[0].rules));
    } else {
        // Complex component — sections with h4 headings
        for (const section of sections) {
            elements.push({ h4: section.title });

            // Check for matching @see cross-link
            const matchedRef = findMatchingSeeAlso(section.title, seeAlsoMap, nameMap);
            if (matchedRef) {
                matchedSeeAlso.add(matchedRef.targetId);
                const refDisplayName = resolveDisplayName(matchedRef.targetId, nameMap);
                elements.push({
                    p: `${section.title} follows the specification of the ${refDisplayName} component.`
                });
                elements.push({
                    link: {
                        title: `${refDisplayName} accessibility specification`,
                        source: crossLinkVar(matchedRef.targetId),
                    }
                });
            }

            elements.push(buildAriaTable(section.rules));
        }
    }

    // Unmatched @see references — standalone cross-link sections
    if (component.seeAlso) {
        for (const ref of component.seeAlso) {
            if (!matchedSeeAlso.has(ref.targetId)) {
                const refDisplayName = resolveDisplayName(ref.targetId, nameMap);
                elements.push({ h4: refDisplayName });
                elements.push({
                    p: `For the ${displayName} ${refDisplayName} WAI-ARIA spec, please review the ${refDisplayName} component.`
                });
                elements.push({
                    link: {
                        title: `${refDisplayName} accessibility specification`,
                        source: crossLinkVar(ref.targetId),
                    }
                });
            }
        }
    }

    // --- Testing ---
    elements.push({ h3: 'Testing' });
    elements.push({
        p: `The ${displayName} has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.`
    });

    // --- Screen Readers ---
    elements.push({ h3: 'Screen Readers' });
    elements.push({
        p: `The ${displayName} has been tested with the following screen readers and browsers combinations:`
    });
    elements.push(buildScreenReadersTable());

    return elements;
}
