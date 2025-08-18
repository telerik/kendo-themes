require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "popover";
const group = component;
const className = "k-popover";

const dependencyClassNames = ["k-card", "k-popup"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
