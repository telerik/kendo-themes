import "./theme.env.js";
import { MaskedTextbox } from "../../packages/html/src/maskedtextbox/maskedtextbox.spec";
import { testKendoComponent } from "../utility";

const component = MaskedTextbox.moduleName;
const group = component;
// const className = MaskedTextbox.className; // .k-maskedtextbox {} selector is empty
const className = null;

const dependencyClassNames = [
    "k-input",
    "k-floating-label-container",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);
