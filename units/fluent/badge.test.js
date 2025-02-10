require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "badge";
const group = component;
const className = "k-badge";

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
