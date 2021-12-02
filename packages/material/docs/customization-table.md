---
title: Customizing Table
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_table
position: 9
---

# Customizing Table

The following table lists the available variables for customization.

<table class="theme-variables">
    <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col />
    <col />
    <col />
</colgroup>
<thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default value</th>
        <th>Computed value</th>
    </tr>
</thead>
<tbody>
        <tr>
    <td>$kendo-table-font-size</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-padding-x</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-padding-y</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the cells in the table if no size is specified.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-sizes</td>
    <td></td>
    <td>(
    sm: (
        font-size: map-get( $spacing, sm) + 2,
        padding-y: map-get( $spacing, sm),
        padding-x: map-get( $spacing, md)
    ),
    md: (
        font-size: map-get( $spacing, md) + 2,
        padding-y: map-get( $spacing, md),
        padding-x: map-get( $spacing, lg)
    ),
    lg: (
        font-size: map-get( $spacing, lg),
        padding-y: map-get( $spacing, lg),
        padding-x: map-get( $spacing, lg) + 4
    )
)</td>
    <td>(
    sm: (
        font-size: map-get( $spacing, sm) + 2,
        padding-y: map-get( $spacing, sm),
        padding-x: map-get( $spacing, md)
    ),
    md: (
        font-size: map-get( $spacing, md) + 2,
        padding-y: map-get( $spacing, md),
        padding-x: map-get( $spacing, lg)
    ),
    lg: (
        font-size: map-get( $spacing, lg),
        padding-y: map-get( $spacing, lg),
        padding-x: map-get( $spacing, lg) + 4
    )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-border-color</td>
    <td></td>
    <td>$grid-header-border</td>
    <td>map-get($theme, component-border)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-vertical-border-width</td>
    <td></td>
    <td>$grid-cell-vertical-border-width</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-cell-horizontal-border-width</td>
    <td></td>
    <td>$grid-cell-horizontal-border-width</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal width of the table border.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-padding-inline-end</td>
    <td></td>
    <td>var(--kendo-scrollbar-width)</td>
    <td>var(--kendo-scrollbar-width)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The inline end padding of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-body-grouping-text-color</td>
    <td></td>
    <td>rgba(0, 0, 0, .54)</td>
    <td>rgba(0, 0, 0, .54)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the body grouping in the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-text-color</td>
    <td></td>
    <td>$grid-header-text</td>
    <td>if($theme-type == dark, $light-secondary-text, $dark-secondary-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-bg-color</td>
    <td></td>
    <td>$grid-header-bg</td>
    <td>map-get($theme, component-bg)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-alt-row-bg</td>
    <td></td>
    <td>$grid-alt-bg</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the even rows in the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-state-focus</td>
    <td></td>
    <td>$grid-focused-shadow</td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus state of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-state-hover</td>
    <td></td>
    <td>$grid-hovered-bg</td>
    <td>rgba( contrast-wcag( $grid-bg ), .07 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover state of the table.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-table-state-selected</td>
    <td></td>
    <td>$grid-selected-bg</td>
    <td>rgba( contrast-wcag( $grid-bg ), .04 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selected state of the table.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

