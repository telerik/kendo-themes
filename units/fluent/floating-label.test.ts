import "./theme.env.js";
import { FloatingLabel } from "../../packages/html/src/floating-label/floating-label.spec";
import { testKendoComponent } from "../utility";

const component = FloatingLabel.moduleName;
const group = component;
const className = FloatingLabel.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
