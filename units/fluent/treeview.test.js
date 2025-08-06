require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "treeview";
const group = component;
const className = "k-treeview";

const dependencyClassNames = ["k-checkbox", "k-svg-icon"];

const expected = [
    "kendo-treeview-item-bg", // Variable customizations work, but is used by another variable.
    "kendo-treeview-item-text", // Variable customizations work, but is used by another variable.
    "kendo-treeview-item-border", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
