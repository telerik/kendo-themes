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
    "kendo-taskboard-spacer", // Variable customizations work, but is used by another variable.
    "kendo-taskboard-pane-padding-x" // Variable customizations work, but is used by another variable.
];

const unexpected = [
    "kendo-taskboard-card-focus-shadow", // This variable is used in Core
    "kendo-taskboard-card-selected-border" // This variable is used in Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
