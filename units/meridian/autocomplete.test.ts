import "./theme.env.js";
import { Autocomplete } from "../../packages/html/src/autocomplete/autocomplete.spec";
import { testKendoComponent } from "../utility";

const component = Autocomplete.moduleName;
const group = component;
// const className = Autocomplete.className; // .k-autocomplete {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-popup",
    "k-list",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
