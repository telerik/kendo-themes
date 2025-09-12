import "./theme.env.js";
import { ColorGradient } from "../../packages/html/src/colorgradient/color-gradient.spec";
import { testKendoComponent } from "../utility";

const component = ColorGradient.moduleName;
const group = component;
const className = ColorGradient.className;

const dependencyClassNames = [
    "k-svg-icon",
    "k-button",
    "k-slider",
    // "k-textbox", // .k-textbox {} selector is empty
    "k-numerictextbox"
];

const expected = [
    "kendo-color-gradient-spacer" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
