require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "appbar";
const group = component;
const className = "k-appbar";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
