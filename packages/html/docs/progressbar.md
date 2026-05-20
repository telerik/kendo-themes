# Progressbar Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Progressbar component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-progressbar` | `role=progressbar` | Sets the proper role for ProgressBar. |
| `.k-progressbar` | `aria-label or aria-labelledby` | The ProgressBar needs an accessible name to be assigned to it. |
| `.k-progressbar:not(.k-progressbar-indeterminate)` | `aria-valuenow` | Required if the value is not indeterminate. Decimal value between aria-valuemin and aria-valuemax. |
| `.k-progressbar` | `aria-valuemin` | Minimum value. Defaults to 0. |
| `.k-progressbar` | `aria-valuemax` | Maximum value. Defaults to 100. |
