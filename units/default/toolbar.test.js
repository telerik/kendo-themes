require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "toolbar";
const group = component;
const className = "k-toolbar";

const dependencyClassNames = ["k-button", "k-popup", "k-menu", "k-svg-icon"];

const expected = [];

const unexpected = [
    "kendo-toolbar-border-radius", // Variable customizations do not work.
    "kendo-toolbar-outline-gradient", // Variable customizations do not work.
    "kendo-toolbar-flat-gradient", // Variable customizations do not work.
    "kendo-toolbar-flat-border-width" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
