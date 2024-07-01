---
title: Customization
description: "Refer to the list of the Kendo UI Theme Utils theme variables available for customization."
slug: variables_kendothemeutils
position: 9
---

# Customization




## Variables

The following table lists the available variables for customizing the Theme Utils theme.

### Common

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
<tbody><tr>
    <td>$kendo-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-opacity</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-filter</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The filter of disabled items.</div></div>
    </td>
</tr>
</tbody>
</table>

### Accessibility

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
<tbody><tr>
    <td>$wcag-min-contrast-ratio</td>
    <td>Number</td>
    <td><code>7</code></td>
    <td><code>7</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The contrast ratio to reach against white, to determine if color changes from "light" to "dark".<br />Acceptable values for WCAG 2.0 are 3, 4.5 and 7.</div></div>
    </td>
</tr>
<tr>
    <td>$wcag-dark</td>
    <td>Color</td>
    <td><code>black</code></td>
    <td><span class="color-preview" style="background-color: black"></span><code>black</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default dark color for WCAG 2.0.</div></div>
    </td>
</tr>
<tr>
    <td>$wcag-light</td>
    <td>Color</td>
    <td><code>white</code></td>
    <td><span class="color-preview" style="background-color: white"></span><code>white</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default light color for WCAG 2.0.</div></div>
    </td>
</tr>
</tbody>
</table>

### Border Radius

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
<tbody><tr>
    <td>$kendo-border-radius-none</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 0)</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The none border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xs</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 1px)</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-sm</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 0.5)</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-md</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 1)</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-lg</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 1.5)</code></td>
    <td><code>0.375rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xl</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 2)</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxl</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 3)</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxxl</td>
    <td>Number</td>
    <td><code>k-map-get($kendo-spacing, 4)</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-full</td>
    <td>Number</td>
    <td><code>9999px</code></td>
    <td><code>9999px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radii</td>
    <td>Map</td>
    <td><code>k-map-merge($_default-border-radii, $kendo-border-radii)</code></td>
    <td><ul><li>none: 0px</li><li>xs: 1px</li><li>sm: 0.125rem</li><li>md: 0.25rem</li><li>lg: 0.375rem</li><li>xl: 0.5rem</li><li>xxl: 0.75rem</li><li>xxxl: 1rem</li><li>full: 9999px</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global radii Map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Color System

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
<tbody><tr>
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
    <td><ul><li>app-surface: null</li><li>on-app-surface: null</li><li>subtle: null</li><li>surface: null</li><li>surface-alt: null</li><li>border: null</li><li>border-alt: null</li><li>base-subtle: null</li><li>base-subtle-hover: null</li><li>base-subtle-active: null</li><li>base: null</li><li>base-hover: null</li><li>base-active: null</li><li>base-emphasis: null</li><li>base-on-subtle: null</li><li>on-base: null</li><li>base-on-surface: null</li><li>primary-subtle: null</li><li>primary-subtle-hover: null</li><li>primary-subtle-active: null</li><li>primary: null</li><li>primary-hover: null</li><li>primary-active: null</li><li>primary-emphasis: null</li><li>primary-on-subtle: null</li><li>on-primary: null</li><li>primary-on-surface: null</li><li>secondary-subtle: null</li><li>secondary-subtle-hover: null</li><li>secondary-subtle-active: null</li><li>secondary: null</li><li>secondary-hover: null</li><li>secondary-active: null</li><li>secondary-emphasis: null</li><li>secondary-on-subtle: null</li><li>on-secondary: null</li><li>secondary-on-surface: null</li><li>tertiary-subtle: null</li><li>tertiary-subtle-hover: null</li><li>tertiary-subtle-active: null</li><li>tertiary: null</li><li>tertiary-hover: null</li><li>tertiary-active: null</li><li>tertiary-emphasis: null</li><li>tertiary-on-subtle: null</li><li>on-tertiary: null</li><li>tertiary-on-surface: null</li><li>info-subtle: null</li><li>info-subtle-hover: null</li><li>info-subtle-active: null</li><li>info: null</li><li>info-hover: null</li><li>info-active: null</li><li>info-emphasis: null</li><li>info-on-subtle: null</li><li>on-info: null</li><li>info-on-surface: null</li><li>success-subtle: null</li><li>success-subtle-hover: null</li><li>success-subtle-active: null</li><li>success: null</li><li>success-hover: null</li><li>success-active: null</li><li>success-emphasis: null</li><li>success-on-subtle: null</li><li>on-success: null</li><li>success-on-surface: null</li><li>warning-subtle: null</li><li>warning-subtle-hover: null</li><li>warning-subtle-active: null</li><li>warning: null</li><li>warning-hover: null</li><li>warning-active: null</li><li>warning-emphasis: null</li><li>warning-on-subtle: null</li><li>on-warning: null</li><li>warning-on-surface: null</li><li>error-subtle: null</li><li>error-subtle-hover: null</li><li>error-subtle-active: null</li><li>error: null</li><li>error-hover: null</li><li>error-active: null</li><li>error-emphasis: null</li><li>error-on-subtle: null</li><li>on-error: null</li><li>error-on-surface: null</li><li>light-subtle: null</li><li>light-subtle-hover: null</li><li>light-subtle-active: null</li><li>light: null</li><li>light-hover: null</li><li>light-active: null</li><li>light-emphasis: null</li><li>light-on-subtle: null</li><li>on-light: null</li><li>light-on-surface: null</li><li>dark-subtle: null</li><li>dark-subtle-hover: null</li><li>dark-subtle-active: null</li><li>dark: null</li><li>dark-hover: null</li><li>dark-active: null</li><li>dark-emphasis: null</li><li>dark-on-subtle: null</li><li>on-dark: null</li><li>dark-on-surface: null</li><li>inverse-subtle: null</li><li>inverse-subtle-hover: null</li><li>inverse-subtle-active: null</li><li>inverse: null</li><li>inverse-hover: null</li><li>inverse-active: null</li><li>inverse-emphasis: null</li><li>inverse-on-subtle: null</li><li>on-inverse: null</li><li>inverse-on-surface: null</li><li>series-a: null</li><li>series-a-bold: null</li><li>series-a-bolder: null</li><li>series-a-subtle: null</li><li>series-a-subtler: null</li><li>series-b: null</li><li>series-b-bold: null</li><li>series-b-bolder: null</li><li>series-b-subtle: null</li><li>series-b-subtler: null</li><li>series-c: null</li><li>series-c-bold: null</li><li>series-c-bolder: null</li><li>series-c-subtle: null</li><li>series-c-subtler: null</li><li>series-d: null</li><li>series-d-bold: null</li><li>series-d-bolder: null</li><li>series-d-subtle: null</li><li>series-d-subtler: null</li><li>series-e: null</li><li>series-e-bold: null</li><li>series-e-bolder: null</li><li>series-e-subtle: null</li><li>series-e-subtler: null</li><li>series-f: null</li><li>series-f-bold: null</li><li>series-f-bolder: null</li><li>series-f-subtle: null</li><li>series-f-subtler: null</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Elevation

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
<tbody><tr>
    <td>$kendo-elevation</td>
    <td>Map</td>
    <td><code>$_default-elevation</code></td>
    <td><ul><li>1: 0 2px 3px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>2: 0 4px 6px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>3: 0 6px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>4: 0 8px 10px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>5: 0 10px 12px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>6: 0 12px 14px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>7: 0 14px 16px rgba(0, 0, 0, 0.24), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>8: 0 16px 18px rgba(0, 0, 0, 0.28), 0 4px 16px rgba(0, 0, 0, 0.12)</li><li>9: 0 32px 34px rgba(0, 0, 0, 0.32), 0 4px 16px rgba(0, 0, 0, 0.12)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Elevation map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Spacing

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
<tbody><tr>
    <td>$kendo-spacing</td>
    <td>Map</td>
    <td><code>$_default-spacing</code></td>
    <td><ul><li>0: 0px</li><li>1: 0.25rem</li><li>2: 0.5rem</li><li>3: 0.75rem</li><li>4: 1rem</li><li>5: 1.25rem</li><li>6: 1.5rem</li><li>7: 1.75rem</li><li>8: 2rem</li><li>9: 2.25rem</li><li>10: 2.5rem</li><li>11: 2.75rem</li><li>12: 3rem</li><li>13: 3.25rem</li><li>14: 3.5rem</li><li>15: 3.75rem</li><li>16: 4rem</li><li>17: 4.25rem</li><li>18: 4.5rem</li><li>19: 4.75rem</li><li>20: 5rem</li><li>21: 5.25rem</li><li>22: 5.5rem</li><li>23: 5.75rem</li><li>24: 6rem</li><li>25: 7rem</li><li>26: 8rem</li><li>27: 9rem</li><li>28: 10rem</li><li>29: 11rem</li><li>30: 12rem</li><li>1px: 1px</li><li>0.5: 0.125rem</li><li>1.5: 0.375rem</li><li>2.5: 0.625rem</li><li>3.5: 0.875rem</li><li>4.5: 1.125rem</li><li>5.5: 1.375rem</li><li>6.5: 1.625rem</li><li>7.5: 1.875rem</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Spacing map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Typography

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
<tbody><tr>
    <td>$kendo-font-size</td>
    <td>Number</td>
    <td><code>0.875rem</code></td>
    <td><code>0.875rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xxs</td>
    <td>Number</td>
    <td><code>0.5rem</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra extra small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xs</td>
    <td>Number</td>
    <td><code>0.625rem</code></td>
    <td><code>0.625rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-sm</td>
    <td>Number</td>
    <td><code>0.75rem</code></td>
    <td><code>0.75rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-md</td>
    <td>Number</td>
    <td><code>$kendo-font-size</code></td>
    <td><code>0.875rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-lg</td>
    <td>Number</td>
    <td><code>1rem</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xl</td>
    <td>Number</td>
    <td><code>1.25rem</code></td>
    <td><code>1.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height</td>
    <td>Number</td>
    <td><code>k-math-div( 20, 14 )</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-xs</td>
    <td>Number</td>
    <td><code>1</code></td>
    <td><code>1</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-sm</td>
    <td>Number</td>
    <td><code>1.25</code></td>
    <td><code>1.25</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-md</td>
    <td>Number</td>
    <td><code>$kendo-line-height</code></td>
    <td><code>1.4285714286</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-lg</td>
    <td>Number</td>
    <td><code>1.5</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-em</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-line-height-md} * 1em )</code></td>
    <td><code>calc(1.4285714286 * 1em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base line height in ems across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight</td>
    <td>Number</td>
    <td><code>400</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-thin</td>
    <td>Number</td>
    <td><code>100</code></td>
    <td><code>100</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thin font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-extra-light</td>
    <td>Number</td>
    <td><code>200</code></td>
    <td><code>200</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra light font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-light</td>
    <td>Number</td>
    <td><code>300</code></td>
    <td><code>300</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-normal</td>
    <td>Number</td>
    <td><code>$kendo-font-weight</code></td>
    <td><code>400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The normal font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-medium</td>
    <td>Number</td>
    <td><code>500</code></td>
    <td><code>500</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-semibold</td>
    <td>Number</td>
    <td><code>600</code></td>
    <td><code>600</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The semibold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-bold</td>
    <td>Number</td>
    <td><code>700</code></td>
    <td><code>700</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-extra-bold</td>
    <td>Number</td>
    <td><code>800</code></td>
    <td><code>800</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra bold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-black</td>
    <td>Number</td>
    <td><code>900</code></td>
    <td><code>900</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The most pronounced font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tightest</td>
    <td>Number</td>
    <td><code>-.15px</code></td>
    <td><code>-0.15px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tightest letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tighter</td>
    <td>Number</td>
    <td><code>-.10px</code></td>
    <td><code>-0.1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Slightly looser than the tighter letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tight</td>
    <td>Number</td>
    <td><code>-.5px</code></td>
    <td><code>-0.5px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Moderately tight letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-normal</td>
    <td>Number</td>
    <td><code>0px</code></td>
    <td><code>0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The normal letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-wide</td>
    <td>Number</td>
    <td><code>.5px</code></td>
    <td><code>0.5px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Wide letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-wider</td>
    <td>Number</td>
    <td><code>.10px</code></td>
    <td><code>0.1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Slightly wider than the wide letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-widest</td>
    <td>Number</td>
    <td><code>.15px</code></td>
    <td><code>0.15px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The widest letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans</td>
    <td>List</td>
    <td><code>Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans</code></td>
    <td><code>Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-serif</td>
    <td>List</td>
    <td><code>"Times New Roman", Georgia, Garamond, Palatino, Baskerville</code></td>
    <td><code>"Times New Roman", Georgia, Garamond, Palatino, Baskerville</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans-serif</td>
    <td>List</td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans-serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-monospace</td>
    <td>List</td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The monospace font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-sizes</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-font-sizes, $kendo-font-sizes )</code></td>
    <td><ul><li>xxs: 0.5rem</li><li>xs: 0.625rem</li><li>sm: 0.75rem</li><li>md: 0.875rem</li><li>lg: 1rem</li><li>xl: 1.25rem</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font sizes map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-heights</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-line-heights, $kendo-line-heights )</code></td>
    <td><ul><li>xs: 1</li><li>sm: 1.25</li><li>md: 1.4285714285714286</li><li>lg: 1.5</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weights</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-font-weights, $kendo-font-weights )</code></td>
    <td><ul><li>thin: 100</li><li>extra-light: 200</li><li>light: 300</li><li>normal: 400</li><li>medium: 500</li><li>semibold: 600</li><li>bold: 700</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacings</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-letter-spacings, $kendo-letter-spacings )</code></td>
    <td><ul><li>tightest: -0.15px</li><li>tighter: -0.1px</li><li>tight: -0.5px</li><li>normal: 0px</li><li>wide: 0.5px</li><li>wider: 0.1px</li><li>widest: 0.15px</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacings map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-families</td>
    <td>Map</td>
    <td><code>k-map-merge( $_default-font-families, $kendo-font-families )</code></td>
    <td><ul><li>sans: Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans</li><li>serif: "Times New Roman", Georgia, Garamond, Palatino, Baskerville</li><li>sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</li><li>monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font families map</div></div>
    </td>
</tr>
</tbody>
</table>








## Classnames



### `.k-align-content-normal`

This is equivalent to `align-content: normal;`.




### `.k-align-content-stretch`

This is equivalent to `align-content: stretch;`.




### `.k-align-content-center`

This is equivalent to `align-content: center;`.




### `.k-align-content-start`

This is equivalent to `align-content: start;`.




### `.k-align-content-end`

This is equivalent to `align-content: end;`.




### `.k-align-content-flex-start`

This is equivalent to `align-content: flex-start;`.




### `.k-align-content-flex-end`

This is equivalent to `align-content: flex-end;`.




### `.k-align-content-baseline`

This is equivalent to `align-content: baseline;`.




### `.k-align-content-first-baseline`

This is equivalent to `align-content: first baseline;`.




### `.k-align-content-last-baseline`

This is equivalent to `align-content: last baseline;`.




### `.k-align-content-between`

This is equivalent to `align-content: space-between;`.




### `.k-align-content-around`

This is equivalent to `align-content: space-around;`.




### `.k-align-content-evenly`

This is equivalent to `align-content: space-evenly;`.




### `.k-align-items-normal`

This is equivalent to `align-items: normal;`.




### `.k-align-items-stretch`

This is equivalent to `align-items: stretch;`.




### `.k-align-items-stretch`

This is equivalent to `align-items: center;`.




### `.k-align-items-start`

This is equivalent to `align-items: start;`.




### `.k-align-items-end`

This is equivalent to `align-items: end;`.




### `.k-align-items-flex-start`

This is equivalent to `align-items: flex-start;`.




### `.k-align-items-flex-end`

This is equivalent to `align-items: flex-end;`.




### `.k-align-items-baseline`

This is equivalent to `align-items: baseline;`.




### `.k-align-items-first-baseline`

This is equivalent to `align-items: first baseline;`.




### `.k-align-items-last-baseline`

This is equivalent to `align-items: last baseline;`.




### `.k-align-items-self-start`

This is equivalent to `align-items: self-start;`.




### `.k-align-items-self-end`

This is equivalent to `align-items: self-end;`.




### `.k-align-self-auto`

This is equivalent to `align-self: auto;`.




### `.k-align-self-normal`

This is equivalent to `align-self: normal;`.




### `.k-align-self-stretch`

This is equivalent to `align-self: stretch;`.




### `.k-align-self-center`

This is equivalent to `align-self: center;`.




### `.k-align-self-start`

This is equivalent to `align-self: start;`.




### `.k-align-self-end`

This is equivalent to `align-self: end;`.




### `.k-align-self-flex-start`

This is equivalent to `align-self: flex-start;`.




### `.k-align-self-flex-end`

This is equivalent to `align-self: flex-end;`.




### `.k-align-self-baseline`

This is equivalent to `align-self: baseline;`.




### `.k-align-self-first-baseline`

This is equivalent to `align-self: first baseline;`.




### `.k-align-self-last-baseline`

This is equivalent to `align-self: last baseline;`.




### `.k-align-self-self-start`

This is equivalent to `align-self: self-start;`.




### `.k-align-self-self-end`

This is equivalent to `align-self: self-end;`.




### `.k-appearance-none`

This is equivalent to `appearance: none;`.




### `.k-appearance-auto`

This is equivalent to `appearance: auto;`.




### `.k-aspect-ratio-auto`

This is equivalent to `aspect-ratio: auto;`.




### `.k-aspect-ratio-1`

This is equivalent to `aspect-ratio: 1;`.




### `.k-aspect-ratio-square`

This is equivalent to `aspect-ratio: 1 / 1;`.




### `.k-aspect-ratio-video`

This is equivalent to `aspect-ratio: 16 / 9;`.




### `.k-backdrop-blur`

This is equivalent to `backdrop-filter: blur(8px);`.




### `.k-backdrop-blur-none`

This is equivalent to `backdrop-filter: blur(0);`.




### `.k-backdrop-blur-sm`

This is equivalent to `backdrop-filter: blur(4px);`.




### `.k-backdrop-blur-md`

This is equivalent to `backdrop-filter: blur(6px);`.




### `.k-backdrop-blur-lg`

This is equivalent to `backdrop-filter: blur(12px);`.




### `.k-bg-clip-border`

This is equivalent to `background-clip: border-box;`.




### `.k-bg-clip-padding`

This is equivalent to `background-clip: padding-box;`.




### `.k-bg-clip-content`

This is equivalent to `background-clip: content-box;`.




### `.k-bg-clip-text`

This is equivalent to `background-clip: text;`.




### `.k-bg-inherit`

This is equivalent to `background-color: inherit;`.




### `.k-bg-transparent`

This is equivalent to `background-color: transparent;`.




### `.k-bg-black`

This is equivalent to `background-color: black;`.




### `.k-bg-white`

This is equivalent to `background-color: white;`.




### `.k-bg-center`

This is equivalent to `background-position: center;`.




### `.k-bg-top`

This is equivalent to `background-position: top;`.




### `.k-bg-right`

This is equivalent to `background-position: right;`.




### `.k-bg-bottom`

This is equivalent to `background-position: bottom;`.




### `.k-bg-left`

This is equivalent to `background-position: left;`.




### `.k-bg-top-left`

This is equivalent to `background-position: top left;`.




### `.k-bg-top-right`

This is equivalent to `background-position: top right;`.




### `.k-bg-bottom-left`

This is equivalent to `background-position: bottom left;`.




### `.k-bg-bottom-right`

This is equivalent to `background-position: bottom right;`.




### `.k-bg-auto`

This is equivalent to `background-size: auto;`.




### `.k-bg-cover`

This is equivalent to `background-size: cover;`.




### `.k-bg-contain`

This is equivalent to `background-size: contain;`.




### `.k-border-collapse`

This is equivalent to `border-collapse: collapse;`.




### `.k-border-separate`

This is equivalent to `border-collapse: separate;`.




### `.k-border-white`

This is equivalent to `border-color: white;`.




### `.k-border-inherit`

This is equivalent to `border-color: inherit;`.




### `.k-border-currentColor`

This is equivalent to `border-color: currentColor;`.




### `.k-border-transparent`

This is equivalent to `border-color: transparent;`.




### `.k-border-black`

This is equivalent to `border-color: black;`.




### `.k-rounded-l-full`

This is equivalent to `border-left-radius: 9999px;`.




### `.k-rounded`

This is equivalent to `border-radius: 0.25rem;`.




### `.k-rounded-0`

This is equivalent to `border-radius: 0;`.




### `.k-rounded-sm`

This is equivalent to `border-radius: 0.125rem;`.




### `.k-rounded-md`

This is equivalent to `border-radius: 0.25rem;`.




### `.k-rounded-lg`

This is equivalent to `border-radius: 0.5rem;`.




### `.k-rounded-full`

This is equivalent to `border-radius: 9999px;`.




### `.k-rounded-tl`

This is equivalent to `border-top-left-radius: 0.25rem;`.




### `.k-rounded-tl-0`

This is equivalent to `border-top-left-radius: 0;`.




### `.k-rounded-tl-sm`

This is equivalent to `border-top-left-radius: 0.125rem;`.




### `.k-rounded-tl-md`

This is equivalent to `border-top-left-radius: 0.25rem;`.




### `.k-rounded-tl-lg`

This is equivalent to `border-top-left-radius: 0.5rem;`.




### `.k-rounded-tl-full`

This is equivalent to `border-top-left-radius: 9999px;`.




### `.k-rounded-tr`

This is equivalent to `border-top-right-radius: 0.25rem;`.




### `.k-rounded-tr-0`

This is equivalent to `border-top-right-radius: 0;`.




### `.k-rounded-tr-sm`

This is equivalent to `border-top-right-radius: 0.125rem;`.




### `.k-rounded-tr-md`

This is equivalent to `border-top-right-radius: 0.25rem;`.




### `.k-rounded-tr-lg`

This is equivalent to `border-top-right-radius: 0.5rem;`.




### `.k-rounded-tr-full`

This is equivalent to `border-top-right-radius: 9999px;`.




### `.k-rounded-br`

This is equivalent to `border-bottom-right-radius: 0.25rem;`.




### `.k-rounded-br-0`

This is equivalent to `border-bottom-right-radius: 0;`.




### `.k-rounded-br-sm`

This is equivalent to `border-bottom-right-radius: 0.125rem;`.




### `.k-rounded-br-md`

This is equivalent to `border-bottom-right-radius: 0.25rem;`.




### `.k-rounded-br-lg`

This is equivalent to `border-bottom-right-radius: 0.5rem;`.




### `.k-rounded-br-full`

This is equivalent to `border-bottom-right-radius: 9999px;`.




### `.k-rounded-bl`

This is equivalent to `border-bottom-left-radius: 0.25rem;`.




### `.k-rounded-bl-0`

This is equivalent to `border-bottom-left-radius: 0;`.




### `.k-rounded-bl-sm`

This is equivalent to `border-bottom-left-radius: 0.125rem;`.




### `.k-rounded-bl-md`

This is equivalent to `border-bottom-left-radius: 0.25rem;`.




### `.k-rounded-bl-lg`

This is equivalent to `border-bottom-left-radius: 0.5rem;`.




### `.k-rounded-bl-full`

This is equivalent to `border-bottom-right-radius: 9999px;`.




### `.k-rounded-t`

This is equivalent to `border-top-radius: 0.25rem;`.




### `.k-rounded-t-0`

This is equivalent to `border-top-radius: 0;`.




### `.k-rounded-t-sm`

This is equivalent to `border-top-radius: 0.125rem;`.




### `.k-rounded-t-md`

This is equivalent to `border-top-radius: 0.25rem;`.




### `.k-rounded-t-lg`

This is equivalent to `border-top-radius: 0.5rem;`.




### `.k-rounded-t-full`

This is equivalent to `border-top-radius: 9999px;`.




### `.k-rounded-r`

This is equivalent to `border-right-radius: 0.25rem;`.




### `.k-rounded-r-0`

This is equivalent to `border-right-radius: 0;`.




### `.k-rounded-r-sm`

This is equivalent to `border-right-radius: 0.125rem;`.




### `.k-rounded-r-md`

This is equivalent to `border-right-radius: 0.25rem;`.




### `.k-rounded-r-lg`

This is equivalent to `border-right-radius: 0.5rem;`.




### `.k-rounded-r-full`

This is equivalent to `border-right-radius: 9999px;`.




### `.k-rounded-b`

This is equivalent to `border-bottom-radius: 0.25rem;`.




### `.k-rounded-b-0`

This is equivalent to `border-bottom-radius: 0;`.




### `.k-rounded-b-sm`

This is equivalent to `border-bottom-radius: 0.125rem;`.




### `.k-rounded-b-md`

This is equivalent to `border-bottom-radius: 0.25rem;`.




### `.k-rounded-b-lg`

This is equivalent to `border-bottom-radius: 0.5rem;`.




### `.k-rounded-b-full`

This is equivalent to `border-bottom-radius: 9999px;`.




### `.k-rounded-l`

This is equivalent to `border-left-radius: 0.25rem;`.




### `.k-rounded-l-0`

This is equivalent to `border-left-radius: 0;`.




### `.k-rounded-l-sm`

This is equivalent to `border-left-radius: 0.125rem;`.




### `.k-rounded-l-md`

This is equivalent to `border-left-radius: 0.25rem;`.




### `.k-rounded-l-lg`

This is equivalent to `border-left-radius: 0.5rem;`.




### `.k-border-y-none`

This is equivalent to `border-block-style: none;`.




### `.k-border-solid`

This is equivalent to `border-style: solid;`.




### `.k-border-dashed`

This is equivalent to `border-style: dashed;`.




### `.k-border-dotted`

This is equivalent to `border-style: dotted;`.




### `.k-border-double`

This is equivalent to `border-style: double;`.




### `.k-border-hidden`

This is equivalent to `border-style: hidden;`.




### `.k-border-none`

This is equivalent to `border-style: none;`.




### `.k-border-t-solid`

This is equivalent to `border-top-style: solid;`.




### `.k-border-t-dashed`

This is equivalent to `border-top-style: dashed;`.




### `.k-border-t-dotted`

This is equivalent to `border-top-style: dotted;`.




### `.k-border-t-double`

This is equivalent to `border-top-style: double;`.




### `.k-border-t-hidden`

This is equivalent to `border-top-style: hidden;`.




### `.k-border-t-none`

This is equivalent to `border-top-style: none;`.




### `.k-border-r-solid`

This is equivalent to `border-right-style: solid;`.




### `.k-border-r-dashed`

This is equivalent to `border-right-style: dashed;`.




### `.k-border-r-dotted`

This is equivalent to `border-right-style: dotted;`.




### `.k-border-r-double`

This is equivalent to `border-right-style: double;`.




### `.k-border-r-hidden`

This is equivalent to `border-right-style: hidden;`.




### `.k-border-r-none`

This is equivalent to `border-right-style: none;`.




### `.k-border-b-solid`

This is equivalent to `border-bottom-style: solid;`.




### `.k-border-b-dashed`

This is equivalent to `border-bottom-style: dashed;`.




### `.k-border-b-dotted`

This is equivalent to `border-bottom-style: dotted;`.




### `.k-border-b-double`

This is equivalent to `border-bottom-style: double;`.




### `.k-border-b-hidden`

This is equivalent to `border-bottom-style: hidden;`.




### `.k-border-b-none`

This is equivalent to `border-bottom-style: none;`.




### `.k-border-l-solid`

This is equivalent to `border-left-style: solid;`.




### `.k-border-l-dashed`

This is equivalent to `border-left-style: dashed;`.




### `.k-border-l-dotted`

This is equivalent to `border-left-style: dotted;`.




### `.k-border-l-double`

This is equivalent to `border-left-style: double;`.




### `.k-border-l-hidden`

This is equivalent to `border-left-style: hidden;`.




### `.k-border-x-solid`

This is equivalent to `border-inline-style: solid;`.




### `.k-border-x-dashed`

This is equivalent to `border-inline-style: dashed;`.




### `.k-border-x-dotted`

This is equivalent to `border-inline-style: dotted;`.




### `.k-border-x-double`

This is equivalent to `border-inline-style: double;`.




### `.k-border-x-hidden`

This is equivalent to `border-inline-style: hidden;`.




### `.k-border-x-none`

This is equivalent to `border-inline-style: none;`.




### `.k-border-y-solid`

This is equivalent to `border-block-style: solid;`.




### `.k-border-y-dashed`

This is equivalent to `border-block-style: dashed;`.




### `.k-border-y-dotted`

This is equivalent to `border-block-style: dotted;`.




### `.k-border-y-double`

This is equivalent to `border-block-style: double;`.




### `.k-border-y-hidden`

This is equivalent to `border-block-style: hidden;`.




### `.k-border-y-8`

This is equivalent to `border-block-width: 8px;`.




### `.k-border`

This is equivalent to `border-width: 1px;`.




### `.k-border-0`

This is equivalent to `border-width: 0;`.




### `.k-border-2`

This is equivalent to `border-width: 2px;`.




### `.k-border-4`

This is equivalent to `border-width: 4px;`.




### `.k-border-8`

This is equivalent to `border-width: 8px;`.




### `.k-border-t`

This is equivalent to `border-top-width: 1px;`.




### `.k-border-t-0`

This is equivalent to `border-top-width: 0px;`.




### `.k-border-t-2`

This is equivalent to `border-top-width: 2px;`.




### `.k-border-t-4`

This is equivalent to `border-top-width: 4px;`.




### `.k-border-t-8`

This is equivalent to `border-top-width: 8px;`.




### `.k-border-r`

This is equivalent to `border-right-width: 1px;`.




### `.k-border-r-0`

This is equivalent to `border-right-width: 0px;`.




### `.k-border-r-2`

This is equivalent to `border-right-width: 2px;`.




### `.k-border-r-4`

This is equivalent to `border-right-width: 4px;`.




### `.k-border-r-8`

This is equivalent to `border-right-width: 8px;`.




### `.k-border-b`

This is equivalent to `border-bottom-width: 1px;`.




### `.k-border-b-0`

This is equivalent to `border-bottom-width: 0px;`.




### `.k-border-b-2`

This is equivalent to `border-bottom-width: 2px;`.




### `.k-border-b-4`

This is equivalent to `border-bottom-width: 4px;`.




### `.k-border-b-8`

This is equivalent to `border-bottom-width: 8px;`.




### `.k-border-l`

This is equivalent to `border-left-width: 1px;`.




### `.k-border-l-0`

This is equivalent to `border-left-width: 0px;`.




### `.k-border-l-2`

This is equivalent to `border-left-width: 2px;`.




### `.k-border-l-4`

This is equivalent to `border-left-width: 4px;`.




### `.k-border-l-8`

This is equivalent to `border-left-width: 8px;`.




### `.k-border-x`

This is equivalent to `border-inline-width: 1px;`.




### `.k-border-x-0`

This is equivalent to `border-inline-width: 0px;`.




### `.k-border-x-2`

This is equivalent to `border-inline-width: 2px;`.




### `.k-border-x-4`

This is equivalent to `border-inline-width: 4px;`.




### `.k-border-x-8`

This is equivalent to `border-inline-width: 8px;`.




### `.k-border-y`

This is equivalent to `border-block-width: 1px;`.




### `.k-border-y-0`

This is equivalent to `border-block-width: 0px;`.




### `.k-border-y-2`

This is equivalent to `border-block-width: 2px;`.




### `.k-border-y-4`

This is equivalent to `border-block-width: 4px;`.




### `.k-box-sizing-border`

This is equivalent to `box-sizing: border-box;`.




### `.k-box-sizing-content`

This is equivalent to `box-sizing: content-box;`.




### `.k-clear-left`

This is equivalent to `clear: left;`.




### `.k-clear-right`

This is equivalent to `clear: right;`.




### `.k-clear-both`

This is equivalent to `clear: both;`.




### `.k-clear-none`

This is equivalent to `clear: none;`.




### `.k-columns-1`

This is equivalent to `columns: 1;`.




### `.k-columns-2`

This is equivalent to `columns: 2;`.




### `.k-columns-3`

This is equivalent to `columns: 3;`.




### `.k-columns-4`

This is equivalent to `columns: 4;`.




### `.k-columns-5`

This is equivalent to `columns: 5;`.




### `.k-columns-6`

This is equivalent to `columns: 6;`.




### `.k-columns-7`

This is equivalent to `columns: 7;`.




### `.k-columns-8`

This is equivalent to `columns: 8;`.




### `.k-columns-9`

This is equivalent to `columns: 9;`.




### `.k-columns-10`

This is equivalent to `columns: 10;`.




### `.k-columns-11`

This is equivalent to `columns: 11;`.




### `.k-columns-12`

This is equivalent to `columns: 12;`.




### `.k-columns-auto`

This is equivalent to `columns: auto;`.The number of columns is determined by other CSS properties, such as column-width.




### `.k-cursor-none`

This is equivalent to `cursor: none;`.




### `.k-cursor-auto`

This is equivalent to `cursor: auto;`.




### `.k-cursor-default`

This is equivalent to `cursor: default;`.




### `.k-cursor-pointer`

This is equivalent to `cursor: pointer;`.




### `.k-d-none`

This is equivalent to `display: none;`.




### `.k-d-contents`

This is equivalent to `display: contents;`.




### `.k-d-block`

This is equivalent to `display: block;`.




### `.k-d-inline`

This is equivalent to `display: inline;`.




### `.k-d-inline-block`

This is equivalent to `display: inline-block;`.




### `.k-d-flex`

This is equivalent to `display: flex;`.




### `.k-d-inline-flex`

This is equivalent to `display: inline-flex;`.




### `.k-d-grid`

This is equivalent to `display: grid`. It defines the element as a grid container and establishes a new grid formatting context for its contents.




### `.k-d-inline-grid`

This is equivalent to `display: inline-grid`. It defines the element as a grid container and establishes a new grid formatting context for its contents.




### `.k-d-table`

This is equivalent to `display: table;`.




### `.k-d-inline-table`

This is equivalent to `display: inline-table;`.




### `.k-d-list-item`

This is equivalent to `display: list-item;`.




### `.k-d-table-row`

This is equivalent to `display: table-row;`.




### `.k-d-table-cell`

This is equivalent to `display: table-cell;`.




### `.k-fill-none`

This is equivalent to `fill: none;`.




### `.k-fill-inherit`

This is equivalent to `fill: inherit;`.




### `.k-fill-currentColor`

This is equivalent to `fill: currentColor;`.




### `.k-fill-transparent`

This is equivalent to `fill: transparent;`.




### `.k-fill-black`

This is equivalent to `fill: black;`.




### `.k-fill-white`

This is equivalent to `fill: white;`.




### `.k-flex-1`

This is equivalent to `flex: 1 1 0%;`.




### `.k-flex-auto`

This is equivalent to `flex: 1 1 auto;`.




### `.k-flex-initial`

This is the same as `flex: initial;` and the shorthand for the default value: `flex: 0 1 auto`. It sizes the item based on its `width`/`height` properties (or its content if not set). It makes the flex item inflexible when there is some free space left, but allows it to shrink to its minimum when there is not enough space. The alignment abilities or `auto` margins can be used to align flex items along the main axis.




### `.k-flex-none`

This is equivalent to `flex: 0 0 auto;`.




### `.k-flex-basis-auto`

This is equivalent to `flex-basis: auto;`.




### `.k-flex-basis-0`

This is equivalent to `flex-basis: 0;`.




### `.k-flex-row`

This is equivalent to `flex-direction: row;`.




### `.k-flex-row-reverse`

This is equivalent to `flex-direction: row-reverse;`.




### `.k-flex-col`

This is equivalent to `flex-direction: column;`.




### `.k-flex-col-reverse`

This is equivalent to `flex-direction: column-reverse;`.




### `.k-flex-grow`

This is equivalent to `flex-grow: 1;`.




### `.k-flex-grow-0`

This is equivalent to `flex-grow: 0;`.




### `.k-flex-shrink`

This is equivalent to `flex-shrink: 1;`.




### `.k-flex-shrink-0`

This is equivalent to `flex-shrink: 0;`.




### `.k-flex-wrap`

This is equivalent to `flex-wrap: wrap;`.




### `.k-flex-nowrap`

This is equivalent to `flex-wrap: nowrap;`.




### `.k-flex-wrap-reverse`

This is equivalent to `flex-wrap: wrap-reverse;`.




### `.k-float-left`

This is equivalent to `float: left;`.




### `.k-float-right`

This is equivalent to `float: right;`.




### `.k-float-none`

This is equivalent to `float: none;`.




### `.k-font-size-xs`

This is equivalent to `font-size: 10px;`.




### `.k-font-size-sm`

This is equivalent to `font-size: 12px;`.




### `.k-font-size-md`

This is equivalent to `font-size: 14px;`.




### `.k-font-size-lg`

This is equivalent to `font-size: 16px;`.




### `.k-font-size-xl`

This is equivalent to `font-size: 20px;`.




### `.k-font-italic`

This is equivalent to `font-style: italic;`.




### `.k-font-non-italic`

This is equivalent to `font-style: normal;`.




### `.k-font-thin`

This is equivalent to `font-weight: 100;`.




### `.k-font-extralight`

This is equivalent to `font-weight: 200;`.




### `.k-font-light`

This is equivalent to `font-weight: 300;`.




### `.k-font-normal`

This is equivalent to `font-weight: 400;`.




### `.k-font-medium`

This is equivalent to `font-weight: 500;`.




### `.k-font-semibold`

This is equivalent to `font-weight: 600;`.




### `.k-font-bold`

This is equivalent to `font-weight: 700;`.




### `.k-font-extrabold`

This is equivalent to `font-weight: 800;`.




### `.k-font-black`

This is equivalent to `font-weight: 900;`.




### `.k-gap-0`

This is equivalent to `gap: 0;`.




### `.k-gap-1px`

This is equivalent to `gap: 1px;`.




### `.k-gap-1`

This is equivalent to `gap: 0.25rem;`.




### `.k-gap-xs`

This is equivalent to `gap: 0.25rem;`.




### `.k-gap-sm`

This is equivalent to `gap: 0.5rem;`.




### `.k-gap-md`

This is equivalent to `gap: 0.75rem;`.




### `.k-gap-lg`

This is equivalent to `gap: 1rem;`.




### `.k-gap-xl`

This is equivalent to `gap: 1.5rem;`.




### `.k-gap-thin`

This is equivalent to `gap: 0.125rem;`.




### `.k-gap-hair`

This is equivalent to `gap: 1px;`.




### `.k-gap-x-0`

This is equivalent to `column-gap: 0;`.




### `.k-gap-x-1px`

This is equivalent to `column-gap: 1px;`.




### `.k-gap-x-1`

This is equivalent to `column-gap: 0.25rem;`.




### `.k-gap-x-xs`

This is equivalent to `column-gap: 0.25rem;`.




### `.k-gap-x-sm`

This is equivalent to `column-gap: 0.5rem;`.




### `.k-gap-x-md`

This is equivalent to `column-gap: 0.75rem;`.




### `.k-gap-x-lg`

This is equivalent to `column-gap: 1rem;`.




### `.k-gap-x-xl`

This is equivalent to `column-gap: 1.5rem;`.




### `.k-gap-x-thin`

This is equivalent to `column-gap: 0.125rem;`.




### `.k-gap-x-hair`

This is equivalent to `column-gap: 1px;`.




### `.k-gap-y-0`

This is equivalent to `row-gap: 0;`.




### `.k-gap-y-1px`

This is equivalent to `row-gap: 1px;`.




### `.k-gap-y-1`

This is equivalent to `row-gap: 0.25rem;`.




### `.k-gap-y-xs`

This is equivalent to `row-gap: 0.25rem;`.




### `.k-gap-y-sm`

This is equivalent to `row-gap: 0.5rem;`.




### `.k-gap-y-md`

This is equivalent to `row-gap: 0.75rem;`.




### `.k-gap-y-lg`

This is equivalent to `row-gap: 1rem;`.




### `.k-gap-y-xl`

This is equivalent to `row-gap: 1.5rem;`.




### `.k-gap-y-thin`

This is equivalent to `row-gap: 0.125rem;`.




### `.k-gap-y-hair`

This is equivalent to `row-gap: 1px;`.




### `.k-grid-auto-cols-auto`

This is equivalent to `grid-auto-columns: auto;`.




### `.k-grid-auto-cols-min`

This is equivalent to `grid-auto-columns: min-content;`.




### `.k-grid-auto-cols-max`

This is equivalent to `grid-auto-columns: max-content;`.




### `.k-grid-auto-cols-fr`

This is equivalent to `grid-auto-columns: minmax( 0, 1fr );`.




### `.k-grid-flow-row`

This is equivalent to `grid-auto-flow: row;`.




### `.k-grid-flow-column`

This is equivalent to `grid-auto-flow: column;`.




### `.k-grid-flow-dense`

This is equivalent to `grid-auto-flow: dense;`.




### `.k-grid-flow-row-dense`

This is equivalent to `grid-auto-flow: row dense;`.




### `.k-grid-flow-col-dense`

This is equivalent to `grid-auto-flow: col dense;`.




### `.k-grid-flow-unset`

This is equivalent to `grid-auto-flow: unset;`.




### `.k-grid-auto-rows-auto`

This is equivalent to `grid-auto-rows: auto;`.




### `.k-grid-auto-rows-min`

This is equivalent to `grid-auto-rows: min-content;`.




### `.k-grid-auto-rows-max`

This is equivalent to `grid-auto-rows: max-content;`.




### `.k-grid-auto-rows-fr`

This is equivalent to `grid-auto-rows: minmax( 0, 1fr );`.




### `.k-col-start-1`

This is equivalent to `grid-column-start: 1;`.




### `.k-col-start--1`

This is equivalent to `grid-column-start: -1;`.




### `.k-col-start-auto`

This is equivalent to `grid-column-start: auto;`.




### `.k-row-start-1`

This is equivalent to `grid-row-start: 1;`.




### `.k-row-start--1`

This is equivalent to `grid-row-start: -1;`.




### `.k-row-start-auto`

This is equivalent to `grid-row-start: auto;`.




### `.k-grid-cols-1`

This is equivalent to `grid-template-columns: repeat(1, minmax(0, 1fr));`.




### `.k-grid-cols-2`

This is equivalent to `grid-template-columns: repeat(2, minmax(0, 1fr));`.




### `.k-grid-cols-none`

This is equivalent to `grid-template-columns: none;`.




### `.k-grid-rows-1`

This is equivalent to `grid-template-rows: repeat(1, minmax(0, 1fr));`.




### `.k-grid-rows-2`

This is equivalent to `grid-template-rows: repeat(2, minmax(0, 1fr));`.




### `.k-grid-rows-none`

This is equivalent to `grid-template-rows: none;`.




### `.k-h-0`

This is equivalent to `height: 0;`.




### `.k-h-1px`

This is equivalent to `height: 1px;`.




### `.k-h-1`

This is equivalent to `height: 0.25rem;`.




### `.k-h-full`

This is equivalent to `min-height: 100%;`.




### `.k-h-screen`

This is equivalent to `height: 100vh;`.




### `.k-h-min`

This is equivalent to `height: min-content;`.




### `.k-h-max`

This is equivalent to `height: max-content;`.




### `.k-h-fit`

This is equivalent to `height: fit-content;`.




### `.k-min-h-0`

This is equivalent to `min-height: 0;`.




### `.k-min-h-1px`

This is equivalent to `min-height: 1px;`.




### `.k-min-h-1`

This is equivalent to `min-height: 0.25rem;`.




### `.k-min-h-full`

This is equivalent to `min-height: 100%;`.




### `.k-min-h-screen`

This is equivalent to `min-height: 100vh;`.




### `.k-min-h-min`

This is equivalent to `min-height: min-content;`.




### `.k-min-h-max`

This is equivalent to `min-height: max-content;`.




### `.k-min-h-fit`

This is equivalent to `min-height: fit-content;`.




### `.k-max-h-0`

This is equivalent to `max-height: 0;`.




### `.k-max-h-1px`

This is equivalent to `max-height: 1px;`.




### `.k-max-h-1`

This is equivalent to `max-height: 0.25rem;`.




### `.k-max-h-full`

This is equivalent to `max-height: 100%;`.




### `.k-max-h-screen`

This is equivalent to `max-height: 100vh;`.




### `.k-max-h-min`

This is equivalent to `max-height: min-content;`.




### `.k-max-h-max`

This is equivalent to `max-height: max-content;`.




### `.k-max-h-fit`

This is equivalent to `max-height: fit-content;`.




### `.k-justify-content-normal`

This is equivalent to `justify-content: normal;`.




### `.k-justify-content-stretch`

This is equivalent to `justify-content: stretch;`.




### `.k-justify-content-center`

This is equivalent to `justify-content: center;`.




### `.k-justify-content-start`

This is equivalent to `justify-content: start;`.




### `.k-justify-content-end`

This is equivalent to `justify-content: end;`.




### `.k-justify-content-selft-start`

This is equivalent to `justify-content: flex-start;`.




### `.k-justify-content-self-end`

This is equivalent to `justify-content: flex-end;`.




### `.k-justify-content-baseline`

This is equivalent to `justify-content: baseline;`.




### `.k-justify-content-first-baseline`

This is equivalent to `justify-content: first baseline;`.




### `.k-justify-content-last-baseline`

This is equivalent to `justify-content: last baseline;`.




### `.k-justify-content-between`

This is equivalent to `justify-content: space-between;`.




### `.k-justify-content-around`

This is equivalent to `justify-content: space-around;`.




### `.k-justify-content-evenly`

This is equivalent to `justify-content: space-evenly;`.




### `.k-justify-items-normal`

This is equivalent to `justify-items: normal;`.




### `.k-justify-items-stretch`

This is equivalent to `justify-items: stretch;`.




### `.k-justify-items-center`

This is equivalent to `justify-items: center;`.




### `.k-justify-items-start`

This is equivalent to `justify-items: start;`.




### `.k-justify-items-end`

This is equivalent to `justify-items: end;`.




### `.k-justify-items-selft-start`

This is equivalent to `justify-items: flex-start;`.




### `.k-justify-items-self-end`

This is equivalent to `justify-items: flex-end;`.




### `.k-justify-items-selft-start`

This is equivalent to `justify-items: self-start;`.




### `.k-justify-items-self-end`

This is equivalent to `justify-items: self-end;`.




### `.k-justify-items-left`

This is equivalent to `justify-items: left;`.




### `.k-justify-items-right`

This is equivalent to `justify-items: right;`.




### `.k-justify-items-baseline`

This is equivalent to `justify-items: baseline;`.




### `.k-justify-items-first-baseline`

This is equivalent to `justify-items: first baseline;`.




### `.k-justify-items-last-baseline`

This is equivalent to `justify-items: last baseline;`.




### `.k-justify-self-auto`

This is equivalent to `justify-self: auto;`.




### `.k-justify-self-normal`

This is equivalent to `justify-self: normal;`.




### `.k-justify-self-stretch`

This is equivalent to `justify-self: stretch;`.




### `.k-justify-self-center`

This is equivalent to `justify-self: center;`.




### `.k-justify-self-start`

This is equivalent to `justify-self: start;`.




### `.k-justify-self-end`

This is equivalent to `justify-self: end;`.




### `.k-justify-self-selft-start`

This is equivalent to `justify-self: flex-start;`.




### `.k-justify-self-self-end`

This is equivalent to `justify-self: flex-end;`.




### `.k-justify-self-selft-start`

This is equivalent to `justify-self: self-start;`.




### `.k-justify-self-self-end`

This is equivalent to `justify-self: self-end;`.




### `.k-justify-self-baseline`

This is equivalent to `justify-self: baseline;`.




### `.k-justify-self-first-baseline`

This is equivalent to `justify-self: first baseline;`.




### `.k-justify-self-last-baseline`

This is equivalent to `justify-self: last baseline;`.




### `.k-list-none`

This is equivalent to `list-style-type: none;`.




### `.k-list-disc`

This is equivalent to `list-style-type: disc;`.




### `.k-list-decimal`

This is equivalent to `list-style-type: decimal;`.The marker of list items is a number.




### `.k-m-0`

This is equivalent to `margin: 0;`.




### `.k-m-1px`

This is equivalent to `margin: 1px;`.




### `.k-m-1`

This is equivalent to `margin: 0.25rem;`.




### `.k-m--1px`

This is equivalent to `margin: -1px;`.




### `.k-m--1`

This is equivalent to `margin: -0.25rem;`.




### `.k-m-xs`

This is equivalent to `margin: 0.25rem;`.




### `.k-m-sm`

This is equivalent to `margin: 0.5rem;`.




### `.k-m-md`

This is equivalent to `margin: 0.75rem;`.




### `.k-m-lg`

This is equivalent to `margin: 1rem;`.




### `.k-m-xl`

This is equivalent to `margin: 1.5rem;`.




### `.k-m-thin`

This is equivalent to `margin: 0.125rem;`.




### `.k-m-hair`

This is equivalent to `margin: 1px;`.




### `.k-m-auto`

This is equivalent to `margin: auto;`.




### `.k-mt-0`

This is equivalent to `margin-top: 0;`.




### `.k-mt-1px`

This is equivalent to `margin-top: 1px;`.




### `.k-mt-1`

This is equivalent to `margin-top: 0.25rem;`.




### `.k-mt--1px`

This is equivalent to `margin-top: -1px;`.




### `.k-mt--1`

This is equivalent to `margin-top: -0.25rem;`.




### `.k-mt-xs`

This is equivalent to `margin-top: 0.25rem;`.




### `.k-mt-sm`

This is equivalent to `margin-top: 0.5rem;`.




### `.k-mt-md`

This is equivalent to `margin-top: 0.75rem;`.




### `.k-mt-lg`

This is equivalent to `margin-top: 1rem;`.




### `.k-mt-xl`

This is equivalent to `margin-top: 1.5rem;`.




### `.k-mt-thin`

This is equivalent to `margin-top: 0.125rem;`.




### `.k-mt-hair`

This is equivalent to `margin-top: 1px;`.




### `.k-mt-auto`

This is equivalent to `margin-top: auto;`.




### `.k-mr-0`

This is equivalent to `margin-right: 0;`.




### `.k-mr-1px`

This is equivalent to `margin-right: 1px;`.




### `.k-mr-1`

This is equivalent to `margin-right: 0.25rem;`.




### `.k-mr--1px`

This is equivalent to `margin-right: -1px;`.




### `.k-mr--1`

This is equivalent to `margin-right: -0.25rem;`.




### `.k-mr-xs`

This is equivalent to `margin-right: 0.25rem;`.




### `.k-mr-sm`

This is equivalent to `margin-right: 0.5rem;`.




### `.k-mr-md`

This is equivalent to `margin-right: 0.75rem;`.




### `.k-mr-lg`

This is equivalent to `margin-right: 1rem;`.




### `.k-mr-xl`

This is equivalent to `margin-right: 1.5rem;`.




### `.k-mr-thin`

This is equivalent to `margin-right: 0.125rem;`.




### `.k-mr-hair`

This is equivalent to `margin-right: 1px;`.




### `.k-mr-auto`

This is equivalent to `margin-right: auto;`.




### `.k-mb-0`

This is equivalent to `margin-bottom: 0;`.




### `.k-mb-1px`

This is equivalent to `margin-bottom: 1px;`.




### `.k-mb-1`

This is equivalent to `margin-bottom: 0.25rem;`.




### `.k-mb--1px`

This is equivalent to `margin-bottom: -1px;`.




### `.k-mb--1`

This is equivalent to `margin-bottom: -0.25rem;`.




### `.k-mb-xs`

This is equivalent to `margin-bottom: 0.25rem;`.




### `.k-mb-sm`

This is equivalent to `margin-bottom: 0.5rem;`.




### `.k-mb-md`

This is equivalent to `margin-bottom: 0.75rem;`.




### `.k-mb-lg`

This is equivalent to `margin-bottom: 1rem;`.




### `.k-mb-xl`

This is equivalent to `margin-bottom: 1.5rem;`.




### `.k-mb-thin`

This is equivalent to `margin-bottom: 0.125rem;`.




### `.k-mb-hair`

This is equivalent to `margin-bottom: 1px;`.




### `.k-mb-auto`

This is equivalent to `margin-bottom: auto;`.




### `.k-ml-0`

This is equivalent to `margin-left: 0;`.




### `.k-ml-1px`

This is equivalent to `margin-left: 1px;`.




### `.k-ml-1`

This is equivalent to `margin-left: 0.25rem;`.




### `.k-ml--1px`

This is equivalent to `margin-left: -1px;`.




### `.k-ml--1`

This is equivalent to `margin-left: -0.25rem;`.




### `.k-ml-xs`

This is equivalent to `margin-left: 0.25rem;`.




### `.k-ml-sm`

This is equivalent to `margin-left: 0.5rem;`.




### `.k-ml-md`

This is equivalent to `margin-left: 0.75rem;`.




### `.k-ml-lg`

This is equivalent to `margin-left: 1rem;`.




### `.k-ml-xl`

This is equivalent to `margin-left: 1.5rem;`.




### `.k-ml-thin`

This is equivalent to `margin-left: 0.125rem;`.




### `.k-ml-hair`

This is equivalent to `margin-left: 1px;`.




### `.k-ml-auto`

This is equivalent to `margin-left: auto;`.




### `.k-mx-0`

This is equivalent to `margin-inline: 0;`.




### `.k-mx-1px`

This is equivalent to `margin-inline: 1px;`.




### `.k-mx-1`

This is equivalent to `margin-inline: 0.25rem;`.




### `.k-mx--1px`

This is equivalent to `margin-inline: -1px;`.




### `.k-mx--1`

This is equivalent to `margin-inline: -0.25rem;`.




### `.k-mx-xs`

This is equivalent to `margin-inline: 0.25rem;`.




### `.k-mx-sm`

This is equivalent to `margin-inline: 0.5rem;`.




### `.k-mx-md`

This is equivalent to `margin-inline: 0.75rem;`.




### `.k-mx-lg`

This is equivalent to `margin-inline: 1rem;`.




### `.k-mx-xl`

This is equivalent to `margin-inline: 1.5rem;`.




### `.k-mx-thin`

This is equivalent to `margin-inline: 0.125rem;`.




### `.k-mx-hair`

This is equivalent to `margin-inline: 1px;`.




### `.k-mx-auto`

This is equivalent to `margin-inline: auto;`.




### `.k-my-0`

This is equivalent to `margin-block: 0;`.




### `.k-my-1px`

This is equivalent to `margin-block: 1px;`.




### `.k-my-1`

This is equivalent to `margin-block: 0.25rem;`.




### `.k-my--1px`

This is equivalent to `margin-block: -1px;`.




### `.k-my--1`

This is equivalent to `margin-block: -0.25rem;`.




### `.k-my-xs`

This is equivalent to `margin-block: 0.25rem;`.




### `.k-my-sm`

This is equivalent to `margin-block: 0.5rem;`.




### `.k-my-md`

This is equivalent to `margin-block: 0.75rem;`.




### `.k-my-lg`

This is equivalent to `margin-block: 1rem;`.




### `.k-my-xl`

This is equivalent to `margin-block: 1.5rem;`.




### `.k-my-thin`

This is equivalent to `margin-block: 0.125rem;`.




### `.k-my-hair`

This is equivalent to `margin-block: 1px;`.




### `.k-my-auto`

This is equivalent to `margin-block: auto;`.




### `.k-object-fit-contain`

This is equivalent to `object-fit: contain;`.




### `.k-object-fit-cover`

This is equivalent to `object-fit: cover;`.




### `.k-object-fit-fill`

This is equivalent to `object-fit: fill;`.




### `.k-object-fit-scale-down`

This is equivalent to `object-fit: scale-down;`.




### `.k-object-fit-initial`

This is equivalent to `object-fit: initial;`.




### `.k-object-fit-none`

This is equivalent to `object-fit: none;`.




### `.k-object-position-center`

This is equivalent to `object-position: center;`.




### `.k-object-position-top`

This is equivalent to `object-position: top;`.




### `.k-object-position-right`

This is equivalent to `object-position: right;`.




### `.k-object-position-bottom`

This is equivalent to `object-position: bottom;`.




### `.k-object-position-left`

This is equivalent to `object-position: left;`.




### `.k-object-position-top-left`

This is equivalent to `object-position: top left;`.




### `.k-object-position-top-right`

This is equivalent to `object-position: top right;`.




### `.k-object-position-bottom-left`

This is equivalent to `object-position: bottom left;`.




### `.k-object-position-bottom-right`

This is equivalent to `object-position: bottom right;`.




### `.k-opacity-0`

This is equivalent to `opacity: 0;`.




### `.k-opacity-1`

This is equivalent to `opacity: 1;`.




### `.k-order-first`

This is equivalent to `order: 1;`.




### `.k-order-first`

This is equivalent to `order: -9999;`.




### `.k-order-last`

This is equivalent to `order: 9999;`.




### `.k-order-none`

This is equivalent to `order: 0;`.




### `.k-outline-inherit`

This is equivalent to `outline-color: inherit;`.




### `.k-outline-currentColor`

This is equivalent to `outline-color: currentColor;`.




### `.k-outline-transparent`

This is equivalent to `outline-color: transparent;`.




### `.k-outline-black`

This is equivalent to `outline-color: black;`.




### `.k-outline-white`

This is equivalent to `outline-color: white;`.




### `.k-outline-offset`

This is equivalent to `outline-offset: 1px;`.




### `.k-outline-offset-0`

This is equivalent to `outline-offset: 0;`.




### `.k-outline-offset-2`

This is equivalent to `outline-offset: 2px;`.




### `.k-outline-offset-4`

This is equivalent to `outline-offset: 4px;`.




### `.k-outline-offset-8`

This is equivalent to `outline-offset: 8px;`.




### `.k-outline-solid`

This is equivalent to `outline-style: solid;`.




### `.k-outline-dashed`

This is equivalent to `outline-style: dashed;`.




### `.k-outline-dotted`

This is equivalent to `outline-style: dotted;`.




### `.k-outline-double`

This is equivalent to `outline-style: double;`.




### `.k-outline-hidden`

This is equivalent to `outline-style: hidden;`.




### `.k-outline-none`

This is equivalent to `outline-style: none;`.




### `.k-outline`

This is equivalent to `outline-width: 1px;`.




### `.k-outline-0`

This is equivalent to `outline-width: 0;`.




### `.k-outline-2`

This is equivalent to `outline-width: 2px;`.




### `.k-outline-4`

This is equivalent to `outline-width: 4px;`.




### `.k-outline-8`

This is equivalent to `outline-width: 8px;`.




### `.k-overflow-auto`

This is equivalent to `overflow: auto;`.




### `.k-overflow-hidden`

This is equivalent to `overflow: hidden;`.




### `.k-overflow-visible`

This is equivalent to `overflow: visible;`.




### `.k-overflow-scroll`

This is equivalent to `overflow: scroll;`.




### `.k-overflow-clip`

This is equivalent to `overflow: clip;`.




### `.k-overflow-x-auto`

This is equivalent to `overflow-x: auto;`.




### `.k-overflow-x-hidden`

This is equivalent to `overflow-x: hidden;`.




### `.k-overflow-x-visible`

This is equivalent to `overflow-x: visible;`.




### `.k-overflow-x-scroll`

This is equivalent to `overflow-x: scroll;`.




### `.k-overflow-x-clip`

This is equivalent to `overflow-x: clip;`.




### `.k-overflow-y-auto`

This is equivalent to `overflow-y: auto;`.




### `.k-overflow-y-hidden`

This is equivalent to `overflow-y: hidden;`.




### `.k-overflow-y-visible`

This is equivalent to `overflow-y: visible;`.




### `.k-overflow-y-scroll`

This is equivalent to `overflow-y: scroll;`.




### `.k-overflow-y-clip`

This is equivalent to `overflow-y: clip;`.




### `.k-p-0`

This is equivalent to `padding: 0;`.




### `.k-p-1px`

This is equivalent to `padding: 1px;`.




### `.k-p-1`

This is equivalent to `padding: 0.25rem;`.




### `.k-p-xs`

This is equivalent to `padding: 0.25rem;`.




### `.k-p-sm`

This is equivalent to `padding: 0.5rem;`.




### `.k-p-md`

This is equivalent to `padding: 0.75rem;`.




### `.k-p-lg`

This is equivalent to `padding: 1rem;`.




### `.k-p-xl`

This is equivalent to `padding: 1.5rem;`.




### `.k-p-thin`

This is equivalent to `padding: 0.125rem;`.




### `.k-p-hair`

This is equivalent to `padding: 1px;`.




### `.k-p-auto`

This is equivalent to `padding: auto;`.




### `.k-pt-0`

This is equivalent to `padding-top: 0;`.




### `.k-pt-1px`

This is equivalent to `padding-top: 1px;`.




### `.k-pt-1`

This is equivalent to `padding-top: 0.25rem;`.




### `.k-pt-xs`

This is equivalent to `padding-top: 0.25rem;`.




### `.k-pt-sm`

This is equivalent to `padding-top: 0.5rem;`.




### `.k-pt-md`

This is equivalent to `padding-top: 0.75rem;`.




### `.k-pt-lg`

This is equivalent to `padding-top: 1rem;`.




### `.k-pt-xl`

This is equivalent to `padding-top: 1.5rem;`.




### `.k-pt-thin`

This is equivalent to `padding-top: 0.125rem;`.




### `.k-pt-hair`

This is equivalent to `padding-top: 1px;`.




### `.k-pt-auto`

This is equivalent to `padding-top: auto;`.




### `.k-pr-0`

This is equivalent to `padding-right: 0;`.




### `.k-pr-1px`

This is equivalent to `padding-right: 1px;`.




### `.k-pr-1`

This is equivalent to `padding-right: 0.25rem;`.




### `.k-pr-xs`

This is equivalent to `padding-right: 0.25rem;`.




### `.k-pr-sm`

This is equivalent to `padding-right: 0.5rem;`.




### `.k-pr-md`

This is equivalent to `padding-right: 0.75rem;`.




### `.k-pr-lg`

This is equivalent to `padding-right: 1rem;`.




### `.k-pr-xl`

This is equivalent to `padding-right: 1.5rem;`.




### `.k-pr-thin`

This is equivalent to `padding-right: 0.125rem;`.




### `.k-pr-hair`

This is equivalent to `padding-right: 1px;`.




### `.k-pr-auto`

This is equivalent to `padding-right: auto;`.




### `.k-pb-0`

This is equivalent to `padding-bottom: 0;`.




### `.k-pb-1px`

This is equivalent to `padding-bottom: 1px;`.




### `.k-pb-1`

This is equivalent to `padding-bottom: 0.25rem;`.




### `.k-pb-xs`

This is equivalent to `padding-bottom: 0.25rem;`.




### `.k-pb-sm`

This is equivalent to `padding-bottom: 0.5rem;`.




### `.k-pb-md`

This is equivalent to `padding-bottom: 0.75rem;`.




### `.k-pb-lg`

This is equivalent to `padding-bottom: 1rem;`.




### `.k-pb-xl`

This is equivalent to `padding-bottom: 1.5rem;`.




### `.k-pb-thin`

This is equivalent to `padding-bottom: 0.125rem;`.




### `.k-pb-hair`

This is equivalent to `padding-bottom: 1px;`.




### `.k-pb-auto`

This is equivalent to `padding-bottom: auto;`.




### `.k-pl-0`

This is equivalent to `padding-left: 0;`.




### `.k-pl-1px`

This is equivalent to `padding-left: 1px;`.




### `.k-pl-1`

This is equivalent to `padding-left: 0.25rem;`.




### `.k-pl-xs`

This is equivalent to `padding-left: 0.25rem;`.




### `.k-pl-sm`

This is equivalent to `padding-left: 0.5rem;`.




### `.k-pl-md`

This is equivalent to `padding-left: 0.75rem;`.




### `.k-pl-lg`

This is equivalent to `padding-left: 1rem;`.




### `.k-pl-xl`

This is equivalent to `padding-left: 1.5rem;`.




### `.k-pl-thin`

This is equivalent to `padding-left: 0.125rem;`.




### `.k-pl-hair`

This is equivalent to `padding-left: 1px;`.




### `.k-pl-auto`

This is equivalent to `padding-left: auto;`.




### `.k-px-0`

This is equivalent to `padding-inline: 0;`.




### `.k-px-1px`

This is equivalent to `padding-inline: 1px;`.




### `.k-px-1`

This is equivalent to `padding-inline: 0.25rem;`.




### `.k-px-xs`

This is equivalent to `padding-inline: 0.25rem;`.




### `.k-px-sm`

This is equivalent to `padding-inline: 0.5rem;`.




### `.k-px-md`

This is equivalent to `padding-inline: 0.75rem;`.




### `.k-px-lg`

This is equivalent to `padding-inline: 1rem;`.




### `.k-px-xl`

This is equivalent to `padding-inline: 1.5rem;`.




### `.k-px-thin`

This is equivalent to `padding-inline: 0.125rem;`.




### `.k-px-hair`

This is equivalent to `padding-inline: 1px;`.




### `.k-px-auto`

This is equivalent to `padding-inline: auto;`.




### `.k-py-0`

This is equivalent to `padding-block: 0;`.




### `.k-py-1px`

This is equivalent to `padding-block: 1px;`.




### `.k-py-1`

This is equivalent to `padding-block: 0.25rem;`.




### `.k-py-xs`

This is equivalent to `padding-block: 0.25rem;`.




### `.k-py-sm`

This is equivalent to `padding-block: 0.5rem;`.




### `.k-py-md`

This is equivalent to `padding-block: 0.75rem;`.




### `.k-py-lg`

This is equivalent to `padding-block: 1rem;`.




### `.k-py-xl`

This is equivalent to `padding-block: 1.5rem;`.




### `.k-py-thin`

This is equivalent to `padding-block: 0.125rem;`.




### `.k-py-hair`

This is equivalent to `padding-block: 1px;`.




### `.k-py-auto`

This is equivalent to `padding-block: auto;`.




### `.k-place-content-normal`

This is equivalent to `place-content: normal;`.




### `.k-place-content-stretch`

This is equivalent to `place-content: stretch;`.




### `.k-place-content-center`

This is equivalent to `place-content: center;`.




### `.k-place-content-start`

This is equivalent to `place-content: start;`.




### `.k-place-content-end`

This is equivalent to `place-content: end;`.




### `.k-place-content-selft-start`

This is equivalent to `place-content: flex-start;`.




### `.k-place-content-self-end`

This is equivalent to `place-content: flex-end;`.




### `.k-place-content-selft-start`

This is equivalent to `place-content: self-start;`.




### `.k-place-content-self-end`

This is equivalent to `place-content: self-end;`.




### `.k-place-content-baseline`

This is equivalent to `place-content: baseline;`.




### `.k-place-content-between`

This is equivalent to `place-content: space-between;`.




### `.k-place-content-around`

This is equivalent to `place-content: space-around;`.




### `.k-place-content-evenly`

This is equivalent to `place-content: space-evenly;`.




### `.k-place-items-normal`

This is equivalent to `place-items: normal;`.




### `.k-place-items-stretch`

This is equivalent to `place-items: stretch;`.




### `.k-place-items-center`

This is equivalent to `place-items: center;`.




### `.k-place-items-start`

This is equivalent to `place-items: start;`.




### `.k-place-items-end`

This is equivalent to `place-items: end;`.




### `.k-place-items-flex-start`

This is equivalent to `place-items: flex-start;`.




### `.k-place-items-flex-end`

This is equivalent to `place-items: flex-end;`.




### `.k-place-items-self-start`

This is equivalent to `place-items: self-start;`.




### `.k-place-items-self-end`

This is equivalent to `place-items: self-end;`.




### `.k-place-items-baseline`

This is equivalent to `place-items: baseline;`.




### `.k-place-self-auto`

This is equivalent to `place-self: auto;`.




### `.k-place-self-normal`

This is equivalent to `place-self: normal;`.




### `.k-place-self-stretch`

This is equivalent to `place-self: stretch;`.




### `.k-place-self-center`

This is equivalent to `place-self: center;`.




### `.k-place-self-start`

This is equivalent to `place-self: start;`.




### `.k-place-self-end`

This is equivalent to `place-self: end;`.




### `.k-place-self-flex-start`

This is equivalent to `place-self: flex-start;`.




### `.k-place-self-flex-end`

This is equivalent to `place-self: flex-end;`.




### `.k-place-self-self-start`

This is equivalent to `place-self: self-start;`.




### `.k-place-self-self-end`

This is equivalent to `place-self: self-end;`.




### `.k-place-self-baseline`

This is equivalent to `place-self: baseline;`.




### `.k-top-0`

This is equivalent to `top: 0;`.




### `.k-right-0`

This is equivalent to `right: 0;`.




### `.k-bottom-0`

This is equivalent to `bottom: 0;`.




### `.k-left-0`

This is equivalent to `left: 0;`.




### `.k-pos-top-0`

This is equivalent to `top: 0;`.




### `.k-pos-right-0`

This is equivalent to `right: 0;`.




### `.k-pos-bottom-0`

This is equivalent to `bottom: 0;`.




### `.k-pos-left-0`

This is equivalent to `left: 0;`.




### `.k-top-left-0`

This is equivalent to `top: 0; left: 0;`.




### `.k-top-right-0`

This is equivalent to `top: 0; right: 0;`.




### `.k-bottom-left-0`

This is equivalent to `bottom: 0; left: 0;`.




### `.k-bottom-right-0`

This is equivalent to `bottom: 0; right: 0;`.




### `.k-inset-0`

This is equivalent to `inset: 0;`.




### `.k-inset-x-0`

This is equivalent to `inset-inline: 0;`.




### `.k-inset-y-0`

This is equivalent to `inset-block: 0;`.




### `.k-pointer-events-none`

This is equivalent to `pointer-events: none;`.




### `.k-pointer-events-auto`

This is equivalent to `pointer-events: auto;`.




### `.k-pos-static`

This is equivalent to `position: static;`.




### `.k-pos-relative`

This is equivalent to `position: relative;`.




### `.k-pos-absolute`

This is equivalent to `position: absolute;`.




### `.k-pos-fixed`

This is equivalent to `position: fixed;`.




### `.k-pos-sticky`

This is equivalent to `position: sticky;`.




### `.k-resize`

This is equivalent to `resize: both;`.




### `.k-resize-none`

This is equivalent to `resize: none;`.




### `.k-resize-x`

This is equivalent to `resize: horizontal;`.




### `.k-resize-y`

This is equivalent to `resize: vertical;`.




### `.k-scroll-y-1`

This is equivalent to `scroll-padding-block: 0.25rem;`.




### `.k-scroll-auto`

This is equivalent to `scroll-behavior: auto;`.




### `.k-scroll-smooth`

This is equivalent to `scroll-behavior: smooth;`.




### `.k-scroll-snap-snap-x`

This is equivalent to `scroll-snap-type: x var(--k-scroll-snap-strictness);`.




### `.k-scroll-snap-snap-y`

This is equivalent to `scroll-snap-type: y var(--k-scroll-snap-strictness);`.




### `.k-scroll-snap-mandatory`

This is equivalent to `--k-scroll-snap-strictness: mandatory;`.




### `.k-scroll-snap-proximity`

This is equivalent to `--k-scroll-snap-strictness: proximity;`.




### `.k-scroll-snap-stop-normal`

This is equivalent to `scroll-snap-stop: normal;`.




### `.k-scroll-snap-stop-always`

This is equivalent to `scroll-snap-stop: always;`.




### `.k-scroll-snap-align-start`

This is equivalent to `scroll-snap-align: start;`.




### `.k-scroll-snap-align-end`

This is equivalent to `scroll-snap-align: end;`.




### `.k-scroll-snap-align-center`

This is equivalent to `scroll-snap-align: center;`.




### `.k-scroll-snap-align-none`

This is equivalent to `scroll-snap-align: none;`.




### `.k-scroll-m-0`

This is equivalent to `scroll-margin: 0;`.




### `.k-scroll-m-1px`

This is equivalent to `scroll-margin: 1px;`.




### `.k-scroll-m-1`

This is equivalent to `scroll-margin: 0.25rem;`.




### `.k-scroll-m-0`

This is equivalent to `scroll-margin-top: 0;`.




### `.k-scroll-m-1px`

This is equivalent to `scroll-margin-top: 1px;`.




### `.k-scroll-m-1`

This is equivalent to `scroll-margin-top: 0.25rem;`.




### `.k-scroll-mr-0`

This is equivalent to `scroll-margin-right: 0;`.




### `.k-scroll-mr-1px`

This is equivalent to `scroll-margin-right: 1px;`.




### `.k-scroll-mr-1`

This is equivalent to `scroll-margin-right: 0.25rem;`.




### `.k-scroll-mb-0`

This is equivalent to `scroll-margin-bottom: 0;`.




### `.k-scroll-mb-1px`

This is equivalent to `scroll-margin-bottom: 1px;`.




### `.k-scroll-mb-1`

This is equivalent to `scroll-margin-bottom: 0.25rem;`.




### `.k-scroll-ml-0`

This is equivalent to `scroll-margin-left: 0;`.




### `.k-scroll-ml-1px`

This is equivalent to `scroll-margin-left: 1px;`.




### `.k-scroll-ml-1`

This is equivalent to `scroll-margin-left: 0.25rem;`.




### `.k-scroll-x-0`

This is equivalent to `scroll-margin-inline: 0;`.




### `.k-scroll-x-1px`

This is equivalent to `scroll-margin-inline: 1px;`.




### `.k-scroll-x-1`

This is equivalent to `scroll-margin-inline: 0.25rem;`.




### `.k-scroll-y-0`

This is equivalent to `scroll-margin-block: 0;`.




### `.k-scroll-y-1px`

This is equivalent to `scroll-margin-block: 1px;`.




### `.k-scroll-y-1`

This is equivalent to `scroll-margin-block: 0.25rem;`.




### `.k-scroll-p-0`

This is equivalent to `scroll-padding: 0;`.




### `.k-scroll-p-1px`

This is equivalent to `scroll-padding: 1px;`.




### `.k-scroll-p-1`

This is equivalent to `scroll-padding: 0.25rem;`.




### `.k-scroll-p-0`

This is equivalent to `scroll-padding-top: 0;`.




### `.k-scroll-p-1px`

This is equivalent to `scroll-padding-top: 1px;`.




### `.k-scroll-p-1`

This is equivalent to `scroll-padding-top: 0.25rem;`.




### `.k-scroll-pr-0`

This is equivalent to `scroll-padding-right: 0;`.




### `.k-scroll-pr-1px`

This is equivalent to `scroll-padding-right: 1px;`.




### `.k-scroll-pr-1`

This is equivalent to `scroll-padding-right: 0.25rem;`.




### `.k-scroll-pb-0`

This is equivalent to `scroll-padding-bottom: 0;`.




### `.k-scroll-pb-1px`

This is equivalent to `scroll-padding-bottom: 1px;`.




### `.k-scroll-pb-1`

This is equivalent to `scroll-padding-bottom: 0.25rem;`.




### `.k-scroll-pl-0`

This is equivalent to `scroll-padding-left: 0;`.




### `.k-scroll-pl-1px`

This is equivalent to `scroll-padding-left: 1px;`.




### `.k-scroll-pl-1`

This is equivalent to `scroll-padding-left: 0.25rem;`.




### `.k-scroll-x-0`

This is equivalent to `scroll-padding-inline: 0;`.




### `.k-scroll-x-1px`

This is equivalent to `scroll-padding-inline: 1px;`.




### `.k-scroll-x-1`

This is equivalent to `scroll-padding-inline: 0.25rem;`.




### `.k-scroll-y-0`

This is equivalent to `scroll-padding-block: 0;`.




### `.k-scroll-y-1px`

This is equivalent to `scroll-padding-block: 1px;`.




### `.k-skew-x-0`

This is equivalent to `transform: skewX(0deg);`.




### `.k-skew-x-1`

This is equivalent to `transform: skewX(1deg);`.




### `.k-skew-y-0`

This is equivalent to `transform: skewY(0deg);`.




### `.k-skew-y-1`

This is equivalent to `transform: skewY(1deg);`.




### `.k-stroke-none`

This is equivalent to `stroke: none;`.




### `.k-stroke-inherit`

This is equivalent to `stroke: inherit;`.




### `.k-stroke-currentColor`

This is equivalent to `stroke: currentColor;`.




### `.k-stroke-transparent`

This is equivalent to `stroke: transparent;`.




### `.k-stroke-black`

This is equivalent to `stroke: black;`.




### `.k-stroke-white`

This is equivalent to `stroke: white;`.




### `.k-table-auto`

This is equivalent to `table-layout: auto;`.




### `.k-table-fixed`

This is equivalent to `table-layout: fixed;`.




### `.k-text-left`

This is equivalent to `text-align: left;`.




### `.k-text-right`

This is equivalent to `text-align: right;`.




### `.k-text-center`

This is equivalent to `text-align: center;`.




### `.k-text-justify`

This is equivalent to `text-align: justify;`.




### `.k-text-underline`

This is equivalent to `text-decoration: underline;`.




### `.k-text-overline`

This is equivalent to `text-decoration: overline;`.




### `.k-text-line-through`

This is equivalent to `text-decoration: line-through;`.




### `.k-text-no-underline`

This is equivalent to `text-decoration: none-decoration;`.




### `.k-text-clip`

This is equivalent to `text-overflow: clip;`.




### `.k-text-ellipsis`

This is equivalent to `text-overflow: ellipsis; white-space: nowrap; overflow: hidden;`.




### `.k-text-lowercase`

This is equivalent to `text-transform: lowercase;`.




### `.k-text-uppercase`

This is equivalent to `text-transform: uppercase;`.




### `.k-text-capitalize`

This is equivalent to `text-transform: capitalize;`.




### `.k-touch-action-none`

This is equivalent to `touch-action: none;`.




### `.k-touch-action-auto`

This is equivalent to `touch-action: auto;`.




### `.k-touch-action-pan-x`

This is equivalent to `touch-action: pan-x;`.




### `.k-touch-action-pan-y`

This is equivalent to `touch-action: pan-y;`.




### `.k-touch-action-pan-left`

This is equivalent to `touch-action: pan-left;`.




### `.k-touch-action-pan-right`

This is equivalent to `touch-action: pan-right;`.




### `.k-touch-action-pan-up`

This is equivalent to `touch-action: pan-up;`.




### `.k-touch-action-pan-down`

This is equivalent to `touch-action: pan-down;`.




### `.k-touch-action-pinch-zoom`

This is equivalent to `touch-action: pinch-zoom;`.




### `.k-touch-action-manipulation`

This is equivalent to `touch-action: manipulation;`.




### `.k-flip-h`

This is equivalent to `transform: scaleX( -1 );`.




### `.k-flip-v`

This is equivalent to `transform: scaleY( -1 );`.




### `.k-rotate-0`

This is equivalent to `transform: rotate( 0 );`.




### `.k-rotate-45`

This is equivalent to `transform: rotate( 45deg );`.




### `.k-rotate-90`

This is equivalent to `transform: rotate( 90deg );`.




### `.k-rotate-135`

This is equivalent to `transform: rotate( 135deg );`.




### `.k-rotate-180`

This is equivalent to `transform: rotate( 180deg );`.




### `.k-rotate-225`

This is equivalent to `transform: rotate( 225deg );`.




### `.k-rotate-270`

This is equivalent to `transform: rotate( 270deg );`.




### `.k-rotate-315`

This is equivalent to `transform: rotate( 315deg );`.




### `.k-scale-0`

This is equivalent to `transform: scale( 0, 0 );`.




### `.k-scale-1`

This is equivalent to `transform: scale( 1, 1 );`.




### `.k-scale-2`

This is equivalent to `transform: scale( 2, 2 );`.




### `.k-translate-0`

This is equivalent to `transform: translate( 0, 0 );`.




### `.k-translate-0-50`

This is equivalent to `transform: translate( 0, 50% );`.




### `.k-translate-0-100`

This is equivalent to `transform: translate( 0, 100% );`.




### `.k-translate-50-0`

This is equivalent to `transform: translate( 50%, 0 );`.




### `.k-translate-50-50`

This is equivalent to `transform: translate( 50%, 50% );`.




### `.k-translate-50-100`

This is equivalent to `transform: translate( 50%, 100% );`.




### `.k-translate-100-0`

This is equivalent to `transform: translate( 100%, 0 );`.




### `.k-translate-100-50`

This is equivalent to `transform: translate( 100%, 50% );`.




### `.k-translate-100-100`

This is equivalent to `transform: translate( 100%, 100% );`.




### `.k-origin-center`

This is equivalent to `transform-origin: center;`.




### `.k-origin-top`

This is equivalent to `transform-origin: top;`.




### `.k-origin-right`

This is equivalent to `transform-origin: right;`.




### `.k-origin-bottom`

This is equivalent to `transform-origin: bottom;`.




### `.k-origin-left`

This is equivalent to `transform-origin: left;`.




### `.k-origin-top-left`

This is equivalent to `transform-origin: top-left;`.




### `.k-origin-top-right`

This is equivalent to `transform-origin: top-right;`.




### `.k-origin-bottom-left`

This is equivalent to `transform-origin: bottom-left;`.




### `.k-origin-bottom-right`

This is equivalent to `transform-origin: bottom-right;`.




### `.#{$kendo-prefix}sr-only`

This class could be assigned to elements which should be visually hidden, but remain accessible for screen readers.
        @name .k-sr-only
        @group accessibility




### `.k-user-select-none`

This is equivalent to `user-select: none;`.




### `.k-user-select-auto`

This is equivalent to `user-select: auto;`.




### `.k-user-select-text`

This is equivalent to `user-select: text;`.




### `.k-user-select-all`

This is equivalent to `user-select: all;`.




### `.k-user-select-contain`

This is equivalent to `user-select: contain;`.




### `.k-align-baseline`

This is equivalent to `vertical-align: baseline;`.




### `.k-align-top`

This is equivalent to `vertical-align: top;`.




### `.k-align-middle`

This is equivalent to `vertical-align: middle;`.




### `.k-align-bottom`

This is equivalent to `vertical-align: bottom;`.




### `.k-align-text-top`

This is equivalent to `vertical-align: text-top;`.




### `.k-align-text-bottom`

This is equivalent to `vertical-align: text-bottom;`.




### `.k-align-sub`

This is equivalent to `vertical-align: sub;`.




### `.k-align-super`

This is equivalent to `vertical-align: super;`.




### `.k-visible`

This is equivalent to `visibility: visble;`.




### `.k-invisible`

This is equivalent to `visibility: hidden;`.




### `.k-collapse`

This is equivalent to `visibility: collapse;`.




### `.k-white-space-normal`

This is equivalent to `white-space: normal;`.




### `.k-white-space-nowrap`

This is equivalent to `white-space: nowrap;`.




### `.k-white-space-pre`

This is equivalent to `white-space: pre;`.




### `.k-white-space-pre-wrap`

This is equivalent to `white-space: pre-wrap;`.




### `.k-white-space-pre-line`

This is equivalent to `white-space: pre-line;`.




### `.k-white-space-break-spaces`

This is equivalent to `white-space: break-spaces;`.




### `.k-w-0`

This is equivalent to `width: 0;`.




### `.k-w-1px`

This is equivalent to `width: 1px;`.




### `.k-w-1`

This is equivalent to `width: 0.25rem;`.




### `.k-w-full`

This is equivalent to `min-width: 100%;`.




### `.k-w-screen`

This is equivalent to `width: 100vw;`.




### `.k-w-min`

This is equivalent to `width: min-content;`.




### `.k-w-max`

This is equivalent to `width: max-content;`.




### `.k-w-fit`

This is equivalent to `width: fit-content;`.




### `.k-min-w-0`

This is equivalent to `min-width: 0;`.




### `.k-min-w-1px`

This is equivalent to `min-width: 1px;`.




### `.k-min-w-1`

This is equivalent to `min-width: 0.25rem;`.




### `.k-min-w-full`

This is equivalent to `min-width: 100%;`.




### `.k-min-w-screen`

This is equivalent to `min-width: 100vw;`.




### `.k-min-w-min`

This is equivalent to `min-width: min-content;`.




### `.k-min-w-max`

This is equivalent to `min-width: max-content;`.




### `.k-min-w-fit`

This is equivalent to `min-width: fit-content;`.




### `.k-max-w-0`

This is equivalent to `max-width: 0;`.




### `.k-max-w-1px`

This is equivalent to `max-width: 1px;`.




### `.k-max-w-1`

This is equivalent to `max-width: 0.25rem;`.




### `.k-max-w-full`

This is equivalent to `max-width: 100%;`.




### `.k-max-w-screen`

This is equivalent to `max-width: 100vh;`.




### `.k-max-w-min`

This is equivalent to `max-width: min-content;`.




### `.k-max-w-max`

This is equivalent to `max-width: max-content;`.




### `.k-max-w-fit`

This is equivalent to `max-width: fit-content;`.




### `.k-z-0`

This is equivalent to `z-index: 0;`.




### `.k-z-10`

This is equivalent to `z-index: 10;`.




### `.k-z-20`

This is equivalent to `z-index: 20;`.




### `.k-z-30`

This is equivalent to `z-index: 30;`.




### `.k-z-40`

This is equivalent to `z-index: 40;`.




### `.k-z-50`

This is equivalent to `z-index: 50;`.




### `.k-z-auto`

This is equivalent to `z-index: auto;`.




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
