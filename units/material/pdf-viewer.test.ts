import "./theme.env.js";
import { PDFViewer } from "../../packages/html/src/pdf-viewer/pdf-viewer.spec";
import { testKendoComponent } from "../utility";

const component = PDFViewer.moduleName;
const group = component;
const className = PDFViewer.className;

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
