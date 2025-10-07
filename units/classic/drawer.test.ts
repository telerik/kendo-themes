import "./theme.env.js";
import { Drawer } from "../../packages/html/src/drawer/drawer.spec";
import { testKendoComponent } from "../utility";

const component = Drawer.moduleName;
const group = component;
const className = Drawer.className;

const dependencyClassNames = ["k-list", "k-toolbar", "k-overlay"];

const expected = [
    "kendo-drawer-item-level-count", // Variable customizations work, but is used by map iterations.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
