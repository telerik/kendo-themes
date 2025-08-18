require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "tile-layout";
const group = component;
const className = "k-tilelayout";

const dependencyClassNames = ["k-card", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
