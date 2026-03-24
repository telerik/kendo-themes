import "./theme.env.js";
import { Switch } from "../../packages/html/src/switch/switch.spec";
import { testKendoComponent } from "../utility";

const component = Switch.moduleName;
const group = component;
const className = Switch.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
