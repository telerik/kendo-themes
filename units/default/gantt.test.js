require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "gantt";
const group = component;
const className = "k-gantt";

const dependencyClassNames = [
    "k-button",
    "k-input",
    // "k-validator", // Empty selector for .k-validator {}
    // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    "k-numerictextbox",
    "k-window",
    "k-splitter",
    "k-treelist",
    "k-current-time" // kendo-time-marker--styles();
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
