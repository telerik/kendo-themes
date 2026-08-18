# Progressbar Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Progressbar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Progressbar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### ChunkProgressBar

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |
| `indeterminate` | `k-indeterminate` |

These CSS classes are applied to the `k-chunk-progressbar` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label` | accessible name for the progressbar |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Segmented fill | Progress is shown as a series of discrete filled chunks. |
| Chunk count | The number of chunks is configurable. |
| Orientation | Can be rendered horizontally or vertically. |

### ProgressBar

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `orientation` | `horizontal`, `vertical` | `horizontal` |

#### Component States

| State | CSS Class |
| --- | --- |
| `disabled` | `k-disabled` |
| `indeterminate` | `k-indeterminate` |

These CSS classes are applied to the `k-progressbar` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="progressbar"` | Sets the proper role for ProgressBar. |
| `aria-valuenow` | Required if the value is not indeterminate. Decimal value between aria-valuemin and aria-valuemax. |
| `aria-valuemin` | Minimum value. Defaults to 0. |
| `aria-valuemax` | Maximum value. Defaults to 100. |
| `aria-label` | accessible name for the progressbar |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Fill animation | The bar animates from 0 to the current value when first displayed. |
| Value label | Optionally shows the percentage or a custom text label inside the bar. |
| Indeterminate | Displays a looping animation when the final value is unknown. |
| Orientation | Can be rendered horizontally or vertically. |

### Testing

The Progressbar has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Progressbar has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for progressbar](https://www.w3.org/TR/wai-aria-1.2/#progressbar)
- [MDN reference for the progressbar role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role#associated_wai-aria_roles_states_and_properties)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/progressbar/`](https://github.com/telerik/kendo-themes/tree/develop/tests/progressbar/).
