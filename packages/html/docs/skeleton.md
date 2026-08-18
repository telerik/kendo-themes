# Skeleton Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Skeleton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Skeleton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Skeleton

#### UX Behavior

| Feature | Description |
| --- | --- |
| Shape variants | Available in text, rectangle, and circle shapes to mirror real content. |
| Animation | A shimmer or pulse animation plays while content is loading. |
| Composition | Multiple skeleton elements compose a placeholder that approximates the actual layout. |

### Testing

The Skeleton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Skeleton has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WCAG 4.1.3 Status Messages — loading states should be announced to assistive technology](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/skeleton/`](https://github.com/telerik/kendo-themes/tree/develop/tests/skeleton/).
