# Dateinput Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Dateinput component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dateinput > .k-input-inner` | `role=textbox or nodeName=input` | The element should be an input or have role="textbox". |
| `.k-dateinput > .k-input-inner` | `label for or aria-label or aria-labelledby (when has accessible name)` | The input requires an accessible name (provided by consuming app). |
| `.k-dateinput > .k-input-inner` | `tabindex=0` | The element should be focusable. |
| `.k-dateinput > .k-input-inner` | `aria-invalid=true (when invalid)` | Rendered when the DateInput is in an invalid state. |
| `.k-dateinput > .k-input-inner` | `aria-describedby (when has hint or error)` | Points to the hint or error message. |
| `.k-dateinput > .k-input-inner` | `readonly=readonly or aria-readonly=true (when readonly)` | Rendered when the DateInput is readonly. |
| `.k-dateinput.k-disabled > .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered when the DateInput is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dateinput component:

| Shortcut | Behavior |
| --- | --- |
| `Up` | Increases the value of the date segment that is highlighted. |
| `Down` | Decreases the value of the date segment that is highlighted. |
| `Left` | Moves to previous date segment in the input. |
| `Right` | Moves to next date segment in the input. |
| `Backspace or Delete` | Deletes value of the date segment. |
