# Dateinput Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Dateinput provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Dateinput is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dateinput > .k-input-inner` | `role` = `textbox` | The element should be an input or have role="textbox". |
| `.k-dateinput > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-dateinput > .k-input-inner` | `tabindex` = `0` | The element should be focusable. |
| `.k-dateinput > .k-input-inner` | `aria-invalid` = `true` | Rendered when the DateInput is in an invalid state. |
| `.k-dateinput > .k-input-inner` | `aria-describedby` | Points to the hint or error message. |
| `.k-dateinput > .k-input-inner` | `aria-readonly` (or `readonly` natively) = `true` | Rendered when the DateInput is readonly. |
| `.k-dateinput.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the DateInput is disabled. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dateinput component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Increases the value of the date segment that is highlighted. |
| `ArrowDown` | Decreases the value of the date segment that is highlighted. |
| `ArrowLeft` | Moves to previous date segment in the input. |
| `ArrowRight` | Moves to next date segment in the input. |
| `Backspace or Delete` | Deletes value of the date segment. |

### Testing

The Dateinput has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Dateinput has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Date Picker Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html)
