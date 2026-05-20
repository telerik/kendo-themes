# Dropdowntree Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Dropdowntree component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-dropdowntree` | `role=combobox` | Announces the dropdown tree element. |
| `.k-dropdowntree` | `aria-haspopup=tree` | Indicates the presence of a tree popup. |
| `.k-dropdowntree` | `aria-expanded` | Announces the popup visibility state. |
| `.k-dropdowntree` | `aria-label` | Accessible name for the dropdown tree. |
| `.k-dropdowntree` | `tabindex=0` | The element must be focusable. |
| `.k-dropdowntree.k-disabled` | `aria-disabled=true` | Rendered when the dropdown tree is disabled. |
| `.k-dropdowntree .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-dropdowntree .k-input-button` | `tabindex=-1` | The button must not be focusable. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Dropdowntree component:

| Shortcut | Behavior |
| --- | --- |
| `Down Arrow` | Selects the next available item. |
| `Up Arrow` | Selects the previous available item. |
| `Alt/Opt(Mac) Down` | Opens the popup. |
| `Alt (or Opt on Mac) + Up Arrow or Esc` | `Closes the popup. |
| `Enter` | Selects and confirms the focused item. |
| `Esc` | Clears the value when the popup is not open. |
| `Tab` | Closes the actionsheet and focuses the next focusable element. |
