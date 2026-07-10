# SplitButton Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI SplitButton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SplitButton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### SplitButton

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `flat`, `outline`, `clear`, `link` | — |
| `themeColor` | `base`, `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info`, `inverse` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `active` | `k-active` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-split-button` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="button"` | Omitted if the `<button>` DOM element is used. |
| `aria-label` | The attribute must be present when no text is initially visible in the button. |
| `tabindex="-1"` | The arrow button is removed from the tab sequence. |
| `aria-disabled="true"` | Rendered only when the button is disabled. |
| `role="list"` | Announces the list role of the popup. |
| `role="listitem"` | Announces the listitem role of the popup items. |
| `aria-expanded="true"` | when popup is visible |
| `aria-controls` | references the popup menu group id |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter` | Clicks (activates) the main button action. |
| `Space` | Clicks (activates) the main button action. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Primary action | The main button area triggers the default action. |
| Dropdown | The arrow button opens a popup with additional actions. |
| Disabled state | When disabled, both the main button and dropdown are non-interactive. |

### Testing

The SplitButton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The SplitButton has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/split-button/`](https://github.com/telerik/kendo-themes/tree/develop/tests/split-button/).
