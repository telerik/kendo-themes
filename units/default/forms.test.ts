import "./theme.env.js";
import { Form } from "../../packages/html/src";
import { testKendoComponent } from "../utility";

const component = Form.moduleName;
const group = component;
const className = Form.className;

const dependencyClassNames = [
    "k-toolbar",
    "k-actions"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
