# Treelist Accessibility

## Accessibility Support

Out of the box, the Telerik and Kendo UI Treelist provides extensive accessibility support and enables users with disabilities to acquire complete control over its features.

The Treelist is compliant with the [Web Content Accessibility Guidelines (WCAG) 2.2 standards](https://www.w3.org/TR/WCAG22/) and [Section 508](https://www.section508.gov/) requirements, follows the [Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/WAI/ARIA/apg/) best practices for implementing the [keyboard navigation](#keyboard-navigation) and provides options for managing its focus and is tested against the most popular screen readers.

### WAI-ARIA

This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-grid-toolbar` | `role` = `toolbar` | The toolbar is a collection of command buttons and inputs. |
| `.k-grid-toolbar` | `aria-label` | Clarifies the purpose of the toolbar. |
| `.k-grid-toolbar` | `aria-controls` = `.k-grid-aria-root id` | Pointing to the id of the element with role=treegrid. |
| `.k-treelist .k-grid-aria-root` | `role` = `treegrid` | The role specifies the element is a TreeGrid. |
| `.k-grid-aria-root` | `aria-colcount` | The total number of columns. |
| `.k-grid-aria-root` | `aria-rowcount` | The total number of rows in the table. |
| `.k-grid-header-wrap>table` | `role` = `none` | Negates the default semantic role of the <table> element. |
| `.k-grid-header-wrap>table>thead` | `role` = `rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-header-wrap>table>thead>tr` | `role` = `row` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-header-wrap>table>thead>tr` | `aria-rowindex` | Row number. |
| `.k-grid-header-wrap>table>thead>tr>th:not(.k-hierarchy-cell):not(.k-group-cell):not(.k-drag-cell)` | `role` = `columnheader` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-header-wrap>table>thead>tr>th` | `aria-sort` | Present if sorting is enabled for that column. |
| `.k-grid-header-wrap>table>thead>tr>th` | `aria-colindex` | Col number. |
| `.k-grid-header-wrap>table>thead>tr>th` | `aria-haspopup` = `dialog` | Present if the column has a ColumnMenu or FilterMenu. |
| `.k-grid-content>table` | `role` = `none` | Negates the default semantic role of the <table> element. |
| `.k-grid-content>table>tbody` | `role` = `rowgroup` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-content>table>tbody>tr` | `role` = `row` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-content>table>tbody>tr` | `aria-rowindex` | Row number. |
| `.k-grid-content>table>tbody>tr>td` | `role` = `gridcell` | Required as the owner <table> element has its semantic role removed. |
| `.k-grid-content>table>tbody>tr>td` | `aria-colindex` | Col number. |
| `tr.k-selected` | `aria-selected` = `true` | Set on the currently selected row(s) in row selection mode. All cells within the selected row also carry aria-selected=true (without k-selected class). |
| `td.k-selected` | `aria-selected` = `true` | Set on the currently selected cell(s) in cell selection mode. The k-selected class on cells is only applied in cell selection mode, but aria-selected=true is present on cells regardless of selection mode. |
| `.k-grid-content>table>tbody>tr` | `aria-expanded` | Set on the currently expanded row(s). |
| `.k-grid-content>table>tbody>tr td` | `aria-expanded` | The cell containing the expand/collapse toggle also carries aria-expanded matching the row value, as it is the navigable focusable element. |
| `.k-treelist-toggle[class*="i-chevron-down"],.k-treelist-toggle[class*="i-chevron-right"]` | `aria-hidden` = `true` | Removes the expand/collapse icon from the accessibility tree. |
| `.k-grid-filter-popup` | `role` = `dialog` | The filter menu popup has dialog role. |
| `.k-grid-filter-popup` | `id` | Unique id linked to the header cell aria-controls attribute. |
| `.k-grid-filter-popup` | `aria-label` | Descriptive label for the filter menu. |
| `.k-grid-columnmenu-popup` | `role` = `dialog` | The column menu popup has dialog role. |
| `.k-grid-columnmenu-popup` | `id` | Unique id linked to the header cell aria-controls attribute. |
| `.k-grid-columnmenu-popup` | `aria-label` | Descriptive label for the column menu. |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `role` = `button` | Column menu items have button role. |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `tabindex` = `0` | Column menu items are focusable. |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `aria-expanded` | Expandable column menu items announce their expanded state. |
| `.k-grid-columnmenu-popup .k-columnmenu-item` | `aria-controls` | Expandable items point to the id of the content they control. |
| `.k-grid-columnmenu-popup .k-column-list` | `role` = `listbox` | The column list is a listbox. |
| `.k-grid-columnmenu-popup .k-column-list` | `aria-multiselectable` = `true` | The column list supports multiple selections. |
| `.k-grid-columnmenu-popup .k-column-list` | `aria-label` | Accessible name for the column list. |
| `.k-grid-columnmenu-popup .k-column-list-item` | `role` = `option` | Column list items are options. |
| `.k-grid-columnmenu-popup .k-column-list-item` | `aria-checked` | Column list items announce their checked state. |
| `.k-grid-header-locked table tr` | `aria-owns` | Locked header rows own cells from the corresponding non-locked header table rows. |
| `.k-grid-content-locked table tr` | `aria-owns` | Locked content rows own cells from the corresponding non-locked content table rows. |
| `.k-grid-lockedcolumns .k-grid-header-wrap table tr` | `role` = `none` | Non-locked header rows have their semantic role removed when locked columns exist. |
| `.k-grid-lockedcolumns .k-grid-content table tr` | `role` = `none` | Non-locked content rows have their semantic role removed when locked columns exist. |
| `.k-grid-lockedcolumns .k-grid-header-wrap th` | `role` = `columnheader` | Non-locked header cells retain columnheader role so they are announced correctly when owned via aria-owns. |
| `.k-grid-lockedcolumns .k-grid-content td` | `role` = `gridcell` | Non-locked data cells retain gridcell role so they are announced correctly when owned via aria-owns. |
| `.k-drag-cell` | `aria-label` | Must be present in a Drag Row scenario on the cell containing the drag handle. |

### Keyboard Navigation

The following table lists the keyboard shortcuts supported by the Treelist component:

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
