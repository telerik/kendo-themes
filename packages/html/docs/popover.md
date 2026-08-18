# Popover Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Popover provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Popover is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Popover

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="dialog"` | Announces the dialog role when the popover contains focusable elements. Use role=tooltip when it does not. |
| `aria-labelledby` | Links the popover container with the popover header element when there is focusable content. |
| `aria-describedby` | Links the popover container with the popover body element when there is focusable content. |
| `id` | required so the trigger element can reference it via aria-describedby |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | Dismisses the Popover. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Trigger | Opens when the target element is clicked, hovered, or focused. |
| Auto-positioning | Automatically flips or shifts to stay within the viewport. |
| Dismiss | Closes when clicking outside the popover or pressing Escape. |
| Arrow | An optional pointer arrow visually connects the popover to its trigger. |

### Testing

The Popover has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Popover has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/)
- [MDN description for tooltip role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tooltip_role)
- [MDN description for dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/popover/`](https://github.com/telerik/kendo-themes/tree/develop/tests/popover/).
