# Dropdowntree Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dropdowntree provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dropdowntree is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DropdownTree

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

These CSS classes are applied to the `k-dropdowntree` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | Announces the dropdown tree element. |
| `aria-haspopup="tree"` | Indicates the presence of a tree popup. |
| `aria-expanded` | Announces the popup visibility state. |
| `aria-label` | Accessible name for the dropdown tree. |
| `tabindex="0"` | The element must be focusable. |
| `aria-disabled="true"` | Rendered when the dropdown tree is disabled. |
| `aria-label` | Accessible name for the dropdown button. |
| `tabindex="-1"` | The button must not be focusable. |
| `id` | Referenced by aria-controls on the input. |
| `aria-controls` | Points to treeview when popup is open |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Selects the next available item. |
| `ArrowUp` | Selects the previous available item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup. |
| `Alt/Opt(Mac) + ArrowUp or Escape` | `Closes the popup. |
| `Enter` | Selects and confirms the focused item. |
| `Escape` | Clears the value when the popup is not open. |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Tree popup | A hierarchical tree opens in a popup when the control is clicked. |
| Expand / Collapse | Tree nodes can be expanded to reveal children. |
| Single selection | Clicking a leaf node selects it and closes the popup. |
| Checkboxes | Multi-selection is supported via checkboxes on each node. |

### Testing

The Dropdowntree has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Dropdowntree has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: TreeView Example](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/examples/treeview-navigation/)
- [WAI-ARIA Authoring Practices: Select-Only Combobox Example](https://www.w3.org/WAI/ARIA/apg/example-index/combobox/combobox-select-only.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/dropdowntree/`](https://github.com/telerik/kendo-themes/tree/develop/tests/dropdowntree/).
