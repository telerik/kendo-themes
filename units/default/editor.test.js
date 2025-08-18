require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "editor";
const group = component;
const className = "k-editor";

const dependencyClassNames = [
    "k-button",
    "k-checkbox",
    "k-colorpicker",
    // "k-combobox", // The .k-combobox selector is empty.
    // "k-dropdownlist", // @extend .k-dropdown-list, which is empty.
    "k-toolbar",
    "k-upload",
    "k-window"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
