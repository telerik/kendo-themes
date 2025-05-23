require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "color-editor";
const group = component;
const className = "k-coloreditor";

const dependencyClassNames = [
    "k-actions",
    "k-color-preview",
    "k-colorpalette",
    "k-colorgradient"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
