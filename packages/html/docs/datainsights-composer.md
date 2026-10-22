# DatainsightsComposer Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI DatainsightsComposer provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The DatainsightsComposer is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DataInsightsComposerFields

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab or Shift+Tab` | Moves focus into or out of the chip group as a single stop (lands on the roving tab stop chip). |
| `ArrowRight or ArrowLeft` | Moves the roving tab stop between the data source chips, same as the standalone ChipList. |
| `Enter or Space` | Opens the Data Source popup for the focused chip. |

### DataInsightsComposerHistoryCheckpoint

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="option"` | Each checkpoint is an option in the history listbox. |
| `tabindex="-1"` | Non-active checkpoints stay out of the tab order. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp or ArrowDown` | Moves the roving tab stop between checkpoints, same as a standard list. |
| `Tab` | From the active (focused) checkpoint, moves focus to its own restore button; the restore buttons of all other checkpoints have `tabindex="-1"` so Tab does not walk through them one by one. |
| `Shift+Tab` | From a restore button, returns focus to its own checkpoint. |

### DataInsightsComposerOutput

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="group"` | Groups the chart with its visible report title. |
| `aria-labelledby` | Names the chart output from the associated report title. |

### DataInsightsComposerReportTitle

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="heading" aria-level="2"` | Identifies the generated report title as a level-two heading. |

### DataInsightsComposerTitle

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="heading" aria-level="2"` | Identifies the prompt or panel title as a level-two heading. |

### Testing

The DatainsightsComposer has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The DatainsightsComposer has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/datainsights-composer/`](https://github.com/telerik/kendo-themes/tree/develop/tests/datainsights-composer/).
