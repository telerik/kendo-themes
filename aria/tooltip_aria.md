## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-tooltip` | `role=tooltip` | Specifies the tooltip role of the tooltip container. |
|  | `id` | The element needs an id to be associated with the aria-describedby attribute of the trigger element. |
|  | `aria-describedby=.k-tooltip id` | Link the tooltip trigger/anchor element with its corresponding tooltip container. |

