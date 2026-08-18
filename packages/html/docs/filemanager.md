# Filemanager Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Filemanager provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Filemanager is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### FileManager

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-filemanager` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `tabindex="0"` | The element must be focusable, so that its content would be communicated to the users. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Folder tree | A tree panel on the left lets the user navigate the directory hierarchy. |
| Content view | The main panel lists the files and folders of the selected directory. |
| Breadcrumb | A breadcrumb trail shows the current path and allows navigation. |
| View toggle | Switches between grid (icon) and list file views. |
| Toolbar | Provides actions such as New Folder, Upload, Delete, and Rename. |

### Testing

The Filemanager has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Filemanager has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/filemanager/`](https://github.com/telerik/kendo-themes/tree/develop/tests/filemanager/).
