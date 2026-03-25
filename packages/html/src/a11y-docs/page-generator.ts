/**
 * Page generator — produces a11y JSON documents for components.
 */

import type { A11yDocPage, A11yGeneratorOptions, ComponentMeta } from './types';
import { resolveDisplayName } from './component-registry';
import { buildA11yJson } from './json-renderer';

/**
 * Generate an a11y documentation page for a single component.
 */
export function generateA11yDoc(
    component: ComponentMeta,
    options: A11yGeneratorOptions = {},
): A11yDocPage {
    const displayName = resolveDisplayName(component.id, options.componentNameMap);

    const page: A11yDocPage = {
        componentId: component.id,
        displayName,
        json: buildA11yJson(component, options.componentNameMap),
    };

    if (options.outputPath) {
        page.outputPath = options.outputPath(component);
    }

    return page;
}

/**
 * Generate a11y documentation pages for multiple components.
 * Applies include/exclude filtering from options.
 */
export function generateA11yDocs(
    components: Map<string, ComponentMeta>,
    options: A11yGeneratorOptions = {},
): A11yDocPage[] {
    const pages: A11yDocPage[] = [];

    for (const [id, component] of components) {
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
