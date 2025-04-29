---
title: Customizing SplitButton
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_split-button
position: 9
---

# Customizing SplitButton

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
    <td>$kendo-split-button-sm-arrow-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-sm-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the small arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-md-arrow-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-md-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the medium arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-lg-arrow-padding-y</td>
    <td>String</td>
    <td><code>$kendo-button-lg-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the large arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-sm-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-split-button-sm-arrow-padding-y</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the small arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-md-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-split-button-md-arrow-padding-y</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the medium arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-lg-arrow-padding-x</td>
    <td>String</td>
    <td><code>$kendo-split-button-lg-arrow-padding-y</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the large arrow Button.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-delimiter-size</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-button-inner-calc-size} / 2 )</code></td>
    <td><code>calc(calc(var(--kendo-line-height, normal) * 1em + var(--kendo-spacing-1\.5, 0.375rem) * 2) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the SplitButton arrow delimiter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-delimiter-line-size</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the SplitButton arrow delimiter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-arrow-delimiter-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 28%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the SplitButton arrow delimiter.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-split-button-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: $kendo-split-button-sm-arrow-padding-y,
    md: $kendo-split-button-md-arrow-padding-y,
    lg: $kendo-split-button-lg-arrow-padding-y
)</code></td>
    <td><ul><li>sm: var(--kendo-spacing-1, 0.25rem)</li><li>md: var(--kendo-spacing-1\.5, 0.375rem)</li><li>lg: var(--kendo-spacing-2, 0.5rem)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes map for the SplitButton.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

