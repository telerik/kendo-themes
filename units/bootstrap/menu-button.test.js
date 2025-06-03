require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "menu-button";
const group = component;
const className = "k-menu-button";

const dependencyClassNames = ["k-button", "k-menu"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
