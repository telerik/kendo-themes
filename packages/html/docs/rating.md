# Rating Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Rating provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Rating is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Rating

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |
| `readonly` | `k-readonly` |

These CSS classes are applied to the `k-rating` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="slider"` | Announces the slider role of the Rating element. |
| `aria-label|aria-labelledby|title` | The Rating needs an accessible name to be assigned to it. |
| `aria-valuenow` | Specifies the currently selected value in the Rating. |
| `aria-valuemin` | Specifies the minimum available value in the Rating. |
| `aria-valuemax` | Specifies the maximum available value in the Rating. |
| `tabindex="0"` | The element must be focusable. Disabled ratings are removed from tab order. |
| `aria-disabled="true"` | Rendered only when the Rating is disabled. |
| `aria-readonly="true"` | Rendered only when the Rating is readonly. Readonly ratings remain focusable but their value cannot be changed. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown or ArrowLeft` | Decreases value by one rating step. |
| `ArrowUp or ArrowRight` | Increases value by one rating step. |
| `Home` | Sets value to the Min available value in the Rating. |
| `End` | Sets value to the Max available value in the Rating. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Selection | Clicking an icon selects the corresponding rating value. |
| Hover preview | Hovering over icons previews the rating value before committing. |
| Half precision | Supports half-value increments when half-precision mode is enabled. |
| Read-only | When read-only, the current rating is displayed but cannot be changed. |
| Disabled state | When disabled, the rating cannot be changed. |

### Testing

The Rating has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Rating has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for slider](https://www.w3.org/TR/wai-aria-1.2/#slider)
- [WCAG 4.1.2 Name, Role, Value — slider must have accessible name and value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/rating/`](https://github.com/telerik/kendo-themes/tree/develop/tests/rating/).
