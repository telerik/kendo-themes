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
    ariaColCount?: number;
    ariaRowCount?: number;
    ariaRootId?: string;
    ariaRole?: string;
};

const defaultOptions = {
    pagerPosition: 'bottom'
};

/**
 * @aria {aria-label} Descriptive label for the filter menu, e.g. "Column Title Filter Menu".
 * @aria {aria-label} Descriptive label for the column menu, e.g. "Column Title Column Menu".
 * @aria {tabindex="0"} Column menu items are focusable.
 * @aria {aria-expanded} Expandable column menu items announce their expanded state.
 * @aria {aria-controls} Expandable items point to the id of the content they control.
 * @aria {aria-multiselectable="true"} The column list supports multiple selections.
 * @aria {aria-label} Accessible name for the column list.
 * @aria {aria-checked} Column list items announce their checked state.
 * @aria {aria-live="polite"} Ensures that changes in the calculated selection aggregates are announced by assistive technologies.
 * @aria {aria-colcount} Total number of columns; required for virtual/hidden column scenarios.
 * @aria {aria-rowcount} Total number of rows; required for paging/virtual row scenarios.
 * @aria {id} ID for the .k-grid-aria-root element; referenced via aria-controls on toolbar and grouping header.
 * @aria {role="grid"|"treegrid"} Defaults to "grid"; overridden to "treegrid" for TreeList.
 * @ux {Sorting} Clicking a column header sorts data ascending or descending.
 * @ux {Filtering} Filter row inputs or column menu filter forms narrow displayed rows.
 * @ux {Pagination} A pager at the bottom navigates between pages of data.
 * @ux {Row selection} Rows can be selected by clicking; multi-select with Ctrl/Shift.
 * @ux {Column resize} Column widths are adjusted by dragging the column border.
 * @ux {Inline editing} Cells enter edit mode on click or keypress.
 * @ux {Grouping} Rows can be grouped by a column value using drag-and-drop to the group panel.
 */
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
 * @keyboard {ArrowRight} Moves focus one cell to the right (if any)
 * @keyboard {ArrowLeft} Moves focus one cell to the left (if any)
 * @keyboard {ArrowDown} Moves focus one cell down (if any)
 * @keyboard {ArrowUp} Moves focus one cell up (if any)
 * @keyboard {Home} Moves focus to the first cell in the row that contains focus.
 * @keyboard {End} Moves focus to the last cell in the row that contains focus.
 * @keyboard {Control/Cmd(Mac) + Home} Moves focus to the first (top-left) data cell in the grid.
 * @keyboard {Control/Cmd(Mac) + End} Moves focus to the last cell in the last **loaded** row of the Grid.
 * @keyboard {PageDown} Loads and displays the next page of data. If virtual scrolling is used, scrolls down with the number of visible items.
 * @keyboard {PageUp} Loads and displays the previous page of data. If virtual scrolling is used, scrolls up with the number of visible items.
 * @keyboard {Control/Cmd(Mac) + ArrowDown} (Optional) Moves focus 5 rows down (if possible) or to the last row (for faster navigation).
 * @keyboard {Control/Cmd(Mac) + ArrowUp} (Optional) Moves focus 5 rows down (if possible) or to the first row (for faster navigation).
 * @keyboard {Enter} When the grid is in InCell EditMode - EditMode is activated. In hierarchy cell - expands /collapses the detail row. In grouping cell - expands /collapses the group. If the cell contains a focusable elements - focus moves to the first focusable element inside.
 * @keyboard {F2} Puts the Grid in editing mode regardless of the configured type of editing.
 * @keyboard {Delete or Backspace} When the Grid is editable, triggers the default remove action for the respective Grid row.
 * @keyboard {Escape} If editor is opened, cancels the edit and closes the editor. If focus is on an element inside a cell, returns the focus back to the cell.
 * @keyboard {Space} Selects the row holding the currently focused cell.
 * @keyboard {Control + Space or Cmd + Enter(MacOS)} Selects or deselects the current row, while persisting previously selected rows (only for selection mode "multiple").
 * @keyboard {Shift + Space} Performs range selection, selects all the rows between the last selected one (with SPACE or mouse click) and the one holding the focused cell.
 * @keyboard {Shift + ArrowUp} Selects the row above. When multiple selection is enabled, extends the selection to that row.
 * @keyboard {Shift + ArrowDown} Selects the row below. When multiple selection is enabled, extends the selection to that row.
 * @keyboard {Space} Selects the currently focused cell.
 * @keyboard {Control + Space or Cmd + Enter(MacOS)} Selects or deselects the currently focused cell, while persisting previously selected cells (only for selection mode "multiple").
 * @keyboard {Shift + Space} Performs range selection, selects all the cells between the last selected one (with SPACE or mouse click) and the focused cell.
 * @keyboard {Shift + ArrowUp} Selects the cell above. When multiple selection is enabled, extends the selection to that cell.
 * @keyboard {Shift + ArrowDown} Selects the cell below. When multiple selection is enabled, extends the selection to that cell.
 * @keyboard {Shift + ArrowLeft} Selects the cell to the left. When multiple selection is enabled, extends the selection to that cell.
 * @keyboard {Shift + ArrowRight} Selects the cell to the right. When multiple selection is enabled, extends the selection to that cell.
 * @keyboard {Enter} If sorting is enabled, Sort is applied.
 * @keyboard {Alt + ArrowDown} Opens the Column menu / Filter menu and moves focus to that menu.
 * @keyboard {Escape} Closes Filter or Column menu.
 * @keyboard {Control + Space or Cmd + Enter(MacOS)} Group/ungroup the focused column.
 * @keyboard {Control/Cmd(Mac) + ArrowLeft} Reorders the column with the previous one.
 * @keyboard {Control/Cmd(Mac) + ArrowRight} Reorders the column with the next one.
 * @keyboard {Alt/Opt(Mac) + ArrowLeft} Resizes the column (decreases width in LTR, increases width RTL).
 * @keyboard {Alt/Opt(Mac) + ArrowRight} Resizes the column (increases width in LTR, decreases width RTL).
 * @keyboard {Enter} Moves focus inside the command column, and can trap the tab sequence. First button is focused. If a button is focused, triggers the button action.
 * @keyboard {Escape} If a button is focused, returns focus to the command cell.
 * @keyboard {Tab} Moves focus to the next button in the column.
 * @keyboard {Shift + Tab} Moves focus to the previous button in the column.
 * @keyboard {Tab} Moves the focus to the next "stacked cell" ('.k-grid-stack-cell' element). If the focus is on the last such item, the focus does not move further.
 * @keyboard {Shift + Tab} Moves the focus to the previous "stacked cell" ('.k-grid-stack-cell' element). If the focus is on the first such item, the focus does not move further.
 * @keyboard {Enter} If incell editing is enabled, opens the editor for the item.
 * @keyboard {Escape} If the focus is on content item wrapper, returns the focus to the Grid cell ('.k-table-td' element). If the focus is on an element inside a content item (for example cell editor), returns the focus back to the content item.
 * @keyboard {Tab} Moves to the next editor in the row.
 * @keyboard {Escape} Cancels the row edit. The focus goes to the command cell from where the row edit was triggered.
 * @keyboard {Tab} Moves to the next editor in the row (closing current editor). It skips cells with `Editable='false'` and command columns. If focus is already on the last editable cell on the row, focus is moved to the first editable cell on the next row, and it's editor is opened. If we're already on the last row of the grid, focus remains on the cell, with the editor closed.
 * @keyboard {Shift + Tab} Moves to the previous editor in the row (closing current editor). It skips cells with `Editable='false'` and command columns. If focus is already on the first editable cell on the row, focus is moved to the last editable cell on the previous row, and it's editor is opened. If we're already on the first row of the grid, focus remains on the cell, with the editor closed.
 * @keyboard {Enter} Commits changes for the edited item, and moves focus to the same cell on the row below, opening it for edit.
 * @keyboard {Escape} Cancels the edit. The focus goes to the current cell.
 * @keyboard {Tab} Moves to the next editor in the form.
 * @keyboard {Escape} Closes the editor. The focus goes to the command cell from where the popup was opened.
 * @keyboard {Enter} Triggers a submit action for the editor, including validation.
 * @keyboard {Enter} Triggers a submit action for the editor form, including validation.
 * @keyboard {Arrow Keys} `td` elements receive focus as standard navigation in Grid.
 * @keyboard {Enter} Enters in the `td` and focuses the first focusable element in it. All filter row components gain `tabindex=0`. Focus remains trapped inside the filter row.
 * @keyboard {Tab} Goes through the filter row components.
 * @keyboard {Escape} Focus goes to the `td` element wrapping the currently focused filter component.
 * @keyboard {Alt + ArrowDown} Opens the ColumnMenu Popup when focus is on the Grid header cell or on the main column menu button. Focus is trapped and wrapped within the Popup. Focus is trapped within the Popup.
 * @keyboard {Alt + ArrowDown} Opens the FilterMenu Popup when focus is on the Grid header cell or on the main filter menu button (depending on whether the Grid is navigable or not). Focus is trapped and wrapped within the Popup.
 * @keyboard {Tab} Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup.
 * @keyboard {Shift + Tab} Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup.
 * @keyboard {Enter} For button items, executes the currently focused button action.
 * @keyboard {Escape} Closes the FilterMenu Popup and returns focus to the header cell or the main button.
 * @keyboard {Enter or Space} Opens the Filter Tool popup when focus is on the filter button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents.
 * @keyboard {Enter or Space} Opens the Sort Tool popup when focus is on the sort button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents.
 * @keyboard {Enter or Space} Opens the Group Tool popup when focus is on the group button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents.
 * @keyboard {Enter} When focus is on an item, groups the column.
 * @keyboard {ArrowUp} Moves the focused group item one level up in the grouping hierarchy.
 * @keyboard {ArrowDown} Moves the focused group item one level down in the grouping hierarchy.
 * @keyboard {Enter} Removes the focused column from the active groups.
 * @keyboard {Enter} Expands/Collapses the row
 * @keyboard {Enter} Toggles the detail template.
 * @keyboard {ArrowDown} Focuses the detailed cell.
 * @keyboard {Enter} If on detail cell, focus the first focusable element inside the detail template (if any).
 * @keyboard {Escape} Returns the focus to the detail cell.
 * @keyboard {Space} Toggle checkbox. Toggling the checkbox selects/deselects a row.
 * @keyboard {Escape} Returns focus to the cell.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowDown} Reorders the row with the next one when such is present.
 * @keyboard {Control/Cmd(Mac) + Shift + ArrowUp} Reorders the row with the previous one when such is present.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#grid WAI-ARIA specification for grid
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/grid/ ARIA Authoring Practices: Grid Pattern
 * @see https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/dataGrids/ ARIA Authoring Practices: Data Grid
 */

export default Grid;
