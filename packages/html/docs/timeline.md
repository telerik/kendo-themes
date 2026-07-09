# Timeline Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Timeline provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Timeline is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### HorizontalTimelineEvent

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label` | for the tabpanel |
| `tabindex` | Tab index for the active tabpanel. |

### Timeline

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="tabpanel"` | The card serves as the tab panel content. |
| `aria-label` | Refers to the tab element that controls the panel. |
| `aria-hidden="true"` | Arrow buttons are hidden from the accessibility tree. |
| `role="button"` | Items in the vertical timeline are buttons. |
| `aria-describedby` | Vertical timeline cards are described by their date elements. |
| `aria-live="polite"` | Vertical timeline cards are live regions. |
| `tabindex="0"` | Vertical timeline cards are focusable. |
| `aria-expanded="false"` | Collapsed cards announce their collapsed state. |
| `aria-expanded="true"` | Expanded cards announce their expanded state. |

#### Keyboard Navigation

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

### TimelineFlagWrap

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="none"` | The flag-wrap items have semantics removed. |
| `aria-hidden="true"` | Flag-wrap items are hidden from the accessibility tree. |

### TimelineTrackItem

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="tab"` | Individual tab element on the track. |
| `aria-selected="true"` | when tab is selected/focused |
| `aria-describedby` | points to the tabpanel |

### TimelineTrackWrap

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="tablist"` | Indicates the tablist role for the scrollable wrap element. |

### VerticalTimelineEvent

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `id` | Unique id; referenced via aria-describedby by the associated content. |

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
