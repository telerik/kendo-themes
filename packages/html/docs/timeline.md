# Timeline Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Timeline component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-wrap .k-timeline-scrollable-wrap` | `role=tablist` | Indicates the tablist role for the scrollable wrap element. |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap)` | `role=tab` | Individual tab element on the track. |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap).k-focus` | `aria-selected=true` | Announces the selected state of the focused tab. |
| `.k-timeline.k-timeline-horizontal .k-timeline-flag-wrap` | `role=none` | The flag-wrap items have semantics removed. |
| `.k-timeline.k-timeline-horizontal .k-timeline-flag-wrap` | `aria-hidden=true` | Flag-wrap items are hidden from the accessibility tree. |
| `.k-timeline.k-timeline-horizontal .k-card:not(:empty)` | `role=tabpanel` | The card serves as the tab panel content. |
| `.k-timeline.k-timeline-horizontal .k-card:not(:empty)` | `aria-label` | Refers to the tab element that controls the panel. |
| `.k-timeline-arrow` | `aria-hidden=true` | Arrow buttons are hidden from the accessibility tree. |
| `.k-timeline.k-timeline-vertical .k-card` | `role=button` | Items in the vertical timeline are buttons. |
| `.k-timeline.k-timeline-vertical .k-card` | `aria-describedby` | Vertical timeline cards are described by their date elements. |
| `.k-timeline.k-timeline-vertical .k-card` | `aria-live=polite` | Vertical timeline cards are live regions. |
| `.k-timeline.k-timeline-vertical .k-card` | `tabindex=0` | Vertical timeline cards are focusable. |
| `.k-timeline.k-timeline-collapsible .k-collapsed .k-card` | `aria-expanded=false` | Collapsed cards announce their collapsed state. |
| `.k-timeline.k-timeline-collapsible .k-timeline-card:not(.k-collapsed) .k-card` | `aria-expanded=true` | Expanded cards announce their expanded state. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Timeline component:

| Shortcut | Behavior |
| --- | --- |
| `Left Arrow` | Activates the previous tab (item). |
| `Right Arrow` | Activates the next tab (item). |
| `Home` | Focuses the first item and activates it. |
| `End` | Focuses the last item and activates it. |
| `Shift + Tab` | Focuses the previous item (button) in the Timeline. |
| `Tab` | Focuses the next item (button) in the Timeline. |
| `Enter` | If expandable, expands/collapses the currently focused item. |
| `Space` | If expandable, expands/collapses the currently focused item. |
