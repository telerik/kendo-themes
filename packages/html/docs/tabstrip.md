# Tabstrip Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Tabstrip provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Tabstrip is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-tabstrip-items` | `role` = `tablist` | Indicates the tablist role for the ul element of the TabStrip. |
| `.k-tabstrip.k-tabstrip-left .k-tabstrip-items,.k-tabstrip.k-tabstrip-right .k-tabstrip-items` | `aria-orientation` = `vertical` | Indicates the orientation of the tablist container element. Rendered only when vertical, as tablist defaults to horizontal. |
| `.k-tabstrip-item` | `role` = `tab` | The tab li element. |
| `.k-tabstrip .k-tabstrip-item.k-active` | `aria-selected` = `true` | Announces the selected state of the tab. |
| `.k-tabstrip .k-tabstrip-item.k-active` | `aria-controls` | Announces the relation between the panel and active tab. |
| `.k-tabstrip-content` | `role` = `tabpanel` | The content div of the tab. |
| `.k-tabstrip-content` | `aria-hidden` = `true` | Only if the component implements a feature to control whether the content should be persisted. |
| `.k-tabstrip-content` | `aria-labelledby` | Refers to the tab element that controls the panel. |
| `.k-tabstrip-scrollable .k-button` | `aria-hidden` = `true` | Scroll buttons are hidden from assistive technologies. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Tabstrip component:

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
