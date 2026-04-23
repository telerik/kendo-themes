import "./theme.env.js";
import { Loader } from "../../packages/html/src/loader/loader.spec";
import { testKendoComponent } from "../utility";

const component = Loader.moduleName;
const group = component;
const className = Loader.className;

const dependencyClassNames = ["k-overlay"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
