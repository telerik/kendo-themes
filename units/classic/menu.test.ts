import "./theme.env.js";
import { Menu } from "../../packages/html/src/menu/menu.spec";
import { testKendoComponent } from "../utility";

const component = Menu.moduleName;
const group = component;
const className = Menu.className;

const dependencyClassNames = ["k-popup", "k-list", "k-svg-icon", "k-button"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
