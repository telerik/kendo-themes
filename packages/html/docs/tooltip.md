# Tooltip Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Tooltip provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Tooltip is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Tooltip

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `themeColor` | `base`, `inverse`, `info`, `success`, `warning`, `error` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="tooltip"` | Specifies the tooltip role of the tooltip container. |
| `role="button"` | The close button needs an explicit button role. |
| `aria-label` | The close button needs an accessible name. |
| `id` | required so the trigger element can reference it via aria-describedby |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | Dismisses the Tooltip. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Hover trigger | Appears when the cursor hovers over the target element. |
| Focus trigger | Also appears when the target receives keyboard focus. |
| Auto-positioning | Automatically repositions to remain within the viewport. |
| Delay | Configurable show and hide delays prevent flickering. |

### Testing

The Tooltip has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Tooltip has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [MDN description for tooltip role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/tooltip/`](https://github.com/telerik/kendo-themes/tree/develop/tests/tooltip/).
