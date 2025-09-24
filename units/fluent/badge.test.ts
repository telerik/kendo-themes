import "./theme.env.js";
import { Badge } from "../../packages/html/src/badge/badge.spec";
import { testKendoComponent } from "../utility";

const component = Badge.moduleName;
const group = component;
const className = Badge.className;

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
