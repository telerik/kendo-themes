import "./theme.env.js";
import { Button } from "../../packages/html/src/button/button.spec";
import { testKendoComponent } from "../utility";

const component = Button.moduleName;
const group = component;
const className = Button.className;

const dependencyClassNames = ["k-badge", "k-svg-icon"];

const expected = [
    "kendo-button-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-button-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-button-font-size", // Variable customizations work, but is used by another variable.
    "kendo-button-line-height", // Variable customizations work, but is used by another variable.
    "kendo-button-sm-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-md-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-lg-calc-size", // Variable customizations work, but is used by another variable.
    "kendo-button-inner-calc-size", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
