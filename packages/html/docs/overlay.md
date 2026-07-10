# Overlay Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Overlay provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Overlay is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Overlay

#### UX Behavior

| Feature | Description |
| --- | --- |
| Backdrop | Renders a semi-transparent layer over the page content. |
| Click-outside | Can trigger a close action on the associated dialog or panel when clicked. |
| Scroll lock | Prevents the body from scrolling while the overlay is visible. |

### Testing

The Overlay has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Overlay has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/overlay/`](https://github.com/telerik/kendo-themes/tree/develop/tests/overlay/).
