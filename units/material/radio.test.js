require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "radio";
const group = component;
const className = "k-radio";

const dependencyClassNames = [];

const expected = [
    "kendo-radio-indicator-type", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-radio-glyph-font-family", // Variable customizations work, but is used directly in CSS rule in the core.
    "kendo-radio-checked-glyph", // Variable customizations work, but is used directly in CSS rule in the core.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
