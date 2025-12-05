## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### ExpansionPanel Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-expander-header` | `role=button` | Sets the proper role for the ExpansionPanel component. |
|  | `aria-controls=.k-expander-content-wrapper id` | Points to the controlled element based on the given `id`. |
|  | `aria-expanded=true/false` | Indicates the expanded state of the ExpansionPanel. |
|  | `tabindex=0` | The element should be focusable. |
| `.k-disabled .k-expander-header` | `aria-disabled=true/false` | The attribute is rendered only when the ExpansionPanel is disabled. |

