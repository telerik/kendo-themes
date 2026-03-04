import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SPREADSHEET_FOLDER_NAME, SPREADSHEET_MODULE_NAME } from './constants';
export const SPREADSHEET_CLASSNAME = `k-spreadsheet`;

const states = [];

const options = {};

const defaultOptions = {};

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

Spreadsheet.ariaSpec = {
    selector: '.k-spreadsheet',
    rules: [
        // SpreadSheet Wrapping Element
        { selector: '.k-spreadsheet', attribute: 'role=application', usage: 'Indicates the Spreadsheets\' role as an application.' },

        // ToolBar Menu — follows Menu spec (menu_aria.md)
        // The SpreadsheetMenu component follows the Menu accessibility specification.
        // All Menu ariaSpec rules apply within .k-spreadsheet-menu.
        { selector: '.k-spreadsheet-menu', attribute: 'role=menubar', usage: 'Follows Menu spec: announces the Menu menubar role.' },
        { selector: '.k-spreadsheet-menu .k-menu-item', attribute: 'role=menuitem', usage: 'Follows Menu spec: announces the Menu item role.' },

        // ToolBars — follows Toolbar spec (toolbar_aria.md)
        // The SpreadsheetToolbar component follows the Toolbar accessibility specification.
        // All Toolbar ariaSpec rules apply within .k-spreadsheet-toolbar.
        { selector: '.k-spreadsheet-toolbar', attribute: 'role=toolbar', usage: 'Follows Toolbar spec: the component role.' },
        { selector: '.k-spreadsheet-toolbar', attribute: 'aria-label or title', usage: 'Each ToolBar must have a label specifying its purpose.' },

        // Name editor — follows ComboBox spec (combobox_aria.md)
        // The Name editor Combobox component follows the ComboBox accessibility specification.
        // All ComboBox ariaSpec rules apply within .k-spreadsheet-name-editor.
        { selector: '.k-spreadsheet-name-editor .k-combobox > .k-input-inner', attribute: 'role=combobox', usage: 'Follows ComboBox spec: identifies the input as a combobox.' },

        // Formula input
        { selector: '.k-spreadsheet-formula-bar .k-spreadsheet-formula-input', attribute: 'role=combobox', usage: 'The focusable element of the component should have role combobox (an input with popup).' },
        { selector: '.k-spreadsheet-formula-bar .k-spreadsheet-formula-input', attribute: 'aria-haspopup=menu', usage: 'Specifies that the formula input opens a popup.' },
        { selector: '.k-spreadsheet-formula-bar .k-spreadsheet-formula-input[aria-controls]', attribute: 'aria-controls=.k-spreadsheet-formula-list id', usage: 'Points to the formulas list with role menu. Signifies that the formula input element controls the popup.' },
        { selector: '.k-spreadsheet-formula-bar .k-spreadsheet-formula-input', attribute: 'aria-expanded=true/false', usage: 'Announces the state of the popup visibility.' },
        { selector: '.k-spreadsheet-formula-bar .k-spreadsheet-formula-input', attribute: 'title', usage: 'The Formula input must have a title specifying its purpose.' },

        // Formula list
        { selector: '.k-spreadsheet-formula-list', attribute: 'id', usage: 'Unique and deterministic id linked to the aria-controls attribute of the corresponding formula input.' },
        { selector: '.k-spreadsheet-formula-list', attribute: 'role=menu', usage: 'Announces the menu role of the popup.' },
        { selector: '.k-spreadsheet-formula-list .k-list-item', attribute: 'role=menuitem', usage: 'Announces the menuitem role of the popup items.' },

        // Add new sheet button
        { selector: '.k-spreadsheet-sheet-add', attribute: 'role=button or nodeName=button', usage: 'The add new sheet element is a button.' },
        { selector: '.k-spreadsheet-sheet-add', attribute: 'aria-label or title', usage: 'The add new sheet element must have a label as it does not have text content.' },
        { selector: '.k-spreadsheet-sheet-add[aria-controls]', attribute: 'aria-controls=.k-tabstrip-items id', usage: 'Points to the ul element of the TabStrip that contains all tabs.' },

        // Menu sheet button — follows DropDownButton spec (dropdownbutton_aria.md)
        // The Sheets menu button follows the DropDownButton accessibility specification.
        { selector: '.k-spreadsheet-sheets-menu', attribute: 'role=button or nodeName=button', usage: 'Follows DropDownButton spec: omitted if the button DOM element is used.' },
        { selector: '.k-spreadsheet-sheets-menu', attribute: 'aria-label or title', usage: 'Follows DropDownButton spec: required when no text is visible.' },
        { selector: '.k-spreadsheet-sheets-menu[aria-controls]', attribute: 'aria-controls=.k-tabstrip-items id', usage: 'Points to the ul element of the TabStrip that contains all tabs.' },

        // Sheets bar — follows TabStrip spec (tabstrip_aria.md)
        // The Sheets bar TabStrip follows the TabStrip accessibility specification.
        // All TabStrip ariaSpec rules apply within .k-spreadsheet-sheets.
        { selector: '.k-spreadsheet-sheets .k-tabstrip-items', attribute: 'role=tablist', usage: 'Follows TabStrip spec: indicates the tablist role for the ul element.' },
        { selector: '.k-spreadsheet-sheets .k-tabstrip-item', attribute: 'role=tab', usage: 'Follows TabStrip spec: the tab li element.' },

        // Tab Menu button — follows DropDownButton spec (dropdownbutton_aria.md)
        // Each tab's menu button follows the DropDownButton accessibility specification.
        // Known exception: nested-interactive — MenuButton (<button>) inside TabStripItem (role="tab").
        // This is specific to the Spreadsheet sheets bar and requires a future solution.
        { selector: '.k-spreadsheet-sheets .k-tabstrip-item .k-menu-button', attribute: 'aria-label or title', usage: 'Follows DropDownButton spec: required when no text is visible in the tab menu button.' },
    ]
};

export default Spreadsheet;
