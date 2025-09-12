import "./theme.env.js";
import { DateInput } from "../../packages/html/src/dateinput/dateinput.spec";
import { testKendoComponent } from "../utility";

const component = DateInput.moduleName;
const group = component;
// const className = DateInput.className; // .k-dateinput {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
