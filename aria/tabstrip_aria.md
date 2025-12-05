## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-tabstrip-items` | `role=tablist` | Indicates the tablist role for the ul element of the TabStrip. |
| `.k-tabstrip.k-tabstrip-left .k-tabstrip-items,.k-tabstrip.k-tabstrip-right .k-tabstrip-items` | `aria-orientation=vertical` | Indicates the orientation of the tablist container element. The attribute is rendered only when the orientation of the component is vertical as the `tablist` role comes with default horizontal orientation. |
| `.k-tabstrip-item` | `role=tab` | The tab `li` element. |
| `.k-tabstrip .k-tabstrip-item.k-active` | `aria-selected=true` | Announces the selected state of the tab. |
|  | `aria-controls=.k-tabstrip-content id` | Announces the relation between the panel and active tab. |
| `.k-tabstrip-content` | `role=tabpanel` | The content `div` of the tab. |
|  | `aria-hidden=true` | Only if the component implements a feature to control whether the content should be persisted. |
|  | `aria-labelledby=.k-tabstrip-item id` | Refers to the tab element that controls the panel. |
| `.k-tabstrip .k-button` | `aria-hidden=true` | Introduce "aria-hidden" attribute for the scrollable buttons. The buttons are not included in the tabsequence. Navigating through arrow keys would |

