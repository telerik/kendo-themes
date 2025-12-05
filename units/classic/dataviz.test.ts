import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "dataviz"; //No DataViz spec
const group = "charts";
const className = ["k-chart", "k-stockchart", "k-sparkline"];

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
