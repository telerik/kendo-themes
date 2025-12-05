## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-popover` | `role=tooltip/dialog` | Announces the tooltip (no focusable content) or dialog (contains focusable elements) role of the component. |
|  | `id` | The element needs an id to be associated with the aria-describedby attribute of the trigger element. |
|  | `aria-describedby=.k-popover id` | Links the popover trigger/anchor element with its corresponding popover container. |
| `.k-popover` | `aria-labelledby=.k-popover-header id` | Links the popover container with the popover header element when there is focusable content. |
|  | `aria-describedby=.k-popover-body id` | Links the popover container with the popover body element when there is focusable content. |
| `.k-popover-header` | `id` | Links the popover container with the popover header element when there is focusable content. |
| `.k-popover-body` | `id` | Links the popover container with the popover body element when there is focusable content. |

