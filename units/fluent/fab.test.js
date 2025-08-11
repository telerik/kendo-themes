require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "fab";
const group = "floating-action-button";
const className = "k-fab";

const dependencyClassNames = ["k-button", "k-badge", "k-svg-icon"];

const expected = [];
const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
