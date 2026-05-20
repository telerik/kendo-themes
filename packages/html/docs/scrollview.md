# Scrollview Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Scrollview component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-scrollview` | `role=application` | Specifies the role of the Carousel element. |
| `.k-scrollview` | `aria-roledescription=carousel` | Clarifies the role of the Carousel element. |
| `.k-scrollview` | `tabindex=0` | Carousel element must be focusable. |
| `.k-scrollview-wrap` | `role=list` | Clarifies the scrollview wrap as a list of items (images). |
| `.k-scrollview-wrap>*` | `role=listitem` | Specifies the role of each Carousel item. |
| `.k-scrollview-wrap>*` | `aria-roledescription=slide` | Clarifies the role of the Carousel item. |
| `.k-scrollview-prev,.k-scrollview-next` | `role=button` | Specifies the role of the Previous/Next button. |
| `.k-scrollview-prev,.k-scrollview-next` | `aria-label` | Specifies label for the Previous/Next button. |
| `.k-scrollview-prev,.k-scrollview-next` | `aria-controls` | Points to the id of the items container element. |
| `.k-scrollview>.k-sr-only` | `aria-live=polite` | Identifies a hidden element as a live region in the polite state. |
