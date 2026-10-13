import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "no-data"; // Component has no spec
const group = component;
const className = "k-nodata";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
