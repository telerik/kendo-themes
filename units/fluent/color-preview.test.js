require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "color-preview";
const group = component;
const className = "k-color-preview";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
