## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-notification` | `role=status` | Notification element should be marked as a status. Uses `status` instead of `alert` to avoid interrupting screen reader workflow — `role=status` has implicit `aria-live=polite`. |
|  | `aria-live=polite` | The aria-live value must be set to `polite`, so that it will not obscure other essential information while announced. |
|  | `aria-describedby=.k-notification-content id` | Used so that the content of the Notification will be announced by the assistive technologies. |
| `.k-svg-i-x,.k-i-x` | `aria-hidden=true` | The close button icon of the notification (if any) should not be present in the accessibility tree. |

