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
    <td>String</td>
    <td><code>scale( 1, .6 )</code></td>
    <td><code>scale(1, 0.6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transform scale of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-text-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Skeleton text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-rect-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the rectangular Skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-circle-border-radius</td>
    <td>Number</td>
    <td><code>9999px</code></td>
    <td><code>9999px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the circular Skeleton.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-item-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 23%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 23%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Skeleton item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-skeleton-wave-bg</td>
    <td>String</td>
    <td><code>k-color(base)</code></td>
    <td><code>var(--kendo-color-base, #ffffff)</code></td>
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

