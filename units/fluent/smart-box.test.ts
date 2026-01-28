import "./theme.env.js";
import { SmartBox } from "../../packages/html/src/smart-box/smart-box.spec.js";
import { testKendoComponent } from "../utility.js";

const component = SmartBox.moduleName;
const group = component;
const className = SmartBox.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
