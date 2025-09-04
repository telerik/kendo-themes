import "./theme.env.js";
import { DatePicker } from "../../packages/html/src/datepicker/datepicker.spec";
import { testKendoComponent } from "../utility";

const component = DatePicker.moduleName;
const group = component;
// const className = DatePicker.className; // .k-datepicker {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-popup",
    "k-calendar"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
