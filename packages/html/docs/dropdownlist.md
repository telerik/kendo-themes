# Dropdownlist Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dropdownlist provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dropdownlist is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dropdownlist:not(.k-views-dropdown)` | `role` = `combobox` | Announces the dropdown element. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `aria-haspopup` = `listbox` | Indicates the presence of a listbox popup. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `aria-expanded` | Announces the visibility state of the popup. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `aria-label` | Accessible name for the dropdown. |
| `.k-dropdownlist:not(.k-views-dropdown)` | `tabindex` = `0` | The element must be focusable. |
| `.k-dropdownlist.k-disabled` | `aria-disabled` = `true` | Rendered when the dropdown is disabled. |
| `.k-dropdownlist .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-dropdownlist .k-input-button` | `tabindex` = `-1` | The button must not be focusable. |
| `.k-dropdownlist-popup .k-list-content, .k-dropdownlist-popup .k-list-ul` | `role` = `listbox` | Popup list has listbox role. |
| `.k-dropdownlist-popup .k-list-ul[role="listbox"]` | `aria-label` / `aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-dropdownlist-popup .k-list-item` | `role` = `option` | Each list item is an option. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dropdownlist component:

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Selects the next available item. |
| `ArrowUp` | Selects the previous available item. |
| `Home` | Selects the first available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position. |
| `End` | Selects the last available item. Shortcut is not applicable when the current focused item is the filter textbox. Then focused is in a textbox, home and end keys control the cursor position. |
| `Enter` | Opens popup |
| `Space` | Opens popup |
| `Alt/Opt(Mac) + ArrowDown` | Opens popup |
| `Alt/Opt(Mac) + ArrowUp or Escape` | `Closes popup |
| `Printable Characters` | Typing "M" or any other printable character should select the next or first item in the list. Swiftly typing should capture multiple printable characters after the first one. |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |

### Testing

The Dropdownlist has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Dropdownlist has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Select-Only Combobox Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html)
