# Avatar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Avatar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Avatar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Avatar

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `outline` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `active` | `k-active` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-avatar` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `alt` | Images inside Avatar must have alt text for screen readers. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Image display | Shows a user profile photo or custom image inside a circular container. |
| Initials fallback | Displays the user's initials when no image is provided. |
| Sizes | Available in extra-small, small, medium, large, and extra-large sizes. |

### Testing

The Avatar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Avatar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WCAG 1.1.1 Non — text Content - images must have text alternatives](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/avatar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/avatar/).
