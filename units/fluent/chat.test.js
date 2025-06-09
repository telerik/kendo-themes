require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "chat";
const group = component;
const className = "k-chat";

const dependencyClassNames = ["k-input", "k-card", "k-svg-icon", "k-toolbar"];

const expected = [
    "kendo-chat-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-chat-padding-y", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
