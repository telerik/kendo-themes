# Coloreditor Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Coloreditor provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Coloreditor is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### ColorEditor

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `focus` | `k-focus` |

These CSS classes are applied to the `k-coloreditor` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="textbox"` | The focusable wrapper should be considered a textbox with a submittable value. |
| `aria-label|aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `tabindex="0"` | The element must be focusable. |
| `aria-disabled="true"` | Rendered only when the FlatColorPicker is disabled. |
| `role="none"` | The inner ColorGradient must have its role removed. |
| `tabindex="-1"` | The inner ColorGradient must be removed from the page tab sequence. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Tabbed views | Switches between a gradient picker and a palette picker via tabs. |
| Hex and RGBA inputs | Text inputs allow direct entry of hex codes and RGBA channel values. |
| Opacity slider | A slider controls the alpha channel of the selected color. |
| Recent colors | Displays a row of recently used colors for quick reuse. |

### Testing

The Coloreditor has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Coloreditor has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/coloreditor/`](https://github.com/telerik/kendo-themes/tree/develop/tests/coloreditor/).
