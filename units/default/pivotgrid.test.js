require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "pivotgrid";
const group = component;
const className = "k-pivotgrid";

const dependencyClassNames = [
    "k-dialog",
    "k-treeview",
    "k-grid",
    "k-svg-icon",
    "k-list"
];

const expected = [
    "kendo-pivotgrid-configurator-shadow" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
