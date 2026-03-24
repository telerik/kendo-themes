import "./theme.env.js";
import { Scheduler } from "../../packages/html/src/scheduler/scheduler.spec";
import { testKendoComponent } from "../utility";

const component = Scheduler.moduleName;
const group = component;
const className = Scheduler.className;

const dependencyClassNames = [
    "k-svg-icon",
    // @include kendo-adaptive--styles();
    "k-button",
    // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    // "k-dropdownlist", // @extend .k-dropdown-list, which is empty.
    "k-dialog",
    "k-tooltip",
    "k-current-time" // kendo-time-marker--styles()
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
