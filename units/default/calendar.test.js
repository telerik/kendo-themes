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

const unexpected = [
    "kendo-calendar-cell-line-height", // Variable customizations do not work.
    "kendo-calendar-header-cell-bg", // Variable customizations do not work.
    "kendo-calendar-cell-bg", // Variable customizations do not work.
    "kendo-calendar-cell-text", // Variable customizations do not work.
    "kendo-calendar-cell-gradient" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
