import "./theme.env.js";
import { PanelBar } from "../../packages/html/src/panelbar/panelbar.spec";
import { testKendoComponent } from "../utility";

const component = PanelBar.moduleName;
const group = component;
const className = PanelBar.className;

const dependencyClassNames = ["k-svg-icon", "k-list"];

const expected = [
    "kendo-panelbar-item-level-count", // Variable customizations work, but is used by another variable.
];

const unexpected = [
    "kendo-panelbar-header-expanded-border" // This variable is used in the Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
