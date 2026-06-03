# Maskedtextbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Maskedtextbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-maskedtextbox > .k-input-inner` | `role` = `textbox` | Describes the role of the component. |
| `.k-maskedtextbox > .k-input-inner` | `aria-label` / `aria-labelledby` | The input requires an accessible name (provided by consuming app). |
| `.k-maskedtextbox > .k-input-inner` | `aria-placeholder` | Announces the mask or placeholder for the component. |
| `.k-maskedtextbox > .k-input-inner` | `aria-invalid` = `true` | Rendered when the MaskedTextBox is in an invalid state. |
| `.k-maskedtextbox > .k-input-inner` | `aria-describedby` | Points to the hint or error message. |
| `.k-maskedtextbox.k-disabled > .k-input-inner` | `aria-disabled` (or `disabled` natively) = `true` | Rendered when the MaskedTextBox is disabled. |
