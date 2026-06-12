# Switch Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Switch provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Switch is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-switch` | `role` = `switch` | Announces the switch role of the element. |
| `.k-switch` | `aria-label` / `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `.k-switch` | `aria-required` = `true` | Rendered only when the Switch is in a form. Required because <span role="switch"> does not support the native required attribute. |
| `.k-switch` | `aria-checked` | Announces the checked state of the Switch. |
| `.k-switch` | `aria-describedby` | Points to the hint or error message for the switch. |
| `.k-switch` | `aria-invalid` = `true` | Rendered only when the Switch is in a form and announces the invalid state. |
| `.k-switch:not(.k-disabled)` | `tabindex` = `0` | The element must be focusable. Disabled switches are removed from tab order. |
| `.k-switch.k-disabled` | `aria-disabled` = `true` | Rendered only when the Switch is disabled. |
| `.k-switch.k-readonly` | `aria-readonly` = `true` | Rendered only when the Switch is readonly. Readonly switches remain focusable but their value cannot be changed. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Switch component:

| Trigger | Behavior |
| --- | --- |
| `Space` | Toggles the checked state of the Switch. Works analogically to the checkbox. |

### Testing

The Switch has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Switch has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification for the Switch](https://www.w3.org/TR/wai-aria-1.2/#switch)
