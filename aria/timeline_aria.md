## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Timeline component features two very different modes of rendering: vertical and horizontal. Those two modes require two very different approaches in terms of WAI-ARIA implementation:


 - Horizontal Timeline: should be implement as a `role: tablist` component.
 - Vertical Timeline should be implemented as a collection of Buttons. Each event on the Timeline is a Button.

### Horizontal Timeline

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-wrap .k-timeline-scrollable-wrap` | `role=tablist` | Indicates the tablist role for the ul element of the Timeline. |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap)` | `role=tab` | The tab `li` element. |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-item[aria-selected=true]` | `aria-describedby` | The current selected tab element must be described by its tabpanel. |
| `.k-timeline.k-timeline-horizontal .k-timeline-track-item:not(.k-timeline-flag-wrap).k-focus` | `aria-selected=true` | Announces the selected state of the tab. |
| `.k-timeline.k-timeline-horizontal .k-timeline-flag-wrap` | `role=none` | The flag wrap elements must have its semantics removed. |
|  | `aria-hidden=true` | The flag wrap should not be present in the accessibility tree. |
| `.k-timeline.k-timeline-horizontal .k-card:not(:empty)` | `role=tabpanel` | The content `div` of the tab. |
|  | `aria-label` | Refers to the tab element that controls the panel. |
| `.k-timeline.k-timeline-horizontal .k-timeline-event[style='transform: translate3d(0px, 0px, 0px);'] .k-card` | `tabindex=0` | The current tab panel elements must be focusable, so that its contents would be announced. |
| `.k-timeline-arrow` | `aria-hidden=true` | Introduce "aria-hidden" attribute for the scrollable buttons. The buttons are not included in the tabsequence. |

### Vertical Timeline

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-timeline.k-timeline-vertical .k-card` | `role=button` | The items in the vertical Timeline are represented as buttons. |
|  | `aria-describedby=.k-timeline-date id` | The items in the vertical Timeline are described by their date elements. |
|  | `aria-live=polite` | The items in the vertical Timeline must be marked as live regions. |
|  | `tabindex=0` | The items in the vertical Timeline must be focusable. |
| `.k-timeline.k-timeline-vertical .k-collapsed .k-card` | `aria-expanded=false` | When collapsed, the items in the vertical Timeline must have their "aria-expanded" attribute set to false. |
| `.k-timeline.k-timeline-vertical .k-timeline-card:not(.k-collapsed) .k-card` | `aria-expanded=true` | When expanded, the items in the vertical Timeline must have their "aria-expanded" attribute set to true. |

