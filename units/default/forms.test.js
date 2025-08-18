require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "form";
const group = component;
const className = "k-form";

const dependencyClassNames = [
    "k-toolbar",
    "k-actions"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
