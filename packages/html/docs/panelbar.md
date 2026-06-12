# Panelbar Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Panelbar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Panelbar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-panelbar` | `role` = `tree` | The root element of the PanelBar has role tree. |
| `.k-panelbar` | `aria-activedescendant` | Points to the currently focused item in the PanelBar. |
| `.k-panelbar-group` | `role` = `group` | The ul element that wraps child nodes. |
| `.k-panelbar-item:not(.k-expanded) > .k-panelbar-group` | `aria-hidden` = `true` | Hides the group element from assistive technologies when its parent is not expanded. |
| `.k-panelbar-item` | `role` = `treeitem` | The li element rendered for a PanelBar item. |
| `.k-panelbar-item` | `aria-expanded` = `true` / `false` | Announces the expanded state of the item (if expandable). |
| `.k-panelbar-item` | `aria-selected` = `true` / `false` | Announces the selected state of the item. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Panelbar component:

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
