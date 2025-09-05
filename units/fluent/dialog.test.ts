import "./theme.env.js";
import { Dialog } from "../../packages/html/src/dialog/dialog.spec";
import { testKendoComponent } from "../utility";

const component = Dialog.moduleName;
const group = component;
const className = Dialog.className;

const dependencyClassNames = ["k-window"];

const expected = [];

const unexpected = [
    "kendo-dialog-button-spacing" // This variable is used in the Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
