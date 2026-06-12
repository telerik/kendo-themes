# Combobox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Combobox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Combobox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-combobox > .k-input-inner` | `role` = `combobox` | Identifies the input as a combobox. |
| `.k-combobox > .k-input-inner` | `aria-haspopup` = `listbox` | Indicates the combobox has a listbox popup. |
| `.k-combobox > .k-input-inner` | `aria-expanded` | Indicates whether the popup is open. |
| `.k-combobox > .k-input-inner` | `aria-controls` = `${id}-listbox` | Points to the listbox element when popup is open. |
| `.k-combobox > .k-input-inner` | `aria-activedescendant` | Points to the focused item in the listbox. |
| `.k-combobox > .k-input-inner` | `aria-autocomplete` = `list` / `both` / `inline` | Indicates the autocomplete behavior. |
| `.k-combobox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the combobox is in an invalid state. |
| `.k-combobox > .k-input-inner` | `aria-busy` = `true` | Rendered when the combobox is loading data. |
| `.k-combobox > .k-input-inner` | `aria-label` / `aria-labelledby` | Accessible name provided by consuming app. |
| `.k-combobox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the combobox is disabled. |
| `.k-combobox .k-input-button` | `role` = `button` | The dropdown toggle button. |
| `.k-combobox .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-combobox .k-input-button` | `tabindex` = `-1` | Dropdown button is not in the tab order. |
| `.k-combobox-popup .k-list-content, .k-combobox-popup .k-list-ul` | `role` = `listbox` | The popup list container has the listbox role. |
| `.k-combobox-popup .k-list-ul[role="listbox"], .k-combobox-popup .k-list-content[role="listbox"]` | `aria-label` / `aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-combobox-popup .k-list-item` | `role` = `option` | Each list item is an option. |
| `.k-combobox-popup .k-list-item` | `aria-selected` | Indicates the selected state. |
| `.k-combobox-popup .k-no-data` | `aria-live` = `polite` | Announces no-data state to screen readers. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Combobox component:

| Trigger | Behavior |
| --- | --- |
| `Typing in the input` | Focuses the matched item. |
| `ArrowDown` | Highlights the next available item. |
| `ArrowUp` | Highlights the previous available item. |
| `Enter` | Selects the focused item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup. |
| `Alt/Opt(Mac) + ArrowUp or Escape` | Closes the popup. |
| `Escape` | If the popup is not visible, clears the value. |

### Testing

The Combobox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Combobox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Editable Combobox With Both List and Inline Autocomplete Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-both.html)
- [WAI-ARIA Authoring Practices: Editable Combobox With List Autocomplete Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-list.html)
