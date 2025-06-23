require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "table";
const group = component;
const className = "k-table";

const dependencyClassNames = [];

const expected = [
    "kendo-table-selected-hover-bg", // Variable customizations work, but is used by another variable.
    "kendo-table-selected-hover-text", // Variable customizations work, but is used by another variable.
    "kendo-table-selected-hover-border", // Variable customizations work, but is used by another variable.
    "kendo-table-highlighted-bg", // Variable customizations work, but is used by another variable.
    "kendo-table-highlighted-font-weight", // Variable customizations work, but is used by another variable.
    "kendo-table-selected-highlighted-bg", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
