import "./theme.env.js";
import { FloatingActionButton } from "../../packages/html/src/fab/fab.spec";
import { testKendoComponent } from "../utility";

const component = FloatingActionButton.moduleName;
const group = "floating-action-button";
const className = FloatingActionButton.className;

const dependencyClassNames = ["k-button", "k-badge", "k-svg-icon"];

testKendoComponent(component, group, className, dependencyClassNames);
