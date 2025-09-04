import "./theme.env.js";
import { Toolbar } from "../../packages/html/src/toolbar/toolbar.spec";
import { testKendoComponent } from "../utility";

const component = Toolbar.moduleName;
const group = component;
const className = Toolbar.className;

const dependencyClassNames = ["k-button", "k-popup", "k-menu", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
