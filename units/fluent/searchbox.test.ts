import "./theme.env.js";
import { Searchbox } from "../../packages/html/src/searchbox/searchbox.spec";
import { testKendoComponent } from "../utility";

const component = "searchbox"; // Component has no moduleName
const group = component;
const className = Searchbox.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
