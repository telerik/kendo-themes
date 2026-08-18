# Citation Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Citation provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Citation is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Citation

#### UX Behavior

| Feature | Description |
| --- | --- |
| Inline citation | Displays a source domain as a small, pill-shaped chip inline within AI-generated content. |
| Additional sources | An optional count renders as a "+N" suffix indicating further uncited sources. |

### CitationPopover

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label` | Accessible name applied to the Previous and Next pagination icon buttons. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter or Space` | Triggers the focused Previous/Next icon button. |
| `Escape` | Dismisses the popover (inherited from Popover). |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Paged navigation | Displays a "current/total" page indicator with Previous/Next buttons to move between citation pages. |
| Sliding views | Slides between page views using the --kendo-citation-popover-view-current CSS variable instead of unmounting content. |

### CitationPopoverView

#### UX Behavior

| Feature | Description |
| --- | --- |
| Structured view | Renders the title, body summary, and source link of a cited source in a consistent layout. |

### Testing

The Citation has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Citation has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Dialog (Modal) Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/citation/`](https://github.com/telerik/kendo-themes/tree/develop/tests/citation/).
