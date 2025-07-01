require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "suggestion";
const group = component;
const className = "k-suggestion";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
