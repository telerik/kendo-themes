import "./theme.env.js";
import { ChainOfThought } from "../../packages/html/src/agent-response/chain-of-thought.spec";
import { Thought } from "../../packages/html/src/agent-response/thought.spec";
import { ToolCall } from "../../packages/html/src/agent-response/tool-call.spec";
import { testKendoComponent } from "../utility";

const component = ChainOfThought.moduleName;
const group = component;
const className = [ChainOfThought.className, Thought.className, ToolCall.className];

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
