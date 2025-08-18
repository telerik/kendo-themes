require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "listgroup";
const group = component;
const className = "k-listgroup";

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


