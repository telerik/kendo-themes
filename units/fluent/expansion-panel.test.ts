import "./theme.env.js";
import { ExpansionPanel } from "../../packages/html/src/expansion-panel/expansion-panel.spec";
import { testKendoComponent } from "../utility";

const component = ExpansionPanel.moduleName;
const group = component;
const className = ExpansionPanel.className;

const dependencyClassNames = [
    "k-svg-icon",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
