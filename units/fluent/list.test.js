require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "list";
const group = component;
const className = "k-list";

const dependencyClassNames = [];

const expected = [];

const unexpected = [
    "kendo-list-filter-padding-y", // This variable is used in the Core
    "kendo-list-item-bg", // Variable customizations work, but is used by another variable.
    "kendo-list-item-text" // Variable customizations work, but is used by another variable.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);


