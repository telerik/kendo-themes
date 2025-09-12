import "./theme.env.js";
import { Grid } from "../../packages/html/src/grid/grid.spec";
import { testKendoComponent } from "../utility";

const component = Grid.moduleName;
const group = component;
const className = Grid.className;

const dependencyClassNames = [
    "k-progressbar",
    "k-button",
    "k-actions",
    "k-toolbar",
    "k-input",
    // "k-textbox",  // Empty selector for .k-textbox {}
    "k-checkbox",
    "k-radio",
    // "k-validator", // Empty selector for .k-validator {}
    // "k-autocomplete", // Empty selector for .k-autocomplete {}
    // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    "k-dropdownlist",
    "k-numerictextbox",
    "k-menu",
    "k-dialog",
    "k-pager",
    "k-chip",
    //" k-skeleton", // Placeholder-line @extends .k-skeleton
    "k-list",
    "k-table",
    "k-tabstrip"
];

const expected = [
    "kendo-grid-padding-x", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
