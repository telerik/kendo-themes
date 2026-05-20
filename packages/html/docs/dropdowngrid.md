# Dropdowngrid Accessibility

## ARIA Attributes

The following table lists the ARIA attributes applied to the Dropdowngrid component:

| Selector | Attribute | Usage |
| --- | --- | --- |
| `.k-combobox .k-input-inner` | `role=combobox` | Identifies the input as a combobox. |
| `.k-combobox .k-input-inner` | `aria-haspopup=listbox` | Indicates the combobox has a listbox popup. |
| `.k-combobox .k-input-inner` | `aria-expanded` | Indicates whether the popup is open. |
| `.k-combobox .k-input-inner` | `aria-label` | Accessible name for the combobox. |
| `.k-combobox .k-input-button` | `aria-label` | Accessible name for the dropdown button. |
| `.k-combobox .k-input-button` | `tabindex=-1` | Dropdown button is not in the tab order. |
| `.k-dropdowngrid-popup .k-table-list` | `role=listbox` | Table list has listbox role. |
| `.k-dropdowngrid-popup .k-table-list[role="listbox"]` | `aria-label or aria-labelledby` | Table listbox must have an accessible name. Consuming code is responsible for associating with the component label via aria-labelledby. |
| `.k-dropdowngrid-popup .k-table-list .k-table-row` | `role=option` | Each table row is an option. |
