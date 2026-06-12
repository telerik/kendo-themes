# Timeline Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Timeline provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Timeline is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-wrap .k-timeline-scrollable-wrap` | `role` = `tablist` | Indicates the tablist role for the scrollable wrap element. |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap)` | `role` = `tab` | Individual tab element on the track. |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap).k-focus` | `aria-selected` = `true` | Announces the selected state of the focused tab. |
| `.k-timeline.k-timeline-horizontal .k-timeline-flag-wrap` | `role` = `none` | The flag-wrap items have semantics removed. |
| `.k-timeline.k-timeline-horizontal .k-timeline-flag-wrap` | `aria-hidden` = `true` | Flag-wrap items are hidden from the accessibility tree. |
| `.k-timeline.k-timeline-horizontal .k-card:not(:empty)` | `role` = `tabpanel` | The card serves as the tab panel content. |
| `.k-timeline.k-timeline-horizontal .k-card:not(:empty)` | `aria-label` | Refers to the tab element that controls the panel. |
| `.k-timeline-arrow` | `aria-hidden` = `true` | Arrow buttons are hidden from the accessibility tree. |
| `.k-timeline.k-timeline-vertical .k-card` | `role` = `button` | Items in the vertical timeline are buttons. |
| `.k-timeline.k-timeline-vertical .k-card` | `aria-describedby` | Vertical timeline cards are described by their date elements. |
| `.k-timeline.k-timeline-vertical .k-card` | `aria-live` = `polite` | Vertical timeline cards are live regions. |
| `.k-timeline.k-timeline-vertical .k-card` | `tabindex` = `0` | Vertical timeline cards are focusable. |
| `.k-timeline.k-timeline-collapsible .k-collapsed .k-card` | `aria-expanded` = `false` | Collapsed cards announce their collapsed state. |
| `.k-timeline.k-timeline-collapsible .k-timeline-card:not(.k-collapsed) .k-card` | `aria-expanded` = `true` | Expanded cards announce their expanded state. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Timeline component:

| Trigger | Behavior |
| --- | --- |
| `ArrowLeft` | Activates the previous tab (item). |
| `ArrowRight` | Activates the next tab (item). |
| `Home` | Focuses the first item and activates it. |
| `End` | Focuses the last item and activates it. |
| `Shift + Tab` | Focuses the previous item (button) in the Timeline. |
| `Tab` | Focuses the next item (button) in the Timeline. |
| `Enter` | If expandable, expands/collapses the currently focused item. |
| `Space` | If expandable, expands/collapses the currently focused item. |

### Testing

The Timeline has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Timeline has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tablist](https://www.w3.org/TR/wai-aria-1.2/#tablist)
- [WAI-ARIA practices: TabList example](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html)
