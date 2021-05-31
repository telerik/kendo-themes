---
title: Grid
category: components
slug: grid
position: 21
---
# Grid Keyboard Support

## Managing Focus

- Initial focus - First cell in `Grid`
- Managing focus in the table:
   - Roving TabIndex components Practice for managing the focus: https://www.w3.org/TR/wai-aria-practices/#gridNav - Meaning that going through the cells will update the tabindex of the cell.
   - If the cell contains focusable element - focus it instead of the td.

## Keyboard Shortcuts

**Table**

| Shortcut | Behavior |
|----------|----------|
| `Right Arrow`| Moves focus one cell to the right|
| `Left Arrow`| Moves focus one cell to the left|
| `Down Arrow`| Moves focus one cell down|
| `Up Arrow`| Moves focus one cell up|
| `Page Down` | `GridScrollMode` is configured - scrolls with one page down. `Pageable` - loads next page|
| `Page Up` | `GridScrollMode` is configured - scrolls with one page up. `Pageable` - loads previous page|
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Ctrl/Cmd + Home` | Moves focus to the first cell in the grid. **Note:** pending on https://github.com/w3c/aria-practices/issues/1287 |
| `Ctrl/Cmd + End` | Moves focus to the last cell in the last **loaded** row of the Grid. |
| `Space` | Selects a row ; Second hit on Space should unselect the whole selection*|
| `Ctrl/Cmd + Space` | Selects/Unselects a row (equivalent to Ctrl + Click) |
| `Shift + Space` | Having a row selected and hitting `Shift + Space` on another row should make a range selection between the two rows starting from the upper and ending with the lower |
| `Shift + Up Arrow` | Selects the upper row. `GridSelectionMode.Single` - only upper row is selected. `GridSelectionMode.Multiple` - selection is extended. |
| `Shift + Down Arrow` | Selects the upper row. `GridSelectionMode.Single` - only upper row is selected. `GridSelectionMode.Multiple` - selection is extended. |
| `Enter` | In header cell - Sort is applied. In data cell - EditMode is activated. In hierarchy cell - expands the detail row. If the cell contains a template - focus is handled inside |
| `F2` | In data cell enters edit mode. |

Ctrl Selection Shortcuts will be further implemeneted until introducing Cell Selection, including `Ctrl + A`.

*When using a `CheckboxColumn` this is valid only when `CheckBoxOnlySelection = false`.

**Command Column**

| Shortcut | Behavior |
|----------|----------|
| `Enter`| Moves focus inside the command column. First button is focused. If a button is focused, triggers the button action. |
| `Tab`| Moves focus to the next button in the column. If focus is already on the last button, focus is moved to the next element after the grid.|
| `Shift + Tab`| Moves focus to the previous button in the column. If focus is already on the first button, focus is moved to the element before the grid.|
| `Esc`| If a button is focused, returns focus to the command cell.|

**Inline Edit Row**
Triggering an edit in Inline mode focuses the first editor.

| Shortcut | Behavior |
|----------|----------|
| `Tab`| Moves to the next editor in the row. |
| `Escape`| Cancels the row edit. The focus goes to the command cell from where the popup was opened.|

**Incell Edit Cell**
When editing mode is incell, we have an excel-like navigation. When an editor is opened and focus is inside it, the following key combinations are in use.

| Shortcut | Behavior |
|----------|----------|
| `Tab`| Moves to the next editor in the row (closing current editor). It skips cells with `Editable='false'` and command columns. If focus is already on the last editable cell on the row, focus is moved to the first editable cell on the next row, and it's editor is opened. If we're already on the last row of the grid, focus remains on the cell, with the editor closed. |
| `Shift + Tab`| Moves to the previous editor in the row (closing current editor). It skips cells with `Editable='false'` and command columns. If focus is already on the first editable cell on the row, focus is moved to the last editable cell on the previous row, and it's editor is opened. If we're already on the first row of the grid, focus remains on the cell, with the editor closed. |
| `Enter`| Commits changes for the edited item, and moves focus to the same cell on the row below, opening it for edit.|
| `Escape`| Cancels the edit. The focus goes to the current cell.|

**Popup editor**
Opening the popup editor focuses the first editor.

| Shortcut | Behavior |
|----------|----------|
| `Tab`| Moves to the next editor in the form. |
| `Escape`| Closes the editor. The focus goes to the command cell from where the popup was opened.|
| `Enter`| Triggers a submit action for the editor, including validation.|

**Pager**
To access the pager press `Arrow Down` when focus is on the last row in the grid.

| Shortcut | Behavior |
|----------|----------|
| `Left/Right Arrow` | Moves focus to page buttons|
| `Up Arrow` | Moves focus to first cell of last row in grid|
| `Enter`| Selects the page|

**Note:** After a discussion it was decided that selecting the go to first/last page of the pager will move the focus to the first/last number button in the pager (instead of focusing the first actionable button).

**Header**

| Shortcut | Behavior |
|----------|----------|
| `Left/Right Arrow` | Moves focus to adjacent headers|
| `Down Arrow` | Moves focus to the cell below (either FilterRow cell or content cell)|
| `Enter`| If sorting is enabled toggles next sort mode|

**Filter Row**

| Shortcut | Behavior |
|----------|----------|
| `Arrow Keys`| `td` elements receive focus as standard navigation in grid|
| `Enter`, `Typing` | Enters in the `td`. Meaning that all filter components gain `tabindex=0` |
| `Tab`| Goes through the filter row components. If this is the last filter cell and the last filter component, the focus will go to the next focusable element on the page outside of the grid. |
| `Esc`| Focus goes to the `td` element |

**Filter Menu**

| Shortcut | Behavior |
|----------|----------|
| `Alt + Down Arrow` | When a header cell is focused, pressing `Alt + Down Arrow` will open the filter menu. Note that header cells can't contain arbitrary focusable elements if the Grid is sortable, as the `Enter` key is reserved for sorting. There should be an option to remap the `Enter` key if a user scenario requires focusable elements in the header.
| `Tab` and `Shift + Tab` | Cycles the filter menu fields. |
| `Escape`| Closes the filter menu. Note that if a popup inside the menu is currently opened, `Escape` will close it instead. Pressing `Escape` a second time will close the menu. |

**Multi-checkbox Filter**

| Shortcut | Behavior |
|----------|----------|
| `Tab` | Moves focus between the search input, checkboxes and action buttons. |
| `Space` | Toggles a checkbox (the default behavior). |
| `Enter`| If the focus is on an action button, triggers its action. |
| `Esc`| Closes the menu. |

**Column Menu**

| Shortcut | Behavior |
|----------|----------|
| `Alt + Arrow Down` | When the header cell is focused, opens the column menu. |
| `Arrow Down/Up` | Focuses the next/previous item in the column menu. |
| `Enter`| Activates the focused action in the column menu. |
| `Esc`| Closes the column menu. If the focus is inside a dropdown list or a filter, closes the dropdown. |
| `Tab`| Moves the focus from the parent item to the inner items, and between the elements in the inner items. |

**Group row**

| Shortcut | Behavior |
|----------|----------|
| `Enter`| Toggles the row |
| `ArrowDown/ArrowUp`| Focuses the previous/next group row (if any) or a cell in a content row.|

**Detail Template**
Detail template is accessed through the detail cell.

| Shortcut | Behavior |
|----------|----------|
| `Enter`| Toggles the detail template |
| `Tab`| Focus the first focusable element inside the detail template|
| `Shift + Tab`| Once inside the template, returns focus to the grid (first focusable cell) |

**Toolbar**
As the toolbar inside the grid is currently just an HTML container and users decide which component will be added to it, we decided to provide developers with full control of what will be focused by using the TabIndex parameter of either `TelerikButton` or the grid command button components, so no explicit navigation will be added.

**Note:** Due to the above, navigation to and out of the pager will be possible using the `Tab` key only.

**Checkbox column**

`CheckBoxOnlySelection` is set to `true`

| Shortcut | Behavior |
|----------|----------|
| `Enter`| Focus checkbox|
| `Space`| Toggle checkbox only if it's focused. Toggling the checkbox selects/deselects a row.|
| `Esc`| Returns focus to the cell. |


`CheckBoxOnlySelection` is explicitly set to `false` or not set at all

| Shortcut | Behavior |
|----------|----------|
| `Enter`| Focus checkbox |
| `Space`| Toggle checkbox regardless if it's focused or not. Toggling the checkbox selects/deselects a row.|
| `Esc`| Returns focus to the cell. |


Note: after toggling the checkbox, focus must be returned to the cell in order to navigate to adjacent cells or rows.


## Resources

https://www.w3.org/TR/wai-aria-practices/#grid
https://www.w3.org/TR/wai-aria-practices/examples/grid/dataGrids.html

https://www.telerik.com/kendo-angular-ui/components/grid

The above specification covers most of the angular grid. The improvements beyond the angular's component:

1. FilterMenu Behavior
   - having the haspopup accessible attribute that will give a hint that there is an interaction with the th element
   - handling the tab order after the last filter menu
2. Pager Behavior
   - focusable pager and allowing the users to operate with it
3. Aria-rowindex sequence is consistent and clear: https://github.com/w3c/aria-practices/issues/1275
