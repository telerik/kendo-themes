/**
 * Component registry — discovers all components with ariaSpec from the
 * html package exports and builds a lookup map.
 *
 * Display names are taken from the export name (already PascalCase).
 * Cross-references and descriptions are read from ariaSpec at runtime
 * — no static/JSDoc parsing is needed.
 */

import type { AriaSpec, ComponentMeta } from './types';

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
            // Collision — fall back to export-name-derived id so both get docs
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
 * Checks user overrides, then falls back to the registry, then to kebab-to-PascalCase.
 */
export function resolveDisplayName(
    id: string,
    registry: Map<string, ComponentMeta>,
    nameMap?: Record<string, string>,
): string {
    if (nameMap?.[id]) return nameMap[id];
    const meta = registry.get(id);
    if (meta) return meta.displayName;
    return kebabToPascal(id);
}

function kebabToPascal(str: string): string {
    return str
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join('');
}
