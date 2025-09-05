import "./theme.env.js";
import { List } from "../../packages/html/src/list/list.spec";
import { testKendoComponent } from "../utility";

const component = List.moduleName;
const group = component;
const className = List.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [
    "kendo-list-filter-padding-y", // This variable is used in the Core
    "kendo-list-item-bg", // Variable customizations work, but is used by another variable.
    "kendo-list-item-text" // Variable customizations work, but is used by another variable.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);


