# Checkbox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI Checkbox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Checkbox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### Checkbox

#### Component Style Options

| Option | Values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |
| `rounded` | `none`, `small`, `medium`, `large`, `full` | — |

#### Component States

| State | CSS Class |
| --- | --- |
| `hover` | `k-hover` |
| `focus` | `k-focus` |
| `valid` | `k-valid` |
| `invalid` | `k-invalid` |
| `required` | `k-required` |
| `disabled` | `k-disabled` |
| `checked` | `k-checked` |
| `indeterminate` | `k-indeterminate` |

These CSS classes are applied to the `k-checkbox` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-label|aria-labelledby` | The input requires an accessible name to which it will be assigned. |
| `aria-checked="true"|\"false"|\"mixed"` | For native checkboxes the checked state is handled by the browser. aria-checked is used for custom implementations. |
| `aria-describedby` | Points to the hint or error message for the checkbox. |
| `aria-disabled="true"` | For native checkboxes use the HTML disabled attribute. aria-disabled for custom implementations. |
| `role` | override for the wrapper span (e.g., role="none" in Treeview context) |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Space` | Toggles the checked state. Regardless of the indeterminate state, the key always considers the `Value` of the CheckBox. |
| `Shift + Tab` | Moves focus to the previous checkbox. |
| `ArrowDown or ArrowRight` | Moves focus to the next checkbox. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Toggle | Clicking toggles between checked and unchecked states. |
| Indeterminate | Can be set to an indeterminate (partial-selection) state programmatically. |
| Label | An associated label element describes the purpose of the checkbox. |
| Disabled state | When disabled, the checkbox cannot be toggled. |

### CheckboxGroup

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-invalid="true"` | Rendered only when the CheckBox is in a form and announces the invalid state. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Option set | Renders a labelled group of related checkboxes. |
| Layout | Items can be arranged horizontally or vertically. |
| Disabled group | When the group is disabled, all contained checkboxes are non-interactive. |

### Testing

The Checkbox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Checkbox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA Authoring Practices: CheckBox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/checkbox/`](https://github.com/telerik/kendo-themes/tree/develop/tests/checkbox/).
