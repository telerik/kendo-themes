require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "drawer";
const group = component;
const className = "k-drawer";

const dependencyClassNames = ["k-list", "k-toolbar", "k-overlay"];

const expected = [
    "kendo-drawer-item-level-count", // Variable customizations work, but is used by map iterations.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
