require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "action-buttons";
const group = component;
const className = "k-actions";

const dependencyClassNames = ["k-button"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
