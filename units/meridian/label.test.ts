import "./theme.env.js";
import { Label } from "../../packages/html/src/label/label.spec";
import { testKendoComponent } from "../utility";

const component = Label.moduleName;
const group = component;
const className = [ Label.className, "k-label-optional" ];

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
