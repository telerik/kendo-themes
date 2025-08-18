require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "avatar";
const group = component;
const className = "k-avatar";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
