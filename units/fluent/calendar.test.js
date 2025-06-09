require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "calendar";
const group = component;
const className = "k-calendar";

const dependencyClassNames = ["k-button", "k-svg-icon", "k-list"];

const expected = [
    "kendo-calendar-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-sm-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-md-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-lg-cell-size", // Variable customizations work, but is used by another variable.
    "kendo-calendar-cell-padding-y" // Variable customizations work, but is used by another variable in calculations.
];

const unexpected = [
    "kendo-calendar-cell-padding-x", // This variable is used in the Core
    "kendo-calendar-today-box-shadow", // This variable is used in the Core
    "kendo-calendar-cell-selected-border" // This variable is used in the Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
