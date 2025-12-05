## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-listview:not(.k-selectable) .k-listview-content` | `role=list` | Specifies the role of non selectable ListView content element. |
| `.k-listview.k-selectable .k-listview-content` | `role=listbox` | Specifies the role of selectable ListView content element. |
| `.k-listview:not(.k-selectable) .k-listview-item` | `role=listitem` | Specifies the role of each item in a non selectable ListView. |
| `.k-listview.k-selectable .k-listview-item` | `role=option` | Specifies the role of each item in a selectable ListView. |
| `.k-listview-item` | `aria-setsize` | Specifies the total number of items present in the ListView. |
|  | `aria-posinset` | Specifies the position of the current item in the entire list of items present in the ListView. Value must be greated than or equal to 1 and smaller than or equal to the total number of items in the ListView. |
| `.k-listview-item:nth-child(1)` | `tabindex=0` | The first item in the ListView must be focusable by default. |

