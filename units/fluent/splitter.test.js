require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "splitter";
const group = component;
const className = "k-splitter";

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
