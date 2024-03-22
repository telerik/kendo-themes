---
title: Customizing Charts
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_charts
position: 9
---

# Customizing Charts

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
    <td>$kendo-series-a</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-a ), #ff6358)</code></td>
    <td><code>var(--kendo-color-series-a, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-b</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-b ), #ffe162)</code></td>
    <td><code>var(--kendo-color-series-b, #ffe162)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-c</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-c ), #4cd180)</code></td>
    <td><code>var(--kendo-color-series-c, #4cd180)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-d</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-d ), #4b5ffa)</code></td>
    <td><code>var(--kendo-color-series-d, #4b5ffa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-e</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-e ), #ac58ff)</code></td>
    <td><code>var(--kendo-color-series-e, #ac58ff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-f</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( series-f ), #ff5892)</code></td>
    <td><code>var(--kendo-color-series-f, #ff5892)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-1</td>
    <td>String</td>
    <td><code>$kendo-series-a</code></td>
    <td><code>var(--kendo-color-series-a, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-major-lines</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .08 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #3d3d3d) 8%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-minor-lines</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 4%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .04 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #3d3d3d) 4%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (minor).</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

