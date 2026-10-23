# DatainsightsComposer Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI DatainsightsComposer provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The DatainsightsComposer is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### DataInsightsComposerFields

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="group"` | Groups data-source chips that act as popup triggers. |
| `aria-label` | Names the data-source chip group. |
| `aria-haspopup="true"` | Indicates that each data-source chip opens a popup. |
| `tabindex="0" or "-1"` | Maintains one data-source chip in the tab order using roving tabindex. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Moves focus into the group through its active roving-tabindex chip, or from that chip to the next focusable element. |
| `Shift+Tab` | Moves focus from the active chip to the previous focusable element. |
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
| `Tab` | From the active checkpoint, moves focus to its restore button. From that button, or from the current checkpoint which has no restore action, moves focus outside the popup. |
| `Shift+Tab` | From a restore button, returns focus to its own checkpoint. From the active checkpoint, moves focus to the previous focusable element outside the popup. |

### DataInsightsComposerOutput

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="group"` | Groups the chart with its visible report title. |
| `aria-labelledby` | Names the chart output from the associated report title. |

### DataInsightsComposerPopup

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="presentation"` | Removes button semantics from field-label chips in data-source popups. |
| `tabindex="0" or "-1"` | Uses roving tabindex for a standalone field list; chips embedded in TreeView items stay out of the tab order. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Moves to the next chip in a data-source field list, or from the browser search box to the first TreeView item. |
| `ArrowUp` | Moves to the previous chip in a data-source field list, or from the first browser TreeView item to the search box. |
| `Tab` | In a data-source field-list popup, moves focus into the list through its active roving-tabindex chip; pressing Tab again moves focus outside the popup. |
| `Shift+Tab` | From the active chip in a data-source field-list popup, moves focus to the previous focusable element outside the popup. |
| `Escape` | Closes the popup and returns focus to the element that opened it. |

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
