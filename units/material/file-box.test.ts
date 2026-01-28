import "./theme.env.js";
import { FileBox } from "../../packages/html/src/file-box/file-box.spec";
import { testKendoComponent } from "../utility";

const component = FileBox.moduleName;
const group = component;
const className = FileBox.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
