## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Splitter Pane

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-pane` | `role=group` | Sets the proper role for the Splitter pane that identifies a set of user interface objects that is not intended to be included in the page's summary or table of contents. |

> Note: The value of the `aria-label` attribute of the split-bar elements will be provided to their respective preceding pane element through the API.

### SplitBar

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-splitbar` | `role=separator` | Sets the proper role for the Splitter split-bar element. |
|  | `aria-label` | An accessible name, with "aria-label" should be included if there is more than one focusable separator. The value is set through the corresponding SplitterPane API. |
| `.k-splitbar-horizontal` | `aria-orientation=vertical` | When a splitbar separates two panes horizontally, its "aria-orientation" must be explicitly set to 'vertical'. |
|  | `aria-keyshortcuts=ArrowLeft ArrowRight ArrowUp ArrowDown` | Sets the "aria-keyshortcuts" attribute value to announce available keyboard shortcuts. Some are omitted for brevity. |

> Note: Setting the `value-now` attribute of the separator element is not applicable because it would not convey any meaningful information.  The Splitter is a complex layout component that lets you split the content into multiple panes across any number and level of nested Splitters and panes. Furthermore, no WAI-ARIA specifications or recommendations indicate how to set a value in a multiple panes scenario. If needed, developers can still apply attributes as they see fit, using the respective API options. Further information on this complicated scenario could be found in the following WAI-ARIA GitHub issue:

[WAI-ARIA Practices on GitHub](https://github.com/w3c/aria-practices/issues/129#issuecomment-456976215)

