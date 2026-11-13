import "./theme.env.js";
import { FloatingToolbar } from "../../packages/html/src/floating-toolbar/floating-toolbar.spec";
import { testKendoComponent } from "../utility";

const component = FloatingToolbar.moduleName;
const group = component;
const className = FloatingToolbar.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
