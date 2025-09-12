import "./theme.env.js";
import { Dropzone } from "../../packages/html/src/dropzone/dropzone.spec";
import { testKendoComponent } from "../utility";

const component = Dropzone.moduleName;
const group = component;
const className = Dropzone.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
