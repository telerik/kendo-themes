require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "orgchart";
const group = component;
const className = "k-orgchart";

const dependencyClassNames = [
    "k-svg-icon",
    "k-form",
    // "k-textbox", // .k-textbox {} selector is empty
    // "k-dropdownlist", // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
    "k-upload",
    "k-menu",
    "k-card",
    "k-window"
];

const expected = [
    "kendo-orgchart-spacer", // Variable customizations work, but is used by another variable.
    "kendo-orgchart-card-padding-y" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
