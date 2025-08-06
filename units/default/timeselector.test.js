require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "time-selector";
const group = component;
const className = "k-timeselector";

const dependencyClassNames = [
    "k-button",
    "k-action-buttons",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
