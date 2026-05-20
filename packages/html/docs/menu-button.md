# MenuButton Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the MenuButton component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-menu-button` | `role=button or nodeName=button` | Omitted if the button DOM element is used. |
| `.k-menu-button` | `aria-label (when icon-only)` | Required when no text is visible in the button. |
| `.k-menu-button` | `aria-expanded=true/false` | Announces the state of the popup visibility. |
| `.k-menu-button` | `aria-controls=.k-menu-group id (when open)` | Points to the popup element. Builds a relationship between the button and the popup. |
| `.k-menu-button.k-disabled` | `aria-disabled=true` | Rendered only when the button is disabled. |
| `.k-menu-group` | `role=list` | Announces the list role of the popup. |
| `.k-menu-item` | `role=listitem` | Announces the listitem role of the popup items. |
