# Timedurationpicker Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Timedurationpicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Timedurationpicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### TimeDurationPicker

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | The input element follows the combobox specification. |
| `aria-haspopup="dialog"` | Indicates the component has a Dialog Popup. |
| `aria-expanded="true"|\"false"` | Announces whether the Popup is visible or not. |
| `aria-controls` | Points to the popup element. |
| `aria-label|aria-labelledby` | The input needs an accessible name. |
| `aria-invalid="true"` | Rendered only when the picker is in form and announces invalid state. |
| `aria-disabled="true"` | Rendered only when the picker is disabled. |
| `tabindex="-1"` | Button element must not be focusable. |
| `aria-label` | The button needs an accessible name. |
| `aria-disabled` | Rendered only when the picker is disabled. |
| `role="listbox"` | The timelist elements must have listbox role. |
| `aria-label|aria-labelledby` | The listbox needs an accessible name. |
| `role="none"` | The ul element semantic meaning must be removed. |
| `role="option"` | The available options must be marked as such. |

#### Keyboard Navigation

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

The Timedurationpicker has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Timedurationpicker has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [WAI-ARIA specification for listbox](https://www.w3.org/TR/wai-aria-1.2/#listbox)
