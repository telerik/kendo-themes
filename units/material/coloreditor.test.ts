import "./theme.env.js";
import { ColorEditor } from "../../packages/html/src/coloreditor/color-editor.spec";
import { testKendoComponent } from "../utility";

const component = ColorEditor.moduleName;
const group = component;
const className = ColorEditor.className;

const dependencyClassNames = [
    "k-actions",
    "k-color-preview",
    "k-colorpalette",
    "k-colorgradient"
];

const expected = [
    "kendo-color-editor-spacer", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
