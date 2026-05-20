# Datepicker Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Datepicker component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-datepicker .k-input-inner` | `role=combobox` | The input element follows the combobox specification. |
| `.k-datepicker .k-input-inner` | `aria-haspopup=grid` | Indicates the component has a Calendar Popup that implements role=grid. |
| `.k-datepicker .k-input-inner` | `aria-expanded=true/false` | Announces whether the Popup is visible or not. |
| `.k-datepicker .k-input-inner` | `aria-controls (when open)` | Points to the popup element. |
| `.k-datepicker .k-input-inner` | `label for or aria-label or aria-labelledby` | The input needs an accessible name. |
| `.k-invalid .k-input-inner` | `aria-invalid=true` | Rendered only when the picker is in form and announces invalid state. |
| `.k-disabled .k-input-inner` | `disabled or aria-disabled=true` | Rendered only when the picker is disabled. |
| `.k-datepicker .k-input-button` | `tabindex=-1` | Button element must not be focusable. |
| `.k-datepicker .k-input-button` | `aria-label` | The button needs an accessible name. |
| `.k-datepicker.k-disabled .k-button` | `disabled or aria-disabled` | Rendered only when the picker is disabled. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Datepicker component:

| Shortcut | Behavior |
| --- | --- |
| `Esc` | Closes the popup |
| `Alt/Opt(Mac) + Down` | Opens the popup |
| `Alt/Opt(Mac) + Up` | Closes the popup |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |
