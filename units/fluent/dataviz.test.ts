import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "dataviz"; //No DataViz spec
const group = "charts";
const className = ["k-chart", "k-stockchart", "k-sparkline"];

const dependencyClassNames = [];

const expected = [];

const unexpected = [
    "kendo-series-a", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-a-dark", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-a-darker", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-a-light", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-a-lighter", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-b", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-b-dark", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-b-darker", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-b-light", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-b-lighter", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-c", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-c-dark", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-c-darker", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-c-light", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-c-lighter", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-d", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-d-dark", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-d-darker", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-d-light", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-d-lighter", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-e", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-e-dark", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-e-darker", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-e-light", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-e-lighter", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-f", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-f-dark", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-f-darker", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-f-light", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-series-f-lighter", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-chart-tooltip-color", // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.,
    "kendo-chart-tooltip-color-inverse" // Not consumed by the Chart styles; used by the Kendo UI chart rendering libraries.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
