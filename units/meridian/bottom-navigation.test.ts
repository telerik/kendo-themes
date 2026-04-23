import "./theme.env.js";
import { BottomNav } from "../../packages/html/src/bottom-nav/bottom-nav.spec";
import { testKendoComponent } from "../utility";

const component = BottomNav.moduleName;
const group = component;
const className = BottomNav.className;

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
