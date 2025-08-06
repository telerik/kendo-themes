require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "expander";
const group = component;
const className = "k-expander";

const dependencyClassNames = [
    "k-svg-icon",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
