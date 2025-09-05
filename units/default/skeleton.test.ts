import "./theme.env.js";
import { Skeleton } from "../../packages/html/src/skeleton/skeleton.spec";
import { testKendoComponent } from "../utility";

const component = Skeleton.moduleName;
const group = component;
// const className = Skeleton.className;
const className = null; // The skeleton class name is escaped because,
//.k-placeholder-line { @extend .k-skeleton !optional; } breaks the logic.
// Changing the logic in the testKendoComponent function requires a hacky selector with intervals, new lines etc.

const dependencyClassNames = [];

const expected = [];

const unexpected = [];

testKendoComponent(component, group, className, dependencyClassNames, [...expected, ...unexpected]);
