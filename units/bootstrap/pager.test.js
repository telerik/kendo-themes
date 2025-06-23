require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "pager";
const group = component;
const className = "k-pager";

const dependencyClassNames = [
    "k-dropdownlist",
    "k-svg-icon",
    "k-button"
];

const expected = [
    "kendo-pager-padding-x", // Variable customizations works, but is used by another variable.
    "kendo-pager-item-border-width", // Variable customizations work, but is used for calculations.
    "kendo-pager-item-bg", // Variable customizations works, but is used by another variable.
    "kendo-pager-item-selected-bg", // Variable customizations works, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
