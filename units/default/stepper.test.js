require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "stepper";
const group = component;
const className = "k-stepper";

const dependencyClassNames = [
    "k-svg-icon",
    "k-progressbar"
];

const expected = [
    "kendo-stepper-indicator-focus-offset" // Variable customizations work, but is used for calculations.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
