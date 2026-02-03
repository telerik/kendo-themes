#!/usr/bin/env node
/* eslint-disable no-console */

/**
 * Generates ARIA specification files for Kendo UI components.
 * Usage: node scripts/generate-aria-spec.mjs [component-name]
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const ROOT = new URL('..', import.meta.url).pathname;
const HTML_SRC = join(ROOT, 'packages/html/src');
const ARIA_DIR = join(ROOT, 'aria');

// WAI-ARIA APG patterns for common component types
const ARIA_PATTERNS = {
    button: { role: 'button', attrs: ['aria-pressed', 'aria-expanded', 'aria-disabled'] },
    dialog: { role: 'dialog', attrs: ['aria-modal', 'aria-labelledby', 'aria-describedby'] },
    alertdialog: { role: 'alertdialog', attrs: ['aria-modal', 'aria-labelledby', 'aria-describedby'] },
    listbox: { role: 'listbox', attrs: ['aria-activedescendant', 'aria-multiselectable'] },
    option: { role: 'option', attrs: ['aria-selected', 'aria-disabled'] },
    menu: { role: 'menu', attrs: ['aria-activedescendant', 'aria-labelledby'] },
    menuitem: { role: 'menuitem', attrs: ['aria-disabled', 'aria-haspopup'] },
    tree: { role: 'tree', attrs: ['aria-activedescendant', 'aria-multiselectable'] },
    treeitem: { role: 'treeitem', attrs: ['aria-expanded', 'aria-selected', 'aria-level'] },
    grid: { role: 'grid', attrs: ['aria-rowcount', 'aria-colcount', 'aria-activedescendant'] },
    tablist: { role: 'tablist', attrs: ['aria-orientation'] },
    tab: { role: 'tab', attrs: ['aria-selected', 'aria-controls'] },
    tabpanel: { role: 'tabpanel', attrs: ['aria-labelledby'] },
    combobox: { role: 'combobox', attrs: ['aria-expanded', 'aria-haspopup', 'aria-activedescendant'] },
    slider: { role: 'slider', attrs: ['aria-valuenow', 'aria-valuemin', 'aria-valuemax'] },
    toolbar: { role: 'toolbar', attrs: ['aria-label', 'aria-labelledby'] },
    checkbox: { role: 'checkbox', attrs: ['aria-checked'] },
    radio: { role: 'radio', attrs: ['aria-checked'] },
    switch: { role: 'switch', attrs: ['aria-checked'] },
    textbox: { role: 'textbox', attrs: ['aria-placeholder', 'aria-readonly', 'aria-required'] },
};

// Maps component folder names to their aria pattern
const COMPONENT_PATTERNS = {
    button: 'button', 'split-button': 'button', 'menu-button': 'button',
    dialog: 'dialog', window: 'dialog',
    listbox: 'listbox', dropdownlist: 'listbox', combobox: 'combobox',
    menu: 'menu', 'context-menu': 'menu',
    treeview: 'tree', grid: 'grid', treelist: 'grid',
    tabstrip: 'tablist',
    slider: 'slider', 'range-slider': 'slider',
    toolbar: 'toolbar',
    checkbox: 'checkbox', radiobutton: 'radio', switch: 'switch',
};

// State classes - valid as combined selectors for ARIA state attributes
const STATE_CLASSES = new Set([
    'k-disabled', 'k-focus', 'k-hover', 'k-active', 'k-selected',
    'k-expanded', 'k-collapsed', 'k-checked', 'k-readonly', 'k-invalid',
]);

// State class to ARIA attribute mapping
// Note: tabindex handled separately - native focusable elements (input, button, a[href], select, textarea)
// don't need tabindex=0. For roving tabindex patterns, non-active items need tabindex=-1.
const STATE_TO_ARIA = {
    'k-disabled': 'aria-disabled=true',
    'k-selected': 'aria-selected=true',
    'k-expanded': 'aria-expanded=true',
    'k-collapsed': 'aria-expanded=false',
    'k-checked': 'aria-checked=true',
    'k-readonly': 'aria-readonly=true',
    'k-invalid': 'aria-invalid=true',
};

// Pure utility classes to exclude (layout/display only)
const UTILITY_CLASSES = new Set([
    'k-hidden', 'k-d-flex', 'k-d-grid', 'k-d-block', 'k-d-inline', 'k-d-none',
    'k-spacer', 'k-generating', 'k-loading',
    'k-flex-row', 'k-flex-col', 'k-align-items-center', 'k-justify-content-center',
]);

// Extracts detailed info from TSX files
function analyzeComponent(componentDir, componentName) {
    const componentClasses = new Set();
    const stateClasses = new Set();
    const elements = { buttons: [], inputs: [], textareas: [], links: [] };
    const imports = new Set();

    const files = readdirSync(componentDir, { recursive: true })
        .filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

    for (const file of files) {
        try {
            const content = readFileSync(join(componentDir, file), 'utf-8');

            // Extract k- classes
            const classMatches = content.matchAll(/['"`](k-[a-z0-9-]+)['"`]/g);
            for (const match of classMatches) {
                const cls = match[1];
                if (UTILITY_CLASSES.has(cls)) {
                    continue;
                }
                if (STATE_CLASSES.has(cls)) {
                    stateClasses.add(cls);
                } else if (!cls.match(/^k-(d-|flex-|align-|justify-)/)) {
                    componentClasses.add(cls);
                }
            }

            // Detect Button usage (IconButton, Button, etc)
            if (content.includes('IconButton') || content.includes('<Button')) {
                const buttonMatches = content.matchAll(/<(Icon)?Button[^>]*icon=["']([^"']+)["'][^>]*/g);
                for (const m of buttonMatches) {
                    elements.buttons.push({ type: m[1] ? 'icon' : 'text', icon: m[2] });
                }
            }

            // Detect input elements
            if (content.includes('InputInnerInput') || content.includes('<input')) {
                elements.inputs.push({ type: 'input' });
            }
            if (content.includes('InputInnerTextarea') || content.includes('<textarea')) {
                elements.textareas.push({ type: 'textarea' });
            }

            // Track component imports for references
            const importMatches = content.matchAll(/import\s+{[^}]+}\s+from\s+['"]\.\.\/([^'"/]+)/g);
            for (const m of importMatches) {
                imports.add(m[1]);
            }
        } catch { /* skip */ }
    }

    const sorted = Array.from(componentClasses).sort((a, b) => {
        if (a === `k-${componentName}`) {
            return -1;
        }
        if (b === `k-${componentName}`) {
            return 1;
        }
        return a.localeCompare(b);
    });

    return {
        componentClasses: sorted,
        stateClasses: Array.from(stateClasses),
        elements,
        imports: Array.from(imports)
    };
}

// Reads existing ARIA spec if present
function readExistingSpec(component) {
    const specPath = join(ARIA_DIR, `${component}_aria.md`);
    if (existsSync(specPath)) {
        return readFileSync(specPath, 'utf-8');
    }
    return null;
}

// Finds similar components' specs for reference
function findSimilarSpecs(component) {
    const pattern = COMPONENT_PATTERNS[component];
    if (!pattern) {
        return [];
    }

    const similar = [];
    for (const [comp, pat] of Object.entries(COMPONENT_PATTERNS)) {
        if (pat === pattern && comp !== component) {
            const spec = readExistingSpec(comp);
            if (spec) {
                similar.push({ component: comp, spec });
            }
        }
    }
    return similar;
}

// Common inner focusable element classes
const FOCUSABLE_INNER_CLASSES = new Set([
    'k-input', 'k-input-inner', 'k-button', 'k-draghandle', 'k-link',
    'k-textbox', 'k-textarea', 'k-picker-wrap', 'k-searchbar',
]);

// Generates the markdown spec content
function generateSpecContent(component, analysis, pattern) {
    const { componentClasses, stateClasses, elements, imports } = analysis;
    const componentName = component.split('-').map(w =>
        w.charAt(0).toUpperCase() + w.slice(1)
    ).join('');

    let content = `## WAI-ARIA\n\n\n`;
    content += `This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.\n\n`;
    content += `### ${componentName}\n\n`;
    content += `| Selector | Attribute | Usage |\n`;
    content += `| -------- | --------- | ----- |\n`;

    // Main component class
    const mainClass = componentClasses.find(c => c === `k-${component}`) || componentClasses[0];

    // Find inner focusable elements
    const innerFocusable = componentClasses.filter(c => FOCUSABLE_INNER_CLASSES.has(c));

    if (mainClass && pattern) {
        const p = ARIA_PATTERNS[pattern];
        if (p) {
            // If there's an inner focusable, ARIA goes there; otherwise on wrapper
            if (innerFocusable.length > 0) {
                content += `| \`.${mainClass} .${innerFocusable[0]}\` | \`role=${p.role}\` | Sets the proper role for the component. |\n`;
                content += `|  | \`aria-label\` or \`aria-labelledby\` | The component needs an accessible name. |\n`;
            } else {
                content += `| \`.${mainClass}\` | \`role=${p.role}\` | Sets the proper role for the component. |\n`;
                content += `|  | \`aria-label\` or \`aria-labelledby\` | The component needs an accessible name. |\n`;
                // Non-native focusable wrapper needs tabindex
                content += `|  | \`tabindex=0\` | The element must be focusable (only if not a native focusable element). |\n`;
            }
        }
    } else if (mainClass) {
        content += `| \`.${mainClass}\` | | TODO: Define role and attributes |\n`;
    }

    // Add state-based selectors (scoped to main class)
    for (const state of stateClasses) {
        const ariaAttr = STATE_TO_ARIA[state];
        if (ariaAttr && mainClass) {
            content += `| \`.${mainClass}.${state}\` | \`${ariaAttr}\` | Attribute is rendered only when the component is ${state.replace('k-', '')}. |\n`;
        }
    }

    // Add input/textarea elements
    if (elements.inputs.length > 0 || elements.textareas.length > 0) {
        content += `\n### Input Elements\n\n`;
        content += `| Selector | Attribute | Usage |\n`;
        content += `| -------- | --------- | ----- |\n`;
        if (elements.inputs.length > 0) {
            content += `| \`.${mainClass} input\` | \`aria-label\` or \`aria-labelledby\` | Input needs accessible name (if not associated with visible label). |\n`;
        }
        if (elements.textareas.length > 0) {
            content += `| \`.${mainClass} textarea\` | \`aria-label\` or \`aria-labelledby\` | Textarea needs accessible name (if not associated with visible label). |\n`;
        }
    }

    // Add button elements
    if (elements.buttons.length > 0) {
        content += `\n### Buttons\n\n`;
        content += `| Selector | Attribute | Usage |\n`;
        content += `| -------- | --------- | ----- |\n`;

        const iconButtons = elements.buttons.filter(b => b.type === 'icon');
        if (iconButtons.length > 0) {
            content += `| \`.${mainClass} .k-button:has(.k-icon)\` | \`aria-label\` or \`title\` | Icon-only buttons must have accessible text. |\n`;
        }
        content += `| \`.${mainClass} .k-button.k-disabled\` | \`aria-disabled=true\` | Keeps button in focus order while indicating it is not interactive. Use \`[disabled]\` attribute to remove from focus order entirely. |\n`;
    }

    // Add placeholder rows for other component classes (scoped)
    const otherClasses = componentClasses.filter(cls =>
        cls !== mainClass && !FOCUSABLE_INNER_CLASSES.has(cls)
    );
    if (otherClasses.length > 0) {
        content += `\n### Child Elements\n\n`;
        content += `| Selector | Attribute | Usage |\n`;
        content += `| -------- | --------- | ----- |\n`;
        for (const cls of otherClasses.slice(0, 8)) {
            content += `| \`.${mainClass} .${cls}\` | | TODO: Define attributes if needed |\n`;
        }
    }

    // Add references to imported components
    if (imports.length > 0) {
        const relevantImports = imports.filter(i =>
            existsSync(join(ARIA_DIR, `${i}_aria.md`))
        );
        if (relevantImports.length > 0) {
            content += `\n### Child Component Accessibility\n\n`;
            content += `This component includes the following child components. Their accessibility specs **must be respected** when rendering within ${componentName}:\n\n`;
            for (const imp of relevantImports) {
                const impName = imp.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
                content += `- [${impName} accessibility specification](${imp}_aria.md)\n`;
            }
            content += `\n> **Testing:** When running \`npm run test:aria ${component}\`, rules from the above specs are automatically included in validation.\n`;
            content += `>\n> **Note:** The parent component is responsible for passing appropriate props (e.g., \`aria-label\`, \`disabled\`) to child components.\n`;
        }
    }

    content += `\n`;
    return content;
}

// Main function
function main() {
    const args = process.argv.slice(2);
    const component = args[0];

    if (!component) {
        console.log('Usage: node scripts/generate-aria-spec.mjs [component-name]');
        console.log('\nAvailable components:');
        const dirs = readdirSync(HTML_SRC, { withFileTypes: true })
            .filter(d => d.isDirectory())
            .map(d => d.name)
            .sort();
        console.log(dirs.join(', '));
        process.exit(1);
    }

    const componentDir = join(HTML_SRC, component);
    if (!existsSync(componentDir)) {
        console.error(`Component not found: ${component}`);
        process.exit(1);
    }

    console.log(`\nAnalyzing component: ${component}`);

    // Check existing spec
    const existingSpec = readExistingSpec(component);
    if (existingSpec) {
        console.log(`✓ Existing spec found at aria/${component}_aria.md`);
    }

    // Analyze component
    const analysis = analyzeComponent(componentDir, component);
    const { componentClasses, stateClasses, elements, imports } = analysis;

    console.log(`Found ${componentClasses.length} component classes, ${stateClasses.length} state classes`);
    if (componentClasses.length > 0) {
        console.log(`  Classes: ${componentClasses.slice(0, 5).join(', ')}`);
    }
    if (stateClasses.length > 0) {
        console.log(`  States: ${stateClasses.join(', ')}`);
    }
    if (elements.buttons.length > 0) {
        console.log(`  Buttons: ${elements.buttons.length} (${elements.buttons.filter(b => b.type === 'icon').length} icon-only)`);
    }
    if (elements.inputs.length > 0 || elements.textareas.length > 0) {
        console.log(`  Inputs: ${elements.inputs.length} input, ${elements.textareas.length} textarea`);
    }
    if (imports.length > 0) {
        console.log(`  Imports: ${imports.join(', ')}`);
    }

    // Find pattern
    const pattern = COMPONENT_PATTERNS[component];
    if (pattern) {
        console.log(`Matched pattern: ${pattern}`);
    }

    // Find similar specs
    const similar = findSimilarSpecs(component);
    if (similar.length) {
        console.log(`Similar components: ${similar.map(s => s.component).join(', ')}`);
    }

    // Check for --force and --dry-run flags
    const forceRegenerate = args.includes('--force');
    const dryRun = args.includes('--dry-run');

    // Generate or show spec
    if (!existingSpec || forceRegenerate) {
        const specContent = generateSpecContent(component, analysis, pattern);
        const specPath = join(ARIA_DIR, `${component}_aria.md`);

        if (dryRun) {
            console.log(`\n--- DRY RUN: Would write to ${specPath} ---\n`);
            console.log(specContent);
            console.log(`\n--- END DRY RUN ---`);
        } else {
            writeFileSync(specPath, specContent);
            console.log(`\n✓ Generated spec: ${specPath}`);
        }
    } else {
        console.log('\nSpec already exists. Use --force to regenerate.');
    }
}

main();
