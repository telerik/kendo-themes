import "./theme.env.js";
import { TabStrip } from "../../packages/html/src/tabstrip/tabstrip.spec";
import { testKendoComponent } from "../utility";

const component = TabStrip.moduleName;
const group = component;
const className = TabStrip.className;

const dependencyClassNames = [
    "k-button",
    "k-svg-icon",
    "k-list"
];

const expected = [
    "kendo-tabstrip-item-border-width", // Variable customizations work, but is used for calculations.
    "kendo-tabstrip-item-border-radius" // Variable customizations work, but is used in the column menu.
];

const unexpected = [
    "kendo-tabstrip-wrapper-border-width", // This variable is used in Core
    "kendo-tabstrip-item-selected-border", // This variable is used in Core
    "kendo-tabstrip-content-border-width" // This variable is used in Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
