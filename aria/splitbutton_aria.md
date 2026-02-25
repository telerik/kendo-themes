## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


This component follows the DropDownButton accessibility specification.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-menu-button` | `role=button` or `nodeName=button` | Omitted if the `<button>` DOM element is used. |
|  | `aria-label` | The attribute must be present when no text is initially visible in the button. |
|  | `aria-expanded=true/false` | Announces the state of the popup visibility. |
|  | `aria-controls=.k-menu-group id` | Points to the popup element. Builds a relationship between the button and the popup. |
| `.k-menu-button.k-disabled` | `aria-disabled=true` | Rendered only when the button is disabled and the `disabled` attribute cannot be used. Applicable to the `<button>` or `<input type="button">` elements. |
| `.k-menu-group` | `role=list` | Announces the `list` role of the popup. |
| `.k-menu-item` | `role=listitem` | Announces the `listitem` role of the popup items. |

