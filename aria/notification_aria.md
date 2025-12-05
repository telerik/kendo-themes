## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-notification` | `role=alert` | Notification element should be marked as an alert. |
|  | `aria-live=polite` | The aria-live value must be set to `polite`, so that it will not obscure other essential information while announced. |
|  | `aria-label` or `aria-labelledby` | The Notification needs an accessible name to be assigned to it. The label holds info about the type of the Notification (error, warning, info, etc.) |
|  | `aria-describedby=.k-notification-content id` | USed so that the content of the Notification will be announced by the assistive technologies. |
| `.k-i-close,.k-svg-i-close` | `aria-hidden=true` | The close button of the notification (if any) should not be present in the accessibility tree. |

