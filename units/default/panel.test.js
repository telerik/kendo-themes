require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "panel";
const group = component;
const className = "k-panel";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
