---
title: Customizing Border Radius
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_radii
position: 9
---

# Customizing Border Radius

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
    <td>$kendo-border-radius-base</td>
    <td>Number</td>
    <td><code>.25rem</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-none</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The none border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xs</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * .25)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 0.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-sm</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * .5)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 0.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-md</td>
    <td>String</td>
    <td><code>var(--kendo-border-radius-base)</code></td>
    <td><code>var(--kendo-border-radius-base)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-lg</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 1.5)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xl</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 2)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxl</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 3)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxxl</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 4)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-full</td>
    <td>Calculation</td>
    <td><code>calc(var(--kendo-border-radius-base) * 9999)</code></td>
    <td><code>calc(var(--kendo-border-radius-base) * 9999)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radii</td>
    <td>Map</td>
    <td><code>$_default-border-radii</code></td>
    <td><ul><li>none: 0px</li><li>xs: calc(var(--kendo-border-radius-base) * 0.25)</li><li>sm: calc(var(--kendo-border-radius-base) * 0.5)</li><li>md: var(--kendo-border-radius-base)</li><li>lg: calc(var(--kendo-border-radius-base) * 1.5)</li><li>xl: calc(var(--kendo-border-radius-base) * 2)</li><li>xxl: calc(var(--kendo-border-radius-base) * 3)</li><li>xxxl: calc(var(--kendo-border-radius-base) * 4)</li><li>full: calc(var(--kendo-border-radius-base) * 9999)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global radii Map.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

