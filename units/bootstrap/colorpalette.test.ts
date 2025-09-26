import "./theme.env.js";
import { ColorPalette } from "../../packages/html/src/colorpalette/colorpalette.spec";
import { testKendoComponent } from "../utility";

const component = ColorPalette.moduleName;
const group = component;
const className = ColorPalette.className;

const dependencyClassNames = [];

const expected = [
    "kendo-color-palette-tile-width", // Variable customizations work, but is used by another variable.
    "kendo-color-palette-tile-height", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
