import "./theme.env.js";
import { Badge } from "../../packages/html/src/badge/badge.spec";
import { testKendoComponent } from "../utility";

const component = Badge.moduleName;
const group = component;
const className = Badge.className;

const dependencyClassNames = ["k-svg-icon"];

const expected = [
    "kendo-badge-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-badge-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-badge-font-size", // Variable customizations work, but is used by another variable.
    "kendo-badge-line-height", // Variable customizations work, but is used by another variable.
    "kendo-badge-min-width", // Variable customizations work, but is used by another variable.
    "kendo-badge-border-width", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
