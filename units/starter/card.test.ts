import "./theme.env.js";
import { Card } from "../../packages/html/src/card/card.spec";
import { testKendoComponent } from "../utility";

const component = Card.moduleName;
const group = component;
const className = Card.className;

const dependencyClassNames = ["k-actions", "k-svg-icon", "k-typography"];

const expected = [
    "kendo-card-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-card-padding-y" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
