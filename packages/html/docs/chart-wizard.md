# ChartWizard Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI ChartWizard provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The ChartWizard is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### ChartWizard

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Navigates the content in the ChartWizard - the Window, Export button, Chart, Splitter, TabStrip tabs and content, each ExpansionPanel, each Chart type button. |
| `Enter` | Triggers click event on the focused button. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Multi-step | Guides the user through chart creation in a series of steps. |
| Live preview | Displays a real-time preview of the chart as options are configured. |
| Chart type selection | The user picks the desired chart type from a visual list. |
| Data binding | Connects the chart to a data source in a dedicated step. |

### Testing

The ChartWizard has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The ChartWizard has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/chart-wizard/`](https://github.com/telerik/kendo-themes/tree/develop/tests/chart-wizard/).
