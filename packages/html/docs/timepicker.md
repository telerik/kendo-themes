# Timepicker Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Timepicker component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-timepicker .k-input-inner` | `role=combobox` | The input element follows the combobox specification. |
| `.k-timepicker .k-input-inner` | `aria-haspopup=dialog` | Indicates the component has a Dialog Popup. |
| `.k-timepicker .k-input-inner` | `aria-expanded=true/false` | Announces whether the Popup is visible or not. |
| `.k-timepicker .k-input-inner` | `aria-controls (when open)` | Points to the popup element. |
| `.k-timepicker .k-input-inner` | `label for or aria-label or aria-labelledby` | The input needs an accessible name. |
| `.k-invalid .k-input-inner` | `aria-invalid=true` | Rendered only when the picker is in form and announces invalid state. |
| `.k-disabled .k-input-inner` | `disabled or aria-disabled=true` | Rendered only when the picker is disabled. |
| `.k-timepicker .k-input-button` | `tabindex=-1` | Button element must not be focusable. |
| `.k-timepicker .k-input-button` | `aria-label` | The button needs an accessible name. |
| `.k-timepicker.k-disabled .k-button` | `disabled or aria-disabled` | Rendered only when the picker is disabled. |
| `.k-time-list` | `role=listbox` | The timelist elements must have listbox role. |
| `.k-time-list` | `aria-label or aria-labelledby` | The listbox needs an accessible name. |
| `.k-time-list-wrapper .k-reset` | `role=none` | The ul element semantic meaning must be removed. |
| `.k-time-list-wrapper .k-item` | `role=option` | The available options must be marked as such. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Timepicker component:

| Shortcut | Behavior |
| --- | --- |
| `Esc` | Closes the popup |
| `Alt/Opt(Mac) + Down` | Opens the popup |
| `Alt/Opt(Mac) + Up` | Closes the popup |
| `Up` | Increases the value of the time segment that is highlighted. |
| `Down` | Decreases the value of the time segment that is highlighted. |
| `Left` | Moves to previous time segment in the input. |
| `Right` | Moves to next time segment in the input. |
| `Backspace` | Deletes value of the time segment. |
| `Esc` | Closes the popup |
| `Shift + Tab or Left` | Focuses previous carousel. |
| `Tab or Right` | Focuses next carousel. |
| `Down` | Selects next value in the carousel. |
| `Up` | Selects previous value in the carousel. |
