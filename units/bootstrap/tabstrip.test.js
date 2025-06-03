require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "tabstrip";
const group = component;
const className = "k-tabstrip";

const dependencyClassNames = [
    "k-button",
    "k-svg-icon",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
