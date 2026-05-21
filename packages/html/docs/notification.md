# Notification Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Notification component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-notification` | `role=status` | Notification element should be marked as a status. Uses status instead of alert to avoid interrupting screen reader workflow. |
| `.k-notification` | `aria-live=polite` | The aria-live value must be polite so it will not obscure other essential information. |
| `.k-notification` | `aria-describedby=.k-notification-content id` | Used so that the content of the Notification will be announced by assistive technologies. |
| `.k-notification .k-svg-i-x, .k-notification .k-i-x` | `aria-hidden=true` | The close button icon should not be present in the accessibility tree. |
