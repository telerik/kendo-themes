require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "slider";
const group = component;
const className = "k-slider";

const dependencyClassNames = [
    "k-button",
    "k-tooltip",
    "k-svg-icon"
];

const expected = [
    "kendo-slider-alt-size", // Variable customizations work, but is used by another variable.
    "kendo-slider-button-offset", // Variable customizations work, but is used by another variable.
    "kendo-slider-button-size" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
