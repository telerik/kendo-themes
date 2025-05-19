require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "breadcrumb";
const group = component;
const className = "k-breadcrumb";

const dependencyClassNames = ["k-input", "k-svg-icon"];

const expected = [
    "kendo-breadcrumb-font-size", // Variable customizations work, but is used by another variable.
    "kendo-breadcrumb-line-height", // Variable customizations work, but is used by another variable.
    "kendo-breadcrumb-link-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-breadcrumb-link-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-breadcrumb-icon-link-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-breadcrumb-icon-link-padding-x", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
