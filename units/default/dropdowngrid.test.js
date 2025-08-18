require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "dropdown-grid";
const group = component;
// const className = "k-dropdowngrid"; // .k-dropdowngrid {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-svg-icon",
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-table"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
