# Textbox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Textbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Textbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-textbox > .k-input-inner` | `role` = `textbox` | Describes the role of the component. |
| `.k-textbox > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-textbox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the TextBox is in an invalid state. |
| `.k-textbox > .k-input-inner` | `aria-describedby` | Points to the hint or error message for the input. |
| `.k-textbox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the TextBox is disabled. |

### Testing

The Textbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Textbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification for the TextBox](https://www.w3.org/TR/wai-aria-1.2/#textbox)
