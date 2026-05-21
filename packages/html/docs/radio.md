# Radio Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Radio component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-radio` | `type=radio` | Announces the radio type of the input. |
| `.k-radio` | `label for or aria-label or aria-labelledby (when has accessible name)` | The input requires an accessible name to which it will be assigned. |
| `.k-radio` | `checked (when checked)` | Boolean attribute that announces the checked state of the radio button. |
| `.k-radio` | `aria-describedby (when has hint or error)` | Points to the hint or error message for the radio. |
| `.k-radio` | `disabled=disabled or aria-disabled=true (when disabled)` | Rendered only when the radio input is disabled. |
| `.k-invalid, .ng-invalid` | `aria-invalid=true (when invalid)` | Rendered only when the radio button is in a form and announces the invalid state. |
