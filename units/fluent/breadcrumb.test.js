require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "breadcrumb";
const group = component;
const className = "k-breadcrumb";

const dependencyClassNames = ["k-input", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
