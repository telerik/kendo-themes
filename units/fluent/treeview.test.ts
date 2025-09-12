import "./theme.env.js";
import { Treeview } from "../../packages/html/src/treeview/treeview.spec";
import { testKendoComponent } from "../utility";

const component = Treeview.moduleName;
const group = component;
const className = Treeview.className;

const dependencyClassNames = ["k-checkbox", "k-svg-icon"];

const expected = [
    "kendo-treeview-item-bg", // Variable customizations work, but is used by another variable.
    "kendo-treeview-item-text", // Variable customizations work, but is used by another variable.
    "kendo-treeview-item-border", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
