import "./theme.env.js";
import { Treeview } from "../../packages/html/src/treeview/treeview.spec";
import { testKendoComponent } from "../utility";

const component = Treeview.moduleName;
const group = component;
const className = Treeview.className;

const dependencyClassNames = ["k-checkbox", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
