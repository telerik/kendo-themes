require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "dropdown-tree";
const group = component;
// const className = "k-dropdown-tree"; // .k-dropdown-tree {} selector is empty
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

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
