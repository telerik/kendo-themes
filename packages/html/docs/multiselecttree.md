# Multiselecttree Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Multiselecttree provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Multiselecttree is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### MultiSelectTree

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

These CSS classes are applied to the `k-multiselecttree` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | Announces the multiselect tree input. |
| `aria-haspopup="tree"` | Indicates the presence of a tree popup. |
| `aria-expanded` | Announces the popup visibility. |
| `aria-label` | Accessible name for the multiselect tree. |
| `aria-autocomplete="list"` | Indicates list filtering capability when filtering is enabled. |
| `aria-describedby` | Points to the taglist element that contains the selected items. |
| `tabindex="0"` | The element must be focusable. |
| `aria-disabled="true"` | Rendered when the multiselect tree is disabled. |
| `role="listbox"` | The taglist has listbox role for selected items. |
| `aria-label|aria-labelledby` | The taglist needs an accessible name. |
| `aria-orientation="horizontal"` | Specifies horizontal orientation of the taglist. |
| `role="option"` | Each tag chip is an option within the taglist listbox. |
| `aria-selected="true"` | Tags represent selected items and must have aria-selected=true. |
| `id` | Referenced by aria-controls on the input. |
| `aria-controls` | Points to treeview when popup is open |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Selects the next available item. |
| `ArrowUp` | Selects the previous available item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens pop up |
| `Alt/Opt(Mac) + ArrowUp or Escape` | `Closes popup |
| `Enter` | Selects the focused item. |
| `Space` | Selects the focused item. |
| `Printable Characters` | Typing "M" or any other printable character should select the next or first item in the list |
| `Escape` | Clears the value when the popup is not open. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Tree popup | A hierarchical tree opens in a popup. |
| Checkboxes | Items are selected or deselected via checkboxes on each node. |
| Tags | Selected items appear as removable chips in the input. |
| Select all | A top-level checkbox selects or deselects all items at once. |

### Testing

The Multiselecttree has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Multiselecttree has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices: TreeView Example](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
- [ARIA practices: Select-Only Combobox Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/multiselecttree/`](https://github.com/telerik/kendo-themes/tree/develop/tests/multiselecttree/).
