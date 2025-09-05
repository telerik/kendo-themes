import "./theme.env.js";
import { Avatar } from "../../packages/html/src/avatar/avatar.spec";
import { testKendoComponent } from "../utility";

const component = Avatar.moduleName;
const group = component;
const className = Avatar.className;

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
