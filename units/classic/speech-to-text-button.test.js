require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "speech-to-text-button";
const group = component;
const className = null; // There are no styles applied to .k-speech-to-text-button

const dependencyClassNames = ["k-button"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
