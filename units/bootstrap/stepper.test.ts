import "./theme.env.js";
import { Stepper } from "../../packages/html/src/stepper/stepper.spec";
import { testKendoComponent } from "../utility";

const component = Stepper.moduleName;
const group = component;
const className = Stepper.className;

const dependencyClassNames = [
    "k-svg-icon",
    "k-progressbar"
];

const expected = [
   "kendo-stepper-indicator-focus-offset" // Variable customizations work, but is used for calculations.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
