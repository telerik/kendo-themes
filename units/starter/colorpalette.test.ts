import "./theme.env.js";
import { ColorPalette } from "../../packages/html/src/colorpalette/colorpalette.spec";
import { testKendoComponent } from "../utility";

const component = ColorPalette.moduleName;
const group = component;
const className = ColorPalette.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
