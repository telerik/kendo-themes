# Datetimepicker Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Datetimepicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Datetimepicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-datetimepicker .k-input-inner` | `role` = `combobox` | The input element follows the combobox specification. |
| `.k-datetimepicker .k-input-inner` | `aria-haspopup` = `dialog` | Indicates the component has a Dialog Popup. |
| `.k-datetimepicker .k-input-inner` | `aria-expanded` = `true` / `false` | Announces whether the Popup is visible or not. |
| `.k-datetimepicker .k-input-inner` | `aria-controls` | Points to the popup element containing the calendar or time selector. |
| `.k-datetimepicker .k-input-inner` | `aria-activedescendant` | Points to the focused item in the Calendar or Time Popup. |
| `.k-datetimepicker .k-input-inner` | `aria-label` / `aria-labelledby` | The input needs an accessible name. |
| `.k-invalid .k-input-inner` | `aria-invalid` = `true` | Rendered only when the picker is in form and announces invalid state. |
| `.k-disabled .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the picker is disabled. |
| `.k-datetimepicker .k-input-button` | `tabindex` = `-1` | Button element must not be focusable. |
| `.k-datetimepicker .k-input-button` | `aria-label` | The button needs an accessible name. |
| `.k-datetimepicker.k-disabled .k-button` | `aria-disabled` (or `disabled` natively) | Rendered only when the picker is disabled. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Datetimepicker component:

| Trigger | Behavior |
| --- | --- |
| `Escape` | Discards the selection and closes the popup. |
| `Enter` | Enters in time edit if calendar is the target. Otherwise, accepts the selected time and closes the popup. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the dropdown and moves the focus to the displayed calendar. |
| `Alt/Opt(Mac) + ArrowUp` | Closes the dropdown and moves the focus to the input element. |

### Testing

The Datetimepicker has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Datetimepicker has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI ARIA specification for combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [WAI ARIA specification for spinbutton](https://www.w3.org/TR/wai-aria-1.2/#spinbutton)
- [ARIA practices Date Picker Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html)
