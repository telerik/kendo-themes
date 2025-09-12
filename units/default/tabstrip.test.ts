import "./theme.env.js";
import { TabStrip } from "../../packages/html/src/tabstrip/tabstrip.spec";
import { testKendoComponent } from "../utility";

const component = TabStrip.moduleName;
const group = component;
const className = TabStrip.className;

const dependencyClassNames = [
    "k-button",
    "k-svg-icon",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
