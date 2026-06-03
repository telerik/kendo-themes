# Datetimepicker Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Datetimepicker component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-datetimepicker .k-input-inner` | `role` = `combobox` | The input element follows the combobox specification. |
| `.k-datetimepicker .k-input-inner` | `aria-haspopup` = `dialog` | Indicates the component has a Dialog Popup. |
| `.k-datetimepicker .k-input-inner` | `aria-expanded` = `true` / `false` | Announces whether the Popup is visible or not. |
| `.k-datetimepicker .k-input-inner` | `aria-controls` | Points to the popup element containing the calendar or time selector. |
| `.k-datetimepicker .k-input-inner` | `aria-activedescendant` | Points to the focused item in the Calendar or Time Popup. |
| `.k-datetimepicker .k-input-inner` | `aria-label` / `aria-labelledby` | The input needs an accessible name. |
| `.k-invalid .k-input-inner` | `aria-invalid` = `true` | Rendered only when the picker is in form and announces invalid state. |
| `.k-disabled .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the picker is disabled. |
| `.k-datetimepicker .k-input-button` | `tabindex` = `-1` | Button element must not be focusable. |
| `.k-datetimepicker .k-input-button` | `aria-label` | The button needs an accessible name. |
| `.k-datetimepicker.k-disabled .k-button` | `aria-disabled` (or `disabled` natively) | Rendered only when the picker is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Datetimepicker component:

| Trigger | Behavior |
| --- | --- |
| `Escape` | Discards the selection and closes the popup. |
| `Enter` | Enters in time edit if calendar is the target. Otherwise, accepts the selected time and closes the popup. |
| `Alt/Opt(Mac) + ArrowDown` | Opens the dropdown and moves the focus to the displayed calendar. |
| `Alt/Opt(Mac) + ArrowUp` | Closes the dropdown and moves the focus to the input element. |
