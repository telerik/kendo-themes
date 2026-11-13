import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "draggable"; // Component has no spec
const group = component;
const className = ["k-drag-clue", "k-drop-hint"];

const dependencyClassNames = [];

const expected = [
    "kendo-drag-clue-border-style", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
