import "./theme.env.js";
import { ColumnMenu } from "../../packages/html/src/column-menu/column-menu.spec";
import { testKendoComponent } from "../utility";

const component = ColumnMenu.moduleName;
const group = component;
// const className = ColumnMenu.className; // .k-column-menu {} selector is empty
const className = null;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
