require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "dropdown-list";
const group = component;
// const className = "k-dropdownlist"; // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-list",
    "k-floating-label-container"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
