import "./theme.env.js";
import { Chat } from "../../packages/html/src/chat/chat.spec";
import { testKendoComponent } from "../utility";

const component = Chat.moduleName;
const group = component;
const className = Chat.className;

const dependencyClassNames = ["k-input", "k-card", "k-svg-icon", "k-toolbar"];

const expected = [
    "kendo-chat-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-chat-padding-y", // Variable customizations work, but is used by another variable.
    "kendo-chat-item-spacing-x", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
