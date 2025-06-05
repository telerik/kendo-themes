require("./theme.env.js")
const { testKendoComponent } = require("../utility");

const component = "file-manager";
const group = component;
const className = "k-filemanager";

const dependencyClassNames = [
    "k-input",
    "k-toolbar",
    "k-upload",
    "k-switch",
    "k-menu",
    "k-dialog",
    "k-breadcrumb",
    "k-treeview",
    "k-splitter",
    "k-grid",
    "k-listview"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
