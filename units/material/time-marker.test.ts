import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "time-marker"; // Component has no spec
const group = component;
const className = "k-current-time";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
