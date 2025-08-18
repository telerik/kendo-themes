require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "progressbar";
const group = component;
const className = "k-progressbar";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
