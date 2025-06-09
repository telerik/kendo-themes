require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "pdf-viewer";
const group = component;
const className = "k-pdf-viewer";

const dependencyClassNames = [
    // "k-combobox", // The .k-combobox selector is empty.
    "k-toolbar",
    "k-dialog",
    "k-pager",
    "k-svg-icon",
    "k-external-dropzone", // The dependency is to kendo-dropzone--styles()
    "k-window"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
