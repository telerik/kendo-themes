# Textbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Textbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-textbox > .k-input-inner` | `role` = `textbox` | Describes the role of the component. |
| `.k-textbox > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-textbox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the TextBox is in an invalid state. |
| `.k-textbox > .k-input-inner` | `aria-describedby` | Points to the hint or error message for the input. |
| `.k-textbox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the TextBox is disabled. |
