import "./theme.env.js";
import { ProgressBar } from "../../packages/html/src/progressbar/progressbar.spec";
import { testKendoComponent } from "../utility";

const component = ProgressBar.moduleName;
const group = component;
const className = ProgressBar.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [
    "kendo-progressbar-animation-timing" // This variable is used in the Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
