import "./theme.env.js";
import { MenuButton } from "../../packages/html/src/menu-button/menu-button.spec";
import { testKendoComponent } from "../utility";

const component = MenuButton.moduleName;
const group = component;
const className = MenuButton.className;

const dependencyClassNames = ["k-button", "k-menu"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
