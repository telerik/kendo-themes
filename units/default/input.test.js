require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "input";
const group = component;
const className = "k-input";

const dependencyClassNames = ["k-button"];

const expected = [
    "kendo-input-border-width", // Variable customizations work, but is used by another variable.
    "kendo-input-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-input-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-input-font-size", // Variable customizations work, but is used by another variable.
    "kendo-input-line-height", // Variable customizations work, but is used by another variable.
    "kendo-input-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-input-spinner-icon-offset", // Variable customizations work but needs "kendo-use-input-spinner-icon-offset" variable to be true.
];

const unexpected = [
    "kendo-input-selected-bg", // Variable customizations do not work.
    "kendo-input-selected-text", // Variable customizations do not work.
    "kendo-input-separator-opacity", // Variable customizations do not work.
    "kendo-input-values-margin-x", // Variable customizations do not work.
    "kendo-input-values-margin-y", // Variable is used by "kendo-input-values-margin-x" variable and its customizations does not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
