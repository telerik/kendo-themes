import "./theme.env.js";
import { ExpansionPanel } from "../../packages/html/src/expansion-panel/expansion-panel.spec";

const { testKendoComponent } = require("../utility");

const component = "expander";
const group = component;
const className = ExpansionPanel.className;
const dependencyClassNames = [
    "k-svg-icon",
    "k-list"
];
const expected = [];
const unexpected = [];


testKendoComponent(component, group, ExpansionPanel.className, dependencyClassNames, [...expected, ...unexpected]);
