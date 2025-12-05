## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-tilelayout` | `role=list` | Sets list role to the TileLayout wrapper. |
| `.k-tilelayout-item` | `role=listitem` | Sets listitem role to the TileLayout items. |
|  | `aria-labelledby` | Associates the focusable item wrapper with the respective header text element (.k-tilelayout-item-header .k-card-title). |
|  | `tabindex=0` | Makes the item wrapper element focusable. |
|  | `aria-keyshortcuts=Enter` | Announces Enter as an available key shortcut when the item is focused. |
|  | `aria-dropeffect=execute` | Announces that an action, supported by the drop-target (resizing or reordering) will be executed when the item is dropped. |
|  | `aria-grabbed=true/false` | The "aria-grabbed" state indicates an element's 'grabbed' state in a drag-and-drop operation. |
| `.k-tilelayout-item-header .k-card-title` | `id` | Unique and deterministic identifier to link the header text element to the focusable wrapper. |

