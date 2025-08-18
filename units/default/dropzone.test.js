require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "dropzone";
const group = component;
const className = "k-external-dropzone";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
