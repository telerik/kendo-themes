require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "time-duration-picker";
const group = component;
// const className = "k-time-duration-picker"; // .k-time-duration-picker {} selector is missing
const className = null;

const dependencyClassNames = [
    "k-svg-icon",
    "k-button",
    "k-input",
    "k-popup",
    "k-list",
    "k-timeselector",

];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
