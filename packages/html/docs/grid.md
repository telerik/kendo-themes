# Grid Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Grid component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-grid-toolbar` | `role=toolbar` | The toolbar is a collection of command buttons and inputs. |
| `.k-grid-toolbar` | `aria-label` | Clarifies the purpose of the toolbar. |
| `.k-grid-toolbar` | `aria-controls=.k-grid-aria-root id (when present)` | Pointing to the id of the element with role=grid. |
| `.k-grouping-header` | `role=toolbar` | The Grouping pane is a ToolBar (collection of buttons). |
| `.k-grouping-header` | `aria-label` | Clarifies the purpose of the grouping pane. |
| `.k-grouping-header` | `aria-controls=.k-grid-aria-root id (when present)` | Pointing to the id of the element with role=grid. |
| `.k-grouping-header .k-chip-list` | `role=none` | The ChipList default listbox role is removed to keep the toolbar --> button roles hierarchy. |
| `.k-grouping-header .k-chip` | `role=button` | If the element used is not <button>, then the role must be specified. |
| `.k-grid:not(.k-treelist) .k-grid-aria-root` | `role=grid` | The role specifies the element is a Data Grid. |
| `.k-grid-aria-root` | `aria-colcount (when present)` | The total number of columns in the Grid. Needed for Virtual columns and Hidden columns scenarios. |
| `.k-grid-aria-root` | `aria-rowcount (when present)` | The total number of rows in the table. Needed for Paging, Virtual rows, or Master/Detail rows scenarios. |
| `.k-grid-header-wrap>table` | `role=none` | Negates the default semantic role of the <table> element. |
| `.k-grid-header-wrap>table>thead` | `role=rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)` | `role=row` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)` | `aria-rowindex (when present)` | Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios. |
| `.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th:not(.k-hierarchy-cell):not(.k-group-cell):not(.k-drag-cell)` | `role=columnheader` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th` | `aria-sort (when present)` | Present if sorting is enabled for that column. |
| `.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th` | `aria-colindex (when present)` | Col number. Needed for Virtual columns and Hidden columns scenarios. |
| `.k-grid-header-wrap>table>thead>tr:not(.k-filter-row)>th` | `aria-haspopup=dialog (when present)` | Present if the column has a ColumnMenu or FilterMenu. |
| `.k-grid-header-wrap>table>thead>tr.k-filter-row>td` | `role=gridcell` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-header-wrap>table>thead>tr.k-filter-row>td` | `aria-label` | Has a label indicating that the cell is part of a filter row. |
| `.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table, .k-grid-pinned-container .k-grid-table` | `role=none` | Negates the default semantic role of the <table> element. |
| `.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody, .k-grid-pinned-container tbody` | `role=rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr, .k-grid-pinned-container tbody tr` | `role=row` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr, .k-grid-pinned-container tbody tr` | `aria-rowindex (when present)` | Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios. |
| `.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr>td, .k-grid-pinned-container tbody td` | `role=gridcell` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid:not(.k-grid-lockedcolumns) .k-grid-content>table>tbody>tr>td, .k-grid-pinned-container tbody td` | `aria-colindex (when present)` | Col number. Needed for Virtual columns and Hidden columns scenarios. |
| `tr.k-selected` | `aria-selected=true` | Set on the currently selected row(s) in row selection mode. All cells within the selected row also carry aria-selected=true (without k-selected class). Applies to both regular and pinned rows. |
| `td.k-selected` | `aria-selected=true` | Set on the currently selected cell(s) in cell selection mode. The k-selected class on cells is only applied in cell selection mode, but aria-selected=true is present on cells regardless of selection mode. |
| `.k-master-row .k-hierarchy-cell, .k-grouping-row>td` | `aria-expanded` | For cells holding grouping criteria values and for Master row cells in Detail template scenario. |
| `.k-group-cell` | `role=presentation` | Group offset cells (header and content) are non-interactive placeholders with no semantic role. |
| `.k-drag-cell` | `aria-label` | Must be present in a Drag Row scenario on the cell containing the drag handle. |
| `.k-grid-header-locked table tr` | `aria-owns` | Locked header rows own cells from the corresponding non-locked header table rows. |
| `.k-grid-content-locked table tr:not(.k-grouping-row)` | `aria-owns` | Locked content rows own cells from the corresponding non-locked content table rows. Group header rows are excluded because the non-locked group header rows are presentational. |
| `.k-grid-lockedcolumns .k-grid-header .k-grid-header-wrap table tr` | `role=none` | Non-locked header rows have their semantic role removed when locked columns exist. |
| `.k-grid-lockedcolumns .k-grid-content table tr` | `role=none` | Non-locked content rows have their semantic role removed when locked columns exist. |
| `.k-grid-lockedcolumns .k-grid-header .k-grid-header-wrap th` | `role=columnheader` | Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns. |
| `.k-grid-lockedcolumns .k-grid-content td:not(.k-grouping-row td)` | `role=gridcell` | Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns. Cells inside group header rows are excluded as those rows are presentational. |
| `.k-grid-filter-popup` | `role=dialog` | The filter menu popup has dialog role. |
| `.k-grid-filter-popup` | `id` | Unique id linked to the header cell aria-controls attribute. |
| `.k-grid-filter-popup` | `aria-label` | Descriptive label for the filter menu, e.g. "Column Title Filter Menu". |
| `.k-grid-columnmenu-popup` | `role=dialog` | The column menu popup has dialog role. |
| `.k-grid-columnmenu-popup` | `id` | Unique id linked to the header cell aria-controls attribute. |
| `.k-grid-columnmenu-popup` | `aria-label` | Descriptive label for the column menu, e.g. "Column Title Column Menu". |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `role=button` | Column menu items have button role. |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `tabindex=0` | Column menu items are focusable. |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `aria-expanded` | Expandable column menu items announce their expanded state. |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `aria-controls` | Expandable items point to the id of the content they control. |
| `.k-grid-columnmenu-popup .k-column-list` | `role=listbox` | The column list is a listbox. |
| `.k-grid-columnmenu-popup .k-column-list` | `aria-multiselectable=true` | The column list supports multiple selections. |
| `.k-grid-columnmenu-popup .k-column-list` | `aria-label` | Accessible name for the column list. |
| `.k-grid-columnmenu-popup .k-column-list-item` | `role=option` | Column list items are options. |
| `.k-grid-columnmenu-popup .k-column-list-item` | `aria-checked` | Column list items announce their checked state. |
| `tfoot` | `role=rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `tfoot tr` | `role=row` | Required as the owner <table> element has its semantic role removed. |
| `tfoot tr` | `aria-rowindex (when present)` | Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios. |
| `tfoot tr td` | `role=gridcell` | Required as the owner <table> element has its semantic role removed. |
| `tfoot tr td` | `aria-colindex (when present)` | Col number. Needed for Virtual columns and Hidden columns scenarios. |
| `.k-grid-selection-aggregates` | `aria-live=polite` | Ensures that changes in the calculated selection aggregates are announced by assistive technologies. |
| `.k-grid-stack-cell` | `tabindex=0` | Stacked cell elements receive tabindex 0 when focus is within their parent .k-grid-stack-row element. |
| `.k-grid-sticky-container` | `role=none` | Sticky group container has no semantic role. |
| `.k-grid-sticky-container .k-grid-table` | `role=none` | Negates the default semantic role of the sticky group <table> element. |
| `.k-grid-sticky-container tbody` | `role=rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-sticky-container tr` | `role=row` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-sticky-container tr` | `aria-rowindex` | Matches the aria-rowindex of the real group header/footer row it mirrors. |
| `.k-grid-sticky-container td:not(.k-group-cell)` | `role=gridcell` | Required as the owner <table> element has its semantic role removed. Group offset cells are excluded as they retain role=presentation. |
| `.k-grid-sticky-container .k-grouping-row>td` | `aria-expanded` | Mirrors the expanded/collapsed state of the real group header row. |
| `.k-grid-sticky-container td:not(.k-group-cell)` | `tabindex` | Receives tabindex 0 when focused, -1 otherwise, for keyboard navigation. Group offset cells are excluded as they are presentational. |
| `.k-grid-sticky-container td` | `aria-colindex (when present)` | Col number. Typically 1 for the group header cell spanning all columns. |
| `.k-grid-pinned-container` | `role=none` | Container for pinned rows has no semantic role. |
| `.k-grid-pinned-container .k-grid-pinned-wrap` | `role=none` | Inner wrapper for the pinned rows table has no semantic role. |
| `.k-grid-pinned-container tbody` | `aria-label` | Describes the purpose of the pinned rows group, e.g. "Top pinned rows" or "Bottom pinned rows". |
| `.k-grid-pinned-container td` | `aria-haspopup=menu (when present)` | Pinned row cells announce the context menu for row pinning operations. |
| `.k-grid-pinned-container td` | `aria-controls` | Points to the ID of the context menu popup for row pinning. |
| `.k-grid-pinned-container td` | `aria-expanded` | Indicates whether the context menu popup is open. |
| `.k-grid-content td` | `aria-haspopup=menu (when present)` | Regular data cells announce context menu when row pinning uses contextual mode. |
| `.k-grid-content td` | `aria-controls` | Points to the ID of the context menu popup for row pinning. |
| `.k-grid-content td` | `aria-expanded` | Indicates whether the context menu popup is open. |
| `.k-pin-cell [class*="k-icon"]` | `aria-hidden=true` | Pin/unpin icon inside the dedicated column is decorative and must be hidden from assistive technologies. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Grid component:

| Shortcut | Behavior |
| --- | --- |
| `Right Arrow` | Moves focus one cell to the right (if any) |
| `Left Arrow` | Moves focus one cell to the left (if any) |
| `Down Arrow` | Moves focus one cell down (if any) |
| `Up Arrow` | Moves focus one cell up (if any) |
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Ctrl/Cmd(Mac) + Home` | Moves focus to the first (top-left) data cell in the grid. |
| `Ctrl/Cmd(Mac) + End` | Moves focus to the last cell in the last **loaded** row of the Grid. |
| `Page Down` | Loads and displays the next page of data. If virtual scrolling is used, scrolls down with the number of visible items. |
| `Page Up` | Loads and displays the previous page of data. If virtual scrolling is used, scrolls up with the number of visible items. |
| `Ctrl/Cmd(MacOS) + Down Arrow` | (Optional) Moves focus 5 rows down (if possible) or to the last row (for faster navigation). |
| `Ctrl/Cmd(MacOS) + Up Arrow` | (Optional) Moves focus 5 rows down (if possible) or to the first row (for faster navigation). |
| `Enter` | When the grid is in InCell EditMode - EditMode is activated. In hierarchy cell - expands /collapses the detail row. In grouping cell - expands /collapses the group. If the cell contains a focusable elements - focus moves to the first focusable element inside. |
| `F2` | Puts the Grid in editing mode regardless of the configured type of editing. |
| `Delete or Backspace` | When the Grid is editable, triggers the default remove action for the respective Grid row. |
| `Esc` | If editor is opened, cancels the edit and closes the editor. If focus is on an element inside a cell, returns the focus back to the cell. |
| `Space` | Selects the row holding the currently focused cell. |
| `Ctrl + Space or Cmd + Enter(MacOS)` | Selects or deselects the current row, while persisting previously selected rows (only for selection mode "multiple"). |
| `Shift + Space` | Performs range selection, selects all the rows between the last selected one (with SPACE or mouse click) and the one holding the focused cell. |
| `Shift + Up Arrow` | Selects the row above. When multiple selection is enabled, extends the selection to that row. |
| `Shift + Down Arrow` | Selects the row below. When multiple selection is enabled, extends the selection to that row. |
| `Space` | Selects the currently focused cell. |
| `Ctrl + Space or Cmd + Enter(MacOS)` | Selects or deselects the currently focused cell, while persisting previously selected cells (only for selection mode "multiple"). |
| `Shift + Space` | Performs range selection, selects all the cells between the last selected one (with SPACE or mouse click) and the focused cell. |
| `Shift + Up Arrow` | Selects the cell above. When multiple selection is enabled, extends the selection to that cell. |
| `Shift + Down Arrow` | Selects the cell below. When multiple selection is enabled, extends the selection to that cell. |
| `Shift + Left Arrow` | Selects the cell to the left. When multiple selection is enabled, extends the selection to that cell. |
| `Shift + Right Arrow` | Selects the cell to the right. When multiple selection is enabled, extends the selection to that cell. |
| `Enter` | If sorting is enabled, Sort is applied. |
| `Alt + Down` | Opens the Column menu / Filter menu and moves focus to that menu. |
| `Esc` | Closes Filter or Column menu. |
| `Ctrl + Space or Cmd + Enter(MacOS)` | Group/ungroup the focused column. |
| `Ctrl/Cmd(Mac) + Left Arrow` | Reorders the column with the previous one. |
| `Ctrl/Cmd(Mac) + Right Arrow` | Reorders the column with the next one. |
| `Alt/Option(Mac) + Left Arrow` | Resizes the column (decreases width in LTR, increases width RTL). |
| `Alt/Option(Mac) + Right Arrow` | Resizes the column (increases width in LTR, decreases width RTL). |
| `Enter` | Moves focus inside the command column, and can trap the tab sequence. First button is focused. If a button is focused, triggers the button action. |
| `Esc` | If a button is focused, returns focus to the command cell. |
| `Tab` | Moves focus to the next button in the column. |
| `Shift + Tab` | Moves focus to the previous button in the column. |
| `Tab` | Moves the focus to the next "stacked cell" ('.k-grid-stack-cell' element). If the focus is on the last such item, the focus does not move further. |
| `Shift + Tab` | Moves the focus to the previous "stacked cell" ('.k-grid-stack-cell' element). If the focus is on the first such item, the focus does not move further. |
| `Enter` | If incell editing is enabled, opens the editor for the item. |
| `Esc` | If the focus is on content item wrapper, returns the focus to the Grid cell ('.k-table-td' element). If the focus is on an element inside a content item (for example cell editor), returns the focus back to the content item. |
| `Tab` | Moves to the next editor in the row. |
| `Escape` | Cancels the row edit. The focus goes to the command cell from where the row edit was triggered. |
| `Tab` | Moves to the next editor in the row (closing current editor). It skips cells with `Editable='false'` and command columns. If focus is already on the last editable cell on the row, focus is moved to the first editable cell on the next row, and it's editor is opened. If we're already on the last row of the grid, focus remains on the cell, with the editor closed. |
| `Shift + Tab` | Moves to the previous editor in the row (closing current editor). It skips cells with `Editable='false'` and command columns. If focus is already on the first editable cell on the row, focus is moved to the last editable cell on the previous row, and it's editor is opened. If we're already on the first row of the grid, focus remains on the cell, with the editor closed. |
| `Enter` | Commits changes for the edited item, and moves focus to the same cell on the row below, opening it for edit. |
| `Escape` | Cancels the edit. The focus goes to the current cell. |
| `Tab` | Moves to the next editor in the form. |
| `Escape` | Closes the editor. The focus goes to the command cell from where the popup was opened. |
| `Enter` | Triggers a submit action for the editor, including validation. |
| `Enter` | Triggers a submit action for the editor form, including validation. |
| `Arrow Keys` | `td` elements receive focus as standard navigation in Grid. |
| `Enter` | Enters in the `td` and focuses the first focusable element in it. All filter row components gain `tabindex=0`. Focus remains trapped inside the filter row. |
| `Tab` | Goes through the filter row components. |
| `Esc` | Focus goes to the `td` element wrapping the currently focused filter component. |
| `Alt + Down Arrow` | Opens the ColumnMenu Popup when focus is on the Grid header cell or on the main column menu button. Focus is trapped and wrapped within the Popup. Focus is trapped within the Popup. |
| `Alt + Down Arrow` | Opens the FilterMenu Popup when focus is on the Grid header cell or on the main filter menu button (depending on whether the Grid is navigable or not). Focus is trapped and wrapped within the Popup. |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift + Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For button items, executes the currently focused button action. |
| `Escape` | Closes the FilterMenu Popup and returns focus to the header cell or the main button. |
| `Enter or Space` | Opens the Filter Tool popup when focus is on the filter button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents. |
| `Enter or Space` | Opens the Sort Tool popup when focus is on the sort button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents. |
| `Enter or Space` | Opens the Group Tool popup when focus is on the group button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents. |
| `Enter` | When focus is on an item, groups the column. |
| `Up Arrow` | Moves the focused group item one level up in the grouping hierarchy. |
| `Down Arrow` | Moves the focused group item one level down in the grouping hierarchy. |
| `Enter` | Removes the focused column from the active groups. |
| `Enter` | Expands/Collapses the row |
| `Enter` | Toggles the detail template. |
| `Arrow Down` | Focuses the detailed cell. |
| `Enter` | If on detail cell, focus the first focusable element inside the detail template (if any). |
| `Esc` | Returns the focus to the detail cell. |
| `Space` | Toggle checkbox. Toggling the checkbox selects/deselects a row. |
| `Esc` | Returns focus to the cell. |
| `Ctrl/Cmd(MacOS) + Shift + Down Arrow` | Reorders the row with the next one when such is present. |
| `Ctrl/Cmd(MacOS) + Shift + Up Arrow` | Reorders the row with the previous one when such is present. |
