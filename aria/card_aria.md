## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### Card Component


The Card component is a UI container with styles for organized content. It does not have WAI ARIA and keyboard navigation unless used in a Card List.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-card-list .k-card` | `role=listitem` | When the card is located in a list, it should accept the listitem role. |
|  | `tabindex=0` | The card component is focusable. By enabling navigatable setting in the card component, it is focusable and all inner elements are not until Enter key is pressed. |
|  | `aria-describedby=.k-card-title id` | Associate the card to the title element when going through the cards. |
|  | `aria-keyshortcuts=Enter` | Announces the bound Enter key for the Card component that will enable the navigation inside the card. |

