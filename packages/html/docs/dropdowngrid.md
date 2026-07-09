# Dropdowngrid Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dropdowngrid provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dropdowngrid is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DropdownGrid

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
| `aria-label` | Accessible name for the combobox. |
| `aria-label` | Accessible name for the dropdown button. |
| `tabindex="-1"` | Dropdown button is not in the tab order. |
| `role="listbox"` | Table list has listbox role. |
| `aria-label|aria-labelledby` | Table listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `role="option"` | Each table row is an option. |
| `id` | Referenced by aria-controls on the input. |
| `aria-autocomplete` | Indicates autocomplete type |
| `aria-activedescendant` | Points to focused item when popup is open |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Selects the next available item. |
| `ArrowUp` | Selects the previous available item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens pop up |
| `Alt/Opt(Mac) + ArrowUp or Escape` | Closes popup |
| `Escape` | Clears the value if popup is not visible |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |

### Testing

The Dropdowngrid has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Dropdowngrid has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
