import "./theme.env.js";
import { Appbar } from "../../packages/html/src/appbar/appbar.spec";
import { testKendoComponent } from "../utility";

const component = Appbar.moduleName;
const group = component;
const className = Appbar.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
