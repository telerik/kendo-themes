require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "time-marker";
const group = component;
const className = "k-current-time";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
