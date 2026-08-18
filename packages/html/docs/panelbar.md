# Panelbar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Panelbar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Panelbar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### PanelBar

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="tree"` | The root element of the PanelBar has role tree. |
| `aria-activedescendant` | Points to the currently focused item |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Focuses the previous PanelBar item. If no previous item is available, focuses the last item. |
| `ArrowDown` | Focuses the next PanelBar item. If no next item is available, focuses the first item. |
| `ArrowLeft` | Collapses an expanded item. If the item is collapsed, focuses its parent. |
| `ArrowRight` | Expands a collapsed item. If the item is expanded, focuses its first child node. |
| `Home` | Moves focus to the first item in the PanelBar without expanding or collapsing an item. |
| `End` | Moves focus to the last item in the PanelBar that is focusable without expanding an item. |
| `Enter` | Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url). |
| `Space` | Selects the focused item and toggles the item if it is expandable. It also triggers its action (click or opening url). |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Expand / Collapse | Clicking a panel header toggles its content section. |
| Single expand | Can be configured so that only one panel is open at a time. |
| Disabled items | Individual items can be disabled and cannot be toggled. |
| Nested items | Items can contain nested sub-items forming a tree structure. |

### PanelBarGroup

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-hidden="true"` | Applied when parent is collapsed; hides group from assistive technologies. |

### PanelBarItem

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-selected="true"` | when selected |

### Testing

The Panelbar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Panelbar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Navigation Treeview Example](https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-navigation.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/panelbar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/panelbar/).
