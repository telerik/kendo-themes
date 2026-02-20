## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The PropertyGrid is a composite component that consists of two logically separated structural elements:


 - Toolbar (`role=toolbar`);
 - Tree Grid (`role=treegrid`);

### PropertyGrid Toolbar


The Toolbar of the PropertyGrid follows the specification of the ToolBar component.

[ToolBar accessibility specification](toolbar_aria.md)

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-grid-toolbar` | `role=toolbar` | The toolbar is a collection of command buttons and inputs. |
|  | `aria-label` | Clarifies the purpose of the toolbar. |
|  | `aria-controls=.k-grid-aria-root id` | Points to the id of the element with `role=treegrid`. |

### Tree Grid


The element with `role=treegrid` must not include the ToolBar element as it does not belong to the `role=treegrid` element itself. It implements the ARIA specification for the TreeList component with some exceptions listed below.

[TreeList accessibility specification](treelist_aria.md)


The below table lists the ARIA requirements for the PropertyGrid which are not present in the TreeList specification:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-property-grid .k-grid-aria-root` | `role=treegrid` | Sets the proper role for the PropertyGrid component. |

