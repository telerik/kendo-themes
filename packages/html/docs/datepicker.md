# Datepicker Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Datepicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Datepicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DatePicker

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `valid` | `k-valid` |
| `invalid` | `k-invalid` |
| `required` | `k-required` |
| `disabled` | `k-disabled` |
| `loading` | `k-loading` |
| `readonly` | `k-readonly` |

These CSS classes are applied to the `k-datepicker` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | The input element follows the combobox specification. |
| `aria-haspopup="grid"` | Indicates the component has a Calendar Popup that implements role=grid. |
| `aria-expanded="true"|\"false"` | Announces whether the Popup is visible or not. |
| `aria-controls` | Points to the popup element. |
| `aria-label|aria-labelledby` | The input needs an accessible name. |
| `aria-invalid="true"` | Rendered only when the picker is in form and announces invalid state. |
| `aria-disabled="true"` | Rendered only when the picker is disabled. |
| `tabindex="-1"` | Button element must not be focusable. |
| `aria-label` | The button needs an accessible name. |
| `aria-disabled` | Rendered only when the picker is disabled. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | Closes the popup |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup |
| `Alt/Opt(Mac) + ArrowUp` | Closes the popup |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Calendar popup | A calendar opens when the calendar button is clicked. |
| Direct input | The date can also be typed directly into the input field. |
| Formatted value | The selected date is formatted according to the configured locale. |
| Min / Max | Selection can be restricted to a configurable date range. |
| Disabled state | When disabled, the input and popup button are non-interactive. |

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

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/datepicker/`](https://github.com/telerik/kendo-themes/tree/develop/tests/datepicker/).
