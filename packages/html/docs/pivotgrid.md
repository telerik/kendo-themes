# Pivotgrid Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Pivotgrid component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-pivotgrid` | `role=grid` | The role specifies the element is a Data Grid. |
| `.k-pivotgrid-empty-cell th` | `id` | Sets a unique identifier for the cell to be referenced from the first column header row aria-owns attribute. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table` | `role=none` | Negates the default semantic role of the <table> element. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody` | `role=rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `role=row` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row:first-child` | `aria-owns` | Lists the IDs of the empty cell and all cells in the first column headers row to construct the a11y tree. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `role=columnheader` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `aria-expanded (when expandable)` | Indicates the current expanded state of the header. |
| `.k-pivotgrid-column-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `id` | Unique and deterministic identifier, used to associate the header cell with respective data cells. |
| `[class*="i-chevron-up"]` | `aria-hidden=true` | Excludes the collapse icon from the screen reader output. |
| `[class*="i-chevron-down"]` | `aria-hidden=true` | Excludes the expand icon from the screen reader output. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table` | `role=none` | Negates the default semantic role of the <table> element. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody` | `role=rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `role=row` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `aria-owns (when present)` | Used to associate row header cells with the corresponding data cells. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `role=rowheader` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-row-headers>.k-pivotgrid-table>tbody>.k-pivotgrid-row>th` | `aria-expanded (when expandable)` | Indicates the current expanded state of the header. |
| `.k-pivotgrid-values>.k-pivotgrid-table` | `role=none` | Negates the default semantic role of the <table> element. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody` | `role=none` | The contained rows are associated with their headers through alternative mechanics. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row` | `role=none` | The rows are associated with their headers through alternative mechanics. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td` | `role=gridcell` | Required as the owner <table> element has its semantic role removed. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td` | `id` | Unique and deterministic identifier, used to associate the data cell with respective row header cells. |
| `.k-pivotgrid-values>.k-pivotgrid-table>tbody>.k-pivotgrid-row>td` | `aria-describedby (when present)` | Used to associate the data cells with the respective column header cells. |
| `.k-pivotgrid-configurator-button` | `aria-hidden=true` | Hide the element from assistive technologies. |
| `.k-pivotgrid-configurator` | `role=dialog` | The role specifies the element is a dialog. |
| `.k-pivotgrid-configurator` | `aria-hidden (when closed)` | Specifies whether the configurator is visible if it is still in the DOM when closed. |
| `.k-pivotgrid-configurator` | `aria-labelledby` | Associates the configurator wrapper with its internal header element. |
| `.k-pivotgrid-configurator-header-text` | `id` | Unique identifier used to associate the header text with elements that reference it as a label. |
| `.k-pivotgrid-configurator-content .k-label` | `id` | Unique identifier used to associate the label text with elements that reference it as a label. |
| `.k-pivotgrid-configurator-actions .k-button.k-disabled` | `aria-disabled=true (when disabled)` | Announces the non-interactive state of the configurator Cancel and Apply buttons. |
| `.k-fields-list-wrapper .k-treeview` | `aria-labelledby` | Associates the fields chooser TreeView with the Fields section and Configurator header texts. |
| `.k-pivotgrid-configurator-content .k-chip-list` | `aria-labelledby` | Associates the chip lists with their respective section label and Configurator header texts. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Pivotgrid component:

| Shortcut | Behavior |
| --- | --- |
| `Right Arrow` | Moves focus one cell to the right (if any) |
| `Left Arrow` | Moves focus one cell to the left (if any) |
| `Down Arrow` | Moves focus one cell down (if any) |
| `Up Arrow` | Moves focus one cell up (if any) |
| `Home` | Moves focus to the first cell in the row that contains focus. |
| `End` | Moves focus to the last cell in the row that contains focus. |
| `Ctrl/Cmd(Mac) + Home` | Moves focus to the first (top-left) data cell in the grid. |
| `Ctrl/Cmd(Mac) + End` | Moves focus to the last cell in the last row of the Grid. |
| `o` | Opens the configurator when available. |
| `Escape` | Closes the configurator when available and open. |
| `Enter & Space` | If the header cell is expandable, toggles the current expanded state. |
| `Escape` | Closes the Configurator and returns focus to the last focused PivotGrid table cell (or the first cell). |
| `Tab` | Focuses the next focusable element or the first focusable element, if the focus is on the last focusable element. |
| `Shift + Tab` | Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element. |
| `Backspace & Delete` | Applicable when a Chip is focused. Removes the Chip, and the previous focusable element is focused. |
| `Ctrl/Cmd(Mac) + Shift + Left/Right Arrow` | Applicable when a Chip is focused. Switches the Chip with the next/previous one from the same section (if one is available). |
| `Ctrl/Cmd(Mac) + Shift + Up/Down Arrow` | Applicable when a Chip is focused. Moves a Chip from the Rows section to the Columns one or vice-versa. |
| `Alt/Opt(Mac) + Down Arrow` | Opens the Chip menu for the focused Chip. Focus goes to the first menu element is trapped in the menu popup. |
| `Escape` | Closes the menu and returns the focus to the Chip that triggered it. |
| `Tab` | Focuses the next focusable menu element or the first focusable element, if the focus is on the last focusable element. |
| `Shift + Tab` | Focuses the previous focusable element or the last focusable element, if the focus is on the first focusable element. |
| `Enter` | Triggers the default action associated with the focused menu item. |
