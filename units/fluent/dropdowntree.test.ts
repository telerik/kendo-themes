import "./theme.env.js";
import { DropdownTree } from "../../packages/html/src/dropdowntree/dropdowntree.spec";
import { testKendoComponent } from "../utility";

const component = DropdownTree.moduleName;
const group = "dropdowntree";
// const className = DropdownTree.className; // .k-dropdown-tree {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-floating-label-container",
    // "k-dropdownlist",  // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
    // "k-multiselect",  // .k-multiselect {} selector is empty
    "k-treeview"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
