import "./theme.env.js";
import { TimeDurationPicker } from "../../packages/html/src/timedurationpicker/timedurationpicker.spec";
import { testKendoComponent } from "../utility";

const component = TimeDurationPicker.moduleName;
const group = component;
// const className = TimeDurationPicker.className; // .k-time-duration-picker {} selector is missing
const className = null;

const dependencyClassNames = [
    "k-svg-icon",
    "k-button",
    "k-input",
    "k-popup",
    "k-list",
    "k-timeselector",

];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
