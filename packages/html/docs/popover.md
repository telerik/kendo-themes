# Popover Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Popover component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-popover` | `role=dialog` | Announces the dialog role when the popover contains focusable elements. Use role=tooltip when it does not. |
| `.k-popover` | `id` | The element needs an id to be associated with the aria-describedby attribute of the trigger element. |
| `.k-popover` | `aria-labelledby` | Links the popover container with the popover header element when there is focusable content. |
| `.k-popover` | `aria-describedby` | Links the popover container with the popover body element when there is focusable content. |
| `.k-popover-header` | `id` | Links the popover header with the popover container via aria-labelledby. |
| `.k-popover-body` | `id` | Links the popover body with the popover container via aria-describedby. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Popover component:

| Shortcut | Behavior |
| --- | --- |
| `Escape` | Dismisses the Popover. |
