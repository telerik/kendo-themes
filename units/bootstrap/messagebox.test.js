require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "messagebox";
const group = component;
const className = "k-messagebox";

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


