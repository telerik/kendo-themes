# Dateinput Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Dateinput component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dateinput > .k-input-inner` | `role` = `textbox` | The element should be an input or have role="textbox". |
| `.k-dateinput > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-dateinput > .k-input-inner` | `tabindex` = `0` | The element should be focusable. |
| `.k-dateinput > .k-input-inner` | `aria-invalid` = `true` | Rendered when the DateInput is in an invalid state. |
| `.k-dateinput > .k-input-inner` | `aria-describedby` | Points to the hint or error message. |
| `.k-dateinput > .k-input-inner` | `aria-readonly` (or `readonly` natively) = `true` | Rendered when the DateInput is readonly. |
| `.k-dateinput.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the DateInput is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dateinput component:

| Trigger | Behavior |
| --- | --- |
| `ArrowUp` | Increases the value of the date segment that is highlighted. |
| `ArrowDown` | Decreases the value of the date segment that is highlighted. |
| `ArrowLeft` | Moves to previous date segment in the input. |
| `ArrowRight` | Moves to next date segment in the input. |
| `Backspace or Delete` | Deletes value of the date segment. |
