---
title: Grid
category: components
slug: grid
position: 3
---

# Grid

The Data Grid is a data visualization and editing component which comes with built-in toolbar, paging, sorting, filtering, and grouping, as well as hierarchy with aggregates, frozen columns, virtualization and more.


## Sizes
The Data Grid component supports two sizes- small and medium. Use the smaller one to create a compact grid which allows you to display more data.

By default, the size property propagates to the building components of the grid- table, toolbar, pager, buttons and inputs.

```html
<div class="k-grid k-grid-sm">
    <div class="k-toolbar k-toolbar-sm k-grid-toolbar">...</div>
    <div class="k-grid-header">
        <div class="k-grid-header-wrap">
            <table class="k-table k-table-sm k-grid-header-table"></table>
        </div>
    </div>
    <div class="k-grid-content">
        <table class="k-table k-table-sm k-grid-table"></table>
    </div>
    <div class="k-grid-footer">
        <div class="k-grid-footer-wrap">
            <table class="k-table k-table-sm k-grid-footer-table"></table>
        </div>
    </div>
    <div class="k-pager k-pager-sm k-grid-pager"></div>
</div>

<div class="k-grid k-grid-md">
    <div class="k-toolbar k-toolbar-md k-grid-toolbar">...</div>
    <div class="k-grid-header">
        <div class="k-grid-header-wrap">
            <table class="k-table k-table-md k-grid-header-table"></table>
        </div>
    </div>
    <div class="k-grid-content">
        <table class="k-table k-table-md k-grid-table"></table>
    </div>
    <div class="k-grid-footer">
        <div class="k-grid-footer-wrap">
            <table class="k-table k-table-md k-grid-footer-table"></table>
        </div>
    </div>
    <div class="k-pager k-pager-md k-grid-pager"></div>
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/grid/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/grid/index.md" />

