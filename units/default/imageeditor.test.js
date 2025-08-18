require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "image-editor";
const group = component;
const className = "k-imageeditor";

const dependencyClassNames = [
    "k-toolbar",
    "k-form",
    // "k-dropdownlist", // .k-dropdownlist {} @extend .k-dropdown-list; .k-dropdown-list{} is empty;
    // "k-numerictextbox", // Empty selector for .k-numerictextbox {}
    "k-checkbox"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
