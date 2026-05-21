# Listview Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Listview component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-listview:not(.k-selectable) .k-listview-content` | `role=list` | Specifies the role of non selectable ListView content element. |
| `.k-listview.k-selectable .k-listview-content` | `role=listbox` | Specifies the role of selectable ListView content element. |
| `.k-listview:not(.k-selectable) .k-listview-item` | `role=listitem` | Specifies the role of each item in a non selectable ListView. |
| `.k-listview.k-selectable .k-listview-item` | `role=option` | Specifies the role of each item in a selectable ListView. |
| `.k-listview-item` | `aria-setsize` | Specifies the total number of items present in the ListView. |
| `.k-listview-item` | `aria-posinset` | Specifies the position of the current item in the entire list. |
| `.k-listview-item:nth-child(1)` | `tabindex=0` | The first item in the ListView must be focusable by default. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Listview component:

| Shortcut | Behavior |
| --- | --- |
| `Right Arrow` | Moves the focus to the next rendered item. If the focus is on the last item, the focus does not move. |
| `Down Arrow` | Moves the focus to the next rendered item. If the focus is on the last item, the focus does not move. |
| `Left Arrow` | Moves the focus to the previous rendered item. If the focus is on the first item, the focus does not move. |
| `Up Arrow` | Moves the focus to the previous rendered item. If the focus is on the first item, the focus does not move. |
| `Home` | Moves the focus to the first rendered item. |
| `End` | Moves the focus to the last rendered item. |
| `Enter` | When there are focusable items within a ListView item - the focus moves to the first focusable item inside. |
| `Esc` | If the focus is on an element inside a ListView item - returns the focus back to the ListView item. |
