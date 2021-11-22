---
title: DropdownGrid
category: components
slug: dropdowngrid
position: 3
---

# DropdownGrid
DropdownGrid is a form component that lets you choose from a table-structured list of options. It is a richer version of the <select> element and supports data binding, filtering, templates, and the entering of custom values.


## Rendering

### Data Table
The Data Table is used when the DropdownGrid is scrollable. It consists of three individual tables, each representing the `thead`, `tbody` and `tfoot`. 

```html
<div class="k-animation-container" style="overflow: visible;">
    <div class="k-list-container k-popup k-groupk-dropdowngrid-popup k-popup-flush k-state-border-up">
        <div class="k-table k-table-md">
            <table>
                <thead class="k-table-header">
                    <tr class="k-table-header-wrap">
                        <th class="k-table-header-item">...</th>
                    </tr>
                    <tr class="k-table-group-header">
                        <td>...</td>
                    </tr>
                </thead>
            </table>
            <div class="k-table-scroller">
                <div style="max-height: 260px;">
                    <table class="k-table-body">
                        <tbody>
                            <tr class="k-table-row">
                                <td class="k-table-cell">...</td>
                            </tr>
                            <tr class="k-table-row">
                            <td class="k-table-cell">...</td>
                            </tr>
                            <tr class="k-table-row">
                            <td class="k-table-cell">...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <table class="k-table-footer">
                <tfoot>
                    <tr class="k-table-footer-wrap">
                        <td class="k-table-footer-item">...</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
```


## Sizes
The DropdownGrid can have various sizes. You can choose between `small`, `medium` and `large`. Depending on the size, the padding of the cells and the text font size is changed. By default the size of the DropdownGrid is `medium`.

### Small Size
Apply `k-table-sm` to set the DropdownGrid size to small.

```html
<div class="k-animation-container" style="overflow: visible;">
    <div class="k-list-container k-popup k-group k-dropdowngrid-popup k-popup-flush k-state-border-up">
        <table class="k-table k-table-sm">
            <thead class="k-table-header">
                <tr class="k-table-header-wrap">
                    <th class="k-table-header-item">...</th>
                </tr>
                <tr class="k-table-group-header">
                    <td>...</td>
                </tr>
            </thead>
            <tbody class="k-table-body">
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
            </tbody>
            <tfoot class="k-table-footer">
                <tr class="k-table-footer-wrap">...</tr>
            </tfoot>
        </table>
    </div>
</div>
```

### Medium Size
Apply `k-table-md` to set the DropdownGrid size to medium.

```html
<div class="k-animation-container" style="overflow: visible;">
    <div class="k-list-container k-popup k-group k-dropdowngrid-popup k-popup-flush k-state-border-up">
        <table class="k-table k-table-md">
            <thead class="k-table-header">
                <tr class="k-table-header-wrap">
                    <th class="k-table-header-item">...</th>
                </tr>
                <tr class="k-table-group-header">
                    <td>...</td>
                </tr>
            </thead>
            <tbody class="k-table-body">
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
            </tbody>
            <tfoot class="k-table-footer">
                <tr class="k-table-footer-wrap">...</tr>
            </tfoot>
        </table>
    </div>
</div>
```

### Large Size
Apply `k-table-lg` to set the DropdownGrid size to large.

```html
<div class="k-animation-container" style="overflow: visible;">
    <div class="k-list-container k-popup k-group k-dropdowngrid-popup k-popup-flush k-state-border-up">
        <table class="k-table k-table-lg">
            <thead class="k-table-header">
                <tr class="k-table-header-wrap">
                    <th class="k-table-header-item">...</th>
                </tr>
                <tr class="k-table-group-header">
                    <td>...</td>
                </tr>
            </thead>
            <tbody class="k-table-body">
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-cell">...</td>
                </tr>
            </tbody>
            <tfoot class="k-table-footer">
                <tr class="k-table-footer-wrap">...</tr>
            </tfoot>
        </table>
    </div>
</div>
```


## Customization

> TODO: write down specific customization use-cases


## SASS Variables

<import file="./packages/$THEME_NAME/scss/dropdowngrid/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/dropdowngrid/index.md" />