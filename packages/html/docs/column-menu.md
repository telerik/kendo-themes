# ColumnMenu Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI ColumnMenu provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ColumnMenu is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-columnmenu-item` | `role` = `button` | Sets column menu item role to button. |
| `.k-columnmenu-item` | `tabindex` = `0` | Sets column menu item tabindex. |
| `.k-expander .k-columnmenu-item` | `aria-expanded` = `true` / `false` | Sets the expanded state of an expandable item. |
| `.k-expander .k-columnmenu-item` | `aria-controls` | Points to id attribute of the content whose visibility the expandable item controls. |
| `.k-expander .k-columnmenu-item-content` | `id` | Unique and deterministic id linked to the aria-controls attribute of the corresponding expandable item. |
| `.k-column-list` | `role` = `listbox` | Sets the listbox role of the list of columns wrapper. |
| `.k-column-list` | `aria-multiselectable` = `true` | Specifies that the list is multiselectable. |
| `.k-column-list` | `aria-label` | Accessible name for the column list. |
| `.k-column-list .k-column-list-item` | `role` = `option` | Sets the option role of the list item. |
| `.k-column-list .k-column-list-item` | `aria-checked` = `true` / `false` | Sets the checked state of list item. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the ColumnMenu component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift + Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For column menu items, executes the currently focused item action. If item is expandable, expands or collapses the item. |
| `Escape` | When focus is inside a focusable element in the item content, returns focus to the parent menu item. When focus is on a menu item, closes the ColumnMenu Popup and returns focus to the element from which the menu was opened. |
| `ArrowDown or ArrowUp` | Moves the focus to the next/previous item when focus is in the ColumnChooser list of options. |
| `Space` | Toggles the checked state of the focused ColumnChooser option. |
| `Escape` | When focus is inside a sub-view, returns to the main view and focuses the item that opened the sub-view. When focus is on the main view, closes the ActionSheet and returns focus to the element from which the menu was opened. |

### Testing

The ColumnMenu has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ColumnMenu has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [MDN reference for the dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)
