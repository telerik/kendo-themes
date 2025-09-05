import "./theme.env.js";
import { Chip } from "../../packages/html/src/chip/chip.spec";
import { testKendoComponent } from "../utility";

const component = Chip.moduleName;
const group = component;
const className = Chip.className;

const dependencyClassNames = ["k-svg-icon"];

const expected = [
    "kendo-chip-calc-size", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
