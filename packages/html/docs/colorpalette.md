# Colorpalette Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Colorpalette component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-colorpalette` | `role=grid` | The focusable wrapper announces its role as a grid. |
| `.k-colorpalette` | `aria-label or aria-labelledby` | The component needs an accessible name including the currently selected value. |
| `.k-colorpalette` | `aria-activedescendant` | Points to the focused cell in the table. |
| `.k-colorpalette` | `tabindex=0` | The element must be focusable. |
| `.k-colorpalette.k-disabled` | `aria-disabled=true` | Rendered only when the ColorPalette is disabled. |
| `.k-colorpalette-table` | `role=none or role=presentation` | Negates the default role of the table element. |
| `.k-colorpalette-table>tbody>tr` | `role=row` | Required as the semantic role of the parent table has been removed. |
| `.k-colorpalette-tile` | `role=gridcell` | Required as the semantic role of the parent table has been removed. |
| `.k-colorpalette-tile` | `aria-label or title` | The text representation of the color value for the current cell. |
| `.k-colorpalette-tile.k-selected` | `aria-selected=true` | Present on the currently selected cell. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Colorpalette component:

| Shortcut | Behavior |
| --- | --- |
| `Down Arrow` | Focuses the next cell below. |
| `Up Arrow` | Focuses the next cell above. |
| `Right Arrow` | Focuses the next cell on the right. |
| `Left Arrow` | Focuses the next cell on the left. |
| `Enter` | Selects the color from the currently focused cell. |
