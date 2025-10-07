import "./theme.env.js";
import { List } from "../../packages/html/src/list/list.spec";
import { testKendoComponent } from "../utility";

const component = List.moduleName;
const group = component;
const className = List.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);


