## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Spreadsheet is a composite component that is used to render spreadsheet data and provide the proper means for its editing. It consists of the following structural elements:


 - Quick access elements - Undo and Redo buttons
 - Menu
 - ToolBars
 - Name editor
 - Formula input
 - Sheet area
 - Sheets bar Add Button
 - Sheets bar Menu Button
 - Sheets bar TabStrip

### SpreadSheet Wrapping Element

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-spreadsheet` | `role=application` | Indicates the Spreadsheets' role as an application. |

### Quick access elements

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-spreadsheet-quick-access-toolbar>.k-button` | `role=button` | The two quick access elements are buttons. |
|  | `aria-label` or `title` | The two quick access elements must have labels as they do not have text content. |

### ToolBar Menu


The Menu used for selecting the active ToolBar must implement the Menu specification.

[Menu accessibility specification](menu_aria.md)

### ToolBars


All ToolBars must implement the ToolBar specification. Apart from that, they also need to be labeled as per their purpose.

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-spreadsheet-toolbar` | `aria-label` or `title` | Each ToolBar must have a label specifying its purpose. |

[ToolBar accessibility specification](toolbar_aria.md)

### Name editor


The Name editor must implement the spec for a ComboBox component.

[ComboBox accessibility specification](combobox_aria.md)

### Formula input

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-spreadsheet-formula-input` | `aria-haspopup=menu` | Specifies that the formula input opens a popup. |
|  | `aria-controls=.k-spreadsheet-formula-list id` | Points to the formulas list with role `menu`. Signifies that the formula input element controls the popup. |
|  | `aria-expanded=true/false` | Announces the state of the popup visibility. |
|  | `title` | The Formula input of the Spreadsheet must have a title specifying its purpose. |
|  | `role=combobox` | The focusable element of the component should have role `combobox` (an input with popup). |

### Formula list

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-spreadsheet-formula-list` | `id` | Unique and deterministic id linked to the "aria-controls" attribute of the corresponding formula input. |
| `.k-spreadsheet-formula-list` | `role=menu` | Announces the `menu` role of the popup. |
| `.k-list-item` | `role=menuitem` | Announces the `menuitem` role of the popup items. |

### Sheet area


The Sheet area must implement the spec for a Grid component. The column header cells are header cells are the members of the `.k-spreadsheet-column-header` element. The row header cells are the members of the `.k-spreadsheet-row-header` element.

[Grid accessibility specification](grid_aria.md)

### Add new sheet button

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-spreadsheet-sheet-add:not(button)` | `role=button` | The add new sheet element is a button. |
| `.k-spreadsheet-sheet-add` | `aria-label` or `title` | The add new sheet element must have a label as it does not have text content. |
| `.k-spreadsheet-sheet-add` | `aria-controls=.k-tabstrip-items id` | Points to the `ul` element of the TabStrip that contains all tabs. Signifies that the `button` element controls the `tablist` one. |

### Menu sheet button


The Menu sheet button must implement the spec for a DropDownButton component.

[DropDownButton accessibility specification](dropdownbutton_aria.md)

| Selector | Attribute | Usage |
| -------- | --------- | ----- |
| `.k-spreadsheet-sheets-menu` | `aria-controls=.k-tabstrip-items id` | Points to the `ul` element of the TabStrip that contains all tabs. Signifies that the `button` element controls the `tablist` one. |

### Sheets bar


The Sheets bar of the Spreadsheet must implement the TabStrip specification.

[TabStrip accessibility specification](tabstrip_aria.md)

### Tab Menu button


The Menu button is each TabStrip tab must implement the DropDownButton specification.

[DropDownButton accessibility specification](dropdownbutton_aria.md)

