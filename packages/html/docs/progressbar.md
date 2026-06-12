# Progressbar Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Progressbar provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Progressbar is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-progressbar` | `role` = `progressbar` | Sets the proper role for ProgressBar. |
| `.k-progressbar` | `aria-label` / `aria-labelledby` | The ProgressBar needs an accessible name to be assigned to it. |
| `.k-progressbar:not(.k-progressbar-indeterminate)` | `aria-valuenow` | Required if the value is not indeterminate. Decimal value between aria-valuemin and aria-valuemax. |
| `.k-progressbar` | `aria-valuemin` | Minimum value. Defaults to 0. |
| `.k-progressbar` | `aria-valuemax` | Maximum value. Defaults to 100. |

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
