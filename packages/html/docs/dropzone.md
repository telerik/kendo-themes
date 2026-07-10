# Dropzone Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dropzone provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dropzone is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Dropzone

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |
| `hover` | `k-hover` |

These CSS classes are applied to the `k-external-dropzone` element.

#### UX Behavior

| Feature | Description |
| --- | --- |
| Drop target | Accepts files dragged from the operating system file browser. |
| Drag feedback | Highlights the drop area visually while files are dragged over it. |
| Multiple files | Can accept multiple files dropped in a single operation. |

### Testing

The Dropzone has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Dropzone has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/dropzone/`](https://github.com/telerik/kendo-themes/tree/develop/tests/dropzone/).
