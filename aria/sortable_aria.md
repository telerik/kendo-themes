## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `n/a - wrapper element` | `role=list` | Sets the proper role for Sortable. |
| `n/a - list item element within the wrapper` | `role=listitem` | Sets the proper role for Sortable items. |
|  | `aria-label=Consists of text description of the item, information about the current item index and the total number of items, and indication that the item is movable` | Sets the proper label for the Sortable item. |
|  | `tabindex=The focused item gets tabindex '0' (if wrapper element is not a focusable DOM element), all other items - '-1' (if the element is a focusable DOM element) or the attribute is removed.` | Sets tabindex 0 to the active item. |
|  | `aria-grabbed=true/false` | Sets the "aria-grabbed" attribute value to indicate dragging. |
|  | `aria-dropeffect=move` | Sets the "aria-dropeffect" attribute value. |
|  | `aria-keyshortcuts=Control+ArrowLeft Control+ArrowRight Meta+ArrowLeft Meta+ArrowRight` | Sets the "aria-keyshortcuts" attribute value to announce available keyboard shortcuts. Some are omitted for brevity. |
| `n/a - disabled list item element within the wrapper` | `aria-disabled=true/false` | Sets the "aria-disabled" attribute value. |

