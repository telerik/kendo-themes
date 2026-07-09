import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SPREADSHEET_FOLDER_NAME, SPREADSHEET_MODULE_NAME } from './constants';
export const SPREADSHEET_CLASSNAME = `k-spreadsheet`;

const states = [];

const options = {};

const defaultOptions = {};

/**
 * @aria {role="application"} Indicates the Spreadsheets\' role as an application.
 * @aria {role="combobox"} Follows ComboBox spec: identifies the input as a combobox.
 * @aria {role="combobox"} The focusable element of the component should have role combobox (an input with popup).
 * @aria {aria-haspopup="menu"} Specifies that the formula input opens a popup.
 * @aria {aria-controls=".k-spreadsheet-formula-list id"} Points to the formulas list with role menu. Signifies that the formula input element controls the popup.
 * @aria {aria-expanded="true"|\"false"} Announces the state of the popup visibility.
 * @aria {title} The Formula input must have a title specifying its purpose.
 * @aria {id} Unique and deterministic id linked to the aria-controls attribute of the corresponding formula input.
 * @aria {role="menu"} Announces the menu role of the popup.
 * @aria {role="menuitem"} Announces the menuitem role of the popup items.
 * @aria {role="button"} The add new sheet element is a button.
 * @aria {aria-label|title} The add new sheet element must have a label as it does not have text content.
 * @aria {aria-controls=".k-tabstrip-items id"} Points to the ul element of the TabStrip that contains all tabs.
 * @aria {role="button"} Follows DropDownButton spec: omitted if the button DOM element is used.
 * @aria {aria-label|title} Follows DropDownButton spec: required when no text is visible.
 * @aria {role="tablist"} Follows TabStrip spec: indicates the tablist role for the ul element.
 * @aria {role="tab"} Follows TabStrip spec: the tab li element.
 * @aria {aria-label|title} Follows DropDownButton spec: required when no text is visible in the tab menu button.
 */
export const Spreadsheet: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEET_CLASSNAME,
                props.className
            )}
            role="application">
            {children}
        </div>
    );
};

Spreadsheet.states = states;
Spreadsheet.options = options;
Spreadsheet.className = SPREADSHEET_CLASSNAME;
Spreadsheet.defaultOptions = defaultOptions;
Spreadsheet.moduleName = SPREADSHEET_MODULE_NAME;
Spreadsheet.folderName = SPREADSHEET_FOLDER_NAME;

/**
 * @keyboard {Control + C} Copies the selected cells (range).
 * @keyboard {Control + V} Inserts copied or cut cells to a selected location within the worksheet.
 * @keyboard {Control + X} Cuts the selected cells (range).
 * @keyboard {Control + Y} Repeats the last action if possible by using the Redo command.
 * @keyboard {Control + Z} Reverses the last action if possible by using the Undo command.
 * @keyboard {Delete} In the Formula bar, deletes the character to the right of the insertion point from the formula text. In cell selection mode, removes the content from selected cells without affecting cell formats. In cell editing mode, deletes the character to the right of the insertion point.
 * @keyboard {Backspace} In the Formula bar, deletes one character to the left from the formula text. In cell selection mode, removes the content of the active cell. In cell editing mode, deletes the character to the left of the insertion point.
 * @keyboard {Control + select a cell} Selects an adjacent or non adjacent cell.
 * @keyboard {Control + select cells} Selects a range of adjacent or non adjacent.
 * @keyboard {Control + A} Selects the whole worksheet.
 * @keyboard {Control + select a row or column} Selects an adjacent or nonadjacent row or column.
 * @keyboard {Control + select rows or columns} Selects a range of adjacent or non adjacent rows or columns.
 * @keyboard {Shift + Arrow Key} Selects a range of adjacent cells, rows or columns by extending the selection by one cell, row or column.
 * @keyboard {Control + Shift + Arrow Key} Extends the selection of cells to the last cell of the current series of data. If there is another set of data afterwards, the cell selection will be extended to the first cell of the new series of data. Otherwise, the cell selection will be extended to the last cell of the worksheet in the corresponding direction.
 * @keyboard {ArrowDown or ArrowUp} In a menu or submenu, selects the next or previous command.
 * @keyboard {Control + Shift + End} In cell selection mode, extends the selection of cells to the last cell on the worksheet located in bottom-right corner. In the formula bar, selects all text in the formula bar from the cursor position to the end.
 * @keyboard {Control + Shift + Home} Extends the selection of cells to the beginning (the top-left cell) of the worksheet. In the formula bar, selects all text in the formula bar from the cursor position to the beginning of the input.
 * @keyboard {Control + Arrow Key} Navigates to the end of the current series of data. If there is another set of data afterwards, the first cell of the new series will be selected. Otherwise, you will be navigated to the last cell of the worksheet in the corresponding direction.
 * @keyboard {Arrow Keys} Move one cell up, down, right of left in the worksheet.
 * @keyboard {Shift + Tab} In cell selection mode, moves to the previous cell in a worksheet. If the currently active cell is the first cell (the top-left cell) in the Sheet, pressing Shift + Tab will move the focus outside of the Sheet to the Named ranges ComboBox. In a dialog box, moves to the previous focusable element. In range selection of cells, rows or columns, moves to the previous cell within the active range. If the focus is on the first cell (the top-left cell) in the range (the top-left), the focus will return to the last (the bottom-left) cell in the range.
 * @keyboard {Tab} In cell selection mode, moves one cell to the right in a worksheet. If the currently active cell is the last cell (the bottom-right cell) in the Sheet, pressing Tab will move the focus outside of the Sheet cells to the next focusable element on the page. In a dialog box, moves to the next focusable element in the Dialog. In range selection of cells, rows or columns, moves to the next cell within the active range. If the focus is on the last cell (the bottom-right cell) in the range, the focus will return to the first cell.
 * @keyboard {PageDown} Moves one screen down in a worksheet.
 * @keyboard {PageUp} Moves one screen up in a worksheet.
 * @keyboard {Home} In cell selection mode, moves to the beginning of a row in a worksheet. In a menu or submenu, selects the first command.
 * @keyboard {Control + Home} In cell selection mode, moves to the first cell (the top-left cell) on a worksheet. In the Formula Bar, moves the cursor to the beginning of the text.
 * @keyboard {End} In cell selection mode, moves to the far right cell of the active row. In a menu or submenu, selects the last command.
 * @keyboard {Control + End} In cell selection mode, moves to the last cell on a worksheet, in the lowest used row of the used column on the bottom-right. In the Formula Bar, moves the cursor to the end of the text.
 * @keyboard {Alt + Space} Displays the Control menu for the Spreadsheet window.
 * @keyboard {Space} In a dialog box, performs the action for the selected button, or selects or clears a check box.
 * @keyboard {Enter} In cell editing mode or in the formula bar, completes a cell entry and selects the cell below. In a data form, it moves to the first field in the next record. In the command toolbar, executes the active action. In a dialog box, performs the action for the default command button in the dialog box.
 * @keyboard {Escape} In cell editing mode or in the Formula bar, cancels an entry in the cell or Formula Bar. Closes an open menu or submenu, dialog box or message window.
 * @keyboard {Alt + H} Displays the Home tab on the ToolBar.
 * @keyboard {Alt + N} Displays the Insert tab on the ToolBar.
 * @keyboard {Alt + A} Displays the Data tab on the ToolBar.
 * @keyboard {Control/Cmd(Mac) + PageUp} Activates the previous sheet from the SheetBar if such exists.
 * @keyboard {Control/Cmd(Mac) + PageDown} Activates the next sheet from the SheetBar if such exists.
 * @keyboard {Tab} Moves the focus to the next focusable element in the Sheets Bar. If the last element is focused, pressing Tab will move the focus outside of the Spreadsheet.
 * @keyboard {Shift + Tab} Moves the focus to the previous focusable element in the Sheets Bar. If the first element is focused, pressing Tab will move the focus to the Sheet area.
 * @keyboard {Alt/Opt(Mac) + ArrowDown} Opens the actions DropDownButton popup for the current active tab.
 */

export default Spreadsheet;
