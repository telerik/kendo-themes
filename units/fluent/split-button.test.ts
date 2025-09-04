import "./theme.env.js";
import { SplitButton } from "../../packages/html/src/split-button/split-button.spec";
import { testKendoComponent } from "../utility";

const component = SplitButton.moduleName;
const group = component;
const className = SplitButton.className;

const dependencyClassNames = ["k-button", "k-menu"];

const expected = [];

const unexpected = [
    "kendo-split-button-sm-arrow-padding-x", // This variable is used in the Core
    "kendo-split-button-lg-arrow-padding-x" // This variable is used in the Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
