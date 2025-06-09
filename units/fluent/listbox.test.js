require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "listbox";
const group = component;
const className = "k-listbox";

const dependencyClassNames = [
    "k-button",
    "k-popup",
    "k-list",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
