require("./theme.env.js");
const { testKendoComponent } = require("../utility.js");

const component = "dialog";
const group = component;
const className = "k-dialog";

const dependencyClassNames = ["k-window"];

const expected = [];

const unexpected = [
    "kendo-dialog-button-spacing" // This variable is used in the Core
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
