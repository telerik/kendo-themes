import "./theme.env.js";
import { TimeSelector } from "../../packages/html/src/time-selector/time-selector.spec";
import { testKendoComponent } from "../utility";

const component = TimeSelector.moduleName;
const group = component;
const className = TimeSelector.className;

const dependencyClassNames = [
    "k-button",
    "k-action-buttons",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
