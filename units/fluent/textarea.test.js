require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "textarea";
const group = component;
const className = "k-textarea";

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
