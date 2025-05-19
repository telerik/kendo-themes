require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "badge";
const group = component;
const className = "k-badge";

const dependencyClassNames = ["k-svg-icon"];

const expected = [
    "kendo-badge-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-badge-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-badge-font-size", // Variable customizations work, but is used by another variable.
    "kendo-badge-line-height", // Variable customizations work, but is used by another variable.
    "kendo-badge-min-width", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
