# SegmentedControl Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the SegmentedControl component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-segmented-control` | `role=group` | Sets the proper role for the group of buttons. |
| `.k-segmented-control-button` | `role=button or nodeName=button` | Each button must have the appropriate button role. |
| `.k-segmented-control-button.k-selected` | `aria-pressed=true` | Only the selected button within the group will have this attribute set to true. |
| `.k-segmented-control-button.k-disabled` | `aria-disabled=true` | Indicates that the button is disabled and cannot be interacted with. |
| `.k-segmented-control-thumb` | `aria-hidden=true` | The thumb is purely decorative and should be hidden from screen readers. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the SegmentedControl component:

| Shortcut | Behavior |
| --- | --- |
| `Tab` | Focuses the next button in the control. If the focus is on the last button, focuses the next focusable element on the page. |
| `Shift + Tab` | Focuses the previous button in the control. If the focus is on the first button, focuses the previous focusable element before the Segmented Control. |
| `Enter or Space` | Activates the focused button and selects it. |
