require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "date-picker";
const group = component;
// const className = "k-datepicker"; // .k-datepicker {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-calendar"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
