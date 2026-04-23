import "./theme.env.js";
import { DropdownGrid } from "../../packages/html/src/dropdowngrid/dropdowngrid.spec";
import { testKendoComponent } from "../utility";

const component = DropdownGrid.moduleName;
const group = component;
// const className = DropdownGrid.className; // .k-dropdowngrid {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-svg-icon",
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-table"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
