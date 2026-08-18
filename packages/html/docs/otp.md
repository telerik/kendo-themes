# Otp Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Otp provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Otp is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### OneTimePassword

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `invalid` | `k-invalid` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-otp` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="group"` | Sets the proper role for the OTP. |
| `type="hidden"` | The hidden input holding the OTP inputs value. |
| `aria-hidden="true"` | Hides the hidden input from assistive technologies. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Typing in the input` | Sets the value in the input and moves the focus to the next focusable input in the OTP. (if any) |
| `Tab` | Focuses the next input in the OTP. If the focus is on the last input, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous input in the OTP. If the focus is on the first input, focuses the previous focusable element before the OTP. |
| `ArrowRight` | Moves the focus to the next focusable input in the OTP. (if any) |
| `ArrowLeft` | Moves the focus to the previous focusable input in the OTP. (if any) |
| `Backspace` | Deletes the value of the focused input and moves the focus on the previous input. (if any). |
| `Delete` | Deletes the value of the focused input. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Auto-advance | Focus moves to the next input automatically after each character is entered. |
| Paste | Pasting a code string fills all inputs at once. |
| Separator | Groups of inputs can be visually separated by divider characters. |
| Masked | Characters can be hidden like a password field. |

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

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/otp/`](https://github.com/telerik/kendo-themes/tree/develop/tests/otp/).
