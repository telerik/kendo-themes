import "./theme.env.js";
import { Input } from "../../packages/html/src/input/input.spec";
import { testKendoComponent } from "../utility";

const component = Input.moduleName;
const group = component;
const className = Input.className;

const dependencyClassNames = ["k-button"];

const expected = [
    "kendo-input-border-width", // Variable customizations work, but is used by another variable.
    "kendo-input-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-input-spinner-icon-offset", // Variable customizations work but needs "kendo-use-input-spinner-icon-offset" variable to be true.
];

const unexpected = [
    "kendo-input-border-height", // Variable customizations do not work.
    "kendo-input-button-border-width", // Variable customizations do not work.
    "kendo-input-sm-spinner-width", // Variable customizations do not work.
    "kendo-input-md-spinner-width", // Variable customizations do not work.
    "kendo-input-lg-spinner-width", // Variable customizations do not work.
    "kendo-input-flat-hover-focus-text", // Variable customizations do not work.
    "kendo-picker-solid-hover-focus-text", // Variable customizations do not work.
    "kendo-picker-flat-hover-focus-text", // Variable customizations do not work.
    "kendo-input-prefix-bg", // Variable customizations do not work.
    "kendo-input-suffix-bg", // Variable customizations do not work.
    "kendo-input-suffix-disabled-text", // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
