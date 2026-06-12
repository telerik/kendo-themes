# Colorpicker Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Colorpicker provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Colorpicker is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-colorpicker` | `role` = `combobox` | The focusable element should have role combobox (input with popup). |
| `.k-colorpicker` | `aria-label` / `aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `.k-colorpicker` | `aria-haspopup` = `dialog` | Indicates the component has a Dialog Popup. |
| `.k-colorpicker` | `aria-expanded` = `true` / `false` | Announces the visibility state of the popup. |
| `.k-colorpicker` | `aria-controls` | Points to the popup element. |
| `.k-colorpicker` | `tabindex` = `0` | The element must be focusable. |
| `.k-colorpicker.k-disabled` | `aria-disabled` = `true` | Rendered only when the picker is disabled. |
| `.k-colorpicker.k-disabled .k-button` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the picker is disabled. |
| `.k-colorgradient` | `tabindex` = `-1` | The inner ColorGradient must be removed from the page tab sequence. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Colorpicker component:

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

### Testing

The Colorpicker has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Colorpicker has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
