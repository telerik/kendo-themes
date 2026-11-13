import "./theme.env.js";
import { Popup } from "../../packages/html/src/popup/popup.spec";
import { testKendoComponent } from "../utility";

const component = Popup.moduleName;
const group = component;
const className = Popup.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);


