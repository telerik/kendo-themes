import "./theme.env.js";
import { ColumnMenu } from "../../packages/html/src/column-menu/column-menu.spec";
import { testKendoComponent } from "../utility";

const component = ColumnMenu.moduleName;
const group = component;
// const className = ColumnMenu.className; // .k-column-menu {} selector is empty
const className = null;

const dependencyClassNames = [];

const expected = [];

const unexpected = [
    "kendo-column-menu-font-size", // Variable is not consumed by the theme styles.,
    "kendo-column-menu-line-height", // Variable is not consumed by the theme styles.,
    "kendo-column-menu-font-family" // Variable is not consumed by the theme styles.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
