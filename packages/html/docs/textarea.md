# Textarea Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Textarea provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Textarea is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-textarea > .k-input-inner` | `role` = `textbox` | Describes the role of the component. |
| `.k-textarea > .k-input-inner` | `aria-label` / `aria-labelledby` | The textarea requires an accessible name (provided by consuming app). |
| `.k-textarea > .k-input-inner` | `aria-multiline` = `true` | Required on role=textbox to indicate multi-line behavior. Implicit on native <textarea>, so not needed there. |
| `.k-textarea > .k-input-inner` | `aria-invalid` = `true` | Rendered only when the TextArea is in a form and announces the invalid state. |
| `.k-textarea > .k-input-inner` | `aria-describedby` | Points to the hint or error message for the textarea. |
| `.k-textarea.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the TextArea is disabled. |

### Testing

The Textarea has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Textarea has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification for the TextBox](https://www.w3.org/TR/wai-aria-1.2/#textbox)
