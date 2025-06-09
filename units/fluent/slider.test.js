require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "slider";
const group = component;
const className = "k-slider";

const dependencyClassNames = [
    "k-button",
    "k-tooltip",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
