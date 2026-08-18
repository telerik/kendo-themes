# SmartBox Specification

## Accessibility Support

Out of the box, the Telerik and Kendo UI SmartBox provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SmartBox is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### SmartBox

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
| `disabled` | `k-disabled` |

These CSS classes are applied to the `k-smart-box` element.

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="combobox"` | Announces the combobox role for the SmartBox input. |
| `aria-expanded` | Indicates whether the suggestion popup is currently visible. |
| `aria-haspopup="listbox"` | Indicates that the SmartBox has a popup listbox with suggestions. |
| `aria-hidden="true"` | Decorative icons in the prefix area are hidden from screen readers. |
| `aria-label` | for the combobox input |
| `aria-controls` | referencing the popup listbox ID |
| `aria-activedescendant` | referencing the focused list item |
| `aria-autocomplete` | behavior |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowDown` | Opens the suggestion popup if closed, or moves focus to the next suggestion in the list. |
| `ArrowUp` | Opens the suggestion popup if closed, or moves focus to the previous suggestion in the list. |
| `Enter` | Selects the currently highlighted suggestion (if any) and submits the input. |
| `Escape` | Closes the suggestion popup if open, or clears the input field. |
| `Home` | When the popup is open, moves focus to the first suggestion in the list. |
| `End` | When the popup is open, moves focus to the last suggestion in the list. |
| `Alt + ArrowDown` | Opens the suggestion popup (alternative method). |
| `Alt + ArrowUp` | Closes the suggestion popup (alternative method). |
| `Enter or Space` | Triggers a click action on the button (e.g., start voice input, send input, stop processing). |
| `ArrowDown` | Moves focus to the next suggestion in the list. |
| `ArrowUp` | Moves focus to the previous suggestion in the list. |
| `Home` | Moves focus to the first suggestion in the list. |
| `End` | Moves focus to the last suggestion in the list. |
| `Enter` | Selects the focused suggestion and closes the popup. |
| `Escape` | Closes the popup and returns focus to the input field. |

#### UX Behavior

| Feature | Description |
| --- | --- |
| Suggestions | Displays context-aware suggestions as the user types. |
| Token creation | Accepted suggestions are converted into inline tokens. |
| Natural language | Parses free-form text input into structured filter criteria. |

### Testing

The SmartBox has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The SmartBox has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/patterns/)
- [ARIA Authoring Practices: Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

### Rendered HTML Examples

Full rendered HTML snapshots are available at [`tests/smart-box/`](https://github.com/telerik/kendo-themes/tree/develop/tests/smart-box/).
