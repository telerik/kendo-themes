---
title: Customizing ChartWizard
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_chart-wizard
position: 9
---

# Customizing ChartWizard

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
    <td>$kendo-chart-wizard-icon-area-color</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color(primary), $kendo-color-primary)</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the area around the chart type icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-icon-area-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color(primary-subtle), $kendo-color-primary-subtle)</code></td>
    <td><code>var(--kendo-color-primary-subtle, #d1d5ee)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the area around the chart type icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-icon-area-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(none)</code></td>
    <td><code>var(--kendo-border-radius-none, 0px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the area around the chart type icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-icon-area-padding</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the area around the chart type icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-icon-area-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px if($kendo-enable-color-system, k-color(primary-emphasis), $kendo-color-primary-emphasis)</code></td>
    <td><code>inset 0 0 0 1px var(--kendo-color-primary-emphasis, #97a0d7)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused area around the chart type icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-icon-area-selected-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 1px $kendo-chart-wizard-icon-area-color</code></td>
    <td><code>inset 0 0 0 1px var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the selected area around the chart type icon.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-chart-type-selected-color</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color(primary), $kendo-color-primary)</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the selected chart type items in the Property panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-preview-pane-padding</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the preview pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-property-pane-padding</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the property pane.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-chart-type-spacing</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the chart type items in the Property panel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chart-wizard-icon-text-gap</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gap between the icon area and its text.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

