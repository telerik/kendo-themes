import "./theme.env.js";
import { Bubble } from "../../packages/html/src/bubble/bubble.spec";
import { testKendoComponent } from "../utility";

const component = Bubble.moduleName;
const group = component;
const className = Bubble.className;

const dependencyClassNames = [];

const expected = [
    "kendo-bubble-expandable-spacing", // Variable customizations work, but is used by another variable.
    "kendo-chat-alt-bubble-hover-bg", // Variable customizations work, but is used by another variable.
    "kendo-chat-alt-bubble-hover-border", // Variable customizations work, but is used by another variable.
    "kendo-chat-alt-bubble-active-bg", // Variable customizations work, but is used by another variable.
    "kendo-chat-alt-bubble-active-border", // Variable customizations work, but is used by another variable.
    "kendo-chat-alt-bubble-focus-bg", // Variable customizations work, but is used by another variable.
    "kendo-chat-alt-bubble-focus-border", // Variable customizations work, but is used by another variable.
    "kendo-chat-alt-bubble-focus-shadow", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
