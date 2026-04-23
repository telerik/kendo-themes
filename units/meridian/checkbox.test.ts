import "./theme.env.js";
import { Checkbox } from "../../packages/html/src/checkbox/checkbox.spec";
import { testKendoComponent } from "../utility";

const component = Checkbox.moduleName;
const group = component;
const className = Checkbox.className;

const dependencyClassNames = [];

const expected = [
    "kendo-checkbox-indicator-type", // Variable customizations work, but is used by another variable.
    "kendo-checkbox-glyph-font-family", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-checkbox-checked-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-checkbox-indeterminate-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
