require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "dock-manager";
const group = component;
const className = "k-dock-manager";

const dependencyClassNames = ["k-splitter", "k-toolbar", "k-tabstrip"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
