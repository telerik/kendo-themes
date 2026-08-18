# Spreadsheet Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Spreadsheet provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Spreadsheet is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Spreadsheet

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="application"` | Indicates the Spreadsheets\' role as an application. |
| `role="combobox"` | Follows ComboBox spec: identifies the input as a combobox. |
| `role="combobox"` | The focusable element of the component should have role combobox (an input with popup). |
| `aria-haspopup="menu"` | Specifies that the formula input opens a popup. |
| `aria-controls=".k-spreadsheet-formula-list id"` | Points to the formulas list with role menu. Signifies that the formula input element controls the popup. |
| `aria-expanded="true"|\"false"` | Announces the state of the popup visibility. |
| `title` | The Formula input must have a title specifying its purpose. |
| `id` | Unique and deterministic id linked to the aria-controls attribute of the corresponding formula input. |
| `role="menu"` | Announces the menu role of the popup. |
| `role="menuitem"` | Announces the menuitem role of the popup items. |
| `role="button"` | The add new sheet element is a button. |
| `aria-label|title` | The add new sheet element must have a label as it does not have text content. |
| `aria-controls=".k-tabstrip-items id"` | Points to the ul element of the TabStrip that contains all tabs. |
| `role="button"` | Follows DropDownButton spec: omitted if the button DOM element is used. |
| `aria-label|title` | Follows DropDownButton spec: required when no text is visible. |
| `role="tablist"` | Follows TabStrip spec: indicates the tablist role for the ul element. |
| `role="tab"` | Follows TabStrip spec: the tab li element. |
| `aria-label|title` | Follows DropDownButton spec: required when no text is visible in the tab menu button. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Control + C` | Copies the selected cells (range). |
| `Control + V` | Inserts copied or cut cells to a selected location within the worksheet. |
| `Control + X` | Cuts the selected cells (range). |
| `Control + Y` | Repeats the last action if possible by using the Redo command. |
| `Control + Z` | Reverses the last action if possible by using the Undo command. |
| `Delete` | In the Formula bar, deletes the character to the right of the insertion point from the formula text. In cell selection mode, removes the content from selected cells without affecting cell formats. In cell editing mode, deletes the character to the right of the insertion point. |
| `Backspace` | In the Formula bar, deletes one character to the left from the formula text. In cell selection mode, removes the content of the active cell. In cell editing mode, deletes the character to the left of the insertion point. |
| `Control + select a cell` | Selects an adjacent or non adjacent cell. |
| `Control + select cells` | Selects a range of adjacent or non adjacent. |
| `Control + A` | Selects the whole worksheet. |
| `Control + select a row or column` | Selects an adjacent or nonadjacent row or column. |
| `Control + select rows or columns` | Selects a range of adjacent or non adjacent rows or columns. |
| `Shift + Arrow Key` | Selects a range of adjacent cells, rows or columns by extending the selection by one cell, row or column. |
| `Control + Shift + Arrow Key` | Extends the selection of cells to the last cell of the current series of data. If there is another set of data afterwards, the cell selection will be extended to the first cell of the new series of data. Otherwise, the cell selection will be extended to the last cell of the worksheet in the corresponding direction. |
| `ArrowDown or ArrowUp` | In a menu or submenu, selects the next or previous command. |
| `Control + Shift + End` | In cell selection mode, extends the selection of cells to the last cell on the worksheet located in bottom-right corner. In the formula bar, selects all text in the formula bar from the cursor position to the end. |
| `Control + Shift + Home` | Extends the selection of cells to the beginning (the top-left cell) of the worksheet. In the formula bar, selects all text in the formula bar from the cursor position to the beginning of the input. |
| `Control + Arrow Key` | Navigates to the end of the current series of data. If there is another set of data afterwards, the first cell of the new series will be selected. Otherwise, you will be navigated to the last cell of the worksheet in the corresponding direction. |
| `Arrow Keys` | Move one cell up, down, right of left in the worksheet. |
| `Shift + Tab` | In cell selection mode, moves to the previous cell in a worksheet. If the currently active cell is the first cell (the top-left cell) in the Sheet, pressing Shift + Tab will move the focus outside of the Sheet to the Named ranges ComboBox. In a dialog box, moves to the previous focusable element. In range selection of cells, rows or columns, moves to the previous cell within the active range. If the focus is on the first cell (the top-left cell) in the range (the top-left), the focus will return to the last (the bottom-left) cell in the range. |
| `Tab` | In cell selection mode, moves one cell to the right in a worksheet. If the currently active cell is the last cell (the bottom-right cell) in the Sheet, pressing Tab will move the focus outside of the Sheet cells to the next focusable element on the page. In a dialog box, moves to the next focusable element in the Dialog. In range selection of cells, rows or columns, moves to the next cell within the active range. If the focus is on the last cell (the bottom-right cell) in the range, the focus will return to the first cell. |
| `PageDown` | Moves one screen down in a worksheet. |
| `PageUp` | Moves one screen up in a worksheet. |
| `Home` | In cell selection mode, moves to the beginning of a row in a worksheet. In a menu or submenu, selects the first command. |
| `Control + Home` | In cell selection mode, moves to the first cell (the top-left cell) on a worksheet. In the Formula Bar, moves the cursor to the beginning of the text. |
| `End` | In cell selection mode, moves to the far right cell of the active row. In a menu or submenu, selects the last command. |
| `Control + End` | In cell selection mode, moves to the last cell on a worksheet, in the lowest used row of the used column on the bottom-right. In the Formula Bar, moves the cursor to the end of the text. |
| `Alt + Space` | Displays the Control menu for the Spreadsheet window. |
| `Space` | In a dialog box, performs the action for the selected button, or selects or clears a check box. |
| `Enter` | In cell editing mode or in the formula bar, completes a cell entry and selects the cell below. In a data form, it moves to the first field in the next record. In the command toolbar, executes the active action. In a dialog box, performs the action for the default command button in the dialog box. |
| `Escape` | In cell editing mode or in the Formula bar, cancels an entry in the cell or Formula Bar. Closes an open menu or submenu, dialog box or message window. |
| `Alt + H` | Displays the Home tab on the ToolBar. |
| `Alt + N` | Displays the Insert tab on the ToolBar. |
| `Alt + A` | Displays the Data tab on the ToolBar. |
| `Control/Cmd(Mac) + PageUp` | Activates the previous sheet from the SheetBar if such exists. |
| `Control/Cmd(Mac) + PageDown` | Activates the next sheet from the SheetBar if such exists. |
| `Tab` | Moves the focus to the next focusable element in the Sheets Bar. If the last element is focused, pressing Tab will move the focus outside of the Spreadsheet. |
| `Shift + Tab` | Moves the focus to the previous focusable element in the Sheets Bar. If the first element is focused, pressing Tab will move the focus to the Sheet area. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the actions DropDownButton popup for the current active tab. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Cell editing | Clicking a cell or pressing Enter activates it for editing. |
| Range selection | Cells, rows, and columns are selected by clicking and dragging. |
| Formula bar | Displays and edits the active cell's content or formula expression. |
| Multiple sheets | Tabs at the bottom add, rename, and navigate between sheets. |
| Toolbar formatting | The toolbar applies bold, color, alignment, and other styles to selected cells. |

### Testing

The Spreadsheet has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Spreadsheet has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/spreadsheet/`](https://github.com/telerik/kendo-themes/tree/develop/tests/spreadsheet/).
