## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The TreeList is a composite component that consists of 2 logically separated structural elements:


 - Toolbar (`role=toolbar`);
 - Tree Grid (`role=treegrid`);

### TreeList Toolbar


TreeList Toolbar follows the specification of the ToolBar component.

[ToolBar accessibility specification](toolbar_aria.md)

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-grid-toolbar` | `role=toolbar` | The toolbar is a collection of command buttons and inputs. |
|  | `aria-label` | Clarifies the purpose of the toolbar. |
|  | `aria-controls=.k-grid-aria-root id` | Pointing to the id of the element with `role=treegrid`. |

### Tree Grid


The element with `role=treegrid` must not include the ToolBar element as it does not belong to the `role=treegrid` element itself. It implements the ARIA specification for the Grid component with some exceptions listed below.

[Grid accessibility specification](grid_aria.md)


The below table lists the ARIA requirements for the TreeList which are not present in the Grid specification:

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-treelist .k-grid-aria-root` | `role=treegrid` | Sets the proper role for the TreeList component. |
| `.k-table-tbody .k-table-row` | `aria-expanded=true/false` | Set on the currently expanded row(s). |
| `.k-table-tbody .k-i-caret-alt-down,.k-table-tbody .k-i-caret-alt-right,.k-table-tbody .k-svg-i-caret-alt-down,.k-table-tbody .k-svg-i-caret-alt-right` | `aria-hidden=true` | Removes the expand/collapse icon from the accessibility tree. |

