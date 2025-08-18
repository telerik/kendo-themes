require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "treeview";
const group = component;
const className = "k-treeview";

const dependencyClassNames = ["k-checkbox", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
