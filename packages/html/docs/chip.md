# Chip Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Chip provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Chip is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Chip

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |
| `fillMode` | `solid`, `outline` | — |
| `themeColor` | `base`, `success`, `warning`, `error`, `info` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `active` | `k-active` |
| `selected` | `k-selected` |
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-chip` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="presentation" or "listitem"` | Used for read-only, informational chips that must still be announced; `aria-pressed` is omitted for these. |
| `aria-haspopup` | Indicates the Chip opens a popup on activation instead of toggling a pressed state; `aria-pressed` is omitted when present. |
| `tabindex="-1"` | When used as a static label inside another focusable or roving-tabindex container (e.g. a TreeView row), the Chip must not be independently focusable; pairing it with `pointer-events: none` also lets clicks and hover pass through to that container. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowRight` | Focuses the next chip in a horizontally oriented chiplist. |
| `ArrowLeft` | Focuses the previous chip in a horizontally oriented group. |
| `ArrowDown` | Focuses the next chip in a vertically stacked group (e.g. a field list). |
| `ArrowUp` | Focuses the previous chip in a vertically stacked group. |
| `Enter or Space` | Triggers a click action on the Chip. |
| `Delete or Backspace` | Removes the Chip when a delete action is configured. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Selection | Can be toggled to a selected/active state by clicking. |
| Removable | An optional remove icon allows the chip to be dismissed. |
| Icon or avatar | Can display an icon or avatar image alongside the label. |
| Disabled state | When disabled, the chip is non-interactive. |

### ChipList

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="listbox"` | Announces the list role of the chip list. |
| `aria-orientation="horizontal"` | Specifies the horizontal orientation of the chiplist. |
| `role="option"` | Announces the chip is an option inner component of the chip list. |
| `aria-selected="true"` | Announces the chip is selected. |
| `aria-selected="false"` | Announces the chip is not selected. |
| `aria-keyshortcuts="Enter Delete"` | Announces the Delete action along with the default Enter key. |
| `aria-multiselectable="true"` | Indicates multiple selections are allowed. |
| `aria-label` | Accessible name for the chip list; required when role="listbox". |
| `role="group"` | Groups chips that each act as independent controls (e.g. popup triggers) rather than selectable options; `aria-orientation` is omitted since it is not supported on this role. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Chip group | Renders a horizontal or wrapping collection of chip elements. |
| Selection | Supports single or multi-selection across the chips in the list. |
| Add chip | Can include an add-chip control to allow the user to create new chips. |

### Testing

The Chip has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Chip has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/chip/`](https://github.com/telerik/kendo-themes/tree/develop/tests/chip/).
