require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "window";
const group = component;
const className = "k-window";

const dependencyClassNames = ["k-overlay", "k-form", "k-button", "k-actions", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
