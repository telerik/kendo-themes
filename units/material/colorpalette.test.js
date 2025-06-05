require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "color-palette";
const group = component;
const className = "k-colorpalette";

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
