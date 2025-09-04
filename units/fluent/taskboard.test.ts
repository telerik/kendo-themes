import "./theme.env.js";
import { TaskBoard } from "../../packages/html/src/taskboard/taskboard.spec";
import { testKendoComponent } from "../utility";

const component = TaskBoard.moduleName;
const group = "taskboard";
const className = TaskBoard.className;

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
