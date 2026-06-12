# Loader Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Loader provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Loader is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-loader-container` | `role` = `status` | Live region for loading state. |
| `.k-loader-container` | `aria-live` = `polite` | Polite announcements of loading state changes. |
| `.k-loader-container` | `aria-label` | Accessible name for the loader container. |

### Testing

The Loader has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Loader has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
