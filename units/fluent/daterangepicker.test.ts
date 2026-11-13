import "./theme.env.js";
import { DateRangePicker } from "../../packages/html/src/daterangepicker/daterangepicker.spec";
import { testKendoComponent } from "../utility";

const component = DateRangePicker.moduleName;
const group = component;
const className = DateRangePicker.className;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-svg-icon"
];

const expected = [];

const unexpected = [
    "kendo-daterange-picker-width" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
