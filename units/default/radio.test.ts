import "./theme.env.js";
import { RadioButton } from "../../packages/html/src/radio/radio.spec";
import { testKendoComponent } from "../utility";

const component = RadioButton.moduleName;
const group = component;
const className = RadioButton.className;

const dependencyClassNames = [];

const expected = [
    "kendo-radio-indicator-type", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-radio-glyph-font-family", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-radio-checked-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
