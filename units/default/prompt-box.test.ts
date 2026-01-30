import "./theme.env.js";
import { PromptBox } from "../../packages/html/src/prompt-box/prompt-box.spec";
import { testKendoComponent } from "../utility";

const component = PromptBox.moduleName;
const group = component;
const className = PromptBox.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
