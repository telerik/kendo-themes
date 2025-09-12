import "./theme.env.js";
import { ColorPicker } from "../../packages/html/src/colorpicker/colorpicker.spec";
import { testKendoComponent } from "../utility";

const component = ColorPicker.moduleName;
const group = component;
const className = ColorPicker.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
