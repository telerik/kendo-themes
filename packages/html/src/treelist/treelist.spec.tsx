import { classNames } from '../misc';
import { Grid, KendoGridProps } from '../grid';

import { KendoComponent } from '../_types/component';
import { TREELIST_FOLDER_NAME, TREELIST_MODULE_NAME } from './constants';
const TREELIST_CLASSNAME = 'k-treelist';

const states = [];

const options = {};

const defaultOptions = {};

export const TreeList: KendoComponent<KendoGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <Grid
        {...props}
        ariaRole="treegrid"
        className={classNames(
            TREELIST_CLASSNAME,
            props.className
        )}
    >
        {props.children}
    </Grid>
);

TreeList.states = states;
TreeList.options = options;
TreeList.className = TREELIST_CLASSNAME;
TreeList.defaultOptions = defaultOptions;
TreeList.moduleName = TREELIST_MODULE_NAME;
TreeList.folderName = TREELIST_FOLDER_NAME;

/**
 * @ariaSpec
 * The TreeList is a composite component that consists of 2 logically separated structural elements:
 * - Toolbar (role=toolbar)
 * - Tree Grid (role=treegrid)
 *
 * The element with role=treegrid must not include the ToolBar element.
 * It implements the Grid ARIA specification with treegrid-specific additions.
 *
 * @see ariaSpec below
 */
TreeList.ariaSpec = {
    selector: '.k-treelist',
    rules: [
        // ── TreeList Toolbar ──
        { selector: '.k-grid-toolbar', attribute: 'role=toolbar', usage: 'The toolbar is a collection of command buttons and inputs.' },
        { selector: '.k-grid-toolbar', attribute: 'aria-label', usage: 'Clarifies the purpose of the toolbar.' },
        { selector: '.k-grid-toolbar', attribute: 'aria-controls=.k-grid-aria-root id (when present)', usage: 'Pointing to the id of the element with role=treegrid.' },

        // ── TreeGrid Element ──
        { selector: '.k-treelist .k-grid-aria-root', attribute: 'role=treegrid', usage: 'The role specifies the element is a TreeGrid.' },
        { selector: '.k-grid-aria-root', attribute: 'aria-colcount (when present)', usage: 'The total number of columns.' },
        { selector: '.k-grid-aria-root', attribute: 'aria-rowcount (when present)', usage: 'The total number of rows in the table.' },

        // ── TreeList Header ──
        { selector: '.k-grid-header-wrap>table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-grid-header-wrap>table>thead', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-header-wrap>table>thead>tr', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-header-wrap>table>thead>tr', attribute: 'aria-rowindex (when present)', usage: 'Row number.' },
        { selector: '.k-grid-header-wrap>table>thead>tr>th:not(.k-hierarchy-cell):not(.k-group-cell):not(.k-drag-cell)', attribute: 'role=columnheader', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-header-wrap>table>thead>tr>th', attribute: 'aria-sort (when present)', usage: 'Present if sorting is enabled for that column.' },
        { selector: '.k-grid-header-wrap>table>thead>tr>th', attribute: 'aria-colindex (when present)', usage: 'Col number.' },
        { selector: '.k-grid-header-wrap>table>thead>tr>th', attribute: 'aria-haspopup=dialog (when present)', usage: 'Present if the column has a ColumnMenu or FilterMenu.' },

        // ── TreeList Content ──
        { selector: '.k-grid-content>table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-grid-content>table>tbody', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-content>table>tbody>tr', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-content>table>tbody>tr', attribute: 'aria-rowindex (when present)', usage: 'Row number.' },
        { selector: '.k-grid-content>table>tbody>tr>td', attribute: 'role=gridcell', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-content>table>tbody>tr>td', attribute: 'aria-colindex (when present)', usage: 'Col number.' },

        // ── Selection ──
        { selector: 'tr.k-selected', attribute: 'aria-selected=true', usage: 'Set on the currently selected row(s) in row selection mode. All cells within the selected row also carry aria-selected=true (without k-selected class).' },
        { selector: 'td.k-selected', attribute: 'aria-selected=true', usage: 'Set on the currently selected cell(s) in cell selection mode. The k-selected class on cells is only applied in cell selection mode, but aria-selected=true is present on cells regardless of selection mode.' },

        // ── TreeList-Specific ──
        { selector: '.k-grid-content>table>tbody>tr', attribute: 'aria-expanded (when present)', usage: 'Set on the currently expanded row(s).' },
        { selector: '.k-grid-content>table>tbody>tr td', attribute: 'aria-expanded (when present)', usage: 'The cell containing the expand/collapse toggle also carries aria-expanded matching the row value, as it is the navigable focusable element.' },
        { selector: '.k-treelist-toggle[class*="i-caret-alt-down"],.k-treelist-toggle[class*="i-caret-alt-right"]', attribute: 'aria-hidden=true', usage: 'Removes the expand/collapse icon from the accessibility tree.' },

        // ── Filter Menu (open) ──
        { selector: '.k-grid-filter-popup', attribute: 'role=dialog', usage: 'The filter menu popup has dialog role.' },
        { selector: '.k-grid-filter-popup', attribute: 'id', usage: 'Unique id linked to the header cell aria-controls attribute.' },
        { selector: '.k-grid-filter-popup', attribute: 'aria-label', usage: 'Descriptive label for the filter menu.' },

        // ── Column Menu (open) ──
        { selector: '.k-grid-columnmenu-popup', attribute: 'role=dialog', usage: 'The column menu popup has dialog role.' },
        { selector: '.k-grid-columnmenu-popup', attribute: 'id', usage: 'Unique id linked to the header cell aria-controls attribute.' },
        { selector: '.k-grid-columnmenu-popup', attribute: 'aria-label', usage: 'Descriptive label for the column menu.' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'role=button', usage: 'Column menu items have button role.' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'tabindex=0', usage: 'Column menu items are focusable.' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'aria-expanded (when present)', usage: 'Expandable column menu items announce their expanded state.' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'aria-controls (when present)', usage: 'Expandable items point to the id of the content they control.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list', attribute: 'role=listbox', usage: 'The column list is a listbox.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list', attribute: 'aria-multiselectable=true', usage: 'The column list supports multiple selections.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list', attribute: 'aria-label', usage: 'Accessible name for the column list.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list-item', attribute: 'role=option', usage: 'Column list items are options.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list-item', attribute: 'aria-checked', usage: 'Column list items announce their checked state.' },

        // ── Locked Columns ──
        { selector: '.k-grid-header-locked table tr', attribute: 'aria-owns', usage: 'Locked header rows own cells from the corresponding non-locked header table rows.' },
        { selector: '.k-grid-content-locked table tr', attribute: 'aria-owns', usage: 'Locked content rows own cells from the corresponding non-locked content table rows.' },
        { selector: '.k-grid-lockedcolumns .k-grid-header-wrap table tr', attribute: 'role=none', usage: 'Non-locked header rows have their semantic role removed when locked columns exist.' },
        { selector: '.k-grid-lockedcolumns .k-grid-content table tr', attribute: 'role=none', usage: 'Non-locked content rows have their semantic role removed when locked columns exist.' },
        { selector: '.k-grid-lockedcolumns .k-grid-header-wrap th', attribute: 'role=columnheader', usage: 'Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns.' },
        { selector: '.k-grid-lockedcolumns .k-grid-content td', attribute: 'role=gridcell', usage: 'Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns.' },

        // ── Drag Cell ──
        { selector: '.k-drag-cell', attribute: 'aria-label', usage: 'Must be present in a Drag Row scenario on the cell containing the drag handle.' },
    ]
};

export default TreeList;
