import "./theme.env.js";
import { ActionSheet } from "../../packages/html/src/action-sheet/action-sheet.spec";
import { testKendoComponent } from "../utility";

const component = ActionSheet.moduleName;
const group = component;
const className = ActionSheet.className;

const dependencyClassNames = ["k-svg-icon", "k-listgroup", "k-popup"];

const expected = [];

const unexpected = [
    "kendo-actionsheet-item-border-width", // Variable is not consumed by the theme styles.,
    "kendo-actionsheet-item-hover-background", // Variable is not consumed by the theme styles.,
    "kendo-actionsheet-item-focus-background", // Variable is not consumed by the theme styles.,
    "kendo-actionsheet-item-disabled-opacity", // Variable is not consumed by the theme styles.,
    "kendo-adaptive-actionsheet-titlebar-border" // Variable is not consumed by the theme styles.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
