import "./theme.env.js";
import { Combobox } from "../../packages/html/src/combobox/combobox.spec";
import { testKendoComponent } from "../utility";

const component = Combobox.moduleName;
const group = component;
// const className = Combobox.className; // .k-combobox {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-svg-icon",
    "k-popup",
    "k-list"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
