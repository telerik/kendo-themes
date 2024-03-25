---
title: Customizing Avatar
description: "Refer to the list of the Kendo UI Nouvelle theme variables available for customization."
slug: variables_kendothemenouvelle_avatar
position: 9
---

# Customizing Avatar

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
    <td>$kendo-avatar-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-family</td>
    <td>String</td>
    <td><code>$kendo-font-family</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-font-size</td>
    <td>Number</td>
    <td><code>$kendo-font-size-md</code></td>
    <td><code>1rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-line-height</td>
    <td>Number</td>
    <td><code>$kendo-line-height-md</code></td>
    <td><code>1.5</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: k-map-get( $kendo-spacing, 4 ),
    md: k-map-get( $kendo-spacing, 8 ),
    lg: k-map-get( $kendo-spacing, 16 )
)</code></td>
    <td><code>(sm: 1rem, md: 2rem, lg: 4rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The sizes of the avatar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-avatar-theme</td>
    <td>Map</td>
    <td><code>k-process-variant-matrices(
    $kendo-avatar-theme-matrix,
    $kendo-avatar-palette-matrix
)</code></td>
    <td><code>(solid-neutral: (bg: #ededed, text: #494949, border: #ededed, gradient: null, shadow: null, outline: null), solid-inverse: (bg: #494949, text: #ffffff, border: #494949, gradient: null, shadow: null, outline: null), solid-primary: (bg: #622331, text: #ffffff, border: #622331, gradient: null, shadow: null, outline: null), solid-info: (bg: #0969da, text: #ffffff, border: #0969da, gradient: null, shadow: null, outline: null), solid-success: (bg: #1a7f37, text: #ffffff, border: #1a7f37, gradient: null, shadow: null, outline: null), solid-warning: (bg: #bc4c00, text: #ffffff, border: #bc4c00, gradient: null, shadow: null, outline: null), solid-error: (bg: #cf222e, text: #ffffff, border: #cf222e, gradient: null, shadow: null, outline: null), outline-neutral: (bg: transparent, text: #767676, border: #767676, gradient: null, shadow: null, outline: null), outline-inverse: (bg: transparent, text: #494949, border: #494949, gradient: null, shadow: null, outline: null), outline-primary: (bg: transparent, text: #622331, border: #622331, gradient: null, shadow: null, outline: null), outline-info: (bg: transparent, text: #0969da, border: #0969da, gradient: null, shadow: null, outline: null), outline-success: (bg: transparent, text: #1a7f37, border: #1a7f37, gradient: null, shadow: null, outline: null), outline-warning: (bg: transparent, text: #bc4c00, border: #bc4c00, gradient: null, shadow: null, outline: null), outline-error: (bg: transparent, text: #cf222e, border: #cf222e, gradient: null, shadow: null, outline: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Theme colors map of the avatar.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

