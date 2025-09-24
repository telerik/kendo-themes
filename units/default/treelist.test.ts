import "./theme.env.js";
import { TreeList } from "../../packages/html/src/treelist/treelist.spec";
import { testKendoComponent } from "../utility";

const component = TreeList.moduleName;
const group = component;
const className = TreeList.className;

const dependencyClassNames = ["k-grid", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
