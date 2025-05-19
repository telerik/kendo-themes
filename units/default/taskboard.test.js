require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "task-board";
const group = "taskboard";
const className = "k-taskboard";

const dependencyClassNames = [
    "k-svg-icon",
    "k-form",
    "k-input",
    // "k-textbox", // .k-textbox {} selector is empty.
    // "k-searchbox", // .k-searchbox {} selector is empty.
    "k-toolbar",
    "k-card"
];

const expected = [
    "kendo-taskboard-spacer" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
