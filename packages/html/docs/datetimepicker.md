# Datetimepicker Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Datetimepicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Datetimepicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DateTimeContainer

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-invalid="true"` | Rendered only when the picker is in form and announces invalid state. |
| `aria-disabled="true"` | Rendered only when the picker is disabled. |

### DateTimePicker

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

These CSS classes are applied to the `k-datetimepicker` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | The input element follows the combobox specification. |
| `aria-haspopup="dialog"` | Indicates the component has a Dialog Popup. |
| `aria-expanded="true"|\"false"` | Announces whether the Popup is visible or not. |
| `aria-controls` | Points to the popup element containing the calendar or time selector. |
| `aria-activedescendant` | Points to the focused item in the Calendar or Time Popup. |
| `aria-label|aria-labelledby` | The input needs an accessible name. |
| `tabindex="-1"` | Button element must not be focusable. |
| `aria-label` | The button needs an accessible name. |
| `aria-disabled` | Rendered only when the picker is disabled. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | Discards the selection and closes the popup. |
| `Enter` | Enters in time edit if calendar is the target. Otherwise, accepts the selected time and closes the popup. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the dropdown and moves the focus to the displayed calendar. |
| `Alt/Opt(Mac) + ArrowUp` | Closes the dropdown and moves the focus to the input element. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Combined picker | A single popup contains both a date calendar and a time selector. |
| Tab switching | The popup header switches between the date and time views. |
| Direct input | Date and time can also be typed directly into the input. |
| Disabled state | When disabled, the input and popup are non-interactive. |

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

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/datetimepicker/`](https://github.com/telerik/kendo-themes/tree/develop/tests/datetimepicker/).
