import "./theme.env.js";
import { Icon } from "../../packages/html/src/icon/icon.spec";
import { testKendoComponent } from "../utility";

const component = Icon.moduleName;
const group = "icon"; // SassDoc @group for icon variables
// The icon module outputs .k-svg-icon as the primary selector (from @progress/kendo-svg-icons)
// .k-icon-wrap is a utility wrapper class
const className = "k-svg-icon";

const dependencyClassNames = ["k-icon-wrap"];

// Icon variables (like $kendo-icon-size) are used in arithmetic operations
// across other components (e.g., bottom-navigation), so we cannot substitute
// them with test strings. Disable customization testing.
testKendoComponent(component, group, className, dependencyClassNames, [], false);
