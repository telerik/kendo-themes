# Colorpicker Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Colorpicker component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-colorpicker` | `role=combobox` | The focusable element should have role combobox (input with popup). |
| `.k-colorpicker` | `aria-label or aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `.k-colorpicker` | `aria-haspopup=dialog` | Indicates the component has a Dialog Popup. |
| `.k-colorpicker` | `aria-expanded=true/false` | Announces the visibility state of the popup. |
| `.k-colorpicker` | `aria-controls (when open)` | Points to the popup element. |
| `.k-colorpicker` | `tabindex=0` | The element must be focusable. |
| `.k-colorpicker.k-disabled` | `aria-disabled=true` | Rendered only when the picker is disabled. |
| `.k-colorpicker.k-disabled .k-button` | `disabled or aria-disabled=true` | Rendered only when the picker is disabled. |
| `.k-colorgradient` | `tabindex=-1` | The inner ColorGradient must be removed from the page tab sequence. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Colorpicker component:

| Shortcut | Behavior |
| --- | --- |
| `Alt/Opt(Mac) Down` | Opens pop up |
| `Enter` | Opens pop up |
| `Alt/Opt(Mac) Up or Esc` | Closes popup |
| `Esc` | Closes Popup and moves focus back to k-colorpicker element. |
| `Tab` | Navigates to the next focusable element in the Popup. If current focus is on the last element, moves focus to the first focusable item in the Popup. |
| `Shift + Tab` | Navigates to the previous focusable element in the Popup. If current focus is on the first element, moves focus to the last focusable item in the Popup. |
| `Enter` | For button items, executes the currently focused button action. |
| `Esc` | If any of the colorgradient elements are currently focused, bring focus back to the k-colorpicker element. |
