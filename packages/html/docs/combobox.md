# Combobox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Combobox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Combobox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Combobox

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | Identifies the input as a combobox. |
| `aria-haspopup="listbox"` | Indicates the combobox has a listbox popup. |
| `aria-expanded` | Indicates whether the popup is open. |
| `aria-invalid="true"` | Rendered when the combobox is in an invalid state. |
| `aria-busy="true"` | Rendered when the combobox is loading data. |
| `aria-label|aria-labelledby` | Accessible name provided by consuming app. |
| `aria-disabled="true"` | Rendered when the combobox is disabled. |
| `role="button"` | The dropdown toggle button. |
| `aria-label` | Accessible name for the dropdown button. |
| `tabindex="-1"` | Dropdown button is not in the tab order. |
| `role="listbox"` | The popup list container has the listbox role. |
| `aria-label|aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `role="option"` | Each list item is an option. |
| `aria-selected` | Indicates the selected state. |
| `aria-live="polite"` | Announces no-data state to screen readers. |
| `id` | Referenced by aria-controls and aria-activedescendant on the input. |
| `aria-autocomplete` | Indicates autocomplete behavior to assistive technologies |
| `aria-activedescendant` | Points to focused item when popup is open |

#### Keyboard Navigation

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
