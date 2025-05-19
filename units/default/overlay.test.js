require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "overlay";
const group = component;
const className = "k-overlay";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


