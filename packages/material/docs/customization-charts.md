---
title: Customizing Charts
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_charts
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
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-a ), get-base-hue( purple, 500 ))</code></td>
    <td><span class="color-preview" style="background-color: #9c27b0"></span><code>#9c27b0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-b</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-b ), get-base-hue( blue, 500 ))</code></td>
    <td><span class="color-preview" style="background-color: #2196f3"></span><code>#2196f3</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-c</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-c ), get-base-hue( teal, 500 ))</code></td>
    <td><span class="color-preview" style="background-color: #009688"></span><code>#009688</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-d</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-d ), get-base-hue( yellow, 500 ))</code></td>
    <td><span class="color-preview" style="background-color: #ffeb3b"></span><code>#ffeb3b</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-e</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-e ), get-base-hue( red, 500 ))</code></td>
    <td><span class="color-preview" style="background-color: #f44336"></span><code>#f44336</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-f</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, k-color( series-f ), get-base-hue( green, 500 ))</code></td>
    <td><span class="color-preview" style="background-color: #4caf50"></span><code>#4caf50</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-1</td>
    <td>Color</td>
    <td><code>$kendo-series-a</code></td>
    <td><span class="color-preview" style="background-color: #9c27b0"></span><code>#9c27b0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-major-lines</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 8%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .08 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.08)"></span><code>rgba(0, 0, 0, 0.08)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-minor-lines</td>
    <td>Color</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 4%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .04 ))</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0.04)"></span><code>rgba(0, 0, 0, 0.04)</code></td>
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

