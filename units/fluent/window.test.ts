import "./theme.env.js";
import { Window } from "../../packages/html/src/window/window.spec";
import { testKendoComponent } from "../utility";

const component = Window.moduleName;
const group = component;
const className = Window.className;

const dependencyClassNames = ["k-overlay", "k-form", "k-button", "k-actions", "k-svg-icon"];

const expected = [];

const unexpected = [
    "kendo-window-titlebar-border-width", // This variable is used in Core
    "kendo-window-titlebar-border-style" // This variable is used in Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
