# Pivotgrid Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Pivotgrid provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Pivotgrid is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### PivotGrid

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="grid"` | The role specifies the element is a Data Grid. |
| `id` | Sets a unique identifier for the cell to be referenced from the first column header row aria-owns attribute. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Moves focus one cell to the right (if any) |
| `ArrowLeft` | Moves focus one cell to the left (if any) |
| `ArrowDown` | Moves focus one cell down (if any) |
| `ArrowUp` | Moves focus one cell up (if any) |
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Control/Cmd(Mac) + Home` | Moves focus to the first (top-left) data cell in the grid. |
| `Control/Cmd(Mac) + End` | Moves focus to the last cell in the last row of the Grid. |
| `o` | Opens the configurator when available. |
| `Escape` | Closes the configurator when available and open. |
| `Enter or Space` | If the header cell is expandable, toggles the current expanded state. |
| `Escape` | Closes the Configurator and returns focus to the last focused PivotGrid table cell (or the first cell). |
| `Tab` | Focuses the next focusable element or the first focusable element, if the focus is on the last focusable element. |
| `Shift + Tab` | Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element. |
| `Backspace or Delete` | Applicable when a Chip is focused. Removes the Chip, and the previous focusable element is focused. |
| `Control/Cmd(Mac) + Shift + ArrowLeft or ArrowRight` | Applicable when a Chip is focused. Switches the Chip with the next/previous one from the same section (if one is available). |
| `Control/Cmd(Mac) + Shift + ArrowUp or ArrowDown` | Applicable when a Chip is focused. Moves a Chip from the Rows section to the Columns one or vice-versa. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the Chip menu for the focused Chip. Focus goes to the first menu element is trapped in the menu popup. |
| `Escape` | Closes the menu and returns the focus to the Chip that triggered it. |
| `Tab` | Focuses the next focusable menu element or the first focusable element, if the focus is on the last focusable element. |
| `Shift + Tab` | Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element. |
| `Enter` | Triggers the default action associated with the focused menu item. |

### Testing

The Pivotgrid has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Pivotgrid has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for grid](https://www.w3.org/TR/wai-aria-1.2/#grid)
- [WAI-ARIA specification for dialog](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
