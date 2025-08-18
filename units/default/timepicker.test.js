require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "time-picker";
const group = component;
// const className = "k-timepicker"; // .k-timepicker {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-popup",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
