require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "button";
const group = component;
const className = "k-button";

const dependencyClassNames = ["k-badge", "k-svg-icon"];

const expected = [
    "kendo-button-bg", // // Variable customizations work, but is used by another variable.
    "kendo-button-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-button-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-button-font-size", // Variable customizations work, but is used by another variable.
    "kendo-button-line-height", // Variable customizations work, but is used by another variable.
    "kendo-button-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-inner-calc-size", // Variable customizations work, but is used by another variable.
];

const unexpected = [
    "kendo-button-focus-bg", // Variable customizations do not work.
    "kendo-button-focus-text", // Variable customizations do not work.
    "kendo-button-focus-border", // Variable customizations do not work.
    "kendo-button-focus-gradient", // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
