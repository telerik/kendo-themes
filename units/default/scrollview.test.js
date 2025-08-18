require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "scrollview";
const group = component;
const className = "k-scrollview";

const dependencyClassNames = ["k-button", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
