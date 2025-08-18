require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "upload";
const group = component;
const className = "k-upload";

const dependencyClassNames = ["k-button", "k-actions", "k-svg-icon", "k-dropzone"];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
