require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "captcha";
const group = component;
const className = "k-captcha";

const dependencyClassNames = [
    "k-input",
    "k-button",
    "k-svg-icon",
    // "k-textbox", - Textbox selector has no styles.
    "k-slider",
];

const expected = [
    "kendo-captcha-spacer", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
