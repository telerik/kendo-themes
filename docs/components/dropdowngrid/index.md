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
<div class="k-data-table k-table-md">
    <div class="k-table-header">
        <div class="k-table-header-wrap">
            <table class="k-table">
                <thead class="k-table-thead">
                    <tr class="k-table-row">
                        <th class="k-table-th">...</th>
                    </tr>
                    <tr class="k-table-group-row">
                        <th class="k-table-th">...</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    <div class="k-table-body k-table-scroller">
        <table class="k-table-body">
            <tbody class="k-table-tbody">
                <tr class="k-table-row">
                    <td class="k-table-td">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-td">...</td>
                </tr>
                <tr class="k-table-row">
                    <td class="k-table-td">...</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="k-table-footer">
        <table class="k-table">
            <tfoot class="k-table-tfoot">
                <tr class="k-table-row">
                    <td class="k-table-td">...</td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
```

### Data list

The Data list is used when the DropdownGrid is scrollable and cannot be presented as a table element. It consists of three individual parts, each representing the `thead`, `tbody` and `tfoot`.

```html
<div class="k-data-table k-table-md">
    <div class="k-table-header">
        <div class="k-table-header-wrap">
            <table class="k-table">
                <thead class="k-table-thead">
                    <tr class="k-table-row">
                        <th class="k-table-th">...</th>
                    </tr>
                    <tr class="k-table-group-row">
                        <th class="k-table-th">...</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    <div class="k-table-body k-table-scroller">
        <ul class="k-table">
            <li class="k-table-row">
                <span class="k-table-td">...</span>
            </li>
            <li class="k-table-row k-table-alt-row">
                <span class="k-table-td">...</span>
            </li>
        </ul>
    </div>
    <div class="k-table-footer">
        <div class="k-table-footer-wrap">
            <table class="k-table">
                <tfoot class="k-table-tfoot">
                    <tr class="k-table-row">
                        <td class="k-table-td">...</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    </div>
</div>
```

### In popup

Simply place a data table or data list inside a popup:

```html
<div class="k-popup k-dropdowngrid-popup">
    ...
</div>
```


## Sizes
The DropdownGrid can have various sizes. You can choose between `small`, `medium` and `large`. Depending on the size, the padding of the cells and the text font size is changed. By default the size of the DropdownGrid is `medium`.

### Small Size
Apply `k-table-sm` to set the DropdownGrid size to small.

```html
<div class="k-data-table k-table-sm">
    ...
</div>
```

### Medium Size
Apply `k-table-md` to set the DropdownGrid size to medium.

```html
<div class="k-data-table k-table-md">
    ...
</div>
```

### Large Size
Apply `k-table-lg` to set the DropdownGrid size to large.

```html
<div class="k-data-table k-table-lg">
    ...
</div>
```


## Customization

> TODO: write down specific customization use-cases


## SASS Variables

<import file="./packages/$THEME_NAME/scss/dropdowngrid/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/dropdowngrid/index.md" />
