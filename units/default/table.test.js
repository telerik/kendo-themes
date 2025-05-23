require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "table";
const group = component;
const className = "k-table";

const dependencyClassNames = [];

const expected = [
    "kendo-table-header-gradient" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
