---
title: Customizing Charts
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_charts
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
    <td><code>k-color(series-a)!default</code></td>
    <td><code>var(--kendo-color-series-a, #0b5ed7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The first base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-b</td>
    <td>String</td>
    <td><code>k-color(series-b)</code></td>
    <td><code>var(--kendo-color-series-b, #7e58c6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-c</td>
    <td>String</td>
    <td><code>k-color(series-c)</code></td>
    <td><code>var(--kendo-color-series-c, #20c997)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-d</td>
    <td>String</td>
    <td><code>k-color(series-d)</code></td>
    <td><code>var(--kendo-color-series-d, #198754)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fourth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-e</td>
    <td>String</td>
    <td><code>k-color(series-e)</code></td>
    <td><code>var(--kendo-color-series-e, #dc3545)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The fifth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-f</td>
    <td>String</td>
    <td><code>k-color(series-f)</code></td>
    <td><code>var(--kendo-color-series-f, #ffc107)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sixth base series color and its light and dark shades.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-series-1</td>
    <td>String</td>
    <td><code>$kendo-series-a</code></td>
    <td><code>var(--kendo-color-series-a, #0b5ed7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The series colors in order:<br />base, light, dark, lighter, darker</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-major-lines</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 8%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 8%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Chart grid lines (major).</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-minor-lines</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-app-surface) 4%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 4%, transparent)</code></td>
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

