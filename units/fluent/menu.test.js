require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "menu";
const group = component;
const className = "k-menu";

const dependencyClassNames = ["k-popup", "k-list", "k-svg-icon", "k-button"];

const expected = [];

const unexpected = [
    "kendo-menu-scroll-button-bg", // This variable is used in Core
    "kendo-menu-scroll-button-border", // This variable is used in Core
    "kendo-menu-scroll-button-hover-bg", // This variable is used in Core
    "kendo-menu-scroll-button-hover-border" // This variable is used in Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
