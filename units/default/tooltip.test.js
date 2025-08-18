require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "tooltip";
const group = component;
const className = "k-tooltip";

const dependencyClassNames = ["k-popup", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
