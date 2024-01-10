---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Theme Core theme variables available for customization."
slug: variables_kendothemecore_color-system
position: 9
---

# Customizing Color System

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
    <td>$kendo-color-white</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-black</td>
    <td>Color</td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-rgba-transparent</td>
    <td>Color</td>
    <td><code>rgba(0, 0, 0, 0)</code></td>
    <td><span class="color-preview" style="background-color: rgba(0, 0, 0, 0)"></span><code>rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-black</td>
    <td>Gradient</td>
    <td><code>rgba(black, 0), black</code></td>
    <td><code>rgba(0, 0, 0, 0), black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-white</td>
    <td>Gradient</td>
    <td><code>rgba(white, 0), white</code></td>
    <td><code>rgba(255, 255, 255, 0), white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-black-to-transparent</td>
    <td>Gradient</td>
    <td><code>black, rgba(black, 0)</code></td>
    <td><code>black, rgba(0, 0, 0, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from black to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-white-to-transparent</td>
    <td>Gradient</td>
    <td><code>white, rgba(white, 0)</code></td>
    <td><code>white, rgba(255, 255, 255, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from white to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-rainbow</td>
    <td>Gradient</td>
    <td><span class="color-preview" style="background-color: #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000"></span><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
    <td><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that cycles through the colors of the rainbow.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><code>(app-surface: null, on-app-surface: null, subtle: null, surface: null, surface-alt: null, border: null, border-alt: null, base-subtle: null, base-subtle-hover: null, base-subtle-active: null, base: null, base-hover: null, base-active: null, base-emphasis: null, base-on-subtle: null, on-base: null, base-on-surface: null, primary-subtle: null, primary-subtle-hover: null, primary-subtle-active: null, primary: null, primary-hover: null, primary-active: null, primary-emphasis: null, primary-on-subtle: null, on-primary: null, primary-on-surface: null, secondary-subtle: null, secondary-subtle-hover: null, secondary-subtle-active: null, secondary: null, secondary-hover: null, secondary-active: null, secondary-emphasis: null, secondary-on-subtle: null, on-secondary: null, secondary-on-surface: null, tertiary-subtle: null, tertiary-subtle-hover: null, tertiary-subtle-active: null, tertiary: null, tertiary-hover: null, tertiary-active: null, tertiary-emphasis: null, tertiary-on-subtle: null, on-tertiary: null, tertiary-on-surface: null, info-subtle: null, info-subtle-hover: null, info-subtle-active: null, info: null, info-hover: null, info-active: null, info-emphasis: null, info-on-subtle: null, on-info: null, info-on-surface: null, success-subtle: null, success-subtle-hover: null, success-subtle-active: null, success: null, success-hover: null, success-active: null, success-emphasis: null, success-on-subtle: null, on-success: null, success-on-surface: null, warning-subtle: null, warning-subtle-hover: null, warning-subtle-active: null, warning: null, warning-hover: null, warning-active: null, warning-emphasis: null, warning-on-subtle: null, on-warning: null, warning-on-surface: null, error-subtle: null, error-subtle-hover: null, error-subtle-active: null, error: null, error-hover: null, error-active: null, error-emphasis: null, error-on-subtle: null, on-error: null, error-on-surface: null, light-subtle: null, light-subtle-hover: null, light-subtle-active: null, light: null, light-hover: null, light-active: null, light-emphasis: null, light-on-subtle: null, on-light: null, light-on-surface: null, dark-subtle: null, dark-subtle-hover: null, dark-subtle-active: null, dark: null, dark-hover: null, dark-active: null, dark-emphasis: null, dark-on-subtle: null, on-dark: null, dark-on-surface: null, inverse-subtle: null, inverse-subtle-hover: null, inverse-subtle-active: null, inverse: null, inverse-hover: null, inverse-active: null, inverse-emphasis: null, inverse-on-subtle: null, on-inverse: null, inverse-on-surface: null, series-a: null, series-a-bold: null, series-a-bolder: null, series-a-subtle: null, series-a-subtler: null, series-b: null, series-b-bold: null, series-b-bolder: null, series-b-subtle: null, series-b-subtler: null, series-c: null, series-c-bold: null, series-c-bolder: null, series-c-subtle: null, series-c-subtler: null, series-d: null, series-d-bold: null, series-d-bolder: null, series-d-subtle: null, series-d-subtler: null, series-e: null, series-e-bold: null, series-e-bolder: null, series-e-subtle: null, series-e-subtler: null, series-f: null, series-f-bold: null, series-f-bolder: null, series-f-subtle: null, series-f-subtler: null)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

