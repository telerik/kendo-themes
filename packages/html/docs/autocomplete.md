# Autocomplete Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Autocomplete provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Autocomplete is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-autocomplete .k-input-inner` | `role` = `combobox` | Announces the autocomplete input. |
| `.k-autocomplete .k-input-inner` | `aria-haspopup` = `listbox` | Indicates the component has a listbox popup. |
| `.k-autocomplete .k-input-inner` | `aria-expanded` | Announces the popup visibility. |
| `.k-autocomplete .k-input-inner` | `aria-label` | Accessible name for the autocomplete. |
| `.k-autocomplete.k-disabled .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the autocomplete is disabled. |
| `.k-autocomplete-popup .k-list-content, .k-autocomplete-popup .k-list-ul` | `role` = `listbox` | Popup list has listbox role. |
| `.k-autocomplete-popup .k-list-ul[role="listbox"], .k-autocomplete-popup .k-list-content[role="listbox"]` | `aria-label` / `aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-autocomplete-popup .k-list-item` | `role` = `option` | Each list item is an option. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Autocomplete component:

| Trigger | Behavior |
| --- | --- |
| `Typing in the input` | Focuses the matched item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup. |
| `Alt/Opt(Mac) + ArrowUp or Escape` | Closes the popup. |
| `Escape` | Resets the value in the input when the popup is closed. |
| `Enter` | Triggers the `change` event. |

### Testing

The Autocomplete has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Autocomplete has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Editable Combobox With Both List and Inline Autocomplete Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-both.html)
- [WAI-ARIA Authoring Practices: Editable Combobox With List Autocomplete Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-autocomplete-list.html)
