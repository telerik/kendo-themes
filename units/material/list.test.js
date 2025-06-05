require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "list";
const group = component;
const className = "k-list";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);


