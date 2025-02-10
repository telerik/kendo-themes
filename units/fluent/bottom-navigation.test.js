require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "bottom-navigation";
const group = component;
const className = "k-bottom-nav";

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
