require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "autocomplete";
const group = component;
// const className = "k-autocomplete"; // .k-autocomplete {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-list",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
