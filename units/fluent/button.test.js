require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "button";
const group = component;
const className = "k-button";

const dependencyClassNames = ["k-badge", "k-svg-icon"];

const expected = [
    "kendo-button-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-inner-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-border-width", // Variable customizations work, but is used by another variable.
    "kendo-button-spacing", // Variable is only used in the Fluent theme. Consider removing it or using it in the other themes.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
