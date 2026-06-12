# Treeview Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Treeview provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Treeview is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-treeview-lines` | `role` = `tree` | The root list element of the treeview. |
| `.k-treeview-group:not(.k-treeview-lines)` | `role` = `group` | The ul element that wraps child nodes. |
| `.k-treeview-item` | `role` = `treeitem` | The li element rendered for a tree node. |
| `.k-treeview-item` | `aria-expanded` = `true` / `false` | Announces the expanded state of the node. |
| `.k-treeview-item` | `aria-checked` = `true` / `false` | Announces the checked state of the node when checkboxes are enabled. |
| `.k-treeview-item` | `aria-selected` = `true` | Announces the selected state of the node when selection is enabled. |
| `.k-treeview-item .k-checkbox` | `aria-label` | The checkbox input must have an accessible name matching the treeview item text. |
| `.k-treeview-item .k-checkbox` | `tabindex` = `-1` | The checkbox input must not be in the tab order. Keyboard interaction is handled by the treeitem. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Treeview component:

| Trigger | Behavior |
| --- | --- |
| `Enter` | Selects the focused tree view item when the selection mode is single or multiple. When the selection mode is multiple and there are other selected items, they get deselected. |
| `Space` | Checks the checkbox of the TreeView node. |
| `ArrowUp` | Goes to the previous tree node. The focus is moved to the previous node and its tabindex is set to `0`. |
| `ArrowDown` | Goes to the next tree node. The focus is moved to the next node and its tabindex is set to `0`. |
| `ArrowLeft` | If the node is expanded, collapses it and the focus remains on the item. If the node is collapsed, the focus is moved to its parent. |
| `ArrowRight` | If the node is collapsed, expands it and the focus remains on the item. If the node is expanded, the focus is moved to the first child node. |
| `Home` | Moves the focus to the first node in the tree without opening or closing a node. |
| `End` | Moves the focus to the last node in the tree that is focusable without opening a node. |
| `Control/Cmd(Mac) + Enter` | Selects the focused item. When the item is already selected, it gets deselected. |
| `Printable Characters` | Typing `M` or any other printable character focuses the next or the first item in the list. |

### Testing

The Treeview has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Treeview has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: File Directory Treeview Example](https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-1/treeview-1a.html)
