import "./theme.env.js";
import { TimePicker } from "../../packages/html/src/timepicker/timepicker.spec";
import { testKendoComponent } from "../utility";

const component = TimePicker.moduleName;
const group = component;
// const className = TimePicker.className; // .k-timepicker {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-popup",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
