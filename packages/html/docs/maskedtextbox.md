# Maskedtextbox Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Maskedtextbox component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-maskedtextbox > .k-input-inner` | `role=textbox or nodeName=input` | Describes the role of the component. |
| `.k-maskedtextbox > .k-input-inner` | `label for or aria-label or aria-labelledby (when has accessible name)` | The input requires an accessible name (provided by consuming app). |
| `.k-maskedtextbox > .k-input-inner` | `aria-placeholder (when has mask)` | Announces the mask or placeholder for the component. |
| `.k-maskedtextbox > .k-input-inner` | `aria-invalid=true (when invalid)` | Rendered when the MaskedTextBox is in an invalid state. |
| `.k-maskedtextbox > .k-input-inner` | `aria-describedby (when has hint or error)` | Points to the hint or error message. |
| `.k-maskedtextbox.k-disabled > .k-input-inner` | `disabled=disabled or aria-disabled=true` | Rendered when the MaskedTextBox is disabled. |
