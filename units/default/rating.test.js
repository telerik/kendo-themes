require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "rating";
const group = component;
const className = "k-rating";

const dependencyClassNames = ["k-svg-icon"];

const expected = [];

const unexpected = [
    "kendo-rating-icon-size" // Variable customizations do not work.
];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
