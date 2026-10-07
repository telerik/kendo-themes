import "./theme.env.js";
import { Checkpoint } from "../../packages/html/src/checkpoint/checkpoint.spec";
import { testKendoComponent } from "../utility";

const component = Checkpoint.moduleName;
const group = component;
const className = Checkpoint.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
