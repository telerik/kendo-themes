require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "numeric-textbox";
const group = component;
// const className = "k-numerictextbox"; // .k-numerictextbox {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
