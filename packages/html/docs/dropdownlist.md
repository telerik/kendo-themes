# Dropdownlist Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dropdownlist provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dropdownlist is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DropdownList

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `valid` | `k-valid` |
| `invalid` | `k-invalid` |
| `required` | `k-required` |
| `disabled` | `k-disabled` |
| `loading` | `k-loading` |
| `readonly` | `k-readonly` |

These CSS classes are applied to the `k-dropdownlist` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | Announces the dropdown element. |
| `aria-haspopup="listbox"` | Indicates the presence of a listbox popup. |
| `aria-expanded` | Announces the visibility state of the popup. |
| `aria-label` | Accessible name for the dropdown. |
| `tabindex="0"` | The element must be focusable. |
| `aria-disabled="true"` | Rendered when the dropdown is disabled. |
| `aria-label` | Accessible name for the dropdown button. |
| `tabindex="-1"` | The button must not be focusable. |
| `role="listbox"` | Popup list has listbox role. |
| `aria-label|aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `role="option"` | Each list item is an option. |
| `id` | Referenced by aria-controls and aria-activedescendant on the input. |
| `aria-activedescendant` | Points to focused item when popup is open |

#### Keyboard Navigation

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

#### UX Behavior

| Feature | Description |
| --- | --- |
| Popup | Clicking the control opens a scrollable list of options. |
| Selection | Clicking an option selects it and closes the popup. |
| Filtering | The list can be filtered when the user types. |
| Placeholder | Displays hint text when no option is selected. |
| Disabled state | When disabled, the control is non-interactive. |

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

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/dropdownlist/`](https://github.com/telerik/kendo-themes/tree/develop/tests/dropdownlist/).
