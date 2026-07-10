# ActionSheet Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI ActionSheet provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ActionSheet is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ActionSheet

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="dialog"` | Announces the dialog role of the component. |
| `aria-hidden="true"|\"false"` | Announces the hidden state of the ActionSheet container. |
| `aria-modal="true"` | Announces that the action sheet is modal. |
| `id` | Used to associate the title with the action sheet wrapper element. |
| `aria-labelledby` | references ${id}-title |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Escape` | Dismisses the ActionSheet. |
| `Tab` | Moves focus to the next focusable item. |
| `Shift + Tab` | Moves focus to the previous focusable item. |
| `Enter` | Triggers the action associated with the currently focused item. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Overlay | Renders over the page content and prevents interaction with the rest of the UI. |
| Side | Can be anchored to any edge of the screen: top, right, bottom, or left. |
| Title and subtitle | Optionally renders a title and subtitle to describe the available actions. |
| Items | Each action item consists of a label and an optional icon. |
| Dismiss | Closes when the user taps the overlay backdrop or presses Escape. |

### Testing

The ActionSheet has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ActionSheet has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA practices Modal Dialog Example](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/action-sheet/`](https://github.com/telerik/kendo-themes/tree/develop/tests/action-sheet/).
