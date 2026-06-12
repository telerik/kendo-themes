# Listbox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Listbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Listbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-listbox .k-list-ul` | `role` = `listbox` | Specifies the role of the ListBox list element. |
| `.k-listbox .k-list-ul` | `aria-label` / `aria-labelledby` | Adds a label to the list element of the ListBox. |
| `.k-listbox .k-list-item` | `role` = `option` | Specifies the role of the ListBox item element. |
| `.k-listbox .k-list-item` | `aria-selected` = `true` / `false` | Set to true if the item is selected. |
| `.k-listbox .k-list-item` | `tabindex` | The focused listbox item should have tabindex 0, all others -1. |
| `.k-listbox-actions` | `role` = `toolbar` | The toolbar is a collection of command buttons. |
| `.k-listbox-actions` | `aria-label` | Clarifies the purpose of the toolbar. |
| `.k-listbox-actions` | `aria-controls` | Points to the id of the listbox element being controlled. |
| `.k-listbox-actions .k-button` | `aria-label` / `title` | All buttons in the toolbar must have labels. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Listbox component:

| Trigger | Behavior |
| --- | --- |
| `F10` | Focuses the ListBox toolbar (the last focused or the first button in it). |
| `Space` | Selects the focused ListBox Item |
| `ArrowUp` | Selects the previous item. |
| `ArrowDown` | Selects the next item. |
| `Control/Cmd(Mac) + Space` | Selects or deselects an item. |
| `Shift + ArrowUp` | Adds the previous item to the selected items. |
| `Shift + ArrowDown` | Adds the next item to the selected items. |
| `Control/Cmd(Mac) + ArrowUp` | Moves the focus to the previous item. |
| `Control/Cmd(Mac) + ArrowDown` | Moves the focus to the next item. |
| `Delete` | Deletes the selected items. |
| `Control/Cmd(Mac) + ArrowRight` | Adds the selected items to the connected ListBox. |
| `Control/Cmd(Mac) + ArrowLeft` | Adds the selected items from the connected ListBox to the current one. |
| `Control/Cmd(Mac) + Shift + ArrowUp` | Shifts the selected items upwards. |
| `Control/Cmd(Mac) + Shift + ArrowDown` | Shifts the selected items downwards. |
| `Control/Cmd(Mac) + Shift + ArrowRight` | Transfers all items to the connected ListBox. |
| `Control/Cmd(Mac) + Shift + ArrowLeft` | Transfers all items from the connected ListBox. |
| `ArrowRight or ArrowDown` | Focuses the next button in the toolbar. |
| `ArrowLeft or ArrowUp` | Focuses the previous button in the toolbar. |
| `Enter` | Executes the currenly focused button command if enabled. |

### Testing

The Listbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Listbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: ListBox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
