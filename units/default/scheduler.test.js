require("./theme.env.js");
const { testKendoComponent } = require("../utility");

const component = "scheduler";
const group = component;
const className = "k-scheduler";

const dependencyClassNames = [
    "k-svg-icon",
    // @include kendo-adaptive--styles();
    "k-button",
    // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    // "k-dropdownlist", // @extend .k-dropdown-list, which is empty.
    "k-dialog",
    "k-tooltip",
    "k-current-time" // kendo-time-marker--styles()
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
