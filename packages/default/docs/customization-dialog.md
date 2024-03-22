---
title: Customizing Dialog
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_dialog
position: 9
---

# Customizing Dialog

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
    <td>$kendo-dialog-titlebar-bg</td>
    <td>String</td>
    <td><code>$kendo-component-header-bg</code></td>
    <td><code>var(--kendo-color-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-text</td>
    <td>String</td>
    <td><code>$kendo-component-header-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-border</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-x</td>
    <td>Number</td>
    <td><code>$kendo-actions-padding-x</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-actions-padding-y</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the top border of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-button-spacing</td>
    <td>Number</td>
    <td><code>$kendo-actions-button-spacing</code></td>
    <td><code>8px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-theme-colors</td>
    <td>Map</td>
    <td><code>(
    "primary": k-map-get($kendo-theme-colors, "primary"),
    "light": k-map-get($kendo-theme-colors, "light"),
    "dark": k-map-get($kendo-theme-colors, "dark")
)</code></td>
    <td><code>("primary": var(--kendo-color-primary, #ff6358), "light": var(--kendo-color-light, #ebebeb), "dark": var(--kendo-color-dark, #3d3d3d))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the Dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

