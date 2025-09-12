import "./theme.env.js";
import { Spreadsheet } from "../../packages/html/src/spreadsheet/spreadsheet.spec";
import { testKendoComponent } from "../utility";

const component = Spreadsheet.moduleName;
const group = component;
const className = Spreadsheet.className;

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

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
