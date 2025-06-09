require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "color-picker";
const group = component;
const className = "k-colorpicker";

const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-coloreditor",
    "k-popup",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
