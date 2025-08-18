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
    "kendo-calendar-navigation-item-height", // Variable customizations work, but is used by another variable.
    "kendo-calendar-today-style" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
