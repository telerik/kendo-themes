/**
 * Component registry — discovers all components with ariaSpec and builds
 * a lookup map plus cross-reference (composites) information.
 *
 * The registry is built lazily from the barrel exports of the html package.
 * Each exported symbol is inspected for `.ariaSpec`, `.moduleName`, and
 * `.folderName` properties.
 */

import type { AriaSpec, ComponentMeta, CrossReference } from './types';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Default PascalCase conversion: `'datepicker'` → `'Datepicker'`. */
function toPascalCase(str: string): string {
    return str
        .split(/[-_]/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join('');
}

/**
 * Built-in display name map for components whose PascalCase derivation
 * does not match the canonical product name.
 */
const DEFAULT_DISPLAY_NAMES: Record<string, string> = {
    'actionsheet': 'ActionSheet',
    'aiprompt': 'AIPrompt',
    'appbar': 'AppBar',
    'autocomplete': 'AutoComplete',
    'bottomnav': 'BottomNavigation',
    'breadcrumb': 'Breadcrumb',
    'buttongroup': 'ButtonGroup',
    'calendar': 'Calendar',
    'calendar-infinite': 'InfiniteCalendar',
    'captcha': 'Captcha',
    'card': 'Card',
    'card-list': 'CardList',
    'chart-wizard': 'ChartWizard',
    'chat': 'Chat',
    'checkbox': 'CheckBox',
    'chip': 'Chip',
    'chip-list': 'ChipList',
    'chunk-progressbar': 'ChunkProgressBar',
    'colorgradient': 'ColorGradient',
    'colorpalette': 'ColorPalette',
    'colorpicker': 'ColorPicker',
    'coloreditor': 'FlatColorPicker',
    'column-menu': 'ColumnMenu',
    'combobox': 'ComboBox',
    'contextmenu': 'ContextMenu',
    'dateinput': 'DateInput',
    'datepicker': 'DatePicker',
    'daterangepicker': 'DateRangePicker',
    'datetime-selector': 'DateTimeSelector',
    'datetimepicker': 'DateTimePicker',
    'dock-manager': 'DockManager',
    'dropdowngrid': 'DropDownGrid',
    'dropdownlist': 'DropDownList',
    'dropdowntree': 'DropDownTree',
    'expansion-panel': 'ExpansionPanel',
    'fab': 'FloatingActionButton',
    'file-box': 'FileBox',
    'filemanager': 'FileManager',
    'flatcolorpicker': 'FlatColorPicker',
    'floatingactionbutton': 'FloatingActionButton',
    'imageeditor': 'ImageEditor',
    'listbox': 'ListBox',
    'listview': 'ListView',
    'loader-container': 'LoaderContainer',
    'maskedtextbox': 'MaskedTextBox',
    'mediaplayer': 'MediaPlayer',
    'menu-button': 'MenuButton',
    'multiselect': 'MultiSelect',
    'multiselecttree': 'MultiSelectTree',
    'multiviewcalendar': 'MultiViewCalendar',
    'numerictextbox': 'NumericTextBox',
    'orgchart': 'OrgChart',
    'otp': 'OneTimePassword',
    'panelbar': 'PanelBar',
    'pdf-viewer': 'PDFViewer',
    'pivotgrid': 'PivotGrid',
    'progressbar': 'ProgressBar',
    'prompt-box': 'PromptBox',
    'propertygrid': 'PropertyGrid',
    'radiobutton': 'RadioButton',
    'radio-group': 'RadioGroup',
    'scrollview': 'ScrollView',
    'segmented-control': 'SegmentedControl',
    'smart-box': 'SmartBox',
    'speech-to-text-button': 'SpeechToTextButton',
    'split-button': 'SplitButton',
    'spreadsheet': 'Spreadsheet',
    'tabstrip': 'TabStrip',
    'taskboard': 'TaskBoard',
    'textbox': 'TextBox',
    'textarea': 'TextArea',
    'tilelayout': 'TileLayout',
    'time-selector': 'TimeSelector',
    'timedurationpicker': 'TimeDurationPicker',
    'timepicker': 'TimePicker',
    'toolbar': 'ToolBar',
    'treelist': 'TreeList',
    'treeview': 'TreeView',
};

// ---------------------------------------------------------------------------
// @see JSDoc parser
// ---------------------------------------------------------------------------

/**
 * Parse `@see ComponentName ariaSpec ...` references from a JSDoc comment.
 *
 * Accepted formats:
 * - `@see Toolbar ariaSpec for grid toolbar accessibility`
 * - `@see List.ariaSpec for popup listbox content`
 * - `@see Card.ariaSpec for card-level rules`
 */
function parseSeeReferences(jsdoc: string): CrossReference[] {
    const refs: CrossReference[] = [];
    const regex = /@see\s+(\w+)(?:\.ariaSpec)?\s+ariaSpec\s*(.*)/gi;
    // Also match `@see ComponentName.ariaSpec for ...`
    const regex2 = /@see\s+(\w+)\.ariaSpec\s*(.*)/gi;

    for (const re of [regex, regex2]) {
        let match: RegExpExecArray | null;
        while ((match = re.exec(jsdoc)) !== null) {
            const targetName = match[1].toLowerCase();
            const label = (match[2] || '').replace(/^for\s+/i, '').trim();
            if (!refs.some((r) => r.targetId === targetName)) {
                refs.push({ targetId: targetName, label });
            }
        }
    }

    return refs;
}

/**
 * Extract the JSDoc block preceding the ariaSpec assignment from source text.
 * Returns `{ description, seeAlso }` or null if no JSDoc block is found.
 *
 * Uses backward search from `.ariaSpec =` to find the nearest JSDoc block
 * block, avoiding false matches with earlier JSDoc comments in the file.
 */
function extractAriaSpecJSDoc(sourceText: string): { description?: string; seeAlso: CrossReference[] } | null {
    const ariaIdx = sourceText.indexOf('.ariaSpec =');
    if (ariaIdx === -1) return null;

    const before = sourceText.substring(0, ariaIdx);
    const endComment = before.lastIndexOf('*/');
    if (endComment === -1) return null;

    // Verify only whitespace + component name between */ and .ariaSpec
    const between = before.substring(endComment + 2);
    if (!/^\s*\n\w+$/.test(between)) return null;

    const startComment = before.lastIndexOf('/**', endComment);
    if (startComment === -1) return null;

    // Ensure no other */ exists between our /** and the endComment
    // (i.e. the block is a single contiguous JSDoc comment)
    const innerBlock = before.substring(startComment + 3, endComment);
    if (innerBlock.includes('*/')) return null;

    const block = innerBlock;

    // Extract description lines (everything that's not @tag)
    const descLines = block
        .split('\n')
        .map((l) => l.replace(/^\s*\*\s?/, '').trim())
        .filter((l) => !l.startsWith('@') && l.length > 0);
    const description = descLines.join('\n').trim() || undefined;

    const seeAlso = parseSeeReferences(block);

    return { description, seeAlso };
}

// ---------------------------------------------------------------------------
// Registry builder
// ---------------------------------------------------------------------------

/**
 * Scan the html package exports and build the component registry.
 *
 * @param exports - The namespace object from `import * as html from '../index'`
 *                  or a pre-collected map of `{ [exportName]: component }`.
 * @param sourceReader - Optional function that returns the source text of a
 *                       component's .spec.tsx file given its folder name.
 *                       Used to extract JSDoc descriptions and @see references.
 *                       When omitted, description and seeAlso will be empty.
 */
export function buildRegistry(
    exports: Record<string, unknown>,
    sourceReader?: (folderName: string, componentVarName: string) => string | null
): Map<string, ComponentMeta> {
    const registry = new Map<string, ComponentMeta>();

    for (const [exportName, value] of Object.entries(exports)) {
        if (typeof value !== 'function' && typeof value !== 'object') continue;
        const comp = value as Record<string, unknown>;
        const ariaSpec = comp.ariaSpec as AriaSpec | undefined;
        if (!ariaSpec?.rules) continue;

        // Derive component id from moduleName / folderName / export name
        const moduleName = (comp.moduleName as string) || null;
        const folderName = (comp.folderName as string) || null;
        const id = (moduleName || folderName || exportName).toLowerCase();

        // Skip if already registered (first export wins)
        if (registry.has(id)) continue;

        const displayName =
            DEFAULT_DISPLAY_NAMES[id] ||
            toPascalCase(id);

        let description: string | undefined;
        let seeAlso: CrossReference[] = [];

        if (sourceReader) {
            const source = sourceReader(folderName || id, exportName);
            if (source) {
                const jsdoc = extractAriaSpecJSDoc(source);
                if (jsdoc) {
                    description = jsdoc.description;
                    seeAlso = jsdoc.seeAlso;
                }
            }
        }

        registry.set(id, {
            id,
            displayName,
            ariaSpec,
            description,
            seeAlso,
        });
    }

    return registry;
}

/**
 * Resolve display name for a component, respecting user overrides.
 */
export function resolveDisplayName(
    id: string,
    nameMap?: Record<string, string>
): string {
    return nameMap?.[id] || DEFAULT_DISPLAY_NAMES[id] || toPascalCase(id);
}

export { DEFAULT_DISPLAY_NAMES };
