## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-scrollview` | `role=application` | Specifies the role of the Carousel element. |
|  | `aria-roledescription=carousel` | Clarifies the role of the Carousel element. |
|  | `tabindex=0` | Carousel element must be focusable. |
| `.k-scrollview-wrap` | `role=list` | Clarifies the scrollview wrap as a list of items (images). |
| `.k-scrollview-nav-wrap>.k-scrollview-nav .k-button` | `aria-label` | The buttons need an accessible name |
| `.k-scrollview>.k-sr-only` | `aria-live=polite` | Identifies a hidden element as a live region in the `polite` state, meaning assistive technology users are informed about changes to the region at the next available opportunity. |
|  | `aria-live=off` | Identifies a hidden element as a live region that is in the `off` state, meaning assistive technology users are not informed about changes to the region. |
| `.k-scrollview-wrap>*` | `role=listitem` | Specifies the role of each Carousel item. |
|  | `aria-roledescription=slide` | Clarifies the role of the Carousel item. |
| `.k-scrollview-prev,.k-scrollview-next` | `role=button` or `nodeName=button` | Specifies the role of the element as a Button. |
|  | `aria-label` | Specifies label for the Previous/Next button. |
|  | `aria-controls=.k-scrollview-wrap id` | Points to the id of the items container element. |

