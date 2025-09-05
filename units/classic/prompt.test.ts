import "./theme.env.js";
import { Prompt } from "../../packages/html/src/prompt/prompt.spec";
import { testKendoComponent } from "../utility";

const component = Prompt.moduleName;
const group = component;
 const className = Prompt.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
