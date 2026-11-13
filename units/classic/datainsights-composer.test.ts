import "./theme.env.js";
import { DataInsightsComposer } from "../../packages/html/src/datainsights-composer/datainsights-composer.spec";
import { testKendoComponent } from "../utility";

const component = DataInsightsComposer.moduleName;
const group = component;
const className = DataInsightsComposer.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
