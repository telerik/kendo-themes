# Multiselect Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Multiselect provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Multiselect is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### MultiSelect

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | Announces the multiselect input. |
| `aria-haspopup="listbox"` | Indicates the component has a listbox popup. |
| `aria-expanded` | Announces the popup visibility. |
| `aria-label` | Accessible name for the multiselect. |
| `aria-autocomplete="list"` | Indicates list filtering capability. |
| `aria-describedby` | Points to the taglist element that contains the selected items. |
| `aria-disabled="true"` | Rendered when the multiselect is disabled. |
| `role="listbox"` | The taglist has listbox role for selected items. |
| `aria-label|aria-labelledby` | The taglist needs an accessible name. |
| `aria-orientation="horizontal"` | Specifies horizontal orientation of the taglist. |
| `role="option"` | Each tag chip is an option within the taglist listbox. |
| `aria-selected="true"` | Tags represent selected items and must have aria-selected=true. |
| `role="listbox"` | Popup list has listbox role. |
| `aria-label|aria-labelledby` | Popup listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `role="option"` | Each list item is an option. |
| `id` | Referenced by aria-controls on the input. |
| `aria-activedescendant` | Points to focused item when popup is open |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Typing in the input` | Focuses the matched item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup. |
| `Alt/Opt(Mac) + ArrowUp or Escape` | Closes the popup. |
| `ArrowLeft` | Focuses the previous tag item in the selected list. |
| `ArrowRight` | Focuses the next tag item in the selected list. |
| `Delete or Backspace` | When the focused item is a tag list, removes the item from the selection. |
| `Escape` | Clears the value when the popup is not open. |
| `Shift + ArrowUp` | Creates a range selection between the last selected or deselected item and the item that is immediately before the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the previous one. At the end of the operation, the focus moves to the the item that is immediately before the currently focused one. |
| `Shift + ArrowDown` | Creates a range selection between the last selected or deselected item and the item that is immediately after the currently focused one. All items outside that range are deselected. The last selected or deselected item is stored when using the mouse to click an item, or when using `Enter` to select or deselect an item. The last selected or deselected item is reset when the value of the MultiSelect is cleared. If the there is no previously selected item, selects only the currently focused and the next one. At the end of the operation, the focus moves to the the item that is immediately after the currently focused one. |
| `Control/Cmd(Mac) + Shift + Home` | Creates a range selection from the currently focused item up to the beginning of the list. All items outside that range are deselected. |
| `Control/Cmd(Mac) + Shift + End` | Creates a range selection from the currently focused item down to the end of the list. All items outside that range are deselected. |
| `Control/Cmd(Mac) + A` | Selects all items present in the list. If all items are already selected, deselects them. |

### Testing

The Multiselect has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Multiselect has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Select-Only Combobox Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html)
- [WAI-ARIA Authoring Practices: Scrollable Listbox Example](https://www.w3.org/WAI/ARIA/apg/example-index/listbox/listbox-scrollable.html)
