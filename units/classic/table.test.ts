import "./theme.env.js";
import { Table } from "../../packages/html/src/table/table.spec";
import { testKendoComponent } from "../utility";

const component = Table.moduleName;
const group = component;
const className = Table.className;

const dependencyClassNames = [];

const expected = [
    "kendo-table-header-gradient", // Variable customizations work, but is used by another variable.
    "kendo-table-highlighted-bg", // Variable customizations work, but is used by another variable.
    "kendo-table-highlighted-font-weight", // Variable customizations work, but is used by another variable.
    "kendo-table-selected-highlighted-bg", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
