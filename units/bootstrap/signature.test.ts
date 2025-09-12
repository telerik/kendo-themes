import "./theme.env.js";
import { Signature } from "../../packages/html/src/signature/signature.spec";
import { testKendoComponent } from "../utility";

const component = Signature.moduleName;
const group = component;
const className = Signature.className;

const dependencyClassNames = [
    "k-button",
    "k-input"
];

const expected = [];
const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
