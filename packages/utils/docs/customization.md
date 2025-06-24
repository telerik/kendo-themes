---
title: Customization
description: "Refer to the list of the Kendo UI Theme Utils theme variables available for customization."
slug: variables_kendothemeutils
position: 9
---

# Customization




## Variables

The following table lists the available variables for customizing the Theme Utils theme.

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
    <td>$wcag-dark</td>
    <td></td>
    <td><code>black</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
    </td>
</tr>
<tr>
    <td>$wcag-light</td>
    <td></td>
    <td><code>white</code></td>
    <td></td>
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
    <td></td>
    <td><code>map.get($kendo-spacing, 0)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The none border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xs</td>
    <td></td>
    <td><code>map.get($kendo-spacing, 1px)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-sm</td>
    <td></td>
    <td><code>map.get($kendo-spacing, 0.5)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-md</td>
    <td></td>
    <td><code>map.get($kendo-spacing, 1)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-lg</td>
    <td></td>
    <td><code>map.get($kendo-spacing, 1.5)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xl</td>
    <td></td>
    <td><code>map.get($kendo-spacing, 2)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxl</td>
    <td></td>
    <td><code>map.get($kendo-spacing, 3)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The third largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-xxxl</td>
    <td></td>
    <td><code>map.get($kendo-spacing, 4)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The second largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radius-full</td>
    <td></td>
    <td><code>9999px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The largest border radius used across the Components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-border-radii</td>
    <td></td>
    <td><code>map.merge($_default-border-radii, $kendo-border-radii)</code></td>
    <td></td>
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
    <td></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-black</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #000000"></span><code>#000000</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-rgba-transparent</td>
    <td></td>
    <td><code>rgba(0, 0, 0, 0)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-black</td>
    <td></td>
    <td><code>rgba(black, 0), black</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to black.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-transparent-to-white</td>
    <td></td>
    <td><code>rgba(white, 0), white</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from transparent to white.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-black-to-transparent</td>
    <td></td>
    <td><code>black, rgba(black, 0)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from black to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-white-to-transparent</td>
    <td></td>
    <td><code>white, rgba(white, 0)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that goes from white to transparent.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-gradient-rainbow</td>
    <td></td>
    <td><span class="color-preview" style="background-color: #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000"></span><code>#ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">A gradient that cycles through the colors of the rainbow.<br />Note: you cannot change this value.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-colors</td>
    <td></td>
    <td><code>$_default-colors</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Colors map.</div></div>
    </td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Groups</b><div class="theme-variables-description">The groups of the $kendo-colors </div></div>
    </td>
</tr>
<tr>
    <td>Group</td>
    <td colspan="2">Values</td>
    <td>Description</td>
</tr>
<tr>
    <td>misc</td>
    <td colspan="2"> app-surface, on-app-surface, subtle, surface, surface-alt, border, border-alt</td>
    <td>The Misc variable group.</td>
</tr>
<tr>
    <td>base</td>
    <td colspan="2"> base-subtle, base-subtle-hover, base-subtle-active, base, base-hover, base-active, base-emphasis, base-on-subtle, on-base, base-on-surface</td>
    <td>The Base variable group.</td>
</tr>
<tr>
    <td>primary</td>
    <td colspan="2"> primary-subtle, primary-subtle-hover, primary-subtle-active, primary, primary-hover, primary-active, primary-emphasis, primary-on-subtle, on-primary, primary-on-surface</td>
    <td>The Primary variable group.</td>
</tr>
<tr>
    <td>secondary</td>
    <td colspan="2"> secondary-subtle, secondary-subtle-hover, secondary-subtle-active, secondary, secondary-hover, secondary-active, secondary-emphasis, secondary-on-subtle, on-secondary, secondary-on-surface</td>
    <td>The Secondary variable group.</td>
</tr>
<tr>
    <td>tertiary</td>
    <td colspan="2"> tertiary-subtle, tertiary-subtle-hover, tertiary-subtle-active, tertiary, tertiary-hover, tertiary-active, tertiary-emphasis, tertiary-on-subtle, on-tertiary, tertiary-on-surface</td>
    <td>The Tertiary variable group.</td>
</tr>
<tr>
    <td>info</td>
    <td colspan="2"> info-subtle, info-subtle-hover, info-subtle-active, info, info-hover, info-active, info-emphasis, info-on-subtle, on-info, info-on-surface</td>
    <td>The Info variable group.</td>
</tr>
<tr>
    <td>success</td>
    <td colspan="2"> success-subtle, success-subtle-hover, success-subtle-active, success, success-hover, success-active, success-emphasis, success-on-subtle, on-success, success-on-surface</td>
    <td>The Success variable group.</td>
</tr>
<tr>
    <td>warning</td>
    <td colspan="2"> warning-subtle, warning-subtle-hover, warning-subtle-active, warning, warning-hover, warning-active, warning-emphasis, warning-on-subtle, on-warning, warning-on-surface</td>
    <td>The Warning variable group.</td>
</tr>
<tr>
    <td>error</td>
    <td colspan="2"> error-subtle, error-subtle-hover, error-subtle-active, error, error-hover, error-active, error-emphasis, error-on-subtle, on-error, error-on-surface</td>
    <td>The Error variable group.</td>
</tr>
<tr>
    <td>light</td>
    <td colspan="2"> light-subtle, light-subtle-hover, light-subtle-active, light, light-hover, light-active, light-emphasis, light-on-subtle, on-light, light-on-surface</td>
    <td>The Light variable group.</td>
</tr>
<tr>
    <td>dark</td>
    <td colspan="2"> dark-subtle, dark-subtle-hover, dark-subtle-active, dark, dark-hover, dark-active, dark-emphasis, dark-on-subtle, on-dark, dark-on-surface</td>
    <td>The Dark variable group.</td>
</tr>
<tr>
    <td>inverse</td>
    <td colspan="2"> inverse-subtle, inverse-subtle-hover, inverse-subtle-active, inverse, inverse-hover, inverse-active, inverse-emphasis, inverse-on-subtle, on-inverse, inverse-on-surface</td>
    <td>The Inverse variable group.</td>
</tr>
<tr>
    <td>series-a</td>
    <td colspan="2"> series-a, series-a-bold, series-a-bolder, series-a-subtle, series-a-subtler</td>
    <td>The Series A variable group.</td>
</tr>
<tr>
    <td>series-b</td>
    <td colspan="2"> series-b, series-b-bold, series-b-bolder, series-b-subtle, series-b-subtler</td>
    <td>The Series B variable group.</td>
</tr>
<tr>
    <td>series-c</td>
    <td colspan="2"> series-c, series-c-bold, series-c-bolder, series-c-subtle, series-c-subtler</td>
    <td>The Series C variable group.</td>
</tr>
<tr>
    <td>series-d</td>
    <td colspan="2"> series-d, series-d-bold, series-d-bolder, series-d-subtle, series-d-subtler</td>
    <td>The Series D variable group.</td>
</tr>
<tr>
    <td>series-e</td>
    <td colspan="2"> series-e, series-e-bold, series-e-bolder, series-e-subtle, series-e-subtler</td>
    <td>The Series E variable group.</td>
</tr>
<tr>
    <td>series-f</td>
    <td colspan="2"> series-f, series-f-bold, series-f-bolder, series-f-subtle, series-f-subtler</td>
    <td>The Series F variable group.</td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Properties</b><div class="theme-variables-description">The properties of the $kendo-colors </div></div>
    </td>
</tr>
<tr>
    <td>Type</td>
    <td>Name</td>
    <td colspan="2">Description</td>
</tr>
<tr>
    <td>Color</td>
    <td>app-surface</td>
    <td colspan="2">The background color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-app-surface</td>
    <td colspan="2">The text color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>subtle</td>
    <td colspan="2">The subtle text color.</td>
</tr>
<tr>
    <td>Color</td>
    <td>surface</td>
    <td colspan="2">The background color of the components' chrome area.</td>
</tr>
<tr>
    <td>Color</td>
    <td>surface-alt</td>
    <td colspan="2">The alternative background color of the components' chrome area.</td>
</tr>
<tr>
    <td>Color</td>
    <td>border</td>
    <td colspan="2">The border color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>border-alt</td>
    <td colspan="2">The alternative border color of the application.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle</td>
    <td colspan="2">The base subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle-hover</td>
    <td colspan="2">The base subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-subtle-active</td>
    <td colspan="2">The base subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base</td>
    <td colspan="2">The base background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-hover</td>
    <td colspan="2">The base background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-active</td>
    <td colspan="2">The base background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-emphasis</td>
    <td colspan="2">The emphasized base color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-on-subtle</td>
    <td colspan="2">The text color variable for content on base subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-base</td>
    <td colspan="2">The text color variable for content on base.</td>
</tr>
<tr>
    <td>Color</td>
    <td>base-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle</td>
    <td colspan="2">The primary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle-hover</td>
    <td colspan="2">The primary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-subtle-active</td>
    <td colspan="2">The primary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary</td>
    <td colspan="2">The primary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-hover</td>
    <td colspan="2">The primary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-active</td>
    <td colspan="2">The primary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-emphasis</td>
    <td colspan="2">The emphasized primary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-on-subtle</td>
    <td colspan="2">The text color variable for content on primary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-primary</td>
    <td colspan="2">The text color variable for content on primary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>primary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle</td>
    <td colspan="2">The secondary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle-hover</td>
    <td colspan="2">The secondary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-subtle-active</td>
    <td colspan="2">The secondary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary</td>
    <td colspan="2">The secondary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-hover</td>
    <td colspan="2">The secondary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-active</td>
    <td colspan="2">The secondary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-emphasis</td>
    <td colspan="2">The emphasized secondary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-on-subtle</td>
    <td colspan="2">The text color variable for content on secondary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-secondary</td>
    <td colspan="2">The text color variable for content on secondary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>secondary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle</td>
    <td colspan="2">The tertiary subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle-hover</td>
    <td colspan="2">The tertiary subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-subtle-active</td>
    <td colspan="2">The tertiary subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary</td>
    <td colspan="2">The tertiary background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-hover</td>
    <td colspan="2">The tertiary background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-active</td>
    <td colspan="2">The tertiary background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-emphasis</td>
    <td colspan="2">The emphasized tertiary color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-on-subtle</td>
    <td colspan="2">The text color variable for content on tertiary subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-tertiary</td>
    <td colspan="2">The text color variable for content on tertiary.</td>
</tr>
<tr>
    <td>Color</td>
    <td>tertiary-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle</td>
    <td colspan="2">The info subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle-hover</td>
    <td colspan="2">The info subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-subtle-active</td>
    <td colspan="2">The info subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info</td>
    <td colspan="2">The info background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-hover</td>
    <td colspan="2">The info background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-active</td>
    <td colspan="2">The info background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-emphasis</td>
    <td colspan="2">The emphasized info color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-on-subtle</td>
    <td colspan="2">The text color variable for content on info subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-info</td>
    <td colspan="2">The text color variable for content on info.</td>
</tr>
<tr>
    <td>Color</td>
    <td>info-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle</td>
    <td colspan="2">The success subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle-hover</td>
    <td colspan="2">The success subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-subtle-active</td>
    <td colspan="2">The success subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success</td>
    <td colspan="2">The success background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-hover</td>
    <td colspan="2">The success background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-active</td>
    <td colspan="2">The success background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-emphasis</td>
    <td colspan="2">The emphasized success color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-on-subtle</td>
    <td colspan="2">The text color variable for content on success subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-success</td>
    <td colspan="2">The text color variable for content on success.</td>
</tr>
<tr>
    <td>Color</td>
    <td>success-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle</td>
    <td colspan="2">The warning subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle-hover</td>
    <td colspan="2">The warning subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-subtle-active</td>
    <td colspan="2">The warning subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning</td>
    <td colspan="2">The warning background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-hover</td>
    <td colspan="2">The warning background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-active</td>
    <td colspan="2">The warning background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-emphasis</td>
    <td colspan="2">The emphasized warning color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-on-subtle</td>
    <td colspan="2">The text color variable for content on warning subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-warning</td>
    <td colspan="2">The text color variable for content on warning.</td>
</tr>
<tr>
    <td>Color</td>
    <td>warning-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle</td>
    <td colspan="2">The error subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle-hover</td>
    <td colspan="2">The error subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-subtle-active</td>
    <td colspan="2">The error subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error</td>
    <td colspan="2">The error background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-hover</td>
    <td colspan="2">The error background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-active</td>
    <td colspan="2">The error background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-emphasis</td>
    <td colspan="2">The emphasized error color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-on-subtle</td>
    <td colspan="2">The text color variable for content on error subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-error</td>
    <td colspan="2">The text color variable for content on error.</td>
</tr>
<tr>
    <td>Color</td>
    <td>error-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle</td>
    <td colspan="2">The light subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle-hover</td>
    <td colspan="2">The light subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-subtle-active</td>
    <td colspan="2">The light subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light</td>
    <td colspan="2">The light background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-hover</td>
    <td colspan="2">The light background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-active</td>
    <td colspan="2">The light background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-emphasis</td>
    <td colspan="2">The emphasized light color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-on-subtle</td>
    <td colspan="2">The text color variable for content on light subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-light</td>
    <td colspan="2">The text color variable for content on light.</td>
</tr>
<tr>
    <td>Color</td>
    <td>light-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle</td>
    <td colspan="2">The dark subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle-hover</td>
    <td colspan="2">The dark subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-subtle-active</td>
    <td colspan="2">The dark subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark</td>
    <td colspan="2">The dark background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-hover</td>
    <td colspan="2">The dark background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-active</td>
    <td colspan="2">The dark background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-emphasis</td>
    <td colspan="2">The emphasized dark color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-on-subtle</td>
    <td colspan="2">The text color variable for content on dark subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-dark</td>
    <td colspan="2">The text color variable for content on dark.</td>
</tr>
<tr>
    <td>Color</td>
    <td>dark-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle</td>
    <td colspan="2">The inverse subtle background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle-hover</td>
    <td colspan="2">The inverse subtle background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-subtle-active</td>
    <td colspan="2">The inverse subtle background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse</td>
    <td colspan="2">The inverse background color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-hover</td>
    <td colspan="2">The inverse background color variable for the hover state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-active</td>
    <td colspan="2">The inverse background color variable for the active state.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-emphasis</td>
    <td colspan="2">The emphasized inverse color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-on-subtle</td>
    <td colspan="2">The text color variable for content on inverse subtle.</td>
</tr>
<tr>
    <td>Color</td>
    <td>on-inverse</td>
    <td colspan="2">The text color variable for content on inverse.</td>
</tr>
<tr>
    <td>Color</td>
    <td>inverse-on-surface</td>
    <td colspan="2">The text color variable for content on surface.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a</td>
    <td colspan="2">The series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-bold</td>
    <td colspan="2">The bold series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-bolder</td>
    <td colspan="2">The bolder series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-subtle</td>
    <td colspan="2">The subtle series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-a-subtler</td>
    <td colspan="2">The subtler series A color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b</td>
    <td colspan="2">The series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-bold</td>
    <td colspan="2">The bold series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-bolder</td>
    <td colspan="2">The bolder series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-subtle</td>
    <td colspan="2">The subtle series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-b-subtler</td>
    <td colspan="2">The subtler series B color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c</td>
    <td colspan="2">The series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-bold</td>
    <td colspan="2">The bold series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-bolder</td>
    <td colspan="2">The bolder series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-subtle</td>
    <td colspan="2">The subtle series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-c-subtler</td>
    <td colspan="2">The subtler series C color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d</td>
    <td colspan="2">The series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-bold</td>
    <td colspan="2">The bold series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-bolder</td>
    <td colspan="2">The bolder series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-subtle</td>
    <td colspan="2">The subtle series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-d-subtler</td>
    <td colspan="2">The subtler series D color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e</td>
    <td colspan="2">The series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-bold</td>
    <td colspan="2">The bold series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-bolder</td>
    <td colspan="2">The bolder series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-subtle</td>
    <td colspan="2">The subtle series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-e-subtler</td>
    <td colspan="2">The subtler series E color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f</td>
    <td colspan="2">The series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-bold</td>
    <td colspan="2">The bold series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-bolder</td>
    <td colspan="2">The bolder series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-subtle</td>
    <td colspan="2">The subtle series F color variable.</td>
</tr>
<tr>
    <td>Color</td>
    <td>series-f-subtler</td>
    <td colspan="2">The subtler series F color variable.</td>
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
    <td></td>
    <td><code>$_default-elevation</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global default Elevation map.</div></div>
    </td>
</tr>
</tbody>
</table>

### Palette

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
    <td>$kendo-palette-gray</td>
    <td></td>
    <td><code>$_default-palette-gray</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Gray Palette provides colors to the Base, Secondary, Light, Dark, and Inverse variable groups.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-coral</td>
    <td></td>
    <td><code>$_default-palette-coral</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Coral Palette provides colors to the Primary and Series A variable groups.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-sky-blue</td>
    <td></td>
    <td><code>$_default-palette-sky-blue</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Sky Blue Palette provides colors to the Tertiary variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-green</td>
    <td></td>
    <td><code>$_default-palette-green</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Green Palette provides colors to the Success variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-blue</td>
    <td></td>
    <td><code>$_default-palette-blue</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Blue Palette provides colors to the Info variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-yellow</td>
    <td></td>
    <td><code>$_default-palette-yellow</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Yellow Palette provides colors to the Warning variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-red</td>
    <td></td>
    <td><code>$_default-palette-red</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Red Palette provides colors to the Error variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-lemon-yellow</td>
    <td></td>
    <td><code>$_default-palette-lemon-yellow</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Lemon Yellow Palette provides colors to the Series B variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-spring-green</td>
    <td></td>
    <td><code>$_default-palette-spring-green</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Spring Green Palette provides colors to the Series C variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-royal-blue</td>
    <td></td>
    <td><code>$_default-palette-royal-blue</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Royal Blue Palette provides colors to the Series D variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-lavender-purple</td>
    <td></td>
    <td><code>$_default-palette-lavender-purple</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Lavender Purple Palette provides colors to the Series E variable group.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-palette-flamingo-pink</td>
    <td></td>
    <td><code>$_default-palette-flamingo-pink</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The Flamingo Pink Palette provides colors to the Series F variable group.</div></div>
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
    <td></td>
    <td><code>$_default-spacing</code></td>
    <td></td>
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
    <td></td>
    <td><code>0.875rem</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xxs</td>
    <td></td>
    <td><code>0.5rem</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra extra small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xs</td>
    <td></td>
    <td><code>0.625rem</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-sm</td>
    <td></td>
    <td><code>0.75rem</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-md</td>
    <td></td>
    <td><code>$kendo-font-size</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-lg</td>
    <td></td>
    <td><code>1rem</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-size-xl</td>
    <td></td>
    <td><code>1.25rem</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra large font size across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height</td>
    <td></td>
    <td><code>math.div( 20, 14 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-xs</td>
    <td></td>
    <td><code>1</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra small line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-sm</td>
    <td></td>
    <td><code>1.25</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The small line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-md</td>
    <td></td>
    <td><code>$kendo-line-height</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-lg</td>
    <td></td>
    <td><code>1.5</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The large line height across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-height-em</td>
    <td></td>
    <td><code>calc( #{$kendo-line-height-md} * 1em )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base line height in ems across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight</td>
    <td></td>
    <td><code>400</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-thin</td>
    <td></td>
    <td><code>100</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The thin font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-extra-light</td>
    <td></td>
    <td><code>200</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra light font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-light</td>
    <td></td>
    <td><code>300</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The light font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-normal</td>
    <td></td>
    <td><code>$kendo-font-weight</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The normal font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-medium</td>
    <td></td>
    <td><code>500</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The medium font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-semibold</td>
    <td></td>
    <td><code>600</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The semibold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-bold</td>
    <td></td>
    <td><code>700</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-extra-bold</td>
    <td></td>
    <td><code>800</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The extra bold font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weight-black</td>
    <td></td>
    <td><code>900</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The most pronounced font weight across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing</td>
    <td></td>
    <td><code>null</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tightest</td>
    <td></td>
    <td><code>-.15px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The tightest letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tighter</td>
    <td></td>
    <td><code>-.10px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Slightly looser than the tighter letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-tight</td>
    <td></td>
    <td><code>-.5px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Moderately tight letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-normal</td>
    <td></td>
    <td><code>0px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The normal letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-wide</td>
    <td></td>
    <td><code>.5px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Wide letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-wider</td>
    <td></td>
    <td><code>.10px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Slightly wider than the wide letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacing-widest</td>
    <td></td>
    <td><code>.15px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The widest letter spacing across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans</td>
    <td></td>
    <td><code>Arial, Verdana, Tahoma, "Trebuchet MS", Helvetica, Impact, Gill Sans</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-serif</td>
    <td></td>
    <td><code>"Times New Roman", Georgia, Garamond, Palatino, Baskerville</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-sans-serif</td>
    <td></td>
    <td><code>system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sans-serif font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family-monospace</td>
    <td></td>
    <td><code>SFMono-Regular, Menlo, Monaco, Consolas, "Roboto Mono", "Ubuntu Mono", "Lucida Console", "Courier New", monospace</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The monospace font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-family</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The base font family across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-sizes</td>
    <td></td>
    <td><code>map.merge( $_default-font-sizes, $kendo-font-sizes )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font sizes map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-line-heights</td>
    <td></td>
    <td><code>map.merge( $_default-line-heights, $kendo-line-heights )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line heights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-weights</td>
    <td></td>
    <td><code>map.merge( $_default-font-weights, $kendo-font-weights )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font weights map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-letter-spacings</td>
    <td></td>
    <td><code>map.merge( $_default-letter-spacings, $kendo-letter-spacings )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacings map</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-font-families</td>
    <td></td>
    <td><code>map.merge( $_default-font-families, $kendo-font-families )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font families map</div></div>
    </td>
</tr>
</tbody>
</table>








## Classnames



### `.k-align-content-evenly`

This is equivalent to `align-content: space-evenly;`.




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




### `.k-align-items-self-end`

This is equivalent to `align-items: self-end;`.




### `.k-align-items-normal`

This is equivalent to `align-items: normal;`.




### `.k-align-items-stretch`

This is equivalent to `align-items: stretch;`.




### `.k-align-items-center`

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




### `.k-align-self-self-end`

This is equivalent to `align-self: self-end;`.




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




### `.k-appearance-auto`

This is equivalent to `appearance: auto;`.




### `.k-appearance-none`

This is equivalent to `appearance: none;`.




### `.k-aspect-ratio-video`

This is equivalent to `aspect-ratio: 16 / 9;`.




### `.k-aspect-ratio-auto`

This is equivalent to `aspect-ratio: auto;`.




### `.k-aspect-ratio-1`

This is equivalent to `aspect-ratio: 1;`.




### `.k-aspect-ratio-square`

This is equivalent to `aspect-ratio: 1 / 1;`.




### `.k-backdrop-blur-lg`

This is equivalent to `backdrop-filter: blur(12px);`.




### `.k-backdrop-blur`

This is equivalent to `backdrop-filter: blur(8px);`.




### `.k-backdrop-blur-none`

This is equivalent to `backdrop-filter: blur(0);`.




### `.k-backdrop-blur-sm`

This is equivalent to `backdrop-filter: blur(4px);`.




### `.k-backdrop-blur-md`

This is equivalent to `backdrop-filter: blur(6px);`.




### `.k-bg-clip-text`

This is equivalent to `background-clip: text;`.




### `.k-bg-clip-border`

This is equivalent to `background-clip: border-box;`.




### `.k-bg-clip-padding`

This is equivalent to `background-clip: padding-box;`.




### `.k-bg-clip-content`

This is equivalent to `background-clip: content-box;`.




### `.k-bg-white`

This is equivalent to `background-color: white;`.




### `.k-bg-inherit`

This is equivalent to `background-color: inherit;`.




### `.k-bg-transparent`

This is equivalent to `background-color: transparent;`.




### `.k-bg-black`

This is equivalent to `background-color: black;`.




### `.k-bg-bottom-right`

This is equivalent to `background-position: bottom right;`.




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




### `.k-bg-contain`

This is equivalent to `background-size: contain;`.




### `.k-bg-auto`

This is equivalent to `background-size: auto;`.




### `.k-bg-cover`

This is equivalent to `background-size: cover;`.




### `.k-border-separate`

This is equivalent to `border-collapse: separate;`.




### `.k-border-collapse`

This is equivalent to `border-collapse: collapse;`.




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




### `.k-box-sizing-content`

This is equivalent to `box-sizing: content-box;`.




### `.k-box-sizing-border`

This is equivalent to `box-sizing: border-box;`.




### `.k-clear-none`

This is equivalent to `clear: none;`.




### `.k-clear-left`

This is equivalent to `clear: left;`.




### `.k-clear-right`

This is equivalent to `clear: right;`.




### `.k-clear-both`

This is equivalent to `clear: both;`.




### `.k-col-size-100`

Sets column width to 100% of container.




### `.k-col`

Creates a flexible column that grows to fill available space.




### `.k-col-size-1`

Sets column width to 1% of container.




### `.k-col-size-2`

Sets column width to 2% of container.




### `.k-col-size-3`

Sets column width to 3% of container.




### `.k-col-size-4`

Sets column width to 4% of container.




### `.k-col-size-5`

Sets column width to 5% of container.




### `.k-col-size-6`

Sets column width to 6% of container.




### `.k-col-size-8-3`

Sets column width to 8.3333% of container (1/12).




### `.k-col-size-9-1`

Sets column width to 9.0909% of container (1/11).




### `.k-col-size-10`

Sets column width to 10% of container.




### `.k-col-size-11-1`

Sets column width to 11.1111% of container (1/9).




### `.k-col-size-12-5`

Sets column width to 12.5% of container (1/8).




### `.k-col-size-14-3`

Sets column width to 14.2857% of container (1/7).




### `.k-col-size-16-7`

Sets column width to 16.6666% of container (1/6).




### `.k-col-size-20`

Sets column width to 20% of container.




### `.k-col-size-25`

Sets column width to 25% of container.




### `.k-col-size-33-3`

Sets column width to 33.3333% of container (1/3).




### `.k-col-size-41-6`

Sets column width to 41.6666% of container (5/12).




### `.k-col-size-50`

Sets column width to 50% of container.




### `.k-col-size-58-3`

Sets column width to 58.3333% of container (7/12).




### `.k-col-size-66-6`

Sets column width to 66.6666% of container (2/3).




### `.k-col-size-75`

Sets column width to 75% of container.




### `.k-col-size-83-3`

Sets column width to 83.3333% of container (5/6).




### `.k-col-size-91-6`

Sets column width to 91.6666% of container (11/12).




### `.k-col-gap-hair`

Sets column gap to hair spacing.




### `.k-col-gap-0`

Sets column gap to 0 pixels.




### `.k-col-gap-1px`

Sets column gap to 1 pixel.




### `.k-col-gap-0\.5`

Sets column gap to 0.125rem (2px at 16px base).




### `.k-col-gap-1`

Sets column gap to 0.25rem (4px at 16px base).




### `.k-col-gap-1\.5`

Sets column gap to 0.375rem (6px at 16px base).




### `.k-col-gap-2`

Sets column gap to 0.5rem (8px at 16px base).




### `.k-col-gap-2\.5`

Sets column gap to 0.625rem (10px at 16px base).




### `.k-col-gap-3`

Sets column gap to 0.75rem (12px at 16px base).




### `.k-col-gap-3\.5`

Sets column gap to 0.875rem (14px at 16px base).




### `.k-col-gap-4`

Sets column gap to 1rem (16px at 16px base).




### `.k-col-gap-4\.5`

Sets column gap to 1.125rem (18px at 16px base).




### `.k-col-gap-5`

Sets column gap to 1.25rem (20px at 16px base).




### `.k-col-gap-5\.5`

Sets column gap to 1.375rem (22px at 16px base).




### `.k-col-gap-6`

Sets column gap to 1.5rem (24px at 16px base).




### `.k-col-gap-6\.5`

Sets column gap to 1.625rem (26px at 16px base).




### `.k-col-gap-7`

Sets column gap to 1.75rem (28px at 16px base).




### `.k-col-gap-7\.5`

Sets column gap to 1.875rem (30px at 16px base).




### `.k-col-gap-8`

Sets column gap to 2rem (32px at 16px base).




### `.k-col-gap-9`

Sets column gap to 2.25rem (36px at 16px base).




### `.k-col-gap-10`

Sets column gap to 2.5rem (40px at 16px base).




### `.k-col-gap-11`

Sets column gap to 2.75rem (44px at 16px base).




### `.k-col-gap-12`

Sets column gap to 3rem (48px at 16px base).




### `.k-col-gap-13`

Sets column gap to 3.25rem (52px at 16px base).




### `.k-col-gap-14`

Sets column gap to 3.5rem (56px at 16px base).




### `.k-col-gap-15`

Sets column gap to 3.75rem (60px at 16px base).




### `.k-col-gap-16`

Sets column gap to 4rem (64px at 16px base).




### `.k-col-gap-17`

Sets column gap to 4.25rem (68px at 16px base).




### `.k-col-gap-18`

Sets column gap to 4.5rem (72px at 16px base).




### `.k-col-gap-19`

Sets column gap to 4.75rem (76px at 16px base).




### `.k-col-gap-20`

Sets column gap to 5rem (80px at 16px base).




### `.k-col-gap-21`

Sets column gap to 5.25rem (84px at 16px base).




### `.k-col-gap-22`

Sets column gap to 5.5rem (88px at 16px base).




### `.k-col-gap-23`

Sets column gap to 5.75rem (92px at 16px base).




### `.k-col-gap-24`

Sets column gap to 6rem (96px at 16px base).




### `.k-col-gap-25`

Sets column gap to 7rem (112px at 16px base).




### `.k-col-gap-26`

Sets column gap to 8rem (128px at 16px base).




### `.k-col-gap-27`

Sets column gap to 9rem (144px at 16px base).




### `.k-col-gap-28`

Sets column gap to 10rem (160px at 16px base).




### `.k-col-gap-29`

Sets column gap to 11rem (176px at 16px base).




### `.k-col-gap-30`

Sets column gap to 12rem (192px at 16px base).




### `.k-col-gap-xs`

Sets column gap to extra small spacing.




### `.k-col-gap-sm`

Sets column gap to small spacing.




### `.k-col-gap-md`

Sets column gap to medium spacing.




### `.k-col-gap-lg`

Sets column gap to large spacing.




### `.k-col-gap-xl`

Sets column gap to extra large spacing.




### `.k-col-gap-thin`

Sets column gap to thin spacing.




### `.k-columns-auto`

This is equivalent to `columns: auto;`.The number of columns is determined by other CSS properties, such as column-width.




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




### `.k-cursor-pointer`

This is equivalent to `cursor: pointer;`.




### `.k-cursor-none`

This is equivalent to `cursor: none;`.




### `.k-cursor-auto`

This is equivalent to `cursor: auto;`.




### `.k-cursor-default`

This is equivalent to `cursor: default;`.




### `.k-d-table-cell`

This is equivalent to `display: table-cell;`.




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




### `.k-elevation-9`

Applies elevation level 9 shadow effect.




### `.k-elevation-1`

Applies elevation level 1 shadow effect.




### `.k-elevation-2`

Applies elevation level 2 shadow effect.




### `.k-elevation-3`

Applies elevation level 3 shadow effect.




### `.k-elevation-4`

Applies elevation level 4 shadow effect.




### `.k-elevation-5`

Applies elevation level 5 shadow effect.




### `.k-elevation-6`

Applies elevation level 6 shadow effect.




### `.k-elevation-7`

Applies elevation level 7 shadow effect.




### `.k-elevation-8`

Applies elevation level 8 shadow effect.




### `.k-fill-white`

This is equivalent to `fill: white;`.




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




### `.k-flex-none`

This is equivalent to `flex: 0 0 auto;`.




### `.k-flex-1`

This is equivalent to `flex: 1 1 0%;`.




### `.k-flex-auto`

This is equivalent to `flex: 1 1 auto;`.




### `.k-flex-initial`

This is the same as `flex: initial;` and the shorthand for the default value: `flex: 0 1 auto`. It sizes the item based on its `width`/`height` properties (or its content if not set). It makes the flex item inflexible when there is some free space left, but allows it to shrink to its minimum when there is not enough space. The alignment abilities or `auto` margins can be used to align flex items along the main axis.




### `.k-flex-basis-0`

This is equivalent to `flex-basis: 0;`.




### `.k-flex-basis-auto`

This is equivalent to `flex-basis: auto;`.




### `.k-flex-row`

This is equivalent to `flex-direction: row;`.




### `.k-flex-row-reverse`

This is equivalent to `flex-direction: row-reverse;`.




### `.k-flex-col`

This is equivalent to `flex-direction: column;`.




### `.k-flex-col-reverse`

This is equivalent to `flex-direction: column-reverse;`.




### `.k-flex-xxl-col-reverse`

Responsive: Sets flex-direction to column-reverse on xxl screens and up.




### `.k-flex-xs-row`

Responsive: Sets flex-direction to row on xs screens and up.




### `.k-flex-xs-row-reverse`

Responsive: Sets flex-direction to row-reverse on xs screens and up.




### `.k-flex-xs-col`

Responsive: Sets flex-direction to column on xs screens and up.




### `.k-flex-xs-col-reverse`

Responsive: Sets flex-direction to column-reverse on xs screens and up.




### `.k-flex-sm-row`

Responsive: Sets flex-direction to row on sm screens and up.




### `.k-flex-sm-row-reverse`

Responsive: Sets flex-direction to row-reverse on sm screens and up.




### `.k-flex-sm-col`

Responsive: Sets flex-direction to column on sm screens and up.




### `.k-flex-sm-col-reverse`

Responsive: Sets flex-direction to column-reverse on sm screens and up.




### `.k-flex-md-row`

Responsive: Sets flex-direction to row on md screens and up.




### `.k-flex-md-row-reverse`

Responsive: Sets flex-direction to row-reverse on md screens and up.




### `.k-flex-md-col`

Responsive: Sets flex-direction to column on md screens and up.




### `.k-flex-md-col-reverse`

Responsive: Sets flex-direction to column-reverse on md screens and up.




### `.k-flex-lg-row`

Responsive: Sets flex-direction to row on lg screens and up.




### `.k-flex-lg-row-reverse`

Responsive: Sets flex-direction to row-reverse on lg screens and up.




### `.k-flex-lg-col`

Responsive: Sets flex-direction to column on lg screens and up.




### `.k-flex-lg-col-reverse`

Responsive: Sets flex-direction to column-reverse on lg screens and up.




### `.k-flex-xl-row`

Responsive: Sets flex-direction to row on xl screens and up.




### `.k-flex-xl-row-reverse`

Responsive: Sets flex-direction to row-reverse on xl screens and up.




### `.k-flex-xl-col`

Responsive: Sets flex-direction to column on xl screens and up.




### `.k-flex-xl-col-reverse`

Responsive: Sets flex-direction to column-reverse on xl screens and up.




### `.k-flex-xxl-row`

Responsive: Sets flex-direction to row on xxl screens and up.




### `.k-flex-xxl-row-reverse`

Responsive: Sets flex-direction to row-reverse on xxl screens and up.




### `.k-flex-xxl-col`

Responsive: Sets flex-direction to column on xxl screens and up.




### `.k-flex-grow-0`

This is equivalent to `flex-grow: 0;`.




### `.k-flex-grow`

This is equivalent to `flex-grow: 1;`.




### `.k-flex-shrink-0`

This is equivalent to `flex-shrink: 0;`.




### `.k-flex-shrink`

This is equivalent to `flex-shrink: 1;`.




### `.k-flex-wrap-reverse`

This is equivalent to `flex-wrap: wrap-reverse;`.




### `.k-flex-wrap`

This is equivalent to `flex-wrap: wrap;`.




### `.k-flex-nowrap`

This is equivalent to `flex-wrap: nowrap;`.




### `.k-float-none`

This is equivalent to `float: none;`.




### `.k-float-left`

This is equivalent to `float: left;`.




### `.k-float-right`

This is equivalent to `float: right;`.




### `.k-font-family-serif`

Sets the font family to the default serif font stack.




### `.k-font-family-sans-serif`

Sets the font family to the default sans-serif font stack.




### `.k-font-family-monospace`

Sets the font family to the default monospace font stack.




### `.k-font-family-sans`

Sets the font family to the default sans font stack.




### `.k-font-size-xl`

This is equivalent to `font-size: 20px;`.




### `.k-font-size-xs`

This is equivalent to `font-size: 10px;`.




### `.k-font-size-sm`

This is equivalent to `font-size: 12px;`.




### `.k-font-size-md`

This is equivalent to `font-size: 14px;`.




### `.k-font-size-lg`

This is equivalent to `font-size: 16px;`.




### `.k-font-style-oblique`

This is equivalent to `font-style: oblique;`.




### `.k-font-style-italic`

This is equivalent to `font-style: italic;`.




### `.k-font-style-non-italic`

This is equivalent to `font-style: normal;`.




### `.k-font-black`

This is equivalent to `font-weight: 900;`.




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




### `/// Responsive: Sets gap to 0 at xs+ breakpoint.
/// @example gap: var(--kendo-spacing-0, 0px);
/// @name .k-gap-xs-0
/// @group gap-responsive
/// @contextType css

/// Responsive: Sets gap to 1px at xs+ breakpoint.
/// @example gap: var(--kendo-spacing-1px, 1px);
/// @name .k-gap-xs-1px
/// @group gap-responsive
/// @contextType css

/// Responsive: Sets gap to numeric spacing at xs+ breakpoint.
/// Numeric values range from 0.5 to 30 (0.125rem to 12rem).
/// @example gap: var(--kendo-spacing-1, 0.25rem); // .k-gap-xs-1
/// @example gap: var(--kendo-spacing-4, 1rem); // .k-gap-xs-4
/// @example gap: var(--kendo-spacing-8, 2rem); // .k-gap-xs-8
/// @name .k-gap-xs-`

Responsive gap utilities apply gap at specific breakpoints and up.
Pattern: .k-gap-{breakpoint}-{size}
Available breakpoints: xs, sm, md, lg, xl, xxl
Available sizes: 0, 1px, 0.5-30 (numeric), xs, sm, md, lg, xl, thin, hair




### `.k-gap-xs-0`

Responsive: Sets gap to 0 at xs+ breakpoint.




### `.k-gap-xs-1px`

Responsive: Sets gap to 1px at xs+ breakpoint.




### `.k-gap-xs-{1-30}`

Responsive: Sets gap to numeric spacing at xs+ breakpoint.
Numeric values range from 0.5 to 30 (0.125rem to 12rem).




### `.k-gap-xs-{xs|sm|md|lg|xl}`

Responsive: Sets gap to named spacing at xs+ breakpoint.




### `.k-gap-xs-{thin|hair}`

Responsive: Sets gap to special spacing at xs+ breakpoint.




### `.k-gap-sm-{size}`

Responsive: Gap utilities for sm+ breakpoint.
Same size options as xs+ but applied at sm breakpoint and up.




### `.k-gap-md-{size}`

Responsive: Gap utilities for md+ breakpoint.
Same size options as xs+ but applied at md breakpoint and up.




### `.k-gap-lg-{size}`

Responsive: Gap utilities for lg+ breakpoint.
Same size options as xs+ but applied at lg breakpoint and up.




### `.k-gap-xl-{size}`

Responsive: Gap utilities for xl+ breakpoint.
Same size options as xs+ but applied at xl breakpoint and up.




### `.k-gap-xxl-{size}`

Responsive: Gap utilities for xxl+ breakpoint.
Same size options as xs+ but applied at xxl breakpoint and up.




### `/// Responsive: Sets column-gap to 0 at xs+ breakpoint.
/// @example column-gap: var(--kendo-spacing-0, 0px);
/// @name .k-gap-x-xs-0
/// @group gap-responsive
/// @contextType css

/// Responsive: Sets column-gap to numeric spacing at xs+ breakpoint.
/// Numeric values range from 0.5 to 30 (0.125rem to 12rem).
/// @example column-gap: var(--kendo-spacing-1, 0.25rem); // .k-gap-x-xs-1
/// @example column-gap: var(--kendo-spacing-4, 1rem); // .k-gap-x-xs-4
/// @example column-gap: var(--kendo-spacing-8, 2rem); // .k-gap-x-xs-8
/// @name .k-gap-x-xs-`

Responsive column-gap utilities apply column-gap at specific breakpoints and up.
Pattern: .k-gap-x-{breakpoint}-{size}
Available breakpoints: xs, sm, md, lg, xl, xxl
Available sizes: 0, 1px, 0.5-30 (numeric), xs, sm, md, lg, xl, thin, hair




### `.k-gap-x-xs-0`

Responsive: Sets column-gap to 0 at xs+ breakpoint.




### `.k-gap-x-xs-{1-30}`

Responsive: Sets column-gap to numeric spacing at xs+ breakpoint.
Numeric values range from 0.5 to 30 (0.125rem to 12rem).




### `.k-gap-x-xs-{xs|sm|md|lg|xl}`

Responsive: Sets column-gap to named spacing at xs+ breakpoint.




### `.k-gap-x-xs-{thin|hair}`

Responsive: Sets column-gap to special spacing at xs+ breakpoint.




### `.k-gap-x-{sm|md|lg|xl|xxl}-{size}`

Responsive: Column-gap utilities for other breakpoints.
Same size options as xs+ but applied at respective breakpoints and up.




### `/// Responsive: Sets row-gap to 0 at xs+ breakpoint.
/// @example row-gap: var(--kendo-spacing-0, 0px);
/// @name .k-gap-y-xs-0
/// @group gap-responsive
/// @contextType css

/// Responsive: Sets row-gap to numeric spacing at xs+ breakpoint.
/// Numeric values range from 0.5 to 30 (0.125rem to 12rem).
/// @example row-gap: var(--kendo-spacing-1, 0.25rem); // .k-gap-y-xs-1
/// @example row-gap: var(--kendo-spacing-4, 1rem); // .k-gap-y-xs-4
/// @example row-gap: var(--kendo-spacing-8, 2rem); // .k-gap-y-xs-8
/// @name .k-gap-y-xs-`

Responsive row-gap utilities apply row-gap at specific breakpoints and up.
Pattern: .k-gap-y-{breakpoint}-{size}
Available breakpoints: xs, sm, md, lg, xl, xxl
Available sizes: 0, 1px, 0.5-30 (numeric), xs, sm, md, lg, xl, thin, hair




### `.k-gap-y-xs-0`

Responsive: Sets row-gap to 0 at xs+ breakpoint.




### `.k-gap-y-xs-{1-30}`

Responsive: Sets row-gap to numeric spacing at xs+ breakpoint.
Numeric values range from 0.5 to 30 (0.125rem to 12rem).




### `.k-gap-y-xs-{xs|sm|md|lg|xl}`

Responsive: Sets row-gap to named spacing at xs+ breakpoint.




### `.k-gap-y-xs-{thin|hair}`

Responsive: Sets row-gap to special spacing at xs+ breakpoint.




### `.k-gap-y-{sm|md|lg|xl|xxl}-{size}`

Responsive: Row-gap utilities for other breakpoints.
Same size options as xs+ but applied at respective breakpoints and up.




### `.k-grid-auto-cols-fr`

This is equivalent to `grid-auto-columns: minmax( 0, 1fr );`.




### `.k-grid-auto-cols-auto`

This is equivalent to `grid-auto-columns: auto;`.




### `.k-grid-auto-cols-min`

This is equivalent to `grid-auto-columns: min-content;`.




### `.k-grid-auto-cols-max`

This is equivalent to `grid-auto-columns: max-content;`.




### `.k-grid-flow-unset`

This is equivalent to `grid-auto-flow: unset;`.




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




### `.k-grid-auto-rows-fr`

This is equivalent to `grid-auto-rows: minmax( 0, 1fr );`.




### `.k-grid-auto-rows-auto`

This is equivalent to `grid-auto-rows: auto;`.




### `.k-grid-auto-rows-min`

This is equivalent to `grid-auto-rows: min-content;`.




### `.k-grid-auto-rows-max`

This is equivalent to `grid-auto-rows: max-content;`.




### `/// This is equivalent to `grid-column-end: 1;`.
/// @example grid-column-end: 1;
/// @name .k-col-end-1
/// @group grid-column-end
/// @contextType css

/// Grid column end utilities for values 2-13.
/// @example grid-column-end: 2; // .k-col-end-2
/// @example grid-column-end: 6; // .k-col-end-6
/// @example grid-column-end: 13; // .k-col-end-13
/// @name .k-col-end-`

Grid column end utilities control where an element ends in the grid.




### `.k-col-end-1`

This is equivalent to `grid-column-end: 1;`.




### `.k-col-end-{2-13}`

Grid column end utilities for values 2-13.




### `.k-col-end-auto`

This is equivalent to `grid-column-end: auto;`.




### `/// Responsive: Grid column span utilities for xs+ breakpoint.
/// Pattern: .k-col-span-`

Responsive grid column utilities apply at specific breakpoints and up.
Available breakpoints: xs, sm, md, lg, xl, xxl




### `.k-col-span-xs-{1-12|full|auto}`

Responsive: Grid column span utilities for xs+ breakpoint.
Pattern: .k-col-span-{breakpoint}-{value}
Available values: 1-12, full, auto




### `.k-col-start-xs-{1-13|auto}`

Responsive: Grid column start utilities for xs+ breakpoint.
Pattern: .k-col-start-{breakpoint}-{value}
Available values: 1-13, auto




### `.k-col-end-xs-{1-13|auto}`

Responsive: Grid column end utilities for xs+ breakpoint.
Pattern: .k-col-end-{breakpoint}-{value}
Available values: 1-13, auto




### `.k-col-{span|start|end}-{sm|md|lg|xl|xxl}-{value}`

Responsive: Grid column utilities for other breakpoints.
Same value options as xs+ but applied at respective breakpoints and up.




### `/// This is equivalent to `grid-column: span 1 / span 1;`.
/// @example grid-column: span 1 / span 1;
/// @name .k-col-span-1
/// @group grid-column-span
/// @contextType css

/// Grid column span utilities for values 2-12.
/// @example grid-column: span 2 / span 2; // .k-col-span-2
/// @example grid-column: span 6 / span 6; // .k-col-span-6
/// @example grid-column: span 12 / span 12; // .k-col-span-12
/// @name .k-col-span-`

Grid column span utilities control how many columns an element spans.




### `.k-col-span-1`

This is equivalent to `grid-column: span 1 / span 1;`.




### `.k-col-span-{2-12}`

Grid column span utilities for values 2-12.




### `.k-col-span-full`

This is equivalent to `grid-column: 1 / -1;`.




### `.k-col-span-auto`

This is equivalent to `grid-column: auto;`.




### `.k-col-start-1`

This is equivalent to `grid-column-start: 1;`.




### `.k-col-start--1`

This is equivalent to `grid-column-start: -1;`.




### `.k-col-start-auto`

This is equivalent to `grid-column-start: auto;`.




### `/// Grid column start utilities for values 2-13.
/// @example grid-column-start: 2; // .k-col-start-2
/// @example grid-column-start: 6; // .k-col-start-6
/// @example grid-column-start: 13; // .k-col-start-13
/// @name .k-col-start-`

Grid column start utilities control where an element starts in the grid.




### `.k-col-start-{2-13}`

Grid column start utilities for values 2-13.




### `/// This is equivalent to `grid-row-end: 1;`.
/// @example grid-row-end: 1;
/// @name .k-row-end-1
/// @group grid-row-end
/// @contextType css

/// Grid row end utilities for values 2-13.
/// @example grid-row-end: 2; // .k-row-end-2
/// @example grid-row-end: 6; // .k-row-end-6
/// @example grid-row-end: 13; // .k-row-end-13
/// @name .k-row-end-`

Grid row end utilities control where an element ends in the grid.




### `.k-row-end-1`

This is equivalent to `grid-row-end: 1;`.




### `.k-row-end-{2-13}`

Grid row end utilities for values 2-13.




### `.k-row-end-auto`

This is equivalent to `grid-row-end: auto;`.




### `/// Responsive: Grid row span utilities for xs+ breakpoint.
/// Pattern: .k-row-span-`

Responsive grid row utilities apply at specific breakpoints and up.
Available breakpoints: xs, sm, md, lg, xl, xxl




### `.k-row-span-xs-{1-12|full|auto}`

Responsive: Grid row span utilities for xs+ breakpoint.
Pattern: .k-row-span-{breakpoint}-{value}
Available values: 1-12, full, auto




### `.k-row-start-xs-{1-13|auto}`

Responsive: Grid row start utilities for xs+ breakpoint.
Pattern: .k-row-start-{breakpoint}-{value}
Available values: 1-13, auto




### `.k-row-end-xs-{1-13|auto}`

Responsive: Grid row end utilities for xs+ breakpoint.
Pattern: .k-row-end-{breakpoint}-{value}
Available values: 1-13, auto




### `.k-row-{span|start|end}-{sm|md|lg|xl|xxl}-{value}`

Responsive: Grid row utilities for other breakpoints.
Same value options as xs+ but applied at respective breakpoints and up.




### `/// This is equivalent to `grid-row: span 1 / span 1;`.
/// @example grid-row: span 1 / span 1;
/// @name .k-row-span-1
/// @group grid-row-span
/// @contextType css

/// Grid row span utilities for values 2-12.
/// @example grid-row: span 2 / span 2; // .k-row-span-2
/// @example grid-row: span 6 / span 6; // .k-row-span-6
/// @example grid-row: span 12 / span 12; // .k-row-span-12
/// @name .k-row-span-`

Grid row span utilities control how many rows an element spans.




### `.k-row-span-1`

This is equivalent to `grid-row: span 1 / span 1;`.




### `.k-row-span-{2-12}`

Grid row span utilities for values 2-12.




### `.k-row-span-full`

This is equivalent to `grid-row: 1 / -1;`.




### `.k-row-span-auto`

This is equivalent to `grid-row: auto;`.




### `.k-row-start-1`

This is equivalent to `grid-row-start: 1;`.




### `.k-row-start--1`

This is equivalent to `grid-row-start: -1;`.




### `.k-row-start-auto`

This is equivalent to `grid-row-start: auto;`.




### `/// Grid row start utilities for values 2-13.
/// @example grid-row-start: 2; // .k-row-start-2
/// @example grid-row-start: 6; // .k-row-start-6
/// @example grid-row-start: 13; // .k-row-start-13
/// @name .k-row-start-`

Grid row start utilities control where an element starts in the grid.




### `.k-row-start-{2-13}`

Grid row start utilities for values 2-13.




### `.k-grid-cols-1`

This is equivalent to `grid-template-columns: repeat(1, minmax(0, 1fr));`.




### `.k-grid-cols-2`

This is equivalent to `grid-template-columns: repeat(2, minmax(0, 1fr));`.




### `.k-grid-cols-{3-12}`

Grid template columns utilities for values 3-12.




### `.k-grid-cols-none`

This is equivalent to `grid-template-columns: none;`.




### `/// Responsive: Grid template columns utilities for xs+ breakpoint.
/// @example grid-template-columns: repeat(1, minmax(0, 1fr)); // .k-grid-cols-xs-1
/// @example grid-template-columns: repeat(3, minmax(0, 1fr)); // .k-grid-cols-xs-3
/// @example grid-template-columns: repeat(6, minmax(0, 1fr)); // .k-grid-cols-xs-6
/// @example grid-template-columns: repeat(12, minmax(0, 1fr)); // .k-grid-cols-xs-12
/// @example grid-template-columns: none; // .k-grid-cols-xs-none
/// @name .k-grid-cols-xs-`

Responsive grid template columns utilities apply at specific breakpoints and up.
Pattern: .k-grid-cols-{breakpoint}-{value}
Available breakpoints: xs, sm, md, lg, xl, xxl
Available values: 1-12, none




### `.k-grid-cols-xs-{1-12|none}`

Responsive: Grid template columns utilities for xs+ breakpoint.




### `.k-grid-cols-{sm|md|lg|xl|xxl}-{1-12|none}`

Responsive: Grid template columns utilities for other breakpoints.
Same value options as xs+ but applied at respective breakpoints and up.




### `.k-grid-rows-none`

This is equivalent to `grid-template-rows: none;`.




### `.k-grid-rows-1`

This is equivalent to `grid-template-rows: repeat(1, minmax(0, 1fr));`.




### `.k-grid-rows-2`

This is equivalent to `grid-template-rows: repeat(2, minmax(0, 1fr));`.




### `.k-max-h-fit`

This is equivalent to `max-height: fit-content;`.




### `.k-h-0`

This is equivalent to `height: 0;`.




### `.k-h-1px`

This is equivalent to `height: 1px;`.




### `.k-h-1`

This is equivalent to `height: 0.25rem;`.




### `.k-h-full`

This is equivalent to `height: 100%;`.




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




### `.k-justify-content-evenly`

This is equivalent to `justify-content: space-evenly;`.




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




### `.k-justify-items-last-baseline`

This is equivalent to `justify-items: last baseline;`.




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




### `.k-justify-self-last-baseline`

This is equivalent to `justify-self: last baseline;`.




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




### `.k-letter-spacing-tightest`

Sets letter spacing to the tightest value.




### `.k-letter-spacing-tighter`

Sets letter spacing to the tighter value.




### `.k-letter-spacing-tight`

Sets letter spacing to the tight value.




### `.k-letter-spacing-normal`

Sets letter spacing to the normal value.




### `.k-letter-spacing-wide`

Sets letter spacing to the wide value.




### `.k-letter-spacing-wider`

Sets letter spacing to the wider value.




### `.k-letter-spacing-widest`

Sets letter spacing to the widest value.




### `.k-line-height-lg`

Sets line height to large value.




### `.k-line-height-xs`

Sets line height to extra small value.




### `.k-line-height-sm`

Sets line height to small value.




### `.k-line-height-md`

Sets line height to medium value.




### `.k-list-decimal`

This is equivalent to `list-style-type: decimal;`.The marker of list items is a number.




### `.k-list-none`

This is equivalent to `list-style-type: none;`.




### `.k-list-disc`

This is equivalent to `list-style-type: disc;`.




### `.k-my-auto`

This is equivalent to `margin-block: auto;`.




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




### `.k-object-fit-none`

This is equivalent to `object-fit: none;`.




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




### `.k-object-position-bottom-right`

This is equivalent to `object-position: bottom right;`.




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




### `.k-opacity-1`

This is equivalent to `opacity: 1;`.




### `.k-opacity-0`

This is equivalent to `opacity: 0;`.




### `.k-order-none`

This is equivalent to `order: 0;`.




### `.k-order-first`

This is equivalent to `order: 1;`.




### `.k-order-first`

This is equivalent to `order: -9999;`.




### `.k-order-last`

This is equivalent to `order: 9999;`.




### `.k-outline-white`

This is equivalent to `outline-color: white;`.




### `.k-outline-inherit`

This is equivalent to `outline-color: inherit;`.




### `.k-outline-currentColor`

This is equivalent to `outline-color: currentColor;`.




### `.k-outline-transparent`

This is equivalent to `outline-color: transparent;`.




### `.k-outline-black`

This is equivalent to `outline-color: black;`.




### `.k-outline-offset-8`

This is equivalent to `outline-offset: 8px;`.




### `.k-outline-offset`

This is equivalent to `outline-offset: 1px;`.




### `.k-outline-offset-0`

This is equivalent to `outline-offset: 0;`.




### `.k-outline-offset-2`

This is equivalent to `outline-offset: 2px;`.




### `.k-outline-offset-4`

This is equivalent to `outline-offset: 4px;`.




### `.k-outline-none`

This is equivalent to `outline-style: none;`.




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




### `.k-outline-8`

This is equivalent to `outline-width: 8px;`.




### `.k-outline`

This is equivalent to `outline-width: 1px;`.




### `.k-outline-0`

This is equivalent to `outline-width: 0;`.




### `.k-outline-2`

This is equivalent to `outline-width: 2px;`.




### `.k-outline-4`

This is equivalent to `outline-width: 4px;`.




### `.k-overflow-y-clip`

This is equivalent to `overflow-y: clip;`.




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




### `/// Responsive: Sets horizontal padding to 0 at xs+ breakpoint.
/// @example padding-inline: var(--kendo-spacing-0, 0px);
/// @name .k-px-xs-0
/// @group padding-responsive
/// @contextType css

/// Responsive: Sets horizontal padding to 1px at xs+ breakpoint.
/// @example padding-inline: var(--kendo-spacing-1px, 1px);
/// @name .k-px-xs-1px
/// @group padding-responsive
/// @contextType css

/// Responsive: Sets horizontal padding to numeric spacing at xs+ breakpoint.
/// Numeric values range from 0.5 to 30 (0.125rem to 12rem).
/// @example padding-inline: var(--kendo-spacing-1, 0.25rem); // .k-px-xs-1
/// @example padding-inline: var(--kendo-spacing-4, 1rem); // .k-px-xs-4
/// @example padding-inline: var(--kendo-spacing-8, 2rem); // .k-px-xs-8
/// @name .k-px-xs-`

Responsive padding utilities apply padding at specific breakpoints and up.
Only horizontal (px) and vertical (py) padding have responsive variants.
Available breakpoints: xs, sm, md, lg, xl, xxl
Available sizes: 0, 1px, 0.5-30 (numeric), xs, sm, md, lg, xl, thin, hair, auto




### `.k-px-xs-0`

Responsive: Sets horizontal padding to 0 at xs+ breakpoint.




### `.k-px-xs-1px`

Responsive: Sets horizontal padding to 1px at xs+ breakpoint.




### `.k-px-xs-{0.5-30}`

Responsive: Sets horizontal padding to numeric spacing at xs+ breakpoint.
Numeric values range from 0.5 to 30 (0.125rem to 12rem).




### `.k-px-xs-{xs|sm|md|lg|xl}`

Responsive: Sets horizontal padding to named spacing at xs+ breakpoint.




### `.k-px-xs-{thin|hair}`

Responsive: Sets horizontal padding to special spacing at xs+ breakpoint.




### `.k-px-{sm|md|lg|xl|xxl}-{size}`

Responsive: Horizontal padding utilities for other breakpoints.
Same size options as xs+ but applied at respective breakpoints and up.




### `.k-py-xs-0`

Responsive: Sets vertical padding to 0 at xs+ breakpoint.




### `.k-py-xs-{0.5-30}`

Responsive: Sets vertical padding to numeric spacing at xs+ breakpoint.
Numeric values range from 0.5 to 30 (0.125rem to 12rem).




### `.k-py-xs-{xs|sm|md|lg|xl}`

Responsive: Sets vertical padding to named spacing at xs+ breakpoint.




### `.k-py-xs-{thin|hair}`

Responsive: Sets vertical padding to special spacing at xs+ breakpoint.




### `.k-py-{sm|md|lg|xl|xxl}-{size}`

Responsive: Vertical padding utilities for other breakpoints.
Same size options as xs+ but applied at respective breakpoints and up.




### `.k-place-content-evenly`

This is equivalent to `place-content: space-evenly;`.




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




### `.k-place-items-baseline`

This is equivalent to `place-items: baseline;`.




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




### `.k-place-self-baseline`

This is equivalent to `place-self: baseline;`.




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




### `.k-inset-y-0`

This is equivalent to `inset-block: 0;`.




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




### `.k-pointer-events-auto`

This is equivalent to `pointer-events: auto;`.




### `.k-pointer-events-none`

This is equivalent to `pointer-events: none;`.




### `.k-pos-sticky`

This is equivalent to `position: sticky;`.




### `.k-pos-static`

This is equivalent to `position: static;`.




### `.k-pos-relative`

This is equivalent to `position: relative;`.




### `.k-pos-absolute`

This is equivalent to `position: absolute;`.




### `.k-pos-fixed`

This is equivalent to `position: fixed;`.




### `.k-resize-y`

This is equivalent to `resize: vertical;`.




### `.k-resize`

This is equivalent to `resize: both;`.




### `.k-resize-none`

This is equivalent to `resize: none;`.




### `.k-resize-x`

This is equivalent to `resize: horizontal;`.




### `.k-sr-only`

Visually hides an element while keeping it accessible to screen readers.
This class should be assigned to elements which should be visually hidden, but remain accessible for screen readers.




### `.k-not-sr-only`

Reverses the effect of .k-sr-only, making the element visible again.




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




### `.k-skew-y-1`

This is equivalent to `transform: skewY(1deg);`.




### `.k-skew-x-0`

This is equivalent to `transform: skewX(0deg);`.




### `.k-skew-x-1`

This is equivalent to `transform: skewX(1deg);`.




### `.k-skew-y-0`

This is equivalent to `transform: skewY(0deg);`.




### `.k-space-x-{size}`

Adds horizontal spacing between child elements using margin-inline-start.




### `.k-space-y-{size}`

Adds vertical spacing between child elements using margin-block-start.




### `.k-stroke-white`

This is equivalent to `stroke: white;`.




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




### `.k-table-fixed`

This is equivalent to `table-layout: fixed;`.




### `.k-table-auto`

This is equivalent to `table-layout: auto;`.




### `.k-text-justify`

This is equivalent to `text-align: justify;`.




### `.k-text-left`

This is equivalent to `text-align: left;`.




### `.k-text-right`

This is equivalent to `text-align: right;`.




### `.k-text-center`

This is equivalent to `text-align: center;`.




### `.k-text-white`

This is equivalent to `color: white;`.




### `.k-text-app-surface`

Sets the text color to the app surface color.




### `.k-text-on-app-surface`

Sets the text color to the on app surface color.




### `.k-text-subtle`

Sets the text color to the subtle color.




### `.k-text-surface`

Sets the text color to the surface color.




### `.k-text-surface-alt`

Sets the text color to the surface alt color.




### `.k-text-border`

Sets the text color to the border color.




### `.k-text-border-alt`

Sets the text color to the border alt color.




### `.k-text-base-subtle`

Sets the text color to the base subtle color.




### `.k-text-base-emphasis`

Sets the text color to the base emphasis color.




### `.k-text-primary-subtle`

Sets the text color to the primary subtle color.




### `.k-text-primary`

Sets the text color to the primary color.




### `.k-text-primary-emphasis`

Sets the text color to the primary emphasis color.




### `.k-text-secondary-subtle`

Sets the text color to the secondary subtle color.




### `.k-text-secondary`

Sets the text color to the secondary color.




### `.k-text-secondary-emphasis`

Sets the text color to the secondary emphasis color.




### `.k-text-tertiary-subtle`

Sets the text color to the tertiary subtle color.




### `.k-text-tertiary`

Sets the text color to the tertiary color.




### `.k-text-tertiary-emphasis`

Sets the text color to the tertiary emphasis color.




### `.k-text-info-subtle`

Sets the text color to the info subtle color.




### `.k-text-info`

Sets the text color to the info color.




### `.k-text-info-emphasis`

Sets the text color to the info emphasis color.




### `.k-text-success-subtle`

Sets the text color to the success subtle color.




### `.k-text-success`

Sets the text color to the success color.




### `.k-text-success-emphasis`

Sets the text color to the success emphasis color.




### `.k-text-warning-subtle`

Sets the text color to the warning subtle color.




### `.k-text-warning`

Sets the text color to the warning color.




### `.k-text-warning-emphasis`

Sets the text color to the warning emphasis color.




### `.k-text-error-subtle`

Sets the text color to the error subtle color.




### `.k-text-error`

Sets the text color to the error color.




### `.k-text-error-emphasis`

Sets the text color to the error emphasis color.




### `.k-text-light-subtle`

Sets the text color to the light subtle color.




### `.k-text-light`

Sets the text color to the light color.




### `.k-text-light-emphasis`

Sets the text color to the light emphasis color.




### `.k-text-dark-subtle`

Sets the text color to the dark subtle color.




### `.k-text-dark`

Sets the text color to the dark color.




### `.k-text-dark-emphasis`

Sets the text color to the dark emphasis color.




### `.k-text-inherit`

This is equivalent to `color: inherit;`.




### `.k-text-current`

This is equivalent to `color: currentColor;`.




### `.k-text-transparent`

This is equivalent to `color: transparent;`.




### `.k-text-black`

This is equivalent to `color: black;`.




### `.k-text-no-underline`

This is equivalent to `text-decoration: none-decoration;`.




### `.k-text-underline`

This is equivalent to `text-decoration: underline;`.




### `.k-text-overline`

This is equivalent to `text-decoration: overline;`.




### `.k-text-line-through`

This is equivalent to `text-decoration: line-through;`.




### `.k-text-ellipsis`

This is equivalent to `text-overflow: ellipsis; white-space: nowrap; overflow: hidden;`.




### `.k-text-clip`

This is equivalent to `text-overflow: clip;`.




### `.k-text-capitalize`

This is equivalent to `text-transform: capitalize;`.




### `.k-text-lowercase`

This is equivalent to `text-transform: lowercase;`.




### `.k-text-uppercase`

This is equivalent to `text-transform: uppercase;`.




### `.k-touch-action-manipulation`

This is equivalent to `touch-action: manipulation;`.




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




### `.k-flip-h`

This is equivalent to `transform: scaleX( -1 );`.




### `.k-flip-v`

This is equivalent to `transform: scaleY( -1 );`.




### `.k-rotate-315`

This is equivalent to `transform: rotate( 315deg );`.




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




### `.k-scale-2`

This is equivalent to `transform: scale( 2, 2 );`.




### `.k-scale-0`

This is equivalent to `transform: scale( 0, 0 );`.




### `.k-scale-1`

This is equivalent to `transform: scale( 1, 1 );`.




### `.k-translate-100-100`

This is equivalent to `transform: translate( 100%, 100% );`.




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




### `.k-origin-bottom-right`

This is equivalent to `transform-origin: bottom-right;`.




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




### `.#{$kendo-prefix}sr-only`

This class could be assigned to elements which should be visually hidden, but remain accessible for screen readers.
            @name .k-sr-only
            @group accessibility




### `.k-user-select-contain`

This is equivalent to `user-select: contain;`.




### `.k-user-select-none`

This is equivalent to `user-select: none;`.




### `.k-user-select-auto`

This is equivalent to `user-select: auto;`.




### `.k-user-select-text`

This is equivalent to `user-select: text;`.




### `.k-user-select-all`

This is equivalent to `user-select: all;`.




### `.k-align-super`

This is equivalent to `vertical-align: super;`.




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




### `.k-collapse`

This is equivalent to `visibility: collapse;`.




### `.k-visible`

This is equivalent to `visibility: visble;`.




### `.k-invisible`

This is equivalent to `visibility: hidden;`.




### `.k-white-space-break-spaces`

This is equivalent to `white-space: break-spaces;`.




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




### `.k-max-w-fit`

This is equivalent to `max-width: fit-content;`.




### `.k-w-0`

This is equivalent to `width: 0;`.




### `.k-w-1px`

This is equivalent to `width: 1px;`.




### `.k-w-1`

This is equivalent to `width: 0.25rem;`.




### `.k-w-full`

This is equivalent to `width: 100%;`.




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




### `.k-will-change-transform`

This is equivalent to `will-change: transform;`.




### `.k-will-change-auto`

This is equivalent to `will-change: auto;`.




### `.k-will-change-scroll`

This is equivalent to `will-change: scroll-position;`.




### `.k-will-change-contents`

This is equivalent to `will-change: contents;`.




### `.k-z-auto`

This is equivalent to `z-index: auto;`.




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




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
