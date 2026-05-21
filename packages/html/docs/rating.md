# Rating Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Rating component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-rating` | `role=slider` | Announces the slider role of the Rating element. |
| `.k-rating` | `aria-label or aria-labelledby or title` | The Rating needs an accessible name to be assigned to it. |
| `.k-rating` | `aria-valuenow` | Specifies the currently selected value in the Rating. |
| `.k-rating` | `aria-valuemin` | Specifies the minimum available value in the Rating. |
| `.k-rating` | `aria-valuemax` | Specifies the maximum available value in the Rating. |
| `.k-rating:not(.k-disabled)` | `tabindex=0` | The element must be focusable. Disabled ratings are removed from tab order. |
| `.k-rating.k-disabled` | `aria-disabled=true` | Rendered only when the Rating is disabled. |
| `.k-rating.k-readonly` | `aria-readonly=true (when readonly)` | Rendered only when the Rating is readonly. Readonly ratings remain focusable but their value cannot be changed. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Rating component:

| Shortcut | Behavior |
| --- | --- |
| `Arrow Down or Arrow Left` | Decreases value by one rating step. |
| `Arrow Up or Arrow Right` | Increases value by one rating step. |
| `Home` | Sets value to the Min available value in the Rating. |
| `End` | Sets value to the Max available value in the Rating. |
