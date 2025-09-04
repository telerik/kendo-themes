import "./theme.env.js";
import { ImageEditor } from "../../packages/html/src/imageeditor/imageeditor.spec";
import { testKendoComponent } from "../utility";

const component = ImageEditor.moduleName;
const group = component;
const className = ImageEditor.className;

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
