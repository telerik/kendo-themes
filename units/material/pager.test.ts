import "./theme.env.js";
import { Pager } from "../../packages/html/src/pager/pager.spec";
import { testKendoComponent } from "../utility";

const component = Pager.moduleName;
const group = component;
const className = Pager.className;

const dependencyClassNames = [
    "k-dropdownlist",
    "k-svg-icon",
    "k-button"
];

const expected = [
    "kendo-pager-padding-x", // Variable customizations works, but is used by another variable.
    "kendo-pager-item-border-width" // Variable customizations work, but is used for calculations.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
