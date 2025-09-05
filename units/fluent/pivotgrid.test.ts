import "./theme.env.js";
import { PivotGrid } from "../../packages/html/src/pivotgrid/pivotgrid.spec";
import { testKendoComponent } from "../utility";

const component = PivotGrid.moduleName;
const group = component;
const className = PivotGrid.className;

const dependencyClassNames = [
    "k-dialog",
    "k-treeview",
    "k-grid",
    "k-svg-icon",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
