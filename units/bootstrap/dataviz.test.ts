import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "dataviz"; //No DataViz spec
const group = "charts";
const className = ["k-chart", "k-stockchart", "k-sparkline"];

const dependencyClassNames = [];

const expected = [
    "kendo-series-a" // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
