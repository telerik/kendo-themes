import "./theme.env.js";
import { ActionButtons } from "../../packages/html/src/action-buttons/action-buttons.spec";
import { testKendoComponent } from "../utility";

const component = ActionButtons.moduleName;
const group = component;
const className = ActionButtons.className;

const dependencyClassNames = ["k-button"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
