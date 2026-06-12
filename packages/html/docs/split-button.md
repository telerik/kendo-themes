# SplitButton Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI SplitButton provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The SplitButton is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-split-button-arrow` | `role` = `button` | Omitted if the <button> DOM element is used. |
| `.k-split-button-arrow` | `aria-label` | The attribute must be present when no text is initially visible in the button. |
| `.k-split-button-arrow` | `aria-expanded` = `true` / `false` | Announces the state of the popup visibility. |
| `.k-split-button-arrow` | `aria-controls` = `.k-menu-group id` | Points to the popup element. Builds a relationship between the button and the popup. |
| `.k-split-button-arrow` | `tabindex` = `-1` | The arrow button is removed from the tab sequence. |
| `.k-split-button-arrow.k-disabled` | `aria-disabled` = `true` | Rendered only when the button is disabled. |
| `.k-menu-group` | `role` = `list` | Announces the list role of the popup. |
| `.k-menu-item` | `role` = `listitem` | Announces the listitem role of the popup items. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the SplitButton component:

| Trigger | Behavior |
| --- | --- |
| `Enter` | Clicks (activates) the main button action. |
| `Space` | Clicks (activates) the main button action. |

### Testing

The SplitButton has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The SplitButton has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |
