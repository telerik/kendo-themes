import "./theme.env.js";
import { NumericTextbox } from "../../packages/html/src/numerictextbox/numerictextbox.spec";
import { testKendoComponent } from "../utility";

const component = NumericTextbox.moduleName;
const group = component;
// const className = NumericTextbox.className; // .k-numerictextbox {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
