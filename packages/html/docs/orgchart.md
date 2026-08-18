# Orgchart Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Orgchart provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Orgchart is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Orgchart

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="tree"` | The root div element of the OrgChart. Contains all its top level items. |
| `aria-orientation="horizontal"` | Specifies the orientation of the OrgChart tree. |
| `role="group"` | The element that groups nodes visually with a title and expand/collapse button. |
| `role="presentation"` | The node container must not break the tree-treeitem relationship. |
| `role="treeitem"` | The node wrapper representing the treeitem in the hierarchical structure. |
| `aria-level` | Announces the level of the tree node item. The value of level is number-based (>=1). |
| `aria-keyshortcuts="Enter"` | Announces that the edit menu of the OrgChart can be activated via the Enter key. |
| `aria-expanded="true"|\"false"` | Present when a node has subitems. Announces the expanded state of the node. |
| `aria-owns` | Present when a node has subitems. The value is the id of the group containing child nodes. |
| `aria-selected="true"` | Announces the selected (focused) item in the OrgChart. |
| `aria-selected="false"` | Announces the not selected (focused) items in the OrgChart. |
| `role="button"` | Specifies the menu icon of the item is a button. |
| `aria-label="Edit menu"` | Provides an accessible name for the edit button. |
| `tabindex="-1"` | The Edit menu button must not be part of the page tab sequence. |
| `role="presentation"` | The expand/collapse button is decorative. |
| `aria-hidden="true"` | Hides the button from assistive technology. |
| `tabindex="-1"` | The expand/collapse button must not be part of the page tab sequence. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Node hierarchy | Renders organizational nodes in a top-down tree layout. |
| Expand / Collapse | Branch nodes can be collapsed to hide their subtree. |
| Edit mode | Nodes can be added, edited, and removed. |
| Zoom and pan | The chart canvas supports zooming and panning. |

### OrgchartGroup

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="tree"` | Applied when level=1. |

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

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/orgchart/`](https://github.com/telerik/kendo-themes/tree/develop/tests/orgchart/).
