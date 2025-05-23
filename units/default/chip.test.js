require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "chip";
const group = component;
const className = "k-chip";

const dependencyClassNames = ["k-svg-icon"];

const expected = [
    "kendo-chip-line-height", // Variable customizations work, but is used by another variable.
    "kendo-chip-sm-line-height", // Variable customizations work, but is used by another variable for calculations.
    "kendo-chip-border-width",
    "kendo-chip-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-chip-base-bg", // Variable customizations work, but is used by another variable.
];

const unexpected = [
    "kendo-chip-solid-focus-text", // Variable customizations do not work.
    "kendo-chip-solid-hover-text", // Variable customizations do not work.
    "kendo-chip-solid-selected-text", // Variable customizations do not work.
    "kendo-chip-outline-bg", // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
