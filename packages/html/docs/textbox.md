# Textbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Textbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-textbox > .k-input-inner` | `role=textbox or nodeName=input` | Describes the role of the component. |
| `.k-textbox > .k-input-inner` | `label for or aria-label or aria-labelledby (when has accessible name)` | The input requires an accessible name (provided by consuming app). |
| `.k-textbox > .k-input-inner` | `aria-invalid=true (when invalid)` | Rendered when the TextBox is in an invalid state. |
| `.k-textbox > .k-input-inner` | `aria-describedby (when has hint or error)` | Points to the hint or error message for the input. |
| `.k-textbox.k-disabled > .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered when the TextBox is disabled. |
