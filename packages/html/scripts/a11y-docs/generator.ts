/**
 * A11y documentation generator — scans component exports, builds JSON tables,
 * and produces documentation pages consumed by the Design System docs.
 */

import type {
    AriaRule,
    AriaSpec,
    A11yJsonElement,
    A11yDocPage,
    A11yGeneratorOptions,
    ComponentMeta,
} from './types';

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

/**
 * Scan the html package exports and build the component registry.
 *
 * @param exports - The namespace object (e.g. `import * as html from './index'`).
 */
export function buildRegistry(
    exports: Record<string, unknown>,
): Map<string, ComponentMeta> {
    const registry = new Map<string, ComponentMeta>();

    for (const [exportName, value] of Object.entries(exports)) {
        if (typeof value !== 'function' && typeof value !== 'object') continue;
        const comp = value as Record<string, unknown>;
        const ariaSpec = comp.ariaSpec as AriaSpec | undefined;
        if (!ariaSpec?.rules) continue;

        const moduleName = (comp.moduleName as string) || null;
        const folderName = (comp.folderName as string) || null;
        let id = (moduleName || folderName || exportName).toLowerCase();

        if (registry.has(id)) {
            id = exportName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            if (registry.has(id)) continue;
        }

        registry.set(id, {
            id,
            displayName: exportName,
            ariaSpec,
        });
    }

    return registry;
}

/**
 * Resolve display name for a component id.
 * Registry lookup, then kebab-to-PascalCase fallback.
 */
export function resolveDisplayName(
    id: string,
    registry: Map<string, ComponentMeta>,
): string {
    const meta = registry.get(id);
    if (meta) return meta.displayName;
    return id
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('');
}

// ---------------------------------------------------------------------------
// Formatting helpers
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
// Section grouping (explicit via rule.section)
// ---------------------------------------------------------------------------

export interface RuleSection {
    key: string;
    title: string;
    rules: AriaRule[];
}

function kebabToTitle(str: string): string {
    return str.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

/**
 * Group rules into named sections based on the explicit `section` field.
 * Rules without a section fall into the default (empty-key) group.
 */
export function groupRulesIntoSections(
    rules: AriaRule[],
    componentDisplayName: string,
): RuleSection[] {
    if (rules.length === 0) return [];

    const sectionMap = new Map<string, AriaRule[]>();
    const sectionOrder: string[] = [];

    for (const rule of rules) {
        const key = rule.section ?? '';
        if (!sectionMap.has(key)) {
            sectionMap.set(key, []);
            sectionOrder.push(key);
        }
        sectionMap.get(key)!.push(rule);
    }

    if (sectionOrder.length <= 1) {
        return [{ key: sectionOrder[0] ?? '', title: componentDisplayName, rules }];
    }

    return sectionOrder.map(key => ({
        key,
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
// Full page JSON builder
// ---------------------------------------------------------------------------

/**
 * Build the complete JSON array for a component's a11y documentation page.
 */
export function buildA11yJson(
    component: ComponentMeta,
    registry: Map<string, ComponentMeta>,
): A11yJsonElement[] {
    const displayName = resolveDisplayName(component.id, registry);
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
        elements.push(...component.ariaSpec.description);
    }

    // Build seeAlso lookup set
    const seeAlsoSet = new Set(component.ariaSpec.seeAlso || []);

    // Group rules into sections
    const sections = groupRulesIntoSections(
        component.ariaSpec.rules,
        displayName,
    );

    const matchedSeeAlso = new Set<string>();

    if (sections.length === 1) {
        elements.push(buildAriaTable(sections[0].rules));
    } else {
        for (const section of sections) {
            elements.push({ h4: section.title });

            // Exact match: section key === seeAlso entry
            if (seeAlsoSet.has(section.key)) {
                matchedSeeAlso.add(section.key);
                const refName = resolveDisplayName(section.key, registry);
                elements.push({
                    p: `${section.title} follows the specification of the ${refName} component.`
                });
                elements.push({
                    link: {
                        title: `${refName} accessibility specification`,
                        source: crossLinkVar(section.key),
                    }
                });
            }

            elements.push(buildAriaTable(section.rules));
        }
    }

    // Standalone cross-links for unmatched seeAlso
    for (const targetId of seeAlsoSet) {
        if (!matchedSeeAlso.has(targetId)) {
            const refName = resolveDisplayName(targetId, registry);
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

// ---------------------------------------------------------------------------
// Page generators
// ---------------------------------------------------------------------------

/**
 * Generate an a11y documentation page for a single component.
 */
export function generateA11yDoc(
    component: ComponentMeta,
    registry: Map<string, ComponentMeta>,
    options: A11yGeneratorOptions = {},
): A11yDocPage {
    const displayName = resolveDisplayName(component.id, registry);

    const page: A11yDocPage = {
        componentId: component.id,
        displayName,
        json: buildA11yJson(component, registry),
    };

    if (options.outputPath) {
        page.outputPath = options.outputPath({ ...component, displayName });
    }

    return page;
}

/**
 * Generate a11y documentation pages for multiple components.
 */
export function generateA11yDocs(
    registry: Map<string, ComponentMeta>,
    options: A11yGeneratorOptions = {},
): A11yDocPage[] {
    const pages: A11yDocPage[] = [];

    for (const [id, component] of registry) {
        if (options.includeComponents && !options.includeComponents.includes(id)) {
            continue;
        }
        if (options.excludeComponents && options.excludeComponents.includes(id)) {
            continue;
        }

        pages.push(generateA11yDoc(component, registry, options));
    }

    return pages;
}
