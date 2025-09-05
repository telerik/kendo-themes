import "./theme.env.js";
import { Upload } from "../../packages/html/src/upload/upload.spec";
import { testKendoComponent } from "../utility";

const component = Upload.moduleName;
const group = component;
const className = Upload.className;

const dependencyClassNames = ["k-button", "k-actions", "k-svg-icon", "k-dropzone"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
