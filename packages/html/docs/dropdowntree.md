# Dropdowntree Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dropdowntree provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dropdowntree is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dropdowntree` | `role` = `combobox` | Announces the dropdown tree element. |
| `.k-dropdowntree` | `aria-haspopup` = `tree` | Indicates the presence of a tree popup. |
| `.k-dropdowntree` | `aria-expanded` | Announces the popup visibility state. |
| `.k-dropdowntree` | `aria-label` | Accessible name for the dropdown tree. |
| `.k-dropdowntree` | `tabindex` = `0` | The element must be focusable. |
| `.k-dropdowntree.k-disabled` | `aria-disabled` = `true` | Rendered when the dropdown tree is disabled. |
| `.k-dropdowntree .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-dropdowntree .k-input-button` | `tabindex` = `-1` | The button must not be focusable. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dropdowntree component:

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Selects the next available item. |
| `ArrowUp` | Selects the previous available item. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup. |
| `Alt/Opt(Mac) + ArrowUp or Escape` | `Closes the popup. |
| `Enter` | Selects and confirms the focused item. |
| `Escape` | Clears the value when the popup is not open. |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |

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
