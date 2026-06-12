# Spreadsheet Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Spreadsheet provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Spreadsheet is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-spreadsheet` | `role` = `application` | Indicates the Spreadsheets\' role as an application. |
| `.k-spreadsheet-menu` | `role` = `menubar` | Follows Menu spec: announces the Menu menubar role. |
| `.k-spreadsheet-menu .k-menu-item` | `role` = `menuitem` | Follows Menu spec: announces the Menu item role. |
| `.k-spreadsheet-toolbar` | `role` = `toolbar` | Follows Toolbar spec: the component role. |
| `.k-spreadsheet-toolbar` | `aria-label` / `title` | Each ToolBar must have a label specifying its purpose. |
| `.k-spreadsheet-name-editor .k-combobox > .k-input-inner` | `role` = `combobox` | Follows ComboBox spec: identifies the input as a combobox. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `role` = `combobox` | The focusable element of the component should have role combobox (an input with popup). |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `aria-haspopup` = `menu` | Specifies that the formula input opens a popup. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `aria-controls` = `.k-spreadsheet-formula-list id` | Points to the formulas list with role menu. Signifies that the formula input element controls the popup. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `aria-expanded` = `true` / `false` | Announces the state of the popup visibility. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `title` | The Formula input must have a title specifying its purpose. |
| `.k-spreadsheet-formula-list` | `id` | Unique and deterministic id linked to the aria-controls attribute of the corresponding formula input. |
| `.k-spreadsheet-formula-list` | `role` = `menu` | Announces the menu role of the popup. |
| `.k-spreadsheet-formula-list .k-list-item` | `role` = `menuitem` | Announces the menuitem role of the popup items. |
| `.k-spreadsheet-sheet-add` | `role` = `button` | The add new sheet element is a button. |
| `.k-spreadsheet-sheet-add` | `aria-label` / `title` | The add new sheet element must have a label as it does not have text content. |
| `.k-spreadsheet-sheet-add` | `aria-controls` = `.k-tabstrip-items id` | Points to the ul element of the TabStrip that contains all tabs. |
| `.k-spreadsheet-sheets-menu` | `role` = `button` | Follows DropDownButton spec: omitted if the button DOM element is used. |
| `.k-spreadsheet-sheets-menu` | `aria-label` / `title` | Follows DropDownButton spec: required when no text is visible. |
| `.k-spreadsheet-sheets-menu` | `aria-controls` = `.k-tabstrip-items id` | Points to the ul element of the TabStrip that contains all tabs. |
| `.k-spreadsheet-sheets .k-tabstrip-items` | `role` = `tablist` | Follows TabStrip spec: indicates the tablist role for the ul element. |
| `.k-spreadsheet-sheets .k-tabstrip-item` | `role` = `tab` | Follows TabStrip spec: the tab li element. |
| `.k-spreadsheet-sheets .k-tabstrip-item .k-menu-button` | `aria-label` / `title` | Follows DropDownButton spec: required when no text is visible in the tab menu button. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Spreadsheet component:

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

### Testing

The Spreadsheet has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Spreadsheet has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
