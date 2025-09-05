import "./theme.env.js";
import { Card } from "../../packages/html/src/card/card.spec";
import { testKendoComponent } from "../utility";

const component = Card.moduleName;
const group = component;
const className = Card.className;

const dependencyClassNames = [
    "k-actions",
    "k-svg-icon",
    "k-h1", "k-h2", "k-h3", "k-h4", "k-h5", "k-h6", "k-display-1", "k-display-2", "k-display-3", "k-display-4"
];

const expected = [
    "kendo-card-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-card-padding-y" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
