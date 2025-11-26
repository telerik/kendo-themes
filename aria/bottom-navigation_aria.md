## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Bottom Navigation component is a landmark `<nav>` element or an element with `role="navigation"`(https://www.w3.org/TR/wai-aria-1.2/#navigation). It contains an ordered list of navigation items. Each navigation item contains a link.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-bottom-nav` | `role=navigation` or `nodeName=nav` | The landmark role `navigation` must be assigned to the bottom navigation. |
| `.k-bottom-nav-item` | `role=link` or `nodeName=a` | Associate the link purpose of the bottom navigation items. |
| `.k-bottom-nav-item.k-selected` | `aria-current=true` | Associate the link purpose of the bottom navigation items. |

