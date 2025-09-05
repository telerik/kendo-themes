import "./theme.env.js";
import { ActionSheet } from "../../packages/html/src/action-sheet/action-sheet.spec";
import { testKendoComponent } from "../utility";

const component = ActionSheet.moduleName;
const group = component;
const className = ActionSheet.className;

const dependencyClassNames = ["k-svg-icon", "k-listgroup", "k-popup"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
