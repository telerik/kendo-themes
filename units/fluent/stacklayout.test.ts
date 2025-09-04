import "./theme.env.js";
import { StackLayout } from "../../packages/html/src/layout/stack-layout.spec";
import { testKendoComponent } from "../utility";

const component = StackLayout.moduleName;
const group = component;
// const className = StackLayout.className; // .k-stack-layout {} selector is empty
const className = null;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected], false);


