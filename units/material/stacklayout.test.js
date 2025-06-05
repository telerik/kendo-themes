require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "stack-layout";
const group = component;
// const className = "k-stack-layout"; // .k-stack-layout {} selector is empty
const className = null;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


