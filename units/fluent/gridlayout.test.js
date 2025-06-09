require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "grid-layout";
const group = component;
const className = "k-grid-layout"; // its styles are defined in core/scss/styles/_layout.scss

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


