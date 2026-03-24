import "./theme.env.js";
import { Tooltip } from "../../packages/html/src/tooltip/tooltip.spec";
import { testKendoComponent } from "../utility";

const component = Tooltip.moduleName;
const group = component;
const className = Tooltip.className;

const dependencyClassNames = ["k-popup", "k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
