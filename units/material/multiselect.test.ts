import "./theme.env.js";
import { MultiSelect } from "../../packages/html/src/multiselect/multiselect.spec";
import { testKendoComponent } from "../utility";

const component = MultiSelect.moduleName;
const group = component;
// const className = MultiSelect.className; // .k-multiselect {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-button",
    "k-input",
    "k-chip",
    "k-floating-label-container",
    "k-popup",
    "k-list",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
