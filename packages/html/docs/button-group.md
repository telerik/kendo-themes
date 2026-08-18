# ButtonGroup Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI ButtonGroup provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ButtonGroup is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ButtonGroup

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `fillMode` | `solid`, `flat`, `outline`, `clear`, `link` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-button-group` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="group"` | Sets the proper role for the group of buttons. |
| `aria-disabled="true"` | The attribute is rendered only when the entire button group is disabled. |
| `aria-pressed` | Specifies the current state of the ButtonGroup. Only the selected button within the group will have this attribute set to true. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focuses the next button in the group. If the focus is on the last button, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous button in the group. If the focus is on the first button, focuses the previous focusable element before the ButtonGorup. |
| `Enter or Space` | Triggers a click action on the button. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Exclusive selection | Only one button in the group can be active at a time. |
| Multi-select | Multiple buttons can be active simultaneously when configured. |
| Disabled group | When the group is disabled, all buttons are non-interactive. |

### Testing

The ButtonGroup has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ButtonGroup has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA `button` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#button)
- [WAI-ARIA `group` Role Specification](https://www.w3.org/TR/wai-aria-1.2/#group)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/button-group/`](https://github.com/telerik/kendo-themes/tree/develop/tests/button-group/).
