# Checkpoint Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Checkpoint provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Checkpoint is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Checkpoint

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-hidden="true"` | The gradient separator lines are decorative and hidden from assistive technologies. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Focusing an interactive descendant (e.g. a Button) reveals the checkpoint via `:focus-within`. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Hover reveal | Hidden by default and faded in on hover of the checkpoint or when a descendant (e.g. a Button) receives focus. |
| Always visible | Set the `visible` prop to keep the checkpoint permanently shown, bypassing the hover/focus reveal. |

### Testing

The Checkpoint has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Checkpoint has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/checkpoint/`](https://github.com/telerik/kendo-themes/tree/develop/tests/checkpoint/).
