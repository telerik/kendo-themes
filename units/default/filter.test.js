require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "filter";
const group = component;
const className = "k-filter";

const dependencyClassNames = [
    "k-button",
    "k-input",
    "k-checkbox",
    // "k-datetimepicker", // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    "k-dropdownlist",
    // "k-numerictextbox", // Empty selector for .k-numerictextbox {}
    "k-toolbar"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
