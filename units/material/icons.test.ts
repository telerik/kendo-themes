import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "icon"; // Component has no moduleName
const group = component;
const className = "k-svg-icon";

const dependencyClassNames = [];

const expected = [
    "kendo-icon-size", // Variable customizations work, but is used by another variable.
    "kendo-icon-spacing", // Variable customizations work, but is used by another variable.
    "kendo-icon-padding", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
