# SplitButton Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the SplitButton component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-split-button-arrow` | `role=button or nodeName=button` | Omitted if the <button> DOM element is used. |
| `.k-split-button-arrow` | `aria-label` | The attribute must be present when no text is initially visible in the button. |
| `.k-split-button-arrow` | `aria-expanded=true/false` | Announces the state of the popup visibility. |
| `.k-split-button-arrow` | `aria-controls=.k-menu-group id (when open)` | Points to the popup element. Builds a relationship between the button and the popup. |
| `.k-split-button-arrow` | `tabindex=-1` | The arrow button is removed from the tab sequence. |
| `.k-split-button-arrow.k-disabled` | `aria-disabled=true` | Rendered only when the button is disabled. |
| `.k-menu-group` | `role=list` | Announces the list role of the popup. |
| `.k-menu-item` | `role=listitem` | Announces the listitem role of the popup items. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the SplitButton component:

| Shortcut | Behavior |
| --- | --- |
| `Enter` | Clicks (activates) the main button action. |
| `Space` | Clicks (activates) the main button action. |
