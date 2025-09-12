import "./theme.env.js";
import { FileManager } from "../../packages/html/src/filemanager/filemanager.spec";
import { testKendoComponent } from "../utility";

const component = FileManager.moduleName;
const group = component;
const className = FileManager.className;

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
