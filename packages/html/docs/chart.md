# Chart Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Chart provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Chart is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Chart

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="graphics-document document"` | Identifies the chart surface as a graphics document for assistive technology. |
| `aria-roledescription` | Provides a human-readable description of the chart type (e.g. "Sales by year"). |
| `tabindex="0"` | Makes the chart surface keyboard focusable. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Tab` | Moves focus to the Legend items, focusing the first legend item. If legend is not available, moves focus to the next focusable element. |
| `Shift + Tab` | Moves focus to the previous focusable element. |
| `ArrowUp or ArrowDown` | Navigates between series for categorical, scatter/polar charts; moves between items for funnel; moves clockwise/anti-clockwise for radar column; moves away/towards center for radar line/area. |
| `ArrowLeft or ArrowRight` | Navigates between data points within a series for categorical, scatter/polar, and radar charts. |
| `ArrowUp (donut)` | Moves focus to the outer series. |
| `ArrowDown (donut)` | Moves focus to the inner series. |
| `ArrowRight (donut/pie)` | Moves through points of the series in a clockwise direction. |
| `ArrowLeft (donut/pie)` | Moves through points of the series in an anti-clockwise direction. |
| `Enter` | Triggers the click action for the focused series point or legend item. |
| `Escape` | Closes the series tooltip; second press returns focus to the chart root. |
| `Tab (legend)` | Moves focus to the next focusable element on the page. |
| `Shift + Tab (legend)` | Moves focus to the chart area, focusing the first point in the first series. |
| `ArrowUp or ArrowLeft (legend)` | Moves focus to the previous legend item. Cycles to the last item at the beginning. |
| `ArrowDown or ArrowRight (legend)` | Moves focus to the next legend item. Cycles to the first item at the end. |
| `Enter (legend)` | Toggles the series visibility. |
| `Escape (legend)` | Moves focus to the root element of the chart. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Tooltip | Shows data labels or values when hovering over data points or series. |
| Legend | Identifies each series; clicking a legend item toggles its visibility. |
| Zoom and pan | Supports mouse-wheel zoom and click-drag panning on large datasets. |
| Export | Can export the chart as a PNG image or PDF document. |

### Testing

The Chart has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Chart has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Graphics Module — graphics-document role](https://www.w3.org/TR/graphics-aria-1.0/#graphics-document)
- [Accessibility Style Guide: SVGs](https://a11y-style-guide.com/style-guide/section-media.html#kssref-media-svgs)
- [WCAG 2.1.1 Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/chart/`](https://github.com/telerik/kendo-themes/tree/develop/tests/chart/).
