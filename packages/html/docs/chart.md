# Chart Accessibility

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Chart component:

| Trigger | Behavior |
| --- | --- |
| `Tab` | Moves focus to the Legend items, focusing the first legend item. If legend is not available, moves focus to the next focusable element on the page. |
| `Shift + Tab` | Moves focus to the previous focusable element on the page. |
| `Arrow Keys` | Based on the chart type, the arrow keys move through points or series. |
| `Enter` | Triggers the click action for the series point or legend item. |
| `Escape` | Closes the series tooltip if it was open. A second press will move the focus to the root element of the chart. |
| `ArrowUp or ArrowDown (categorical)` | Move through the different series. Stacked Bar/Column and Line/Area charts move focus to next/previous series item based on coordinates. Regular Bar charts move focus according to datasource order. |
| `ArrowLeft or ArrowRight (categorical)` | Move through the points in the series. |
| `ArrowUp (donut)` | Move to the outer series. |
| `ArrowDown (donut)` | Move to inner series. |
| `ArrowRight (donut/pie)` | Move through the points of the series in a clockwise direction. |
| `ArrowLeft (donut/pie)` | Move through the points of the series in an anti-clockwise direction. |
| `ArrowUp or ArrowDown (scatter/polar)` | Move through the series in datasource order. |
| `ArrowLeft or ArrowRight (scatter/polar)` | Move through items in the current series. |
| `ArrowUp or ArrowDown (funnel)` | Move through the items in the chart. |
| `ArrowUp or ArrowDown (radar column)` | Move in a clockwise/anti-clockwise manner through series. |
| `ArrowUp or ArrowDown (radar line/area)` | Move to next/previous series point based on value — Up moves away from center, Down moves towards center. |
| `ArrowRight (radar)` | Move through the points of the series in a clockwise direction. |
| `ArrowLeft (radar)` | Move through the points of the series in an anti-clockwise direction. |
| `Tab (legend)` | Move focus to the next focusable element on the page. |
| `Shift + Tab (legend)` | Move focus to the chart area, focusing the first point in the first series. |
| `ArrowUp or ArrowLeft (legend)` | Move focus to the previous legend item. Cycles to the last item at the beginning. |
| `ArrowDown or ArrowRight (legend)` | Move focus to the next legend item. Cycles to the first item at the end. |
| `Enter (legend)` | Toggles the series visibility similar to the click action. |
| `Escape (legend)` | Moves the focus to the root element of the chart. |
