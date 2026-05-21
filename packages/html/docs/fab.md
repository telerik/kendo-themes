# Fab Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Fab component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-fab` | `role=button or nodeName=button` | Omitted if the <button> DOM element is used. |
| `.k-fab` | `aria-label or title (when icon-only)` | The attribute must be present when no text is initially visible in the button. |
| `.k-fab.k-disabled` | `aria-disabled=true` | Rendered only when the button is disabled. |
