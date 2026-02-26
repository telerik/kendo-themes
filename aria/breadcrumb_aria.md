## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Breadcrumb component renders the semantic `nav` html element that automatically associated navigation role.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-breadcrumb` | `aria-label=Breadcrumb` | Indicates the type of navigation provided by the `nav` element. |
| `.k-breadcrumb-item .k-breadcrumb-link,.k-breadcrumb-item .k-breadcrumb-root-link` | `role=link` or `nodeName=a` | The breadcrumb item should render either an `<a>` element, or should have `role="link"` assigned. |
| `.k-breadcrumb-last-item .k-breadcrumb-link,.k-breadcrumb-last-item .k-breadcrumb-root-link` | `aria-current=page` | The last breadcrumb item that points to the active page should have `aria-current="page"`. |
| `.k-breadcrumb-last-item .k-breadcrumb-link` | `aria-disabled=true` | Indicates that the last breadcrumb item is disabled. |
| `.k-breadcrumb-delimiter-icon` | `aria-hidden=true` | The breadcrumb delimiter icon should not be accessed through assistive technology. |

