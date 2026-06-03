# Button Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Button component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-button` | `role` = `button` | The button role is implicit from the native <button> element. |
| `.k-button` | `aria-label` | Required for icon-only buttons that have no visible text. |
| `.k-button` | `aria-pressed` | Indicates the pressed state of a toggle button. |
| `.k-button` | `disabled` | Rendered when the button is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Button component:

| Trigger | Behavior |
| --- | --- |
| `Enter or Space` | Triggers a click action on the Button. |
