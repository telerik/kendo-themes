import "./theme.env.js";
import { ListBox } from "../../packages/html/src/listbox/listbox.spec";
import { testKendoComponent } from "../utility";

const component = ListBox.moduleName;
const group = component;
const className = ListBox.className;

const dependencyClassNames = [
    "k-button",
    "k-popup",
    "k-list",
    "k-svg-icon"
];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
