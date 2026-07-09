# Colorpalette Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Colorpalette provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Colorpalette is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ColorPalette

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="grid"` | The focusable wrapper announces its role as a grid. |
| `aria-label|aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `aria-activedescendant` | Points to the focused cell in the table. |
| `tabindex="0"` | The element must be focusable. |
| `aria-disabled="true"` | Rendered only when the ColorPalette is disabled. |
| `role="none"|\"presentation"` | Negates the default role of the table element. |
| `role="row"` | Required as the semantic role of the parent table has been removed. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Focuses the next cell below. |
| `ArrowUp` | Focuses the next cell above. |
| `ArrowRight` | Focuses the next cell on the right. |
| `ArrowLeft` | Focuses the next cell on the left. |
| `Enter` | Selects the color from the currently focused cell. |

### Testing

The Colorpalette has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Colorpalette has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
