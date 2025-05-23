require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "timeline";
const group = component;
const className = "k-timeline";

const dependencyClassNames = [
    "k-button",
    "k-card",
    "k-svg-icon"
];

const expected = [
    "kendo-timeline-flag-offset-bottom", // Variable customizations work, but is used by another variable in calculations.
    "kendo-timeline-date-width", // Variable customizations work, but is used by another variable in calculations.
];

const unexpected = [
    "kendo-timeline-collapse-arrow-padding-x" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
