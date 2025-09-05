import "./theme.env.js";
import { DockManager } from "../../packages/html/src/dock-manager/dock-manager.spec";
import { testKendoComponent } from "../utility";

const component = DockManager.moduleName;
const group = component;
const className = DockManager.className;

const dependencyClassNames = ["k-splitter", "k-toolbar", "k-tabstrip"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
