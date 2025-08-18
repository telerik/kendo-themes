require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "popup";
const group = component;
const className = "k-popup";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);


