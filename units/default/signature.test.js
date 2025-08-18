require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "signature";
const group = component;
const className = "k-signature";

const dependencyClassNames = [
    "k-button",
    "k-input"
];

const expected = [];
const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
