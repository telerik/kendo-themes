require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "checkbox";
const group = component;
const className = "k-checkbox";

const dependencyClassNames = [];

const expected = [
    "kendo-checkbox-indicator-type", // Variable customizations work, but is used by another variable.
    "kendo-checkbox-glyph-font-family", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-checkbox-checked-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-checkbox-indeterminate-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
