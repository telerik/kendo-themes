require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "loader";
const group = component;
const className = "k-loader";

const dependencyClassNames = ["k-overlay"];

const expected = [
    "kendo-loader-equilateral-height", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
