require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "wizard";
const group = component;
const className = "k-wizard";

const dependencyClassNames = [
    "k-button",
    "k-stepper",
    "k-form",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
