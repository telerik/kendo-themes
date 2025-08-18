require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "date-input";
const group = component;
// const className = "k-dateinput"; // .k-dateinput {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
