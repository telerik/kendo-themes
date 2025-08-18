require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "panelbar";
const group = component;
const className = "k-panelbar";

const dependencyClassNames = ["k-svg-icon", "k-list"];

const expected = [
    "kendo-panelbar-item-level-count", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
