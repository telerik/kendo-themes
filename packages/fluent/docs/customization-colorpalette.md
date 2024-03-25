---
title: Customizing Colorpalette
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_colorpalette
position: 9
---

# Customizing Colorpalette

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
    <td>$kendo-color-palette-font-family</td>
    <td></td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-line-height</td>
    <td></td>
    <td><code>0</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the ColorPalette.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-outline-width</td>
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-outline-style</td>
    <td></td>
    <td><code>solid</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-outline</td>
    <td></td>
    <td><code>transparent</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-width</td>
    <td></td>
    <td><code>k-spacing(6)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-height</td>
    <td></td>
    <td><code>$kendo-color-palette-tile-width</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the ColorPalette tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-focus-outline</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( base-emphasis ), k-get-theme-color-var( neutral-130 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette focused tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-focus-shadow</td>
    <td></td>
    <td><code>inset 0 0 0 2px if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette focused tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-hover-outline</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 10%, transparent), k-get-theme-color-var( neutral-20 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette hovered tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-hover-shadow</td>
    <td></td>
    <td><code>inset 0 0 0 2px $kendo-color-palette-tile-hover-outline, inset 0 0 0 4px if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette hovered tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-outline</td>
    <td></td>
    <td><code>$kendo-color-palette-tile-hover-outline</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette selected tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-shadow</td>
    <td></td>
    <td><code>$kendo-color-palette-tile-hover-shadow</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the ColorPalette selected tile.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-palette-tile-selected-hover-outline</td>
    <td></td>
    <td><code>$kendo-color-palette-tile-focus-outline</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the ColorPalette selected hover tile.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

