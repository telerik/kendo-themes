import "./theme.env.js";
import { Textarea } from "../../packages/html/src/textarea/textarea.spec";
import { testKendoComponent } from "../utility";

const component = Textarea.moduleName;
const group = component;
const className = Textarea.className;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
