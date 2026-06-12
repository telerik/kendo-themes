# Bubble Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Bubble provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Bubble is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-bubble` | `tabindex` = `0` | The Chat bubble must be focusable. |
| `.k-bubble-expandable-indicator` | `role` = `button` | The expandable indicator must have an appropriate role. |
| `.k-bubble-expandable-indicator` | `aria-label` / `title` | The expandable indicator must be properly labelled. |
| `.k-bubble-expandable-indicator` | `tabindex` = `0` | The expandable indicator must be part of the page tabsequence. |

### Testing

The Bubble has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Bubble has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
