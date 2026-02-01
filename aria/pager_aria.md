## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The `PageSize` select must be implemented either as a DropDownList component with no filtering or through a native `<select>` element.

**Note:** When using composite components like DropDownList or NumericTextbox, those components must follow their respective accessibility specifications. The Pager is responsible for providing appropriate labels to these components.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-pager` | `role=application` | Indicates that the `pager` element has its own keyboard navigation implemented. |
|  | `aria-roledescription=pager` | Clarifies the role of the Pager. |
|  | `aria-keyshortcuts=Enter ArrowRight ArrowLeft` | Announces the available keyboard shortcuts while the `pager` element is focused. |
|  | `aria-label` | Announces the currently selected page and the number of available pages. |
| `.k-pager-nav` | `role=button` or `nodeName=button` | Specifies the role of the element. |
|  | `aria-disabled=true` | The attribute is only present when the `Arrow` button is disabled, for example, present on the **Previous** button when the current page is the first one. |
|  | `title` | Specifies the purpose of each button. |
|  | `aria-label` or `title` | Specifies the purpose of each link, for example, `Page 6`. |
|  | `aria-current=page` | The attribute is only present on the currently selected page element. |
| `.k-pager-sizes>.k-dropdownlist` | `aria-label` | The DropDownList element requires an "aria-label" to specify its purpose (e.g., "Items per page"). |
| `.k-pager-input>.k-input>.k-input-inner` | `aria-label` | The input element requires an "aria-label" to specify its purpose (e.g., "Page number"). |

