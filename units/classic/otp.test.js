require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "otp";
const group = "one-time-password";
const className = "k-otp";

const dependencyClassNames = ["k-input"];

const expected = [
    "kendo-otp-gap", // Variable customizations work, but is used by another variable.
    "kendo-otp-separator-padding-x", // Variable customizations work, but is used by another variable.
    "kendo-otp-input-width", // Variable customizations work, but is used by another variable.
];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
