require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "split-button";
const group = component;
const className = "k-split-button";

const dependencyClassNames = ["k-button", "k-menu"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
