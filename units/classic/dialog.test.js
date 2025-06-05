require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "dialog";
const group = component;
const className = "k-dialog";

const dependencyClassNames = ["k-window"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
