# Daterangepicker Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Daterangepicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Daterangepicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DateRangePicker

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label|aria-labelledby` | Each date input needs an accessible name. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | Closes the popup |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup |
| `Alt/Opt(Mac) + ArrowUp` | Closes the popup |

### Testing

The Daterangepicker has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Daterangepicker has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI ARIA specification for combobox](https://www.w3.org/TR/wai-aria-1.2/#combobox)
- [ARIA practices Date Picker Dialog Example](https://www.w3.org/WAI/ARIA/apg/example-index/dialog-modal/datepicker-dialog.html)
