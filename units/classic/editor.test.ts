import "./theme.env.js";
import { Editor } from "../../packages/html/src/editor/editor.spec";
import { testKendoComponent } from "../utility";

const component = Editor.moduleName;
const group = component;
const className = Editor.className;

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
