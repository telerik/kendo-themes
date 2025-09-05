import "./theme.env.js";
import { Timeline } from "../../packages/html/src/timeline/timeline.spec";
import { testKendoComponent } from "../utility";

const component = Timeline.moduleName;
const group = component;
const className = Timeline.className;

const dependencyClassNames = [
    "k-button",
    "k-card",
    "k-svg-icon"
];

const expected = [
    "kendo-timeline-flag-offset-bottom", // Variable customizations work, but is used by another variable in calculations.
    "kendo-timeline-date-width" // Variable customizations work, but is used by another variable in calculations.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
