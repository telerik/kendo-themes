require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "menu";
const group = component;
const className = "k-menu";

const dependencyClassNames = ["k-popup", "k-list", "k-svg-icon", "k-button"];

const expected = [];

const unexpected = [
    "kendo-menu-popup-font-size", // Variable customizations do not work.
    "kendo-menu-popup-line-height" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
