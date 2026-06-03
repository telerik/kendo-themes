# Radio Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Radio component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-radio` | `type` = `radio` | Announces the radio type of the input. |
| `.k-radio` | `aria-label` / `aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `.k-radio` | `checked` | Boolean attribute that announces the checked state of the radio button. |
| `.k-radio` | `aria-describedby` | Points to the hint or error message for the radio. |
| `.k-radio` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the radio input is disabled. |
| `.k-invalid, .ng-invalid` | `aria-invalid` = `true` | Rendered only when the radio button is in a form and announces the invalid state. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Radio component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp or ArrowLeft` | Moves focus to the previous button and selects it. If the first button is focused, moves focus to the last. |
| `ArrowDown or ArrowRight` | Moves the focus to the next button and selects it. If the last button is focused, moves the focus to the first one. |
