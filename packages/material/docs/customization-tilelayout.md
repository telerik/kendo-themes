---
title: Customizing Tilelayout
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_tilelayout
position: 9
---

# Customizing Tilelayout

## Variables

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
    <td>$kendo-tile-layout-border-width</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( surface ), if( $kendo-is-dark-theme, $kendo-color-dark, $kendo-color-light))</code></td>
    <td><code>var(--kendo-color-surface, #f5f5f5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the TileLayout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-padding-y</td>
    <td>String</td>
    <td><code>$kendo-tile-layout-padding-x</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the TileLayout</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-card-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-card-focus-shadow</td>
    <td>String</td>
    <td><code>$kendo-card-focus-shadow</code></td>
    <td><code>var(--kendo-elevation-3, 0px 1px 8px 0px rgba(0, 0, 0, 0.2), 0px 3px 3px 0px rgba(0, 0, 0, 0.12), 0px 3px 4px 0px rgba(0, 0, 0, 0.14))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus box shadow of the TileLayout card.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The radius of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-border</td>
    <td>String</td>
    <td><code>$kendo-component-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the border around the TileLayout hint.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-tile-layout-hint-bg</td>
    <td>Color</td>
    <td><code>rgba( white, .2 )</code></td>
    <td><span class="color-preview" style="background-color: rgba(255, 255, 255, 0.2)"></span><code>rgba(255, 255, 255, 0.2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the TileLayout hint.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

