# Treelist Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Treelist provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Treelist is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### TreeList

#### ARIA Attributes

| Attribute | Description |
| --- | --- |
| `role="toolbar"` | The toolbar is a collection of command buttons and inputs. |
| `aria-label` | Clarifies the purpose of the toolbar. |
| `aria-controls=".k-grid-aria-root id"` | Pointing to the id of the element with role=treegrid. |
| `role="treegrid"` | The role specifies the element is a TreeGrid. |
| `aria-colcount` | The total number of columns. |
| `aria-rowcount` | The total number of rows in the table. |
| `role="none"` | Negates the default semantic role of the `<table>` element. |
| `role="rowgroup"` | Required as the owner `<table>` element has its semantic role removed. |
| `role="row"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-rowindex` | Row number. |
| `role="columnheader"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-sort` | Present if sorting is enabled for that column. |
| `aria-colindex` | Col number. |
| `aria-haspopup="dialog"` | Present if the column has a ColumnMenu or FilterMenu. |
| `role="gridcell"` | Required as the owner `<table>` element has its semantic role removed. |
| `aria-selected="true"` | Set on the currently selected row(s) in row selection mode. All cells within the selected row also carry aria-selected=true (without k-selected class). |
| `aria-selected="true"` | Set on the currently selected cell(s) in cell selection mode. The k-selected class on cells is only applied in cell selection mode, but aria-selected=true is present on cells regardless of selection mode. |
| `aria-expanded` | Set on the currently expanded row(s). |
| `aria-expanded` | The cell containing the expand/collapse toggle also carries aria-expanded matching the row value, as it is the navigable focusable element. |
| `aria-hidden="true"` | Removes the expand/collapse icon from the accessibility tree. |
| `role="dialog"` | The filter menu popup has dialog role. |
| `id` | Unique id linked to the header cell aria-controls attribute. |
| `aria-label` | Descriptive label for the filter menu. |
| `role="dialog"` | The column menu popup has dialog role. |
| `aria-label` | Descriptive label for the column menu. |
| `role="button"` | Column menu items have button role. |
| `tabindex="0"` | Column menu items are focusable. |
| `aria-expanded` | Expandable column menu items announce their expanded state. |
| `aria-controls` | Expandable items point to the id of the content they control. |
| `role="listbox"` | The column list is a listbox. |
| `aria-multiselectable="true"` | The column list supports multiple selections. |
| `aria-label` | Accessible name for the column list. |
| `role="option"` | Column list items are options. |
| `aria-checked` | Column list items announce their checked state. |
| `aria-owns` | Locked header rows own cells from the corresponding non-locked header table rows. |
| `aria-owns` | Locked content rows own cells from the corresponding non-locked content table rows. |
| `role="none"` | Non-locked header rows have their semantic role removed when locked columns exist. |
| `role="none"` | Non-locked content rows have their semantic role removed when locked columns exist. |
| `role="columnheader"` | Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns. |
| `role="gridcell"` | Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns. |
| `aria-label` | Must be present in a Drag Row scenario on the cell containing the drag handle. |

#### Keyboard Navigation

| Trigger | Behavior |
| --- | --- |
| `Enter` | In expandable and non-editable cell - expands or collapses the item. |

### Testing

The Treelist has been extensively tested automatically with [axe-core](https://github.com/dequelabs/axe-core) and manually with the most popular screen readers.

### Screen Readers

The Treelist has been tested with the following screen readers and browsers combinations:

| Environment | Tool |
| --- | --- |
| Firefox | NVDA |
| Chrome | JAWS |
| Microsoft Edge | JAWS |

### Resources

- [WAI-ARIA specification for tree grid](https://www.w3.org/TR/wai-aria-1.2/#treegrid)
