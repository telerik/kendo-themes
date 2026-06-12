# PdfViewer Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI PdfViewer provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The PdfViewer is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-pdf-viewer .k-canvas` | `tabindex` = `0` | Defines the focusable page container element. |
| `.k-pdf-viewer .k-canvas` | `aria-label` | Describes the purpose of the focusable container. |
| `.k-pdf-viewer .k-canvas` | `role` = `document` | Defines that content should be evaluated in reader mode by assistive technologies. |
| `.k-pdf-viewer .k-toolbar .k-button:has([class*="i-search"])` | `aria-haspopup` = `dialog` | Describes that the Search tool button opens a dialog element. |
| `.k-pdf-viewer .k-canvas .k-search-panel` | `role` = `dialog` | Describes the role of the Search panel. |
| `.k-pdf-viewer .k-canvas .k-search-panel` | `aria-label` | Label for the Search panel, same label as the Search tool. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the PdfViewer component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Scrolls up the container. |
| `ArrowDown` | Scrolls down the container. |
| `PageUp` | Scrolls up the container. |
| `PageDown` | Scrolls down the container. |
| `Shift + Tab` | Returns focus to the toolbar. |

### Testing

The PdfViewer has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The PdfViewer has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
