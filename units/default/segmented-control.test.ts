import "./theme.env.js";
import { SegmentedControl } from "../../packages/html/src/segmented-control/segmented-control.spec.js";
import { testKendoComponent } from "../utility.js";

const component = SegmentedControl.moduleName;
const group = component;
const className = SegmentedControl.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
