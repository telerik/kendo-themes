require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "combobox";
const group = component;
// const className = "k-combobox"; // .k-combobox {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-svg-icon",
    "k-popup",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
