/**
 * Reference / example presets for a11y documentation generation.
 *
 * These presets illustrate how each product can configure the generator.
 * In production, each product repo should own its preset (with the correct
 * component name map, folder mapping via `outputPath`, etc.).
 *
 * Kept here during the POC phase as working examples.
 *
 * Usage in a consuming repo:
 *
 *   import { generateA11yDocs, buildRegistry, type A11yGeneratorOptions } from '@progress/kendo-themes-html';
 *   const MY_PRESET: A11yGeneratorOptions = { ...ANGULAR_PRESET, outputPath: (c) => `docs/${c.id}/accessibility/aria-support_${c.id}.md` };
 *   const pages = generateA11yDocs(registry, MY_PRESET);
 */

import type { A11yGeneratorOptions, ComponentMeta, FrontmatterData } from './types';

// ---------------------------------------------------------------------------
// Angular preset
// ---------------------------------------------------------------------------

const ANGULAR_NAME_MAP: Record<string, string> = {
    'actionsheet': 'ActionSheet',
    'aiprompt': 'AIPrompt',
    'appbar': 'AppBar',
    'autocomplete': 'AutoComplete',
    'buttongroup': 'ButtonGroup',
    'checkbox': 'CheckBox',
    'chip-list': 'ChipList',
    'colorgradient': 'ColorGradient',
    'colorpalette': 'ColorPalette',
    'colorpicker': 'ColorPicker',
    'coloreditor': 'FlatColorPicker',
    'combobox': 'ComboBox',
    'contextmenu': 'ContextMenu',
    'dateinput': 'DateInput',
    'datepicker': 'DatePicker',
    'datetimepicker': 'DateTimePicker',
    'dropdownlist': 'DropDownList',
    'dropdowntree': 'DropDownTree',
    'expansion-panel': 'ExpansionPanel',
    'fab': 'FloatingActionButton',
    'listbox': 'ListBox',
    'listview': 'ListView',
    'maskedtextbox': 'MaskedTextBox',
    'multiselect': 'MultiSelect',
    'multiselecttree': 'MultiSelectTree',
    'multiviewcalendar': 'MultiViewCalendar',
    'numerictextbox': 'NumericTextBox',
    'panelbar': 'PanelBar',
    'pdf-viewer': 'PDFViewer',
    'pivotgrid': 'PivotGrid',
    'progressbar': 'ProgressBar',
    'radiobutton': 'RadioButton',
    'textarea': 'TextArea',
    'textbox': 'TextBox',
    'tabstrip': 'TabStrip',
    'tilelayout': 'TileLayout',
    'toolbar': 'ToolBar',
    'treelist': 'TreeList',
    'treeview': 'TreeView',
};

export const ANGULAR_PRESET: A11yGeneratorOptions = {
    productName: 'Kendo UI for Angular',
    componentNameMap: ANGULAR_NAME_MAP,
    linkFormat: 'slug',
    slugPattern: (id: string) => `wai_aria_support_${id}`,
    includeSection508: true,
    includeTestingSection: true,
    includeKeyboardNavRef: true,
    outputFormat: 'markdown',
    frontmatter: (component: ComponentMeta): FrontmatterData => {
        const displayName = ANGULAR_NAME_MAP[component.id] || component.displayName;
        return {
            title: 'Wai-Aria Support',
            description: `Get started with the Kendo UI for Angular ${displayName} and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.2.`,
            slug: `wai_aria_support_${component.id}`,
            position: 2,
        };
    },
};

// ---------------------------------------------------------------------------
// React preset
// ---------------------------------------------------------------------------

export const REACT_PRESET: A11yGeneratorOptions = {
    productName: 'KendoReact',
    componentNameMap: ANGULAR_NAME_MAP, // React uses same display names
    linkFormat: 'jekyll',
    slugPattern: (id: string) => `accessibility_${id}`,
    includeSection508: true,
    includeTestingSection: true,
    includeKeyboardNavRef: true,
    outputFormat: 'markdown',
    frontmatter: (component: ComponentMeta): FrontmatterData => {
        const displayName = ANGULAR_NAME_MAP[component.id] || component.displayName;
        return {
            title: 'Wai-Aria Support',
            description: `Get started with the KendoReact ${displayName} and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.2.`,
            slug: `accessibility_${component.id}`,
            position: 100,
        };
    },
};

// ---------------------------------------------------------------------------
// Design System preset
// ---------------------------------------------------------------------------

export const DESIGN_SYSTEM_PRESET: A11yGeneratorOptions = {
    productName: 'Kendo UI',
    linkFormat: 'markdown',
    includeSection508: true,
    includeTestingSection: true,
    includeKeyboardNavRef: false,
    outputFormat: 'both',
    frontmatter: (component: ComponentMeta): FrontmatterData => {
        const displayName = component.displayName;
        return {
            path: `components/${component.id}/accessibility`,
            title: 'Accessibility',
            position: 5,
            seo_title: `Accessibility Support for the ${displayName} Component`,
            seo_description: `Meet the needs of your users with disabilities by using the accessibility support provided by the ${displayName} component.`,
        };
    },
};

// ---------------------------------------------------------------------------
// Blazor preset
// ---------------------------------------------------------------------------

export const BLAZOR_PRESET: A11yGeneratorOptions = {
    productName: 'Telerik UI for Blazor',
    componentNameMap: ANGULAR_NAME_MAP, // Blazor uses similar naming
    linkFormat: 'slug',
    slugPattern: (id: string) => `${id}-wai-aria-support`,
    includeSection508: true,
    includeTestingSection: true,
    includeKeyboardNavRef: true,
    outputFormat: 'markdown',
};

// ---------------------------------------------------------------------------
// jQuery preset
// ---------------------------------------------------------------------------

/**
 * Components whose cross-reference links should NOT be replaced with slugs
 * because they don't have dedicated a11y pages in the jQuery / ASP.NET docs.
 */
const JQUERY_IGNORED_CROSS_REFS = new Set([
    'filter-menu',
    'filtermenu',
    'column-menu',
    'columnmenu',
    'card',
    'card-list',
    'cardlist',
]);

function jqueryLinkFormat(prefix: string) {
    return (targetId: string, label: string): string => {
        if (JQUERY_IGNORED_CROSS_REFS.has(targetId)) {
            return label; // Plain text — no link
        }
        return `[${label}]({%slug ${prefix}_${targetId}_accessibility%})`;
    };
}

export const JQUERY_PRESET: A11yGeneratorOptions = {
    productName: 'Kendo UI for jQuery',
    componentNameMap: ANGULAR_NAME_MAP,
    linkFormat: jqueryLinkFormat('jquery'),
    includeSection508: true,
    includeTestingSection: true,
    includeKeyboardNavRef: true,
    outputFormat: 'markdown',
    frontmatter: (component: ComponentMeta): FrontmatterData => {
        const displayName = ANGULAR_NAME_MAP[component.id] || component.displayName;
        return {
            title: 'Wai-Aria Support',
            description: `Get started with the Kendo UI for jQuery ${displayName} and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.2.`,
            slug: `jquery_${component.id}_accessibility`,
            position: 2,
        };
    },
};

// ---------------------------------------------------------------------------
// ASP.NET MVC / Core preset
// ---------------------------------------------------------------------------

export const ASPNET_PRESET: A11yGeneratorOptions = {
    productName: 'Telerik UI for ASP.NET',
    componentNameMap: ANGULAR_NAME_MAP,
    linkFormat: jqueryLinkFormat('htmlhelpers'),
    includeSection508: true,
    includeTestingSection: true,
    includeKeyboardNavRef: true,
    outputFormat: 'markdown',
    frontmatter: (component: ComponentMeta): FrontmatterData => {
        const displayName = ANGULAR_NAME_MAP[component.id] || component.displayName;
        return {
            title: 'Wai-Aria Support',
            description: `Get started with the Telerik UI for ASP.NET ${displayName} and learn about its accessibility support for WAI-ARIA, Section 508, and WCAG 2.2.`,
            slug: `htmlhelpers_${component.id}_accessibility`,
            position: 2,
        };
    },
};
