import "./theme.env.js";
import { Textbox } from "../../packages/html/src/textbox/textbox.spec";
import { testKendoComponent } from "../utility";

const component = Textbox.moduleName;
const group = component;
// const className = Textbox.className;  // .k-textbox {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
