## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Signature canvas

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-signature-canvas` | `role=img` | Sets canvas `role` to `img`. |
| `.k-signature-canvas` | `aria-label` | Announces the purpose of the Signature. |
| `.k-signature-canvas:nth-child(1)` | `tabindex=0` | Makes the Signature canvas the first focusable element. |

### Signature action buttons

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-signature-action` | `nodeName=button` | Renders button. |
| `.k-signature-action` | `aria-label` | Announces the purpose of the button. |

