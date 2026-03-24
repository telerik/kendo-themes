import "./theme.env.js";
import { Window } from "../../packages/html/src/window/window.spec";
import { testKendoComponent } from "../utility";

const component = Window.moduleName;
const group = component;
const className = Window.className;

const dependencyClassNames = ["k-overlay", "k-form", "k-button", "k-actions", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
