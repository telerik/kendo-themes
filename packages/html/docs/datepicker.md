# Datepicker Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Datepicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Datepicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-datepicker .k-input-inner` | `role` = `combobox` | The input element follows the combobox specification. |
| `.k-datepicker .k-input-inner` | `aria-haspopup` = `grid` | Indicates the component has a Calendar Popup that implements role=grid. |
| `.k-datepicker .k-input-inner` | `aria-expanded` = `true` / `false` | Announces whether the Popup is visible or not. |
| `.k-datepicker .k-input-inner` | `aria-controls` | Points to the popup element. |
| `.k-datepicker .k-input-inner` | `aria-label` / `aria-labelledby` | The input needs an accessible name. |
| `.k-invalid .k-input-inner` | `aria-invalid` = `true` | Rendered only when the picker is in form and announces invalid state. |
| `.k-disabled .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the picker is disabled. |
| `.k-datepicker .k-input-button` | `tabindex` = `-1` | Button element must not be focusable. |
| `.k-datepicker .k-input-button` | `aria-label` | The button needs an accessible name. |
| `.k-datepicker.k-disabled .k-button` | `aria-disabled` (or `disabled` natively) | Rendered only when the picker is disabled. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Datepicker component:

| Trigger | Behavior |
| --- | --- |
| `Escape` | Closes the popup |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup |
| `Alt/Opt(Mac) + ArrowUp` | Closes the popup |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |

### Testing

The Datepicker has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Datepicker has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI ARIA specification for combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [ARIA practices Date Picker Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html)
