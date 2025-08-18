require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "date-time-picker";
const group = component;
//  className = "k-datetimepicker"; // .k-datetimepicker {} selector is missing
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-popup",
    "k-list",
    "k-calendar",
    "k-timeselector",
    "k-actions"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
