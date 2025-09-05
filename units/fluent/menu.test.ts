import "./theme.env.js";
import { Menu } from "../../packages/html/src/menu/menu.spec";
import { testKendoComponent } from "../utility";

const component = Menu.moduleName;
const group = component;
const className = Menu.className;

const dependencyClassNames = ["k-popup", "k-list", "k-svg-icon", "k-button"];

const expected = [];

const unexpected = [
    "kendo-menu-scroll-button-bg", // This variable is used in Core
    "kendo-menu-scroll-button-border", // This variable is used in Core
    "kendo-menu-scroll-button-hover-bg", // This variable is used in Core
    "kendo-menu-scroll-button-hover-border" // This variable is used in Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
