require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "split-button";
const group = component;
const className = "k-split-button";

const dependencyClassNames = ["k-button", "k-menu"];

const expected = [];

const unexpected = [
    "kendo-split-button-sm-arrow-padding-x", // This variable is used in the Core
    "kendo-split-button-lg-arrow-padding-x" // This variable is used in the Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
