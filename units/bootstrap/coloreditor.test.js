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

const expected = [
    "kendo-color-editor-spacer" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
