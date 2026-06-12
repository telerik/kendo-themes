# Orgchart Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Orgchart provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Orgchart is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-orgchart-level-1` | `role` = `tree` | The root div element of the OrgChart. Contains all its top level items. |
| `.k-orgchart-level-1` | `aria-orientation` = `horizontal` | Specifies the orientation of the OrgChart tree. |
| `.k-orgchart-group:not(.k-orgchart-level-1)` | `role` = `group` | The element that wraps child nodes. |
| `.k-orgchart-node-group` | `role` = `group` | The element that groups nodes visually with a title and expand/collapse button. |
| `.k-orgchart-node-container` | `role` = `presentation` | The node container must not break the tree-treeitem relationship. |
| `.k-orgchart-node` | `role` = `treeitem` | The node wrapper representing the treeitem in the hierarchical structure. |
| `.k-orgchart-node` | `aria-level` | Announces the level of the tree node item. The value of level is number-based (>=1). |
| `.k-orgchart-node` | `aria-keyshortcuts` = `Enter` | Announces that the edit menu of the OrgChart can be activated via the Enter key. |
| `.k-orgchart-node` | `aria-expanded` = `true` / `false` | Present when a node has subitems. Announces the expanded state of the node. |
| `.k-orgchart-node` | `aria-owns` | Present when a node has subitems. The value is the id of the group containing child nodes. |
| `.k-orgchart-node.k-focus` | `aria-selected` = `true` | Announces the selected (focused) item in the OrgChart. |
| `.k-orgchart-node:not(.k-focus)` | `aria-selected` = `false` | Announces the not selected (focused) items in the OrgChart. |
| `.k-avatar-image img` | `alt` | Describes the avatar image of an item. |
| `.k-orgchart-card-menu` | `role` = `button` | Specifies the menu icon of the item is a button. |
| `.k-orgchart-card-menu` | `aria-label` = `Edit menu` | Provides an accessible name for the edit button. |
| `.k-orgchart-card-menu` | `tabindex` = `-1` | The Edit menu button must not be part of the page tab sequence. |
| `.k-orgchart-button` | `role` = `presentation` | The expand/collapse button is decorative. |
| `.k-orgchart-button` | `aria-hidden` = `true` | Hides the button from assistive technology. |
| `.k-orgchart-button` | `tabindex` = `-1` | The expand/collapse button must not be part of the page tab sequence. |

### Testing

The Orgchart has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Orgchart has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices File Directory Treeview Example](https://www.w3.org/WAI/ARIA/apg/example-index/treeview/treeview-1/treeview-1a.html)
