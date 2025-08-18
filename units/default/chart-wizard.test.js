require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "chart-wizard";
const group = component;
const className = "k-chart-wizard";

const dependencyClassNames = [
    "k-svg-icon",
    "k-window",
    "k-splitter",
    // "k-dataviz",
    "k-expander",
    "k-grid",
    "k-tabstrip",
    "k-listview",
    "k-form",
    // "k-combobox" // The .k-combobox selector is empty.
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
