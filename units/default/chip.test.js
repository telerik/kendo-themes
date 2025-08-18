require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "chip";
const group = component;
const className = "k-chip";

const dependencyClassNames = ["k-svg-icon"];

const expected = [
    "kendo-chip-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-chip-base-bg" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
