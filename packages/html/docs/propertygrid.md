# Propertygrid Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Propertygrid component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-grid-toolbar` | `role=toolbar` | The toolbar is a collection of command buttons and inputs. |
| `.k-grid-toolbar` | `aria-label` | Clarifies the purpose of the toolbar. |
| `.k-grid-toolbar` | `aria-controls=.k-grid-aria-root id` | Points to the id of the element with role=treegrid. |
| `.k-property-grid .k-grid-aria-root` | `role=treegrid` | Sets the proper role for the PropertyGrid component. |
| `.k-grid-aria-root` | `aria-colcount` | The total number of columns. |
| `.k-grid-aria-root` | `aria-rowcount` | The total number of rows in the table. |
| `.k-grid-content>table` | `role=none` | Negates the default semantic role of the <table> element. |
| `.k-grid-content>table>tbody` | `role=rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-content>table>tbody>tr:not(.k-hidden)` | `role=row` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-content>table>tbody>tr:not(.k-hidden)` | `aria-rowindex` | Row number. |
| `.k-grid-content>table>tbody>tr:not(.k-hidden)>td` | `role=gridcell` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-content>table>tbody>tr:not(.k-hidden)>td` | `aria-colindex` | Col number. |
| `.k-grid-content>table>tbody>tr:not(.k-hidden)` | `aria-expanded (when expandable)` | Set on the currently expanded row(s). |
| `.k-treelist-toggle[class*="i-chevron-down"],.k-treelist-toggle[class*="i-chevron-right"]` | `aria-hidden=true` | Removes the expand/collapse icon from the accessibility tree. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Propertygrid component:

| Shortcut | Behavior |
| --- | --- |
| `Right Arrow` | Moves focus one cell to the right (if any). |
| `Left Arrow` | Moves focus one cell to the left (if any). |
| `Down Arrow` | Moves focus one cell down (if any). |
| `Up Arrow` | Moves focus one cell up (if any). |
| `Enter` | When the grid is in InCell EditMode, then EditMode is activated. If the cell contains focusable elements, focus moves to the first focusable element inside. |
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Ctrl/Cmd(Mac) + Home` | Moves focus to the first (top-left) data cell in the PropertyGrid. |
| `Ctrl/Cmd(Mac) + End` | Moves focus to the last cell in the last row of the PropertyGrid. |
| `Alt/Option(Mac) + Left Arrow` | Collapses the currently focused item. |
| `Alt/Option(Mac) + Right Arrow` | Expands the currently focused item. |
| `Tab` | Moves to the next editor in the row (closing current editor). If focus is already on the last editable cell on the row, focus is moved to the first editable cell on the next row, and it's editor is opened. |
| `Shift + Tab` | Moves to the previous editor in the row (closing current editor). If focus is already on the first editable cell on the row, focus is moved to the last editable cell on the previous row, and it's editor is opened. |
| `Enter` | Commits changes for the edited item, and moves focus back to the edited cell. |
| `Escape` | Cancels the edit. The focus goes to the current cell. |
