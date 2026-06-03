# Timedurationpicker Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Timedurationpicker component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-timedurationpicker .k-input-inner` | `role` = `combobox` | The input element follows the combobox specification. |
| `.k-timedurationpicker .k-input-inner` | `aria-haspopup` = `dialog` | Indicates the component has a Dialog Popup. |
| `.k-timedurationpicker .k-input-inner` | `aria-expanded` = `true` / `false` | Announces whether the Popup is visible or not. |
| `.k-timedurationpicker .k-input-inner` | `aria-controls` | Points to the popup element. |
| `.k-timedurationpicker .k-input-inner` | `aria-label` / `aria-labelledby` | The input needs an accessible name. |
| `.k-invalid .k-input-inner` | `aria-invalid` = `true` | Rendered only when the picker is in form and announces invalid state. |
| `.k-disabled .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the picker is disabled. |
| `.k-timedurationpicker .k-input-button` | `tabindex` = `-1` | Button element must not be focusable. |
| `.k-timedurationpicker .k-input-button` | `aria-label` | The button needs an accessible name. |
| `.k-timedurationpicker.k-disabled .k-button` | `aria-disabled` (or `disabled` natively) | Rendered only when the picker is disabled. |
| `.k-time-list` | `role` = `listbox` | The timelist elements must have listbox role. |
| `.k-time-list` | `aria-label` / `aria-labelledby` | The listbox needs an accessible name. |
| `.k-time-list-wrapper .k-reset` | `role` = `none` | The ul element semantic meaning must be removed. |
| `.k-time-list-wrapper .k-item` | `role` = `option` | The available options must be marked as such. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Timedurationpicker component:

| Trigger | Behavior |
| --- | --- |
| `Escape` | Closes the popup |
| `Alt/Opt(Mac) + ArrowDown` | Opens the popup |
| `Alt/Opt(Mac) + ArrowUp` | Closes the popup |
| `ArrowUp` | Increases the value of the time segment that is highlighted. |
| `ArrowDown` | Decreases the value of the time segment that is highlighted. |
| `ArrowLeft` | Moves to previous time segment in the input. |
| `ArrowRight` | Moves to next time segment in the input. |
| `Backspace` | Deletes value of the time segment. |
| `Escape` | Closes the popup |
| `Shift + Tab or ArrowLeft` | Focuses previous carousel. |
| `Tab or ArrowRight` | Focuses next carousel. |
| `ArrowDown` | Selects next value in the carousel. |
| `ArrowUp` | Selects previous value in the carousel. |
