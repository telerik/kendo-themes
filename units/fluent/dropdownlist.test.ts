import "./theme.env.js";
import { DropdownList } from "../../packages/html/src/dropdownlist/dropdownlist.spec";
import { testKendoComponent } from "../utility";

const component = DropdownList.moduleName;
const group = component;
// const className = DropdownList.className; // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-list",
    "k-floating-label-container"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
