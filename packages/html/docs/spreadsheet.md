# Spreadsheet Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Spreadsheet component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-spreadsheet` | `role=application` | Indicates the Spreadsheets\' role as an application. |
| `.k-spreadsheet-menu` | `role=menubar` | Follows Menu spec: announces the Menu menubar role. |
| `.k-spreadsheet-menu .k-menu-item` | `role=menuitem` | Follows Menu spec: announces the Menu item role. |
| `.k-spreadsheet-toolbar` | `role=toolbar` | Follows Toolbar spec: the component role. |
| `.k-spreadsheet-toolbar` | `aria-label or title` | Each ToolBar must have a label specifying its purpose. |
| `.k-spreadsheet-name-editor .k-combobox > .k-input-inner` | `role=combobox` | Follows ComboBox spec: identifies the input as a combobox. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `role=combobox` | The focusable element of the component should have role combobox (an input with popup). |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `aria-haspopup=menu` | Specifies that the formula input opens a popup. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `aria-controls=.k-spreadsheet-formula-list id (when present)` | Points to the formulas list with role menu. Signifies that the formula input element controls the popup. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `aria-expanded=true/false` | Announces the state of the popup visibility. |
| `.k-spreadsheet-formula-bar .k-spreadsheet-formula-input` | `title` | The Formula input must have a title specifying its purpose. |
| `.k-spreadsheet-formula-list` | `id` | Unique and deterministic id linked to the aria-controls attribute of the corresponding formula input. |
| `.k-spreadsheet-formula-list` | `role=menu` | Announces the menu role of the popup. |
| `.k-spreadsheet-formula-list .k-list-item` | `role=menuitem` | Announces the menuitem role of the popup items. |
| `.k-spreadsheet-sheet-add` | `role=button or nodeName=button` | The add new sheet element is a button. |
| `.k-spreadsheet-sheet-add` | `aria-label or title` | The add new sheet element must have a label as it does not have text content. |
| `.k-spreadsheet-sheet-add` | `aria-controls=.k-tabstrip-items id (when present)` | Points to the ul element of the TabStrip that contains all tabs. |
| `.k-spreadsheet-sheets-menu` | `role=button or nodeName=button` | Follows DropDownButton spec: omitted if the button DOM element is used. |
| `.k-spreadsheet-sheets-menu` | `aria-label or title` | Follows DropDownButton spec: required when no text is visible. |
| `.k-spreadsheet-sheets-menu` | `aria-controls=.k-tabstrip-items id (when present)` | Points to the ul element of the TabStrip that contains all tabs. |
| `.k-spreadsheet-sheets .k-tabstrip-items` | `role=tablist` | Follows TabStrip spec: indicates the tablist role for the ul element. |
| `.k-spreadsheet-sheets .k-tabstrip-item` | `role=tab` | Follows TabStrip spec: the tab li element. |
| `.k-spreadsheet-sheets .k-tabstrip-item .k-menu-button` | `aria-label or title` | Follows DropDownButton spec: required when no text is visible in the tab menu button. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Spreadsheet component:

| Shortcut | Behavior |
| --- | --- |
| `Ctrl+C` | Copies the selected cells (range). |
| `Ctrl+V` | Inserts copied or cut cells to a selected location within the worksheet. |
| `Ctrl+X` | Cuts the selected cells (range). |
| `Ctrl+Y` | Repeats the last action if possible by using the Redo command. |
| `Ctrl+Z` | Reverses the last action if possible by using the Undo command. |
| `Delete` | In the Formula bar, deletes the character to the right of the insertion point from the formula text. In cell selection mode, removes the content from selected cells without affecting cell formats. In cell editing mode, deletes the character to the right of the insertion point. |
| `Backspace` | In the Formula bar, deletes one character to the left from the formula text. In cell selection mode, removes the content of the active cell. In cell editing mode, deletes the character to the left of the insertion point. |
| `Ctrl+select a cell` | Selects an adjacent or non adjacent cell. |
| `Ctrl+select cells` | Selects a range of adjacent or non adjacent. |
| `Ctrl+A` | Selects the whole worksheet. |
| `Ctrl+select a row or column` | Selects an adjacent or nonadjacent row or column. |
| `Ctrl+select rows or columns` | Selects a range of adjacent or non adjacent rows or columns. |
| `Shift + Arrow Key` | Selects a range of adjacent cells, rows or columns by extending the selection by one cell, row or column. |
| `Ctrl + Shift + Arrow Key` | Extends the selection of cells to the last cell of the current series of data. If there is another set of data afterwards, the cell selection will be extended to the first cell of the new series of data. Otherwise, the cell selection will be extended to the last cell of the worksheet in the corresponding direction. |
| `Down / Up Arrow` | In a menu or submenu, selects the next or previous command. |
| `Ctrl + Shift + End` | In cell selection mode, extends the selection of cells to the last cell on the worksheet located in bottom-right corner. In the formula bar, selects all text in the formula bar from the cursor position to the end. |
| `Ctrl + Shift + Home` | Extends the selection of cells to the beginning (the top-left cell) of the worksheet. In the formula bar, selects all text in the formula bar from the cursor position to the beginning of the input. |
| `Ctrl + Arrow Key` | Navigates to the end of the current series of data. If there is another set of data afterwards, the first cell of the new series will be selected. Otherwise, you will be navigated to the last cell of the worksheet in the corresponding direction. |
| `Arrow Keys` | Move one cell up, down, right of left in the worksheet. |
| `Shift + Tab` | In cell selection mode, moves to the previous cell in a worksheet. If the currently active cell is the first cell (the top-left cell) in the Sheet, pressing Shift + Tab will move the focus outside of the Sheet to the Named ranges ComboBox. In a dialog box, moves to the previous focusable element. In range selection of cells, rows or columns, moves to the previous cell within the active range. If the focus is on the first cell (the top-left cell) in the range (the top-left), the focus will return to the last (the bottom-left) cell in the range. |
| `Tab` | In cell selection mode, moves one cell to the right in a worksheet. If the currently active cell is the last cell (the bottom-right cell) in the Sheet, pressing Tab will move the focus outside of the Sheet cells to the next focusable element on the page. In a dialog box, moves to the next focusable element in the Dialog. In range selection of cells, rows or columns, moves to the next cell within the active range. If the focus is on the last cell (the bottom-right cell) in the range, the focus will return to the first cell. |
| `Page Down` | Moves one screen down in a worksheet. |
| `Page Up` | Moves one screen up in a worksheet. |
| `Home` | In cell selection mode, moves to the beginning of a row in a worksheet. In a menu or submenu, selects the first command. |
| `Ctrl + Home` | In cell selection mode, moves to the first cell (the top-left cell) on a worksheet. In the Formula Bar, moves the cursor to the beginning of the text. |
| `End` | In cell selection mode, moves to the far right cell of the active row. In a menu or submenu, selects the last command. |
| `Ctrl + End` | In cell selection mode, moves to the last cell on a worksheet, in the lowest used row of the used column on the bottom-right. In the Formula Bar, moves the cursor to the end of the text. |
| `Alt + Space` | Displays the Control menu for the Spreadsheet window. |
| `Space` | In a dialog box, performs the action for the selected button, or selects or clears a check box. |
| `Enter` | In cell editing mode or in the formula bar, completes a cell entry and selects the cell below. In a data form, it moves to the first field in the next record. In the command toolbar, executes the active action. In a dialog box, performs the action for the default command button in the dialog box. |
| `Esc` | In cell editing mode or in the Formula bar, cancels an entry in the cell or Formula Bar. Closes an open menu or submenu, dialog box or message window. |
| `Alt + H` | Displays the Home tab on the ToolBar. |
| `Alt + N` | Displays the Insert tab on the ToolBar. |
| `Alt + A` | Displays the Data tab on the ToolBar. |
| `Ctrl (Cmd on MacOS) + Page Up` | Activates the previous sheet from the SheetBar if such exists. |
| `Ctrl (Cmd on MacOS) + Page Down` | Activates the next sheet from the SheetBar if such exists. |
| `Tab` | Moves the focus to the next focusable element in the Sheets Bar. If the last element is focused, pressing Tab will move the focus outside of the Spreadsheet. |
| `Shift + Tab` | Moves the focus to the previous focusable element in the Sheets Bar. If the first element is focused, pressing Tab will move the focus to the Sheet area. |
| `Alt (or Opt on Mac) + Down Arrow` | Opens the actions DropDownButton popup for the current active tab. |
