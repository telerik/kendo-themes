# Textarea Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Textarea component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-textarea > .k-input-inner` | `role=textbox or nodeName=textarea` | Describes the role of the component. |
| `.k-textarea > .k-input-inner` | `label for or aria-label or aria-labelledby (when has accessible name)` | The textarea requires an accessible name (provided by consuming app). |
| `.k-textarea > .k-input-inner` | `aria-multiline=true (when role=textbox)` | Required on role=textbox to indicate multi-line behavior. Implicit on native <textarea>, so not needed there. |
| `.k-textarea > .k-input-inner` | `aria-invalid=true (when invalid)` | Rendered only when the TextArea is in a form and announces the invalid state. |
| `.k-textarea > .k-input-inner` | `aria-describedby (when has hint or error)` | Points to the hint or error message for the textarea. |
| `.k-textarea.k-disabled > .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered only when the TextArea is disabled. |
