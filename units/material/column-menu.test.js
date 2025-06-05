require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "column-menu";
const group = component;
// const className = "k-column-menu"; // .k-column-menu {} selector is empty
const className = null;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
