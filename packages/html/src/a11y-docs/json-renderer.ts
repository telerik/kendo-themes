/**
 * JSON renderer for a11y documentation pages.
 *
 * Produces the JSON array format consumed by the Design System docs.
 * Section grouping is derived algorithmically from CSS selector prefixes
 * — no hardcoded pattern maps.
 */

import type { AriaRule, A11yJsonElement, ComponentMeta } from './types';
import { resolveDisplayName } from './component-registry';

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

function formatAttribute(value: string): string {
    if (!value) return '';
    return value.split(' or ').map(p => `\`${p.trim()}\``).join(' or ');
}

function formatSelector(value: string): string {
    return value ? `\`${value}\`` : '';
}

function crossLinkVar(targetId: string): string {
    return `{{${targetId}_a11y_link}}`;
}

// ---------------------------------------------------------------------------
// ARIA rules table
// ---------------------------------------------------------------------------

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
// Section grouping (algorithmic — no hardcoded patterns)
// ---------------------------------------------------------------------------

export interface RuleSection {
    title: string;
    rules: AriaRule[];
}

/**
 * Derive a section key from a CSS selector by stripping the component's
 * root class prefix and extracting the first meaningful segment.
 */
function inferSectionKey(selector: string, rootSelector: string | undefined): string {
    if (!rootSelector) return '';
    const rootCls = rootSelector.replace(/^\./, '');

    // Remove :not() blocks, then extract all .k-* classes
    const clean = selector.replace(/:not\([^)]*\)/g, '');
    const classes = [...clean.matchAll(/\.(k-[\w-]+)/g)].map(m => m[1]);

    for (const cls of classes) {
        if (cls === rootCls) continue;

        if (cls.startsWith(rootCls + '-')) {
            return cls.substring(rootCls.length + 1);
        }
        return cls.startsWith('k-') ? cls.substring(2) : cls;
    }

    return '';
}

function kebabToTitle(str: string): string {
    return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Group rules into named sections based on CSS selector prefixes.
 */
export function groupRulesIntoSections(
    rules: AriaRule[],
    rootSelector: string | undefined,
    componentDisplayName: string,
): RuleSection[] {
    if (rules.length === 0) return [];

    const sectionMap = new Map<string, AriaRule[]>();
    const sectionOrder: string[] = [];

    for (const rule of rules) {
        const key = inferSectionKey(rule.selector, rootSelector);
        if (!sectionMap.has(key)) {
            sectionMap.set(key, []);
            sectionOrder.push(key);
        }
        sectionMap.get(key)!.push(rule);
    }

    if (sectionOrder.length <= 1) {
        return [{ title: componentDisplayName, rules }];
    }

    return sectionOrder.map(key => ({
        title: key ? `${componentDisplayName} ${kebabToTitle(key)}` : componentDisplayName,
        rules: sectionMap.get(key)!,
    }));
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

export function parseDescription(description: string): A11yJsonElement[] {
    const elements: A11yJsonElement[] = [];
    const lines = description.split('\n');
    const listItems: string[] = [];
    const textLines: string[] = [];

    const flushText = () => {
        if (textLines.length > 0) {
            elements.push({ p: textLines.join(' ').trim() });
            textLines.length = 0;
        }
    };
    const flushList = () => {
        if (listItems.length > 0) {
            elements.push({ ul: listItems.map(item =>
                item.replace(/\(([^`)]*=[^`)]+)\)/g, '(`$1`)') + ';'
            )});
            listItems.length = 0;
        }
    };

    for (const line of lines) {
        if (/^\s*-\s+/.test(line)) {
            flushText();
            listItems.push(line.replace(/^\s*-\s+/, '').trim());
        } else if (line.trim()) {
            flushList();
            textLines.push(line.trim());
        } else {
            flushText();
            flushList();
        }
    }
    flushText();
    flushList();

    return elements;
}

// ---------------------------------------------------------------------------
// Full page builder
// ---------------------------------------------------------------------------

/**
 * Build the complete JSON array for a component's a11y documentation page.
 */
export function buildA11yJson(
    component: ComponentMeta,
    registry: Map<string, ComponentMeta>,
    nameMap?: Record<string, string>,
): A11yJsonElement[] {
    const displayName = resolveDisplayName(component.id, registry, nameMap);
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

    if (component.ariaSpec.description) {
        elements.push(...parseDescription(component.ariaSpec.description));
    }

    // Build seeAlso lookup set
    const seeAlsoSet = new Set(component.ariaSpec.seeAlso || []);

    // Group rules into sections
    const sections = groupRulesIntoSections(
        component.ariaSpec.rules,
        component.ariaSpec.selector,
        displayName,
    );

    const matchedSeeAlso = new Set<string>();

    if (sections.length === 1) {
        elements.push(buildAriaTable(sections[0].rules));
    } else {
        for (const section of sections) {
            elements.push({ h4: section.title });

            // Check if a seeAlso target matches this section
            const matchedRef = findMatchingSeeAlso(section.title, seeAlsoSet, registry, nameMap);
            if (matchedRef) {
                matchedSeeAlso.add(matchedRef);
                const refName = resolveDisplayName(matchedRef, registry, nameMap);
                elements.push({
                    p: `${section.title} follows the specification of the ${refName} component.`
                });
                elements.push({
                    link: {
                        title: `${refName} accessibility specification`,
                        source: crossLinkVar(matchedRef),
                    }
                });
            }

            elements.push(buildAriaTable(section.rules));
        }
    }

    // Standalone cross-links for unmatched seeAlso
    for (const targetId of seeAlsoSet) {
        if (!matchedSeeAlso.has(targetId)) {
            const refName = resolveDisplayName(targetId, registry, nameMap);
            elements.push({ h4: refName });
            elements.push({
                p: `For the ${displayName} ${refName} WAI-ARIA spec, please review the ${refName} component.`
            });
            elements.push({
                link: {
                    title: `${refName} accessibility specification`,
                    source: crossLinkVar(targetId),
                }
            });
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

/**
 * Match a seeAlso target to a section title.
 * Returns the matching target id or null.
 */
function findMatchingSeeAlso(
    sectionTitle: string,
    seeAlsoSet: Set<string>,
    registry: Map<string, ComponentMeta>,
    nameMap?: Record<string, string>,
): string | null {
    const titleLower = sectionTitle.toLowerCase();
    for (const targetId of seeAlsoSet) {
        const targetName = resolveDisplayName(targetId, registry, nameMap).toLowerCase();
        if (titleLower.includes(targetName) || titleLower.includes(targetId)) {
            return targetId;
        }
    }
    return null;
}
