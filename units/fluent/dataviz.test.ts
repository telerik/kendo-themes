import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "dataviz"; //No DataViz spec
const group = "charts";
const className = ["k-chart", "k-stockchart", "k-sparkline"];

const dependencyClassNames = [];

const expected = [
    "kendo-series-a", // Variable customizations work, but is used by another variable.
    "kendo-series-a-dark", // Variable customizations work, but is used by another variable.
    "kendo-series-a-darker", // Variable customizations work, but is used by another variable.
    "kendo-series-a-light", // Variable customizations work, but is used by another variable.
    "kendo-series-a-lighter", // Variable customizations work, but is used by another variable.
    "kendo-series-b", // Variable customizations work, but is used by another variable.
    "kendo-series-b-dark", // Variable customizations work, but is used by another variable.
    "kendo-series-b-darker", // Variable customizations work, but is used by another variable.
    "kendo-series-b-light", // Variable customizations work, but is used by another variable.
    "kendo-series-b-lighter", // Variable customizations work, but is used by another variable.
    "kendo-series-c", // Variable customizations work, but is used by another variable.
    "kendo-series-c-dark", // Variable customizations work, but is used by another variable.
    "kendo-series-c-darker", // Variable customizations work, but is used by another variable.
    "kendo-series-c-light", // Variable customizations work, but is used by another variable.
    "kendo-series-c-lighter", // Variable customizations work, but is used by another variable.
    "kendo-series-d", // Variable customizations work, but is used by another variable.
    "kendo-series-d-dark", // Variable customizations work, but is used by another variable.
    "kendo-series-d-darker", // Variable customizations work, but is used by another variable.
    "kendo-series-d-light", // Variable customizations work, but is used by another variable.
    "kendo-series-d-lighter", // Variable customizations work, but is used by another variable.
    "kendo-series-e", // Variable customizations work, but is used by another variable.
    "kendo-series-e-dark", // Variable customizations work, but is used by another variable.
    "kendo-series-e-darker", // Variable customizations work, but is used by another variable.
    "kendo-series-e-light", // Variable customizations work, but is used by another variable.
    "kendo-series-e-lighter", // Variable customizations work, but is used by another variable.
    "kendo-series-f", // Variable customizations work, but is used by another variable.
    "kendo-series-f-dark", // Variable customizations work, but is used by another variable.
    "kendo-series-f-darker", // Variable customizations work, but is used by another variable.
    "kendo-series-f-light", // Variable customizations work, but is used by another variable.
    "kendo-series-f-lighter" // Variable customizations work, but is used by another variable.
];

const unexpected = [
    "kendo-chart-tooltip-color", // Variable customizations do not work.
    "kendo-chart-tooltip-color-inverse" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
