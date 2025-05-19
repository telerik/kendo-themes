require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "card";
const group = component;
const className = "k-card";

const dependencyClassNames = ["k-actions", "k-svg-icon", "k-typography"];

const expected = [
    "kendo-card-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-card-padding-y" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
