require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "listview";
const group = component;
 const className = "k-listview";

const dependencyClassNames = [
    "k-pager",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
