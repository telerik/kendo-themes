# Textarea Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Textarea component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-textarea > .k-input-inner` | `role` = `textbox` | Describes the role of the component. |
| `.k-textarea > .k-input-inner` | `aria-label` / `aria-labelledby` | The textarea requires an accessible name (provided by consuming app). |
| `.k-textarea > .k-input-inner` | `aria-multiline` = `true` | Required on role=textbox to indicate multi-line behavior. Implicit on native <textarea>, so not needed there. |
| `.k-textarea > .k-input-inner` | `aria-invalid` = `true` | Rendered only when the TextArea is in a form and announces the invalid state. |
| `.k-textarea > .k-input-inner` | `aria-describedby` | Points to the hint or error message for the textarea. |
| `.k-textarea.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered only when the TextArea is disabled. |
