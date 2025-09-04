import "./theme.env.js";
import { Gantt } from "../../packages/html/src/gantt/gantt.spec";
import { testKendoComponent } from "../utility";

const component = Gantt.moduleName;
const group = component;
const className = Gantt.className;

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
