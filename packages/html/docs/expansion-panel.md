# ExpansionPanel Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the ExpansionPanel component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-expander-header` | `role=button` | Sets the proper role for the ExpansionPanel header. |
| `.k-expander-header` | `aria-controls` | Points to the controlled content wrapper element. |
| `.k-expander-header` | `aria-expanded=true/false` | Indicates the expanded state of the ExpansionPanel. |
| `.k-expander-header` | `tabindex=0` | The element should be focusable. |
| `.k-disabled .k-expander-header` | `aria-disabled=true` | Rendered only when the ExpansionPanel is disabled. |
| `.k-expander-content-wrapper` | `id` | Content wrapper has an id referenced by aria-controls. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the ExpansionPanel component:

| Shortcut | Behavior |
| --- | --- |
| `Enter` | Expands and collapses the focused ExpansionPanel. |
| `Space` | Expands and collapses the focused ExpansionPanel. |
