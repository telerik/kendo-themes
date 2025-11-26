## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-toolbar` | `role=toolbar` | The component role. |
|  | `aria-label` or `aria-labelledby` | Must be supplied on each toolbar only when the application contains more than one toolbars. |
| `.k-toolbar .k-toolbar-overflow-button:has(.k-svg-i-more-vertical)` | `aria-haspopup=menu` | The value of the "aria-haspopup" attribute of the button that opens the overflow popup. |
|  | `aria-expanded=true/false` | The value of the "aria-expanded" attribute of the button that opens the overflow popup. |
|  | `aria-controls=.k-toolbar-popup .k-menu-group id` | Indicates the connection between the toggle button and the content it controls. |
|  | `aria-label` or `title` | The button that opens the overflow popup must have a descriptive text set, as it contains only an icon (no text). |
| `.k-toolbar-popup .k-menu-group` | `role=menu` | The role of the tools wrapper in the overflow section. |
|  | `aria-labelledby=.k-toolbar .k-toolbar-overflow-button:has(.k-svg-i-more-vertical) id` | Associates the title of the menu toggle button. |
| `.k-toolbar .k-toolbar-overflow-button:has(.k-svg-i-more-horizontal)` | `aria-expanded=true/false` | The value of the "aria-expanded" attribute of the button that opens the overflow section. |
|  | `aria-label` or `title` | The button that opens the overflow section must have a descriptive text set, as it contains only an icon (no text). |
|  | `aria-controls=.k-toolbar-popup .k-toolbar-items-list id` | Indicates the connection between the toggle button and the content it controls. |
| `.k-toolbar-popup .k-toolbar-items-list` | `role=toolbar` | The role of the tools wrapper in the overflow section. |
|  | `aria-labelledby=.k-toolbar .k-toolbar-overflow-button:has(.k-svg-i-more-horizontal) id` | Associates the title of the section toggle button. |

