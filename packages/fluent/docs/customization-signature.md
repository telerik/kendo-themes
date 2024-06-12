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
    <td>Number</td>
    <td><code>250px</code></td>
    <td><code>250px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-height</td>
    <td>Number</td>
    <td><code>84px</code></td>
    <td><code>84px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-width</td>
    <td>Number</td>
    <td><code>750px</code></td>
    <td><code>750px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default width of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-height</td>
    <td>Number</td>
    <td><code>252px</code></td>
    <td><code>252px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default height of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal paddings of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-padding-y</td>
    <td>String</td>
    <td><code>$kendo-signature-padding-x</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical paddings of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-disabled-opacity</td>
    <td>Number</td>
    <td><code>.3</code></td>
    <td><code>0.3</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of the disabled signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom-border width of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-style</td>
    <td>String</td>
    <td><code>dashed</code></td>
    <td><code>dashed</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-color</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( info ) 40%, transparent), rgba( k-get-theme-color( info, 100 ), .4 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-info, #0a7eff) 40%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-disabled-color</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 28%, transparent), k-get-theme-color-var( neutral-60 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the row line of the disabled signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-size</td>
    <td>Calculation</td>
    <td><code>calc( 100% - 2 * #{$kendo-signature-padding-x} )</code></td>
    <td><code>calc(100% - 2 * var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-line-bottom-offset</td>
    <td>Number</td>
    <td><code>33%</code></td>
    <td><code>33%</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the row line of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-sizes</td>
    <td>Map</td>
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
    <td><ul><li>sm: "padding-x":"var(--kendo-spacing-1, 0.25rem)","padding-y":"var(--kendo-spacing-0\\.5, 0.125rem)","line-size":"calc(100% - 2 * var(--kendo-spacing-1, 0.25rem))"</li><li>md: "padding-x":"var(--kendo-spacing-1, 0.25rem)","padding-y":"var(--kendo-spacing-1, 0.25rem)","line-size":"calc(100% - 2 * var(--kendo-spacing-1, 0.25rem))"</li><li>lg: "padding-x":"var(--kendo-spacing-1, 0.25rem)","padding-y":"var(--kendo-spacing-1\\.5, 0.375rem)","line-size":"calc(100% - 2 * var(--kendo-spacing-1, 0.25rem))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map of the signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-actions-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between individual action items of the signature component</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-maximized-line-width</td>
    <td>Number</td>
    <td><code>3px</code></td>
    <td><code>3px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom-border width of the row line of the maximized signature component.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-signature-lg-min-height</td>
    <td>Number</td>
    <td><code>110px</code></td>
    <td><code>110px</code></td>
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

