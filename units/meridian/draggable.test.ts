import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "draggable"; // Component has no spec
const group = component;
const className = ["k-drag-clue", "k-drop-hint"];

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
