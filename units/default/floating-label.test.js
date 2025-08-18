require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "floating-label";
const group = component;
const className = "k-floating-label-container";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
