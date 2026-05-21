# Filter Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Filter component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-filter-container` | `role=tree` | Describes the hierarchical structure of the Filter component. |
| `.k-filter-container` | `aria-label` | Specifies a label for the Filter component. |
| `.k-filter-group-main,.k-filter-item` | `role=treeitem` | Each FilterGroup and FilterExpression represent a separate treeitem in the Filter component structure. |
| `.k-filter-lines` | `role=group` | Represents a group of items in the Filter component. |
| `.k-toolbar` | `role=toolbar` | The role represents a collection of tools. |
| `.k-toolbar` | `aria-label` | Specifies a label for the toolbar. |

## Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Filter component:

| Shortcut | Behavior |
| --- | --- |
| `Up Arrow` | Focuses the previous item (FilterGroup or FilterExpression) in the `tree`. |
| `Down Arrow` | Focuses the next item (FilterGroup or FilterExpression) in the `tree`. |
