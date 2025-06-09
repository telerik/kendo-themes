require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "color-gradient";
const group = component;
const className = "k-colorgradient";

const dependencyClassNames = [
    "k-svg-icon",
    "k-button",
    "k-slider",
    // "k-textbox", // .k-textbox {} selector is empty
    "k-numerictextbox"
];

const expected = [
    "kendo-color-gradient-spacer" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
