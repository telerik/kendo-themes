# Colorgradient Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Colorgradient provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Colorgradient is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ColorGradient

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `readonly` | `k-readonly` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-colorgradient` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="textbox"` | The focusable wrapper should be considered a textbox with a value that could be submitted. |
| `aria-label|aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `tabindex="0"` | The element must be focusable. |
| `aria-disabled="true"` | Rendered only when the ColorGradient is disabled. |
| `role="slider"` | The 2D draghandle must have slider role for ARIA-allowed attributes. |
| `aria-orientation="undefined"` | The implicit orientation for the slider must be removed for the 2D handle. |
| `aria-label` | Must provide information about the purpose of the slider and the currently selected color. |
| `aria-valuetext` | Must specify the values on both X and Y axis. |
| `aria-valuenow` | Required by the slider role. |
| `aria-valuemin` | Required by the slider role. |
| `aria-valuemax` | Required by the slider role. |
| `aria-label` | Must provide the name of the channel (red, green, blue, or alpha). |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter` | Activates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element on the page. |
| `Shift + Tab` | Navigates to the previous focusable element on the page. |
| `Escape` | Moves focus back to wrapper element. Deactivates inner ColorGradient navigation. |
| `Tab` | Navigates to the next focusable element in the ColorGradient. If current focus is on the last element, moves focus to the first focusable item in the component. |
| `Shift + Tab` | Navigates to the previous focusable element in the ColorGradient. If current focus is on the first element, moves focus to the last focusable item in the component. |
| `Enter` | For button items, ColorGradient executes the currently focused button action. |
| `ArrowUp` | Moves slider up by large step. |
| `ArrowDown` | Moves slider down by large step. |
| `ArrowLeft` | Moves slider left by large step. |
| `ArrowRight` | Moves slider right by large step. |
| `Shift + ArrowUp` | Moves slider up by small step. |
| `Shift + ArrowDown` | Moves slider down by small step. |
| `Shift + ArrowLeft` | Moves slider left by small step. |
| `Shift + ArrowRight` | Moves slider right by small step. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Gradient canvas | A 2D canvas lets the user pick a color by clicking or dragging. |
| Hue slider | A slider below the canvas adjusts the hue. |
| Opacity slider | A slider adjusts the alpha channel of the selected color. |
| Hex input | A text input accepts a hex color code directly. |
| RGBA inputs | Individual inputs accept red, green, blue, and alpha values. |

### Testing

The Colorgradient has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Colorgradient has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/colorgradient/`](https://github.com/telerik/kendo-themes/tree/develop/tests/colorgradient/).
