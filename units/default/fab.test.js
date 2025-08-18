require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "fab";
const group = "floating-action-button";
const className = "k-fab";

const dependencyClassNames = ["k-button", "k-badge", "k-svg-icon"];

const expected = [
    "kendo-fab-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-fab-padding-y", // Variable customizations work, but is used by another variable.
];
const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
