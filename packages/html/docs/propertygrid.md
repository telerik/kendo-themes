# Propertygrid Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Propertygrid provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Propertygrid is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### PropertyGrid

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="toolbar"` | The toolbar is a collection of command buttons and inputs. |
| `aria-label` | Clarifies the purpose of the toolbar. |
| `aria-controls=".k-grid-aria-root id"` | Points to the id of the element with role=treegrid. |
| `role="treegrid"` | Sets the proper role for the PropertyGrid component. |
| `aria-colcount` | The total number of columns. |
| `aria-rowcount` | The total number of rows in the table. |
| `role="none"` | Negates the default semantic role of the `<table>` element. |
| `role="rowgroup"` | Required as the owner `<table>` element has its semantic role removed. |
| `role="row"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-rowindex` | Row number. |
| `role="gridcell"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-colindex` | Col number. |
| `aria-expanded` | Set on the currently expanded row(s). |
| `aria-hidden="true"` | Removes the expand/collapse icon from the accessibility tree. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Moves focus one cell to the right (if any). |
| `ArrowLeft` | Moves focus one cell to the left (if any). |
| `ArrowDown` | Moves focus one cell down (if any). |
| `ArrowUp` | Moves focus one cell up (if any). |
| `Enter` | When the grid is in InCell EditMode, then EditMode is activated. If the cell contains focusable elements, focus moves to the first focusable element inside. |
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Control/Cmd(Mac) + Home` | Moves focus to the first (top-left) data cell in the PropertyGrid. |
| `Control/Cmd(Mac) + End` | Moves focus to the last cell in the last row of the PropertyGrid. |
| `Alt/Opt(Mac) + ArrowLeft` | Collapses the currently focused item. |
| `Alt/Opt(Mac) + ArrowRight` | Expands the currently focused item. |
| `Tab` | Moves to the next editor in the row (closing current editor). If focus is already on the last editable cell on the row, focus is moved to the first editable cell on the next row, and it's editor is opened. |
| `Shift + Tab` | Moves to the previous editor in the row (closing current editor). If focus is already on the first editable cell on the row, focus is moved to the last editable cell on the previous row, and it's editor is opened. |
| `Enter` | Commits changes for the edited item, and moves focus back to the edited cell. |
| `Escape` | Cancels the edit. The focus goes to the current cell. |

### Testing

The Propertygrid has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Propertygrid has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tree grid](https://www.w3.org/TR/wai-aria-1.2/#treegrid)
