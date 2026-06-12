# Timepicker Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Timepicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Timepicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-timepicker .k-input-inner` | `role` = `combobox` | The input element follows the combobox specification. |
| `.k-timepicker .k-input-inner` | `aria-haspopup` = `dialog` | Indicates the component has a Dialog Popup. |
| `.k-timepicker .k-input-inner` | `aria-expanded` = `true` / `false` | Announces whether the Popup is visible or not. |
| `.k-timepicker .k-input-inner` | `aria-controls` | Points to the popup element. |
| `.k-timepicker .k-input-inner` | `aria-label` / `aria-labelledby` | The input needs an accessible name. |
| `.k-invalid .k-input-inner` | `aria-invalid` = `true` | Rendered only when the picker is in form and announces invalid state. |
| `.k-disabled .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the picker is disabled. |
| `.k-timepicker .k-input-button` | `tabindex` = `-1` | Button element must not be focusable. |
| `.k-timepicker .k-input-button` | `aria-label` | The button needs an accessible name. |
| `.k-timepicker.k-disabled .k-button` | `aria-disabled` (or `disabled` natively) | Rendered only when the picker is disabled. |
| `.k-time-list` | `role` = `listbox` | The timelist elements must have listbox role. |
| `.k-time-list` | `aria-label` / `aria-labelledby` | The listbox needs an accessible name. |
| `.k-time-list-wrapper .k-reset` | `role` = `none` | The ul element semantic meaning must be removed. |
| `.k-time-list-wrapper .k-item` | `role` = `option` | The available options must be marked as such. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Timepicker component:

| Trigger | Behavior |
| --- | --- |
| `Escape` | Closes the popup |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup |
| `Alt/Opt(Mac) + ArrowUp` | Closes the popup |
| `ArrowUp` | Increases the value of the time segment that is highlighted. |
| `ArrowDown` | Decreases the value of the time segment that is highlighted. |
| `ArrowLeft` | Moves to previous time segment in the input. |
| `ArrowRight` | Moves to next time segment in the input. |
| `Backspace` | Deletes value of the time segment. |
| `Escape` | Closes the popup |
| `Shift + Tab or ArrowLeft` | Focuses previous carousel. |
| `Tab or ArrowRight` | Focuses next carousel. |
| `ArrowDown` | Selects next value in the carousel. |
| `ArrowUp` | Selects previous value in the carousel. |

### Testing

The Timepicker has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Timepicker has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [WAI-ARIA specification for listbox](https://www.w3.org/TR/wai-aria-1.2/#listbox)
