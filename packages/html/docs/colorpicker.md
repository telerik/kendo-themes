# Colorpicker Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Colorpicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Colorpicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ColorPicker

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

These CSS classes are applied to the `k-colorpicker` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | The focusable element should have role combobox (input with popup). |
| `aria-label|aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `aria-haspopup="dialog"` | Indicates the component has a Dialog Popup. |
| `aria-expanded="true"|\"false"` | Announces the visibility state of the popup. |
| `aria-controls` | Points to the popup element. |
| `tabindex="0"` | The element must be focusable. |
| `aria-disabled="true"` | Rendered only when the picker is disabled. |
| `tabindex="-1"` | The inner ColorGradient must be removed from the page tab sequence. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Alt/Opt(Mac) + ArrowDown` | Opens pop up |
| `Enter` | Opens pop up |
| `Alt/Opt(Mac) + ArrowUp or Escape` | Closes popup |
| `Escape` | Closes Popup and moves focus back to k-colorpicker element. |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift + Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For button items, executes the currently focused button action. |
| `Escape` | If any of the colorgradient elements are currently focused, bring focus back to the k-colorpicker element. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Popup | Opens a color picker popup when the swatch button is clicked. |
| Color preview | The trigger button reflects the currently selected color. |
| Flat mode | Can be rendered inline without a popup wrapper. |
| Gradient and palette tabs | Tabs let the user switch between gradient picker and palette. |

### Testing

The Colorpicker has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Colorpicker has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/colorpicker/`](https://github.com/telerik/kendo-themes/tree/develop/tests/colorpicker/).
