require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "map";
const group = component;
const className = "k-map";

const dependencyClassNames = [
    "k-button",
    // "k-scroller", // no specific k-scroller class name; there are multiple km-{} classes
    "k-svg-icon"
];

const expected = [
    "kendo-map-zoom-control-button-padding-x" // Variable customizations work, but is used by another variable.
];
const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
