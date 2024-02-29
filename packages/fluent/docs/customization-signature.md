---
title: Customizing Signature
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_signature
position: 9
---

# Customizing Signature

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
    <td>$kendo-signature-width</td>
    <td></td>
    <td><code>250px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-height</td>
    <td></td>
    <td><code>84px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-width</td>
    <td></td>
    <td><code>750px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-height</td>
    <td></td>
    <td><code>252px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-padding-x</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal paddings of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-padding-y</td>
    <td></td>
    <td><code>$kendo-signature-padding-x</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical paddings of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-disabled-opacity</td>
    <td></td>
    <td><code>.3</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the disabled signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-width</td>
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom-border width of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-style</td>
    <td></td>
    <td><code>dashed</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-color</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( info ) 40%, transparent), rgba( k-get-theme-color( info, 100 ), .4 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-disabled-color</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 28%, transparent), k-get-theme-color-var( neutral-60 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the row line of the disabled signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-size</td>
    <td></td>
    <td><code>calc( 100% - 2 * #{$kendo-signature-padding-x} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-bottom-offset</td>
    <td></td>
    <td><code>33%</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-sizes</td>
    <td></td>
    <td><code>(
    sm: (
        padding-x: $kendo-signature-sm-padding-x,
        padding-y: $kendo-signature-sm-padding-y,
        line-size: $kendo-signature-sm-line-size
    ),
    md: (
        padding-x: $kendo-signature-md-padding-x,
        padding-y: $kendo-signature-md-padding-y,
        line-size: $kendo-signature-md-line-size
    ),
    lg: (
        padding-x: $kendo-signature-lg-padding-x,
        padding-y: $kendo-signature-lg-padding-y,
        line-size: $kendo-signature-lg-line-size
    )
)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-actions-gap</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between individual action items of the signature component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-line-width</td>
    <td></td>
    <td><code>3px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom-border width of the row line of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-lg-min-height</td>
    <td></td>
    <td><code>110px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The min-height of the large size signature component.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

