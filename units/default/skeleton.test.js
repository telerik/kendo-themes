require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "skeleton";
const group = component;
// const className = "k-skeleton";
const className = null; // The skeleton class name is escaped because,
//.k-placeholder-line { @extend .k-skeleton !optional; } breaks the logic.
// Changing the logic in the testKendoComponent function requires a hacky selector with intervals, new lines etc.

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
