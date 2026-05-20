# Otp Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Otp component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-otp` | `role=group` | Sets the proper role for the OTP. |
| `.k-otp > input` | `type=hidden` | The hidden input holding the OTP inputs value. |
| `.k-otp > input` | `aria-hidden=true` | Hides the hidden input from assistive technologies. |
| `.k-otp .k-otp-input > .k-input-inner` | `label for or aria-label or aria-labelledby` | The input needs an accessible name to be assigned to it. |
| `.k-otp .k-otp-input > .k-input-inner` | `autocomplete=off` | Sets the default autocomplete for the input. |
| `.k-otp .k-otp-input > .k-input-inner` | `aria-describedby (when has hint or error)` | Points to the hint or error message for the OTP inputs. |
| `.k-otp.k-invalid .k-otp-input > .k-input-inner, .k-otp.ng-invalid .k-otp-input > .k-input-inner` | `aria-invalid=true` | Rendered only when the OTP is in a form and announces the invalid state. |
| `.k-otp.k-disabled .k-otp-input > .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered only when the OTP is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Otp component:

| Shortcut | Behavior |
| --- | --- |
| `Typing in the input` | Sets the value in the input and moves the focus to the next focusable input in the OTP. (if any) |
| `Tab` | Focuses the next input in the OTP. If the focus is on the last input, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous input in the OTP. If the focus is on the first input, focuses the previous focusable element before the OTP. |
| `Right Arrow` | Moves the focus to the next focusable input in the OTP. (if any) |
| `Left Arrow` | Moves the focus to the previous focusable input in the OTP. (if any) |
| `Backspace` | Deletes the value of the focused input and moves the focus on the previous input. (if any). |
| `Delete` | Deletes the value of the focused input. |
