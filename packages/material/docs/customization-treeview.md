---
title: Customizing Treeview
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_treeview
position: 9
---

# Customizing Treeview

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
    <td>$kendo-treeview-font-family</td>
    <td></td>
    <td>$font-family</td>
    <td>Roboto, "Helvetica Neue", sans-serif</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-font-size</td>
    <td></td>
    <td>$font-size</td>
    <td>14px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-line-height</td>
    <td></td>
    <td>(20 / 14)</td>
    <td>(20 / 14)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-indent</td>
    <td></td>
    <td>16px</td>
    <td>16px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The indent of the treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-x</td>
    <td></td>
    <td>8px</td>
    <td>8px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-padding-y</td>
    <td></td>
    <td>6px</td>
    <td>6px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-width</td>
    <td></td>
    <td>0px</td>
    <td>0px</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-border-radius</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-sizes</td>
    <td></td>
    <td>(
    sm: (
        font-size: map-get( $spacing, 3),
        line-height: $line-height,
        item-padding-x: map-get( $spacing, thin ),
        item-padding-y: map-get( $spacing, 1 )
    ),
    md: (
        font-size: $font-size,
        line-height: $line-height,
        item-padding-x: map-get( $spacing, 1 ),
        item-padding-y: map-get( $spacing, 2 )
    ),
    lg: (
        font-size: map-get( $spacing, 4),
        line-height: $line-height,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 3 )
    )
)</td>
    <td>(
    sm: (
        font-size: map-get( $spacing, 3),
        line-height: $line-height,
        item-padding-x: map-get( $spacing, thin ),
        item-padding-y: map-get( $spacing, 1 )
    ),
    md: (
        font-size: $font-size,
        line-height: $line-height,
        item-padding-x: map-get( $spacing, 1 ),
        item-padding-y: map-get( $spacing, 2 )
    ),
    lg: (
        font-size: map-get( $spacing, 4),
        line-height: $line-height,
        item-padding-x: map-get( $spacing, 2 ),
        item-padding-y: map-get( $spacing, 3 )
    )
)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-text</td>
    <td></td>
    <td>$component-text</td>
    <td>map-get($theme, component-text)</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the treeview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-bg</td>
    <td></td>
    <td>rgba( $kendo-treeview-text, .07 )</td>
    <td>rgba( $kendo-treeview-text, .07 )</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of a hovered treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-text</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a hovered treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of a hovered treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-hover-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of a hovered treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-bg</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of a selected treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-text</td>
    <td></td>
    <td>$selected-bg</td>
    <td>$secondary</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a selected treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of a selected treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-selected-gradient</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of a selected treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-item-focus-shadow</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of a focused treeview item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-text</td>
    <td></td>
    <td>inherit</td>
    <td>inherit</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-text</td>
    <td></td>
    <td>inherit</td>
    <td>inherit</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-hover-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of a hovered load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-bg</td>
    <td></td>
    <td>transparent</td>
    <td>transparent</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-text</td>
    <td></td>
    <td>inherit</td>
    <td>inherit</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-border</td>
    <td></td>
    <td>null</td>
    <td>null</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of a focused load more.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-treeview-loadmore-focus-shadow</td>
    <td></td>
    <td>none</td>
    <td>none</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of a focused load more.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

