import "./theme.env.js";
import { FloatingActionButton } from "../../packages/html/src/fab/fab.spec";
import { testKendoComponent } from "../utility";

const component = FloatingActionButton.moduleName;
const group = "floating-action-button";
const className = FloatingActionButton.className;

const dependencyClassNames = ["k-button", "k-badge", "k-svg-icon"];

const expected = [
    "kendo-fab-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-fab-padding-y", // Variable customizations work, but is used by another variable.
];
const unexpected = [
    "kendo-fab-border-width", // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
