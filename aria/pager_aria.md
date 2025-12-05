## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The `PageSize` select must be implemented either as a DropDownList component with no filtering or through a native `<select>` element.


The `Page` select, which is present for mobile devices and smaller screens with limited space for page links, must be a native `<select>` element.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-pager` | `role=application` | Indicates that the `pager` element has its own keyboard navigation implemented. |
|  | `aria-roledescription=pager` | Clarifies the role of the Pager. |
|  | `aria-keyshortcuts=Enter ArrowRight ArrowLeft` | Announces the available keyboard shortcuts while the `pager` element is focused. |
|  | `aria-label` | Announces the currently selected page and the number of available pages. |
|  | `aria-controls` | Points to the `id` of the element that is being controlled, for example, a Grid. |
| `.k-pager-nav` | `role=button` or `nodeName=button` | Specifies the role of the element. |
|  | `aria-disabled=true` | The attribute is present when the the `Arrow` button is disabled, for example, present on the **Previous** button when the current page is the first one. |
|  | `title` | Specifies the purpose of each button. |
|  | `aria-label` or `title` | Specifies the purpose of each link, for example, `Page 6`. |
|  | `aria-current=page` | The attribute must be present on the currently selected page element. |
| `.k-pager-sizes>.k-dropdownlist` | `aria-label` | The element requires an "aria-label" to specify its purpose. |
| `.k-pager-numbers-wrap>.k-dropdown` | `aria-label` | The element requires an "aria-label" to specify its purpose. |
| `.k-pager-input>.k-input>.k-input-inner` | `aria-label` | The element requires an "aria-label" to specify its purpose. |

