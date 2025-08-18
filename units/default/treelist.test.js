require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "treelist";
const group = component;
const className = "k-treelist";

const dependencyClassNames = ["k-grid", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
