# ButtonGroup Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the ButtonGroup component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-button-group:not(.k-split-button)` | `role=group` | Sets the proper role for the group of buttons. |
| `.k-button-group.k-disabled` | `aria-disabled=true` | The attribute is rendered only when the entire button group is disabled. |
| `.k-button-group:not(.k-split-button):not(.k-scheduler-navigation):not(.k-zoom-control) .k-button` | `aria-pressed (when selected)` | Specifies the current state of the ButtonGroup. Only the selected button within the group will have this attribute set to true. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the ButtonGroup component:

| Shortcut | Behavior |
| --- | --- |
| `Tab` | Focuses the next button in the group. If the focus is on the last button, focuses the next focusable element on the page. |
| `Shfit + Tab` | Focuses the previous button in the group. If the focus is on the first button, focuses the previous focusable element before the ButtonGorup. |
| `Enter or Space` | Triggers a click action on the button. |
