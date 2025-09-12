import "./theme.env.js";
import { Splitter } from "../../packages/html/src/splitter/splitter.spec";
import { testKendoComponent } from "../utility";

const component = Splitter.moduleName;
const group = component;
const className = Splitter.className;

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
