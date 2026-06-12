# Otp Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Otp provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Otp is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-otp` | `role` = `group` | Sets the proper role for the OTP. |
| `.k-otp > input` | `type` = `hidden` | The hidden input holding the OTP inputs value. |
| `.k-otp > input` | `aria-hidden` = `true` | Hides the hidden input from assistive technologies. |
| `.k-otp .k-otp-input > .k-input-inner` | `aria-label` / `aria-labelledby` | The input needs an accessible name to be assigned to it. |
| `.k-otp .k-otp-input > .k-input-inner` | `autocomplete` = `off` | Sets the default autocomplete for the input. |
| `.k-otp .k-otp-input > .k-input-inner` | `aria-describedby` | Points to the hint or error message for the OTP inputs. |
| `.k-otp.k-invalid .k-otp-input > .k-input-inner, .k-otp.ng-invalid .k-otp-input > .k-input-inner` | `aria-invalid` = `true` | Rendered only when the OTP is in a form and announces the invalid state. |
| `.k-otp.k-disabled .k-otp-input > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the OTP is disabled. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Otp component:

| Trigger | Behavior |
| --- | --- |
| `Typing in the input` | Sets the value in the input and moves the focus to the next focusable input in the OTP. (if any) |
| `Tab` | Focuses the next input in the OTP. If the focus is on the last input, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous input in the OTP. If the focus is on the first input, focuses the previous focusable element before the OTP. |
| `ArrowRight` | Moves the focus to the next focusable input in the OTP. (if any) |
| `ArrowLeft` | Moves the focus to the previous focusable input in the OTP. (if any) |
| `Backspace` | Deletes the value of the focused input and moves the focus on the previous input. (if any). |
| `Delete` | Deletes the value of the focused input. |

### Testing

The Otp has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Otp has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Specification for the TextBox](https://www.w3.org/TR/wai-aria-1.2/#textbox)
