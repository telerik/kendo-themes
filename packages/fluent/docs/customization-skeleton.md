---
title: Customizing Skeleton
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_skeleton
position: 9
---

# Customizing Skeleton

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
    <td>$kendo-skeleton-text-transform</td>
    <td></td>
    <td><code>scale( 1, .6 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transform scale of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-text-border-radius</td>
    <td></td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-rect-border-radius</td>
    <td></td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the rectangular Skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-circle-border-radius</td>
    <td></td>
    <td><code>9999px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the circular Skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-item-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 23%, transparent), k-get-theme-color-var( neutral-50 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Skeleton item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-wave-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( base ), k-get-theme-color-var( neutral-20 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Skeleton wave animation.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

