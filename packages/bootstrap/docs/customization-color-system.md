---
title: Customizing Color System
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_color-system
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
    <td>$kendo-colors</td>
    <td>Map</td>
    <td><code>$_default-colors</code></td>
    <td><code>(app-surface: #ffffff, on-app-surface: #212529, subtle: #596169, surface: #f8f9fa, surface-alt: #ffffff, border: rgba(33, 37, 41, 0.13), border-alt: rgba(33, 37, 41, 0.2), base-subtle: #e9ecef, base-subtle-hover: #dee2e6, base-subtle-active: #ced4da, base: #dee2e6, base-hover: #ced4da, base-active: #bdc4cb, base-emphasis: rgba(33, 37, 41, 0.34), base-on-subtle: #212529, on-base: #212529, base-on-surface: #212529, primary-subtle: #cfe2ff, primary-subtle-hover: #b6d4fe, primary-subtle-active: #9ec5fe, primary: #0d6efd, primary-hover: #0c64e4, primary-active: #0a58ca, primary-emphasis: rgba(13, 110, 253, 0.4), primary-on-subtle: #052c65, on-primary: #ffffff, primary-on-surface: #0d6efd, secondary-subtle: #dee2e6, secondary-subtle-hover: #ced4da, secondary-subtle-active: #bdc4cb, secondary: #6c757d, secondary-hover: #596169, secondary-active: #495057, secondary-emphasis: rgba(108, 117, 125, 0.4), secondary-on-subtle: #2B2F32, on-secondary: #ffffff, secondary-on-surface: #6c757d, tertiary-subtle: #e2d9f3, tertiary-subtle-hover: #d3c5ec, tertiary-subtle-active: #c5b3e6, tertiary: #6f42c1, tertiary-hover: #59359a, tertiary-active: #4e2f89, tertiary-emphasis: rgba(111, 66, 193, 0.4), tertiary-on-subtle: #432874, on-tertiary: #ffffff, tertiary-on-surface: #6f42c1, info-subtle: #cff4fc, info-subtle-hover: #b7eefa, info-subtle-active: #9eeaf9, info: #0dcaf0, info-hover: #3dd5f3, info-active: #6edff6, info-emphasis: rgba(13, 202, 240, 0.4), info-on-subtle: #055160, on-info: #000000, info-on-surface: #0dcaf0, success-subtle: #d1e7dd, success-subtle-hover: #badbcc, success-subtle-active: #a3cfbb, success: #198754, success-hover: #146C43, success-active: #0F5132, success-emphasis: rgba(25, 135, 84, 0.4), success-on-subtle: #0A3622, on-success: #ffffff, success-on-surface: #198754, warning-subtle: #fff3cd, warning-subtle-hover: #ffecb5, warning-subtle-active: #ffe69c, warning: #ffc107, warning-hover: #ffcd39, warning-active: #ffda6a, warning-emphasis: rgba(255, 193, 7, 0.4), warning-on-subtle: #664d03, on-warning: #000000, warning-on-surface: #ffc107, error-subtle: #f8d7da, error-subtle-hover: #f5c2c7, error-subtle-active: #f1aeb5, error: #dc3545, error-hover: #b02a37, error-active: #9a2530, error-emphasis: rgba(220, 53, 69, 0.4), error-on-subtle: #58151c, on-error: #ffffff, error-on-surface: #dc3545, light-subtle: #ffffff, light-subtle-hover: #f8f9fa, light-subtle-active: #e9ecef, light: #f8f9fa, light-hover: #e9ecef, light-active: #dee2e6, light-emphasis: rgba(33, 37, 41, 0.1), light-on-subtle: #495057, on-light: #000000, light-on-surface: #f8f9fa, dark-subtle: #495057, dark-subtle-hover: #596169, dark-subtle-active: #6c757d, dark: #212529, dark-hover: #343a40, dark-active: #495057, dark-emphasis: rgba(33, 37, 41, 0.4), dark-on-subtle: #ffffff, on-dark: #ffffff, dark-on-surface: #212529, inverse-subtle: #495057, inverse-subtle-hover: #596169, inverse-subtle-active: #6c757d, inverse: #212529, inverse-hover: #343a40, inverse-active: #495057, inverse-emphasis: rgba(33, 37, 41, 0.4), inverse-on-subtle: #ffffff, on-inverse: #ffffff, inverse-on-surface: #212529, series-a: #0c64e4, series-a-bold: #084298, series-a-bolder: #052c65, series-a-subtle: #3d8bfd, series-a-subtler: #86b6fe, series-b: #6f42c1, series-b-bold: #4e2f89, series-b-bolder: #36215f, series-b-subtle: #8c68cd, series-b-subtler: #b9a3e1, series-c: #20c997, series-c-bold: #13795b, series-c-bolder: #0d503c, series-c-subtle: #79dfc1, series-c-subtler: #c1f0e2, series-d: #198754, series-d-bold: #0F5132, series-d-bolder: #0A3622, series-d-subtle: #479F76, series-d-subtler: #8cc3aa, series-e: #dc3545, series-e-bold: #9a2530, series-e-bolder: #6e1b23, series-e-subtle: #e35d6a, series-e-subtler: #f1aeb5, series-f: #ffc107, series-f-bold: #b38705, series-f-bolder: #806104, series-f-subtle: #ffcd39, series-f-subtler: #ffe083)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary</td>
    <td>Color</td>
    <td><code>$primary</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-primary, #0d6efd)"></span><code>var(--kendo-color-primary, #0d6efd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color that focuses the user attention.<br />Used for primary buttons and for elements of primary importance across the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-primary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-primary )</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-on-primary, #ffffff)"></span><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the primary color denoted by $kendo-color-primary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary</td>
    <td>Color</td>
    <td><code>$secondary</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-secondary, #6c757d)"></span><code>var(--kendo-color-secondary, #6c757d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The secondary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-secondary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-secondary )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the secondary color denoted by $kendo-color-secondary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary</td>
    <td>Color</td>
    <td><code>$purple</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-tertiary, #6f42c1)"></span><code>var(--kendo-color-tertiary, #6f42c1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tertiary color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-tertiary-contrast</td>
    <td>Color</td>
    <td><code>k-contrast-color( $kendo-color-tertiary )</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color used along with the tertiary color denoted by $kendo-color-tertiary.<br />Used to provide contrast between the background and foreground colors.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-info</td>
    <td>Color</td>
    <td><code>$info</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-info, #0dcaf0)"></span><code>var(--kendo-color-info, #0dcaf0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for informational messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-success</td>
    <td>Color</td>
    <td><code>$success</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-success, #198754)"></span><code>var(--kendo-color-success, #198754)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for success messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-warning</td>
    <td>Color</td>
    <td><code>$warning</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-warning, #ffc107)"></span><code>var(--kendo-color-warning, #ffc107)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for warning messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-error</td>
    <td>Color</td>
    <td><code>$danger</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-error, #dc3545)"></span><code>var(--kendo-color-error, #dc3545)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color for error messages and states.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-dark</td>
    <td>Color</td>
    <td><code>$dark</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-dark, #212529)"></span><code>var(--kendo-color-dark, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The dark color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-light</td>
    <td>Color</td>
    <td><code>$light</code></td>
    <td><span class="color-preview" style="background-color: var(--kendo-color-light, #f8f9fa)"></span><code>var(--kendo-color-light, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light color of the theme.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-inverse</td>
    <td>String</td>
    <td><code>if( $kendo-is-dark-theme, $kendo-color-light, $kendo-color-dark )</code></td>
    <td><code>var(--kendo-color-dark, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Inverse color of the theme. Depending on the theme luminance dark or light, it will be light or dark</div></div>
    </td>
</tr>
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
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

