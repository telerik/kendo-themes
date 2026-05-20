# Tooltip Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Tooltip component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-tooltip` | `role=tooltip` | Specifies the tooltip role of the tooltip container. |
| `.k-tooltip` | `id` | The element needs an id to be associated with the aria-describedby attribute of the trigger element. |
| `.k-tooltip .k-tooltip-button` | `role=button` | The close button needs an explicit button role. |
| `.k-tooltip .k-tooltip-button` | `aria-label` | The close button needs an accessible name. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Tooltip component:

| Shortcut | Behavior |
| --- | --- |
| `Escape` | Dismisses the Tooltip. |
