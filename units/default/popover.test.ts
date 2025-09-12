import "./theme.env.js";
import { Popover } from "../../packages/html/src/popover/popover.spec";
import { testKendoComponent } from "../utility";

const component = Popover.moduleName;
const group = component;
const className = Popover.className;

const dependencyClassNames = ["k-card", "k-popup"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
