import "./theme.env.js";
import { TimeSelector } from "../../packages/html/src/time-selector/time-selector.spec";
import { testKendoComponent } from "../utility";

const component = TimeSelector.moduleName;
const group = component;
const className = TimeSelector.className;

const dependencyClassNames = [
    "k-button",
    "k-action-buttons",
    "k-list"
];

const expected = [];

const unexpected = [
    "kendo-time-selector-header-border-width", // Variable customizations do not work.,
    "kendo-time-selector-fast-selection-gap", // Variable customizations do not work.,
    "kendo-time-selector-now-button-text", // Variable customizations do not work.,
    "kendo-time-selector-now-button-hover-text" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
