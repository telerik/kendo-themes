require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "switch";
const group = component;
const className = "k-switch";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
