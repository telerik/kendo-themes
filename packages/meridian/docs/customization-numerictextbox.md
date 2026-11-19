---
title: Customizing Numerictextbox
description: "Refer to the list of the Kendo UI Meridian theme variables available for customization."
slug: variables_kendothememeridian_numerictextbox
position: 9
---

# Customizing Numerictextbox

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
    <td>$kendo-numeric-textbox-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(base-emphasis) 6%, k-color(surface-alt)) !default;
$kendo-numeric-textbox-spinner-hover-bg: color-mix(in srgb, k-color(base-emphasis) 10%, k-color(surface-alt)) !default;
$kendo-numeric-textbox-spinner-active-bg: color-mix(in srgb, k-color(base-emphasis) 16%, k-color(surface-alt)) !default;

@forward "@progress/kendo-theme-core/scss/components/numerictextbox/_variables.scss" with (
    $kendo-numeric-textbox-hover-bg: $kendo-numeric-textbox-hover-bg,
    $kendo-numeric-textbox-spinner-hover-bg: $kendo-numeric-textbox-spinner-hover-bg,
    $kendo-numeric-textbox-spinner-active-bg: $kendo-numeric-textbox-spinner-active-bg
)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-base-emphasis) 6%, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Numeric Textbox.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-numeric-textbox-spinner-hover-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(base-emphasis) 10%, k-color(surface-alt)) !default;
$kendo-numeric-textbox-spinner-active-bg: color-mix(in srgb, k-color(base-emphasis) 16%, k-color(surface-alt)) !default;

@forward "@progress/kendo-theme-core/scss/components/numerictextbox/_variables.scss" with (
    $kendo-numeric-textbox-hover-bg: $kendo-numeric-textbox-hover-bg,
    $kendo-numeric-textbox-spinner-hover-bg: $kendo-numeric-textbox-spinner-hover-bg,
    $kendo-numeric-textbox-spinner-active-bg: $kendo-numeric-textbox-spinner-active-bg
)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-base-emphasis) 10%, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Numeric Textbox spin buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-numeric-textbox-spinner-active-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(base-emphasis) 16%, k-color(surface-alt)) !default;

@forward "@progress/kendo-theme-core/scss/components/numerictextbox/_variables.scss" with (
    $kendo-numeric-textbox-hover-bg: $kendo-numeric-textbox-hover-bg,
    $kendo-numeric-textbox-spinner-hover-bg: $kendo-numeric-textbox-spinner-hover-bg,
    $kendo-numeric-textbox-spinner-active-bg: $kendo-numeric-textbox-spinner-active-bg
)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-base-emphasis) 16%, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Numeric Textbox spin buttons.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

