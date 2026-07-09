# Tabstrip Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Tabstrip provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Tabstrip is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### TabStrip

#### Component Style Options

| Option | Valid values | Default |
| --- | --- | --- |
| `size` | `small`, `medium`, `large` | — |

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-hidden="true"` | Scroll buttons are hidden from assistive technologies. |
| `id` | Optional; applied to the TabStripItems element, referenced by tab aria-controls. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `ArrowUp or ArrowDown` | Activates the previous/next tab (vertical orientation). Navigation wraps — when end is reached the first tab is focused, when start is reached the last tab is focused. |
| `ArrowLeft or ArrowRight` | Activates the previous/next tab (horizontal orientation). Navigation wraps — when end is reached the first tab is focused, when start is reached the last tab is focused. |
| `Tab` | Moves focus to the content of the active tab. Roving tabindex — only the active tab has tabindex=0, remaining tabs have tabindex=-1. |
| `Shift + Tab` | Moves focus back to the active tab from the panel. |
| `Enter` | Activates the focused tab (when automatic selection is disabled). |
| `Home` | Moves focus to and activates the first tab. |
| `End` | Moves focus to and activates the last tab. |
| `Delete or Backspace` | Removes the focused tab from the tab list. |

### TabStripItems

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `aria-orientation="vertical"` | Set on the tablist when the tabstrip is vertical. |

### Testing

The Tabstrip has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Tabstrip has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tablist](https://www.w3.org/TR/wai-aria-1.2/#tablist)
- [WAI-ARIA practices: TabList example](https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-automatic.html)
