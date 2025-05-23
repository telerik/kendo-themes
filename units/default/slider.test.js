require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "skeleton";
const group = component;
const className = "k-skeleton";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
