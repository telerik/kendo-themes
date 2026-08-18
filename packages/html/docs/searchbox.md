# Searchbox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Searchbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Searchbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### Searchbox

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `valid` | `k-valid` |
| `invalid` | `k-invalid` |
| `required` | `k-required` |
| `disabled` | `k-disabled` |
| `loading` | `k-loading` |

These CSS classes are applied to the `k-searchbox` element.

#### UX Behavior

| Feature | Description |
| --- | --- |
| Search input | A styled input field dedicated to entering search queries. |
| Search button | A magnifier button or Enter key submits the query. |
| Clear button | An × button clears the current value. |

### Testing

The Searchbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Searchbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/searchbox/`](https://github.com/telerik/kendo-themes/tree/develop/tests/searchbox/).
