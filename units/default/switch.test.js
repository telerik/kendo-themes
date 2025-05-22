require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "switch";
const group = component;
const className = "k-switch";

const dependencyClassNames = [];

const expected = [
    "kendo-switch-off-thumb-disabled-border", // Check after Emo's fix
    "kendo-switch-on-thumb-disabled-border" // Check after Emo's fix
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
