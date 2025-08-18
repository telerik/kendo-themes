require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "action-sheet";
const group = component;
const className = "k-actionsheet";

const dependencyClassNames = ["k-svg-icon", "k-listgroup", "k-popup"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
