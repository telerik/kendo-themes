require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "spreadsheet";
const group = component;
const className = "k-spreadsheet";

const dependencyClassNames = [
    "k-button",
    "k-checkbox",
    "k-radio",
    "k-colorpicker",
    // "k-combobox", // .k-combobox {} selector is empty
    // "k-datetimepicker", // .k-datetimepicker {} selector is empty
    // "k-dropdownlist", // .k-dropdownlist {} selector is empty
    "k-toolbar",
    "k-upload",
    "k-menu",
    "k-window",
    "k-tabstrip",
    "k-treeview",
    "k-svg-icon",
    "k-list"
];

const expected = [];

const unexpected = [
    "kendo-spreadsheet-table-header-bg", // This variable is used in Core
    "kendo-spreadsheet-table-header-text", // This variable is used in Core
    "kendo-spreadsheet-table-header-border", // This variable is used in Core
    "kendo-spreadsheet-sheets-bar-border-width", // This variable is used in Core
    "kendo-spreadsheet-insert-image-dialog-preview-img" // This variable is used in Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
