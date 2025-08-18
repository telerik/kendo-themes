require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "menu";
const group = component;
const className = "k-menu";

const dependencyClassNames = ["k-popup", "k-list", "k-svg-icon", "k-button"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
