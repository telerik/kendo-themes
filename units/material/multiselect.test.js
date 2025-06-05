require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "multiselect";
const group = component;
// const className = "k-multiselect"; // .k-multiselect {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-button",
    "k-input",
    "k-chip",
    "k-floating-label-container",
    "k-popup",
    "k-list",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
