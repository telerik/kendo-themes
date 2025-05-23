require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "popover";
const group = component;
const className = "k-popover";

const dependencyClassNames = ["k-card", "k-popup"];

const expected = [];

const unexpected = [
    "kendo-popover-callout-bg" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
