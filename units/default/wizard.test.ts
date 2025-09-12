import "./theme.env.js";
import { Wizard } from "../../packages/html/src/wizard/wizard.spec";
import { testKendoComponent } from "../utility";

const component = Wizard.moduleName;
const group = component;
const className = Wizard.className;

const dependencyClassNames = [
    "k-button",
    "k-stepper",
    "k-form",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
