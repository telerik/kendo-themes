require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "tabstrip";
const group = component;
const className = "k-tabstrip";

const dependencyClassNames = [
    "k-button",
    "k-svg-icon",
    "k-list"
];

const expected = [
    "kendo-tabstrip-item-border-width", // Variable customizations work, but is used for calculations.
    "kendo-tabstrip-item-border-radius" // Variable customizations work, but is used in the column menu.
];

const unexpected = [
    "kendo-tabstrip-wrapper-border-width", // This variable is used in Core
    "kendo-tabstrip-item-selected-border", // This variable is used in Core
    "kendo-tabstrip-content-border-width" // This variable is used in Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
