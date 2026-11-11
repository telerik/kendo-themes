import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "dataviz"; //No DataViz spec
const group = "charts";
const className = ["k-chart", "k-stockchart", "k-sparkline"];

const dependencyClassNames = [];

const expected = [];

const unexpected = [
    "kendo-series-a", // Variable customizations do not work.,
    "kendo-series-a-dark", // Variable customizations do not work.,
    "kendo-series-a-darker", // Variable customizations do not work.,
    "kendo-series-a-light", // Variable customizations do not work.,
    "kendo-series-a-lighter", // Variable customizations do not work.,
    "kendo-series-b", // Variable customizations do not work.,
    "kendo-series-b-dark", // Variable customizations do not work.,
    "kendo-series-b-darker", // Variable customizations do not work.,
    "kendo-series-b-light", // Variable customizations do not work.,
    "kendo-series-b-lighter", // Variable customizations do not work.,
    "kendo-series-c", // Variable customizations do not work.,
    "kendo-series-c-dark", // Variable customizations do not work.,
    "kendo-series-c-darker", // Variable customizations do not work.,
    "kendo-series-c-light", // Variable customizations do not work.,
    "kendo-series-c-lighter", // Variable customizations do not work.,
    "kendo-series-d", // Variable customizations do not work.,
    "kendo-series-d-dark", // Variable customizations do not work.,
    "kendo-series-d-darker", // Variable customizations do not work.,
    "kendo-series-d-light", // Variable customizations do not work.,
    "kendo-series-d-lighter", // Variable customizations do not work.,
    "kendo-series-e", // Variable customizations do not work.,
    "kendo-series-e-dark", // Variable customizations do not work.,
    "kendo-series-e-darker", // Variable customizations do not work.,
    "kendo-series-e-light", // Variable customizations do not work.,
    "kendo-series-e-lighter", // Variable customizations do not work.,
    "kendo-series-f", // Variable customizations do not work.,
    "kendo-series-f-dark", // Variable customizations do not work.,
    "kendo-series-f-darker", // Variable customizations do not work.,
    "kendo-series-f-light", // Variable customizations do not work.,
    "kendo-series-f-lighter", // Variable customizations do not work.,
    "kendo-chart-tooltip-color", // Variable customizations do not work.,
    "kendo-chart-tooltip-color-inverse" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
