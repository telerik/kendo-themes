import "./theme.env.js";
import { Filter } from "../../packages/html/src/filter/filter.spec";
import { testKendoComponent } from "../utility";

const component = Filter.moduleName;
const group = component;
const className = Filter.className;

const dependencyClassNames = [
    "k-button",
    "k-input",
    "k-checkbox",
    // "k-datetimepicker", // "k-datetimepicker", // Empty selector for .k-datetimepicker {}
    "k-dropdownlist",
    // "k-numerictextbox", // Empty selector for .k-numerictextbox {}
    "k-toolbar"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
