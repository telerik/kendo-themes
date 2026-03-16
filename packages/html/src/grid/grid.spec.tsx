import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
export const GRID_CLASSNAME = 'k-grid';

const states = [];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

const GRID_VARIANTS = [] as const;

export type KendoGridOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoGridProps = KendoGridOptions & {
    toolbar?: React.JSX.Element;
    pager?: React.JSX.Element;
    pagerPosition?: 'top' | 'bottom';
    groupingHeader?: React.JSX.Element;
    gridSelectionAggregates?: React.JSX.Element;
    _renderAriaRoot?: boolean;
    resizable?: boolean;
    /** @aria Total number of columns in the grid. */
    ariaColCount?: number;
    /** @aria Total number of rows in the grid (including header/footer). */
    ariaRowCount?: number;
    /** @aria ID for the .k-grid-aria-root element, used by aria-controls on toolbar/grouping header. */
    ariaRootId?: string;
    /** @aria Role for the .k-grid-aria-root element. Defaults to "grid", overridden to "treegrid" for TreeList. */
    ariaRole?: string;
};

const defaultOptions = {
    pagerPosition: 'bottom'
};

export const Grid: KendoComponent<KendoGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
        pagerPosition = defaultOptions.pagerPosition,
        toolbar,
        pager,
        groupingHeader,
        gridSelectionAggregates,
        _renderAriaRoot,
        resizable,
        ariaColCount,
        ariaRowCount,
        ariaRootId,
        ariaRole = 'grid',
        ...other
    } = props;


    return (
        <div
            {...other}
            className={classNames(
                props.className,
                GRID_CLASSNAME,
                {
                    [`${GRID_CLASSNAME}-resizable`]: resizable,
                },
                optionClassNames(GRID_CLASSNAME, { size })
            )}>
            {toolbar}
            {pagerPosition === 'top' && pager}
            {groupingHeader}
            { props.children && _renderAriaRoot ?
                <div className="k-grid-aria-root" role={ariaRole}
                    id={ariaRootId}
                    aria-colcount={ariaColCount}
                    aria-rowcount={ariaRowCount}
                >{props.children}</div> : props.children
            }
            {gridSelectionAggregates}
            {pagerPosition === 'bottom' && pager}
        </div>
    );
};

Grid.states = states;
Grid.options = options;
Grid.variants = GRID_VARIANTS;
Grid.className = GRID_CLASSNAME;
Grid.defaultOptions = defaultOptions;
Grid.moduleName = GRID_MODULE_NAME;
Grid.folderName = GRID_FOLDER_NAME;

/**
 * @ariaSpec
 * The Grid is a composite component that consists of 4 logically separated structural elements:
 * - Toolbar (role=toolbar)
 * - Group header (role=toolbar)
 * - Data Grid (role=grid)
 * - Pager (role=application)
 *
 * The element with role=grid must not include the ToolBar and the Pager elements.
 * When multiple tables compose the grid (separate header/content tables), inner tables
 * get role=none and their children receive explicit roles (rowgroup, row, columnheader, gridcell).
 *
 * @see Toolbar ariaSpec for grid toolbar accessibility
 * @see Pager ariaSpec for grid pager accessibility
 */
Grid.ariaSpec = {
    selector: '.k-grid',
    rules: [
        // ── Grid Toolbar ──
        { selector: '.k-grid-toolbar', attribute: 'role=toolbar', usage: 'The toolbar is a collection of command buttons and inputs.' },
        { selector: '.k-grid-toolbar', attribute: 'aria-label', usage: 'Clarifies the purpose of the toolbar.' },
        { selector: '.k-grid-toolbar', attribute: 'aria-controls=.k-grid-aria-root id (when present)', usage: 'Pointing to the id of the element with role=grid.' },

        // ── Grid Grouping Pane ──
        { selector: '.k-grouping-header', attribute: 'role=toolbar', usage: 'The Grouping pane is a ToolBar (collection of buttons).' },
        { selector: '.k-grouping-header', attribute: 'aria-label', usage: 'Clarifies the purpose of the grouping pane.' },
        { selector: '.k-grouping-header', attribute: 'aria-controls=.k-grid-aria-root id (when present)', usage: 'Pointing to the id of the element with role=grid.' },
        { selector: '.k-grouping-header .k-chip-list', attribute: 'role=none', usage: 'The ChipList default listbox role is removed to keep the toolbar --> button roles hierarchy.' },
        { selector: '.k-grouping-header .k-chip', attribute: 'role=button', usage: 'If the element used is not <button>, then the role must be specified.' },

        // ── Grid Element ──
        { selector: '.k-grid:not(.k-treelist) .k-grid-aria-root', attribute: 'role=grid', usage: 'The role specifies the element is a Data Grid.' },
        { selector: '.k-grid-aria-root', attribute: 'aria-colcount (when present)', usage: 'The total number of columns in the Grid. Needed for Virtual columns and Hidden columns scenarios.' },
        { selector: '.k-grid-aria-root', attribute: 'aria-rowcount (when present)', usage: 'The total number of rows in the table. Needed for Paging, Virtual rows, or Master/Detail rows scenarios.' },

        // ── Grid Header ──
        { selector: '.k-grid-header-wrap>table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-grid-header-wrap>table>thead', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)', attribute: 'aria-rowindex (when present)', usage: 'Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios.' },
        { selector: '.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th:not(.k-hierarchy-cell):not(.k-group-cell):not(.k-drag-cell)', attribute: 'role=columnheader', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th', attribute: 'aria-sort (when present)', usage: 'Present if sorting is enabled for that column.' },
        { selector: '.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th', attribute: 'aria-colindex (when present)', usage: 'Col number. Needed for Virtual columns and Hidden columns scenarios.' },
        { selector: '.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th', attribute: 'aria-haspopup=dialog (when present)', usage: 'Present if the column has a ColumnMenu or FilterMenu.' },

        // ── Grid Filter Row ──
        { selector: '.k-grid-header-wrap>table>thead>tr.k-filter-row>td', attribute: 'role=gridcell', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-header-wrap>table>thead>tr.k-filter-row>td', attribute: 'aria-label', usage: 'Has a label indicating that the cell is part of a filter row.' },

        // ── Grid Content (including Pinned Rows) ──
        // Combined selectors cover both the regular content table and pinned rows table.
        { selector: '.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table, .k-grid-pinned-container .k-grid-table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody, .k-grid-pinned-container tbody', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr, .k-grid-pinned-container tbody tr', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr, .k-grid-pinned-container tbody tr', attribute: 'aria-rowindex (when present)', usage: 'Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios.' },
        { selector: '.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr>td, .k-grid-pinned-container tbody td', attribute: 'role=gridcell', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr>td, .k-grid-pinned-container tbody td', attribute: 'aria-colindex (when present)', usage: 'Col number. Needed for Virtual columns and Hidden columns scenarios.' },
        { selector: 'tr.k-selected', attribute: 'aria-selected=true', usage: 'Set on the currently selected row(s). Applies to both regular and pinned rows.' },
        { selector: 'td.k-selected', attribute: 'aria-selected=true', usage: 'Set on the currently selected cell(s). Only used when selection mode is set to cell.' },
        { selector: '.k-master-row .k-hierarchy-cell, .k-grouping-row>td', attribute: 'aria-expanded', usage: 'For cells holding grouping criteria values and for Master row cells in Detail template scenario.' },
        { selector: '.k-group-cell', attribute: 'role=presentation', usage: 'Group offset cells (header and content) are non-interactive placeholders with no semantic role.' },
        { selector: '.k-drag-cell', attribute: 'aria-label', usage: 'Must be present in a Drag Row scenario on the cell containing the drag handle.' },

        // ── Locked Columns ──
        { selector: '.k-grid-header-locked table tr', attribute: 'aria-owns', usage: 'Locked header rows own cells from the corresponding non-locked header table rows.' },
        { selector: '.k-grid-content-locked table tr', attribute: 'aria-owns', usage: 'Locked content rows own cells from the corresponding non-locked content table rows.' },
        { selector: '.k-grid-lockedcolumns .k-grid-header-wrap table tr', attribute: 'role=none', usage: 'Non-locked header rows have their semantic role removed when locked columns exist.' },
        { selector: '.k-grid-lockedcolumns .k-grid-content table tr', attribute: 'role=none', usage: 'Non-locked content rows have their semantic role removed when locked columns exist.' },
        { selector: '.k-grid-lockedcolumns .k-grid-header-wrap th', attribute: 'role=columnheader', usage: 'Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns.' },
        { selector: '.k-grid-lockedcolumns .k-grid-content td', attribute: 'role=gridcell', usage: 'Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns.' },

        // ── Filter Menu (open) ──
        { selector: '.k-grid-filter-popup', attribute: 'role=dialog', usage: 'The filter menu popup has dialog role.' },
        { selector: '.k-grid-filter-popup', attribute: 'id', usage: 'Unique id linked to the header cell aria-controls attribute.' },
        { selector: '.k-grid-filter-popup', attribute: 'aria-label', usage: 'Descriptive label for the filter menu, e.g. "Column Title Filter Menu".' },

        // ── Column Menu (open) ──
        { selector: '.k-grid-columnmenu-popup', attribute: 'role=dialog', usage: 'The column menu popup has dialog role.' },
        { selector: '.k-grid-columnmenu-popup', attribute: 'id', usage: 'Unique id linked to the header cell aria-controls attribute.' },
        { selector: '.k-grid-columnmenu-popup', attribute: 'aria-label', usage: 'Descriptive label for the column menu, e.g. "Column Title Column Menu".' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'role=button', usage: 'Column menu items have button role.' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'tabindex=0', usage: 'Column menu items are focusable.' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'aria-expanded', usage: 'Expandable column menu items announce their expanded state.' },
        { selector: '.k-grid-columnmenu-popup .k-columnmenu-item', attribute: 'aria-controls', usage: 'Expandable items point to the id of the content they control.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list', attribute: 'role=listbox', usage: 'The column list is a listbox.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list', attribute: 'aria-multiselectable=true', usage: 'The column list supports multiple selections.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list', attribute: 'aria-label', usage: 'Accessible name for the column list.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list-item', attribute: 'role=option', usage: 'Column list items are options.' },
        { selector: '.k-grid-columnmenu-popup .k-column-list-item', attribute: 'aria-checked', usage: 'Column list items announce their checked state.' },

        // ── Grid Footer ──
        { selector: 'tfoot', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: 'tfoot tr', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: 'tfoot tr', attribute: 'aria-rowindex (when present)', usage: 'Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios.' },
        { selector: 'tfoot tr td', attribute: 'role=gridcell', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: 'tfoot tr td', attribute: 'aria-colindex (when present)', usage: 'Col number. Needed for Virtual columns and Hidden columns scenarios.' },

        // ── Selection Aggregates ──
        { selector: '.k-grid-selection-aggregates', attribute: 'aria-live=polite', usage: 'Ensures that changes in the calculated selection aggregates are announced by assistive technologies.' },

        // ── Stacked Layout ──
        { selector: '.k-grid-stack-cell', attribute: 'tabindex=0', usage: 'Stacked cell elements receive tabindex 0 when focus is within their parent .k-grid-stack-row element.' },

        // ── Sticky Group Header / Footer ──
        // When grouping with sticky headers is enabled, the grid renders duplicate
        // group header/footer rows inside .k-grid-sticky-container elements.
        // These are interactive (keyboard-navigable and clickable), so they must
        // carry the same semantics as the real group header/footer rows.
        { selector: '.k-grid-sticky-container', attribute: 'role=none', usage: 'Sticky group container has no semantic role.' },
        { selector: '.k-grid-sticky-container .k-grid-table', attribute: 'role=none', usage: 'Negates the default semantic role of the sticky group <table> element.' },
        { selector: '.k-grid-sticky-container tbody', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-sticky-container tr', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-sticky-container tr', attribute: 'aria-rowindex', usage: 'Matches the aria-rowindex of the real group header/footer row it mirrors.' },
        { selector: '.k-grid-sticky-container td', attribute: 'role=gridcell', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-sticky-container .k-grouping-row>td', attribute: 'aria-expanded', usage: 'Mirrors the expanded/collapsed state of the real group header row.' },
        { selector: '.k-grid-sticky-container td', attribute: 'tabindex', usage: 'Receives tabindex 0 when focused, -1 otherwise, for keyboard navigation.' },
        { selector: '.k-grid-sticky-container td', attribute: 'aria-colindex (when present)', usage: 'Col number. Typically 1 for the group header cell spanning all columns.' },

        // ── Pinned Rows ──
        // Structural table/tbody/tr/td rules are covered by the combined selectors
        // in the Grid Content section above. Only pinned-specific rules remain here.
        { selector: '.k-grid-pinned-container', attribute: 'role=none', usage: 'Container for pinned rows has no semantic role.' },
        { selector: '.k-grid-pinned-container .k-grid-pinned-wrap', attribute: 'role=none', usage: 'Inner wrapper for the pinned rows table has no semantic role.' },
        { selector: '.k-grid-pinned-container tbody', attribute: 'aria-label', usage: 'Describes the purpose of the pinned rows group, e.g. "Top pinned rows" or "Bottom pinned rows".' },

        // Context-menu row pinning — cells announce the context menu for pin/unpin operations.
        // When a dedicated pin column exists, only the pin column cell carries these attributes;
        // when no dedicated column, all cells in both pinned and regular tables carry them.
        { selector: '.k-grid-pinned-container td', attribute: 'aria-haspopup=menu (when present)', usage: 'Pinned row cells announce the context menu for row pinning operations.' },
        { selector: '.k-grid-pinned-container td', attribute: 'aria-controls', usage: 'Points to the ID of the context menu popup for row pinning.' },
        { selector: '.k-grid-pinned-container td', attribute: 'aria-expanded', usage: 'Indicates whether the context menu popup is open.' },
        { selector: '.k-grid-content td', attribute: 'aria-haspopup=menu (when present)', usage: 'Regular data cells announce context menu when row pinning uses contextual mode.' },
        { selector: '.k-grid-content td', attribute: 'aria-controls', usage: 'Points to the ID of the context menu popup for row pinning.' },
        { selector: '.k-grid-content td', attribute: 'aria-expanded', usage: 'Indicates whether the context menu popup is open.' },

        // Pin/unpin icon in dedicated pin column
        { selector: '.k-pin-cell [class*="k-icon"]', attribute: 'aria-hidden=true', usage: 'Pin/unpin icon inside the dedicated column is decorative and must be hidden from assistive technologies.' },
    ]
};

export default Grid;
