require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "prompt";
const group = component;
 const className = "k-prompt";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
