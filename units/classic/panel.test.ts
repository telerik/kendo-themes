import "./theme.env.js";
import { testKendoComponent } from "../utility";

const component = "panel"; // Component has no spec
const group = component;
const className = "k-panel";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
