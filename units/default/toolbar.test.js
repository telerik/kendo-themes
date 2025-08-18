require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "toolbar";
const group = component;
const className = "k-toolbar";

const dependencyClassNames = ["k-button", "k-popup", "k-menu", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
