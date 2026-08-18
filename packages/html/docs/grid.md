# Grid Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Grid provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Grid is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Grid

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label` | Descriptive label for the filter menu, e.g. "Column Title Filter Menu". |
| `aria-label` | Descriptive label for the column menu, e.g. "Column Title Column Menu". |
| `tabindex="0"` | Column menu items are focusable. |
| `aria-expanded` | Expandable column menu items announce their expanded state. |
| `aria-controls` | Expandable items point to the id of the content they control. |
| `aria-multiselectable="true"` | The column list supports multiple selections. |
| `aria-label` | Accessible name for the column list. |
| `aria-checked` | Column list items announce their checked state. |
| `aria-live="polite"` | Ensures that changes in the calculated selection aggregates are announced by assistive technologies. |
| `aria-colcount` | Total number of columns; required for virtual/hidden column scenarios. |
| `aria-rowcount` | Total number of rows; required for paging/virtual row scenarios. |
| `id` | ID for the .k-grid-aria-root element; referenced via aria-controls on toolbar and grouping header. |
| `role="grid"|"treegrid"` | Defaults to "grid"; overridden to "treegrid" for TreeList. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Moves focus one cell to the right (if any) |
| `ArrowLeft` | Moves focus one cell to the left (if any) |
| `ArrowDown` | Moves focus one cell down (if any) |
| `ArrowUp` | Moves focus one cell up (if any) |
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Control/Cmd(Mac) + Home` | Moves focus to the first (top-left) data cell in the grid. |
| `Control/Cmd(Mac) + End` | Moves focus to the last cell in the last **loaded** row of the Grid. |
| `PageDown` | Loads and displays the next page of data. If virtual scrolling is used, scrolls down with the number of visible items. |
| `PageUp` | Loads and displays the previous page of data. If virtual scrolling is used, scrolls up with the number of visible items. |
| `Control/Cmd(Mac) + ArrowDown` | (Optional) Moves focus 5 rows down (if possible) or to the last row (for faster navigation). |
| `Control/Cmd(Mac) + ArrowUp` | (Optional) Moves focus 5 rows down (if possible) or to the first row (for faster navigation). |
| `Enter` | When the grid is in InCell EditMode - EditMode is activated. In hierarchy cell - expands /collapses the detail row. In grouping cell - expands /collapses the group. If the cell contains a focusable elements - focus moves to the first focusable element inside. |
| `F2` | Puts the Grid in editing mode regardless of the configured type of editing. |
| `Delete or Backspace` | When the Grid is editable, triggers the default remove action for the respective Grid row. |
| `Escape` | If editor is opened, cancels the edit and closes the editor. If focus is on an element inside a cell, returns the focus back to the cell. |
| `Space` | Selects the row holding the currently focused cell. |
| `Control + Space or Cmd + Enter(MacOS)` | Selects or deselects the current row, while persisting previously selected rows (only for selection mode "multiple"). |
| `Shift + Space` | Performs range selection, selects all the rows between the last selected one (with SPACE or mouse click) and the one holding the focused cell. |
| `Shift + ArrowUp` | Selects the row above. When multiple selection is enabled, extends the selection to that row. |
| `Shift + ArrowDown` | Selects the row below. When multiple selection is enabled, extends the selection to that row. |
| `Space` | Selects the currently focused cell. |
| `Control + Space or Cmd + Enter(MacOS)` | Selects or deselects the currently focused cell, while persisting previously selected cells (only for selection mode "multiple"). |
| `Shift + Space` | Performs range selection, selects all the cells between the last selected one (with SPACE or mouse click) and the focused cell. |
| `Shift + ArrowUp` | Selects the cell above. When multiple selection is enabled, extends the selection to that cell. |
| `Shift + ArrowDown` | Selects the cell below. When multiple selection is enabled, extends the selection to that cell. |
| `Shift + ArrowLeft` | Selects the cell to the left. When multiple selection is enabled, extends the selection to that cell. |
| `Shift + ArrowRight` | Selects the cell to the right. When multiple selection is enabled, extends the selection to that cell. |
| `Enter` | If sorting is enabled, Sort is applied. |
| `Alt + ArrowDown` | Opens the Column menu / Filter menu and moves focus to that menu. |
| `Escape` | Closes Filter or Column menu. |
| `Control + Space or Cmd + Enter(MacOS)` | Group/ungroup the focused column. |
| `Control/Cmd(Mac) + ArrowLeft` | Reorders the column with the previous one. |
| `Control/Cmd(Mac) + ArrowRight` | Reorders the column with the next one. |
| `Alt/Opt(Mac) + ArrowLeft` | Resizes the column (decreases width in LTR, increases width RTL). |
| `Alt/Opt(Mac) + ArrowRight` | Resizes the column (increases width in LTR, decreases width RTL). |
| `Enter` | Moves focus inside the command column, and can trap the tab sequence. First button is focused. If a button is focused, triggers the button action. |
| `Escape` | If a button is focused, returns focus to the command cell. |
| `Tab` | Moves focus to the next button in the column. |
| `Shift + Tab` | Moves focus to the previous button in the column. |
| `Tab` | Moves the focus to the next "stacked cell" ('.k-grid-stack-cell' element). If the focus is on the last such item, the focus does not move further. |
| `Shift + Tab` | Moves the focus to the previous "stacked cell" ('.k-grid-stack-cell' element). If the focus is on the first such item, the focus does not move further. |
| `Enter` | If incell editing is enabled, opens the editor for the item. |
| `Escape` | If the focus is on content item wrapper, returns the focus to the Grid cell ('.k-table-td' element). If the focus is on an element inside a content item (for example cell editor), returns the focus back to the content item. |
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
| `Escape` | Focus goes to the `td` element wrapping the currently focused filter component. |
| `Alt + ArrowDown` | Opens the ColumnMenu Popup when focus is on the Grid header cell or on the main column menu button. Focus is trapped and wrapped within the Popup. Focus is trapped within the Popup. |
| `Alt + ArrowDown` | Opens the FilterMenu Popup when focus is on the Grid header cell or on the main filter menu button (depending on whether the Grid is navigable or not). Focus is trapped and wrapped within the Popup. |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift + Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For button items, executes the currently focused button action. |
| `Escape` | Closes the FilterMenu Popup and returns focus to the header cell or the main button. |
| `Enter or Space` | Opens the Filter Tool popup when focus is on the filter button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents. |
| `Enter or Space` | Opens the Sort Tool popup when focus is on the sort button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents. |
| `Enter or Space` | Opens the Group Tool popup when focus is on the group button in the toolbar. Focus is moved to the first item in the popup and is trapped within the popup contents. |
| `Enter` | When focus is on an item, groups the column. |
| `ArrowUp` | Moves the focused group item one level up in the grouping hierarchy. |
| `ArrowDown` | Moves the focused group item one level down in the grouping hierarchy. |
| `Enter` | Removes the focused column from the active groups. |
| `Enter` | Expands/Collapses the row |
| `Enter` | Toggles the detail template. |
| `ArrowDown` | Focuses the detailed cell. |
| `Enter` | If on detail cell, focus the first focusable element inside the detail template (if any). |
| `Escape` | Returns the focus to the detail cell. |
| `Space` | Toggle checkbox. Toggling the checkbox selects/deselects a row. |
| `Escape` | Returns focus to the cell. |
| `Control/Cmd(Mac) + Shift + ArrowDown` | Reorders the row with the next one when such is present. |
| `Control/Cmd(Mac) + Shift + ArrowUp` | Reorders the row with the previous one when such is present. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Sorting | Clicking a column header sorts data ascending or descending. |
| Filtering | Filter row inputs or column menu filter forms narrow displayed rows. |
| Pagination | A pager at the bottom navigates between pages of data. |
| Row selection | Rows can be selected by clicking; multi-select with Ctrl/Shift. |
| Column resize | Column widths are adjusted by dragging the column border. |
| Inline editing | Cells enter edit mode on click or keypress. |
| Grouping | Rows can be grouped by a column value using drag-and-drop to the group panel. |

### GridContainer

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-selected="true"` | Set on the currently selected row(s) in row selection mode. All cells within the selected row also carry aria-selected=true (without k-selected class). Applies to both regular and pinned rows. |
| `aria-selected="true"` | Set on the currently selected cell(s) in cell selection mode. The k-selected class on cells is only applied in cell selection mode, but aria-selected=true is present on cells regardless of selection mode. |
| `aria-expanded` | For cells holding grouping criteria values and for Master row cells in Detail template scenario. |
| `role="presentation"` | Group offset cells (header and content) are non-interactive placeholders with no semantic role. |
| `aria-label` | Must be present in a Drag Row scenario on the cell containing the drag handle. |
| `role="rowgroup"` | Required as the owner `<table>` element has its semantic role removed. |
| `role="row"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-rowindex` | Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios. |
| `role="gridcell"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-colindex` | Col number. Needed for Virtual columns and Hidden columns scenarios. |
| `aria-hidden="true"` | Pin/unpin icon inside the dedicated column is decorative and must be hidden from assistive technologies. |

### GridContent

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-owns` | Locked content rows own cells from the corresponding non-locked content table rows. Group header rows are excluded because the non-locked group header rows are presentational. |
| `role="none"` | Non-locked content rows have their semantic role removed when locked columns exist. |
| `role="gridcell"` | Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns. Cells inside group header rows are excluded as those rows are presentational. |
| `aria-haspopup="menu"` | Regular data cells announce context menu when row pinning uses contextual mode. |
| `aria-controls` | Points to the ID of the context menu popup for row pinning. |
| `aria-expanded` | Indicates whether the context menu popup is open. |

### GridGroupingHeader

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="toolbar"` | The Grouping pane is a ToolBar (collection of buttons). |
| `aria-label` | Clarifies the purpose of the grouping pane. |
| `aria-controls=".k-grid-aria-root id"` | Pointing to the id of the element with role=grid. |
| `role="none"` | The ChipList default listbox role is removed to keep the toolbar --> button roles hierarchy. |
| `role="button"` | If the element used is not `<button>`, then the role must be specified. |

### GridHeader

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="none"` | Negates the default semantic role of the `<table>` element. |
| `role="rowgroup"` | Required as the owner `<table>` element has its semantic role removed. |
| `role="row"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-rowindex` | Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios. |
| `role="columnheader"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-sort` | Present if sorting is enabled for that column. |
| `aria-colindex` | Col number. Needed for Virtual columns and Hidden columns scenarios. |
| `aria-haspopup="dialog"` | Present if the column has a ColumnMenu or FilterMenu. |
| `role="gridcell"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-label` | Has a label indicating that the cell is part of a filter row. |
| `aria-owns` | Locked header rows own cells from the corresponding non-locked header table rows. |
| `role="none"` | Non-locked header rows have their semantic role removed when locked columns exist. |
| `role="columnheader"` | Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns. |

### GridHeaderCell

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `active` | `k-active` |

These CSS classes are applied to the `k-header` element.

### GridPinnedContainer

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="none"` | Negates the default semantic role of the `<table>` element. |
| `role="rowgroup"` | Required as the owner `<table>` element has its semantic role removed. |
| `role="row"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-rowindex` | Row number. Needed for Paging, Virtual rows, or Master/Detail rows scenarios. |
| `role="gridcell"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-colindex` | Col number. Needed for Virtual columns and Hidden columns scenarios. |
| `role="none"` | Container for pinned rows has no semantic role. |
| `role="none"` | Inner wrapper for the pinned rows table has no semantic role. |
| `aria-label` | Describes the purpose of the pinned rows group, e.g. "Top pinned rows" or "Bottom pinned rows". |
| `aria-haspopup="menu"` | Pinned row cells announce the context menu for row pinning operations. |
| `aria-controls` | Points to the ID of the context menu popup for row pinning. |
| `aria-expanded` | Indicates whether the context menu popup is open. |

### GridStackCell

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |
| `selected` | `k-selected` |

These CSS classes are applied to the `k-grid-stack-cell` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `tabindex="0"` | Stacked cell elements receive tabindex 0 when focus is within their parent .k-grid-stack-row element. |

### GridStickyContainer

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="none"` | Sticky group container has no semantic role. |
| `role="none"` | Negates the default semantic role of the sticky group `<table>` element. |
| `role="rowgroup"` | Required as the owner `<table>` element has its semantic role removed. |
| `role="row"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-rowindex` | Matches the aria-rowindex of the real group header/footer row it mirrors. |
| `role="gridcell"` | Required as the owner `<table>` element has its semantic role removed. Group offset cells are excluded as they retain role=presentation. |
| `aria-expanded` | Mirrors the expanded/collapsed state of the real group header row. |
| `tabindex` | Receives tabindex 0 when focused, -1 otherwise, for keyboard navigation. Group offset cells are excluded as they are presentational. |
| `aria-colindex` | Col number. Typically 1 for the group header cell spanning all columns. |

### GridToolbar

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="toolbar"` | The toolbar is a collection of command buttons and inputs. |
| `aria-label` | Clarifies the purpose of the toolbar. |
| `aria-controls=".k-grid-aria-root id"` | Pointing to the id of the element with role=grid. |

### Testing

The Grid has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Grid has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for grid](https://www.w3.org/TR/wai-aria-1.2/#grid)
- [ARIA Authoring Practices: Grid Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/)
- [ARIA Authoring Practices: Data Grid](https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/dataGrids/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/grid/`](https://github.com/telerik/kendo-themes/tree/develop/tests/grid/).
