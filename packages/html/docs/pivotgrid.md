# Pivotgrid Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Pivotgrid provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Pivotgrid is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-pivotgrid` | `role` = `grid` | The role specifies the element is a Data Grid. |
| `.k-pivotgrid-empty-cell th` | `id` | Sets a unique identifier for the cell to be referenced from the first column header row aria-owns attribute. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table` | `role` = `none` | Negates the default semantic role of the <table> element. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody` | `role` = `rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `role` = `row` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row:first-child` | `aria-owns` | Lists the IDs of the empty cell and all cells in the first column headers row to construct the a11y tree. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `role` = `columnheader` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `aria-expanded` | Indicates the current expanded state of the header. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `id` | Unique and deterministic identifier, used to associate the header cell with respective data cells. |
| `[class*="i-chevron-up"]` | `aria-hidden` = `true` | Excludes the collapse icon from the screen reader output. |
| `[class*="i-chevron-down"]` | `aria-hidden` = `true` | Excludes the expand icon from the screen reader output. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table` | `role` = `none` | Negates the default semantic role of the <table> element. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody` | `role` = `rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `role` = `row` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `aria-owns` | Used to associate row header cells with the corresponding data cells. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `role` = `rowheader` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `aria-expanded` | Indicates the current expanded state of the header. |
| `.k-pivotgrid-values>.k-pivotgrid-table` | `role` = `none` | Negates the default semantic role of the <table> element. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody` | `role` = `none` | The contained rows are associated with their headers through alternative mechanics. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `role` = `none` | The rows are associated with their headers through alternative mechanics. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td` | `role` = `gridcell` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td` | `id` | Unique and deterministic identifier, used to associate the data cell with respective row header cells. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td` | `aria-describedby` | Used to associate the data cells with the respective column header cells. |
| `.k-pivotgrid-configurator-button` | `aria-hidden` = `true` | Hide the element from assistive technologies. |
| `.k-pivotgrid-configurator` | `role` = `dialog` | The role specifies the element is a dialog. |
| `.k-pivotgrid-configurator` | `aria-hidden` | Specifies whether the configurator is visible if it is still in the DOM when closed. |
| `.k-pivotgrid-configurator` | `aria-labelledby` | Associates the configurator wrapper with its internal header element. |
| `.k-pivotgrid-configurator-header-text` | `id` | Unique identifier used to associate the header text with elements that reference it as a label. |
| `.k-pivotgrid-configurator-content .k-label` | `id` | Unique identifier used to associate the label text with elements that reference it as a label. |
| `.k-pivotgrid-configurator-actions .k-button.k-disabled` | `aria-disabled` = `true` | Announces the non-interactive state of the configurator Cancel and Apply buttons. |
| `.k-fields-list-wrapper .k-treeview` | `aria-labelledby` | Associates the fields chooser TreeView with the Fields section and Configurator header texts. |
| `.k-pivotgrid-configurator-content .k-chip-list` | `aria-labelledby` | Associates the chip lists with their respective section label and Configurator header texts. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Pivotgrid component:

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
