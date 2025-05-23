require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "pager";
const group = component;
const className = "k-pager";

const dependencyClassNames = [
    "k-dropdownlist",
    "k-svg-icon",
    "k-button"
];

const expected = [
    "kendo-pager-padding-x", // Variable customizations works, but is used by another variable.
    "kendo-pager-item-border-width" // Variable customizations work, but is used for calculations.
];

const unexpected = [
    "kendo-pager-padding-y", // Variable customizations do not work.
    "kendo-pager-section-spacing", // Variable customizations do not work.
    "kendo-pager-item-border-radius", // Variable customizations works only in Bootstrap.
    "kendo-pager-item-bg", // Variable customizations works only in Bootstrap and is used by another variable.
    "kendo-pager-item-text", // Variable customizations do not work.
    "kendo-pager-item-border", // Variable customizations works only in Bootstrap.
    "kendo-pager-item-hover-bg", // Variable customizations do not work.
    "kendo-pager-item-hover-text", // Variable customizations do not work.
    "kendo-pager-item-hover-border", // Variable customizations do not work.
    "kendo-pager-item-selected-bg", // Variable customizations works only in Bootstrap and is used by another variable.
    "kendo-pager-item-selected-text", // Variable customizations do not work.
    "kendo-pager-item-selected-border", // Variable customizations do not work.
    "kendo-pager-item-focus-opacity", // Variable customizations do not work.
    "kendo-pager-item-focus-bg", // Variable customizations do not work.
    "kendo-pager-item-focus-shadow", // Variable customizations do not work.
    "kendo-pager-number-border-radius", // Variable customizations works only in Material.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
