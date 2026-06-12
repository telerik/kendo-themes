# Maskedtextbox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Maskedtextbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Maskedtextbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-maskedtextbox > .k-input-inner` | `role` = `textbox` | Describes the role of the component. |
| `.k-maskedtextbox > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-maskedtextbox > .k-input-inner` | `aria-placeholder` | Announces the mask or placeholder for the component. |
| `.k-maskedtextbox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the MaskedTextBox is in an invalid state. |
| `.k-maskedtextbox > .k-input-inner` | `aria-describedby` | Points to the hint or error message. |
| `.k-maskedtextbox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the MaskedTextBox is disabled. |

### Testing

The Maskedtextbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Maskedtextbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
