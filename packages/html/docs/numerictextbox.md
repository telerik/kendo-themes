# Numerictextbox Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Numerictextbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Numerictextbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-numerictextbox > .k-input-inner` | `role` = `spinbutton` | Announces the spin button capabilities of the NumericTextBox. |
| `.k-numerictextbox > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-numerictextbox > .k-input-inner` | `aria-valuenow` | Announces the current value of the component. |
| `.k-numerictextbox > .k-input-inner` | `aria-valuemin` | Announces the minimum allowed value. |
| `.k-numerictextbox > .k-input-inner` | `aria-valuemax` | Announces the maximum allowed value. |
| `.k-numerictextbox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the NumericTextBox is in an invalid state. |
| `.k-numerictextbox > .k-input-inner` | `aria-describedby` | Points to the hint or error message. |
| `.k-numerictextbox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the NumericTextBox is disabled. |
| `.k-numerictextbox .k-spin-button > .k-button` | `role` = `button` | Describes the role of the spin buttons. |
| `.k-numerictextbox .k-spin-button > .k-button` | `aria-label` | The button element requires discernible text. |
| `.k-numerictextbox.k-disabled .k-spin-button > .k-button` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the NumericTextBox is disabled. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Numerictextbox component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Increases the value of the focused NumericTextBox with the step. |
| `ArrowDown` | Decreases the value of the focused NumericTextBox with the step. |

### Testing

The Numerictextbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Numerictextbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Spinbutton Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/)
