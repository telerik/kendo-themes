# SegmentedControl Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI SegmentedControl provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SegmentedControl is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### SegmentedControl

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="group"` | Sets the proper role for the group of buttons. |
| `aria-hidden="true"` | The thumb is purely decorative and should be hidden from screen readers. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focuses the next button in the control. If the focus is on the last button, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous button in the control. If the focus is on the first button, focuses the previous focusable element before the Segmented Control. |
| `Enter or Space` | Activates the focused button and selects it. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Exclusive selection | Only one segment can be active at a time. |
| Active indicator | The selected segment is visually highlighted. |
| Disabled items | Individual segments can be disabled and are non-interactive. |

### SegmentedControlButton

#### Component States

| State | CSS Class |
| --- | --- |
| `selected` | `k-selected` |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-segmented-control-button` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | Each button must have the appropriate button role. |
| `aria-pressed="true"` | Only the selected button within the group will have this attribute set to true. |
| `aria-disabled="true"` | Indicates that the button is disabled and cannot be interacted with. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Selection | Clicking this button selects it and automatically deselects the others. |
| Disabled state | When disabled, this segment cannot be activated. |

### Testing

The SegmentedControl has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The SegmentedControl has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA `button` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#button)
- [WAI-ARIA `group` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#group)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/segmented-control/`](https://github.com/telerik/kendo-themes/tree/develop/tests/segmented-control/).
