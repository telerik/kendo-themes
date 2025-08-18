require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "textbox";
const group = component;
// const className = "k-textbox";  // .k-textbox {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
