require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "color-gradient";
const group = component;
const className = "k-colorgradient";

const dependencyClassNames = [
    "k-svg-icon",
    "k-button",
    "k-slider",
    // "k-textbox", // .k-textbox {} selector is empty
    "k-numerictextbox"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
