## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

### The FilterMenu Button/Header

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-grid-filter-menu` | `aria-haspopup=dialog` | Specifies that the button opens a dialog. |
|  | `aria-expanded=true/false` | Announces the current state of the popup. |
|  | `aria-controls=.k-popup.k-grid-filter-popup id` | Points to the popup that the button toggles. |
| `.k-header.k-filterable` | `aria-haspopup=dialog` | Specifies that the header cell opens a dialog. |
|  | `aria-expanded=true/false` | Announces the current state of the popup. |
|  | `aria-controls=.k-popup.k-grid-filter-popup id` | Points to the popup that the button toggles. |
|  | `aria-keyshortcuts=Alt + ArrowDown` | Announces the available filter-menu shortcut. |

### The FilterMenu Popup

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-popup.k-grid-filter-popup` | `id` | Unique and deterministic id linked to the button or header cell "aria-controls" attribute. |
|  | `role=dialog` | Sets the dialog role of the popup. |
|  | `aria-label` | Contains descriptive information about the filter menu purpose - e.g. "Column Title Filter Menu" |

### The FilterMenu Popup Content


All internal elements and components follow their respective specification rules, and additionally have suitable "aria-label" attributes, describing what menu they are part of.

### Adaptive Mode


When the FilterMenu is in adaptive mode, the popup element follows the specifications of the ActionSheet component.

[ActionSheet accessibility specification](actionsheet_aria.md)

