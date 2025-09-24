import "./theme.env.js";
import { Input } from "../../packages/html/src/input/input.spec";
import { testKendoComponent } from "../utility";

const component = Input.moduleName;
const group = component;
const className = Input.className;

const dependencyClassNames = ["k-button"];

const expected = [
    "kendo-input-border-width", // Variable customizations work, but is used by another variable.
    "kendo-input-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-input-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-input-font-size", // Variable customizations work, but is used by another variable.
    "kendo-input-line-height", // Variable customizations work, but is used by another variable.
    "kendo-input-sm-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-input-md-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-input-lg-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-input-spinner-icon-offset", // Variable customizations work but needs "kendo-use-input-spinner-icon-offset" variable to be true.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
