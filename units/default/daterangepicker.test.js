require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "date-range-picker";
const group = component;
const className = "k-daterangepicker";

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
