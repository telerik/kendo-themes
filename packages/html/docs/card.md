# Card Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Card component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-card-list` | `role=list` | The card list container announces its list role. |
| `.k-card-list .k-card` | `role=listitem` | Each card in the list has the listitem role. |
| `.k-card-list .k-card` | `tabindex=0` | The card is focusable when navigatable. |
| `.k-card-list .k-card` | `aria-describedby=.k-card-title id` | Associate the card to its title element. |
| `.k-card-list .k-card` | `aria-keyshortcuts=Enter` | Announces the Enter key for navigation inside the card. |
