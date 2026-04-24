---
title: Customizing Dialog
description: "Refer to the list of the Kendo UI Meridian theme variables available for customization."
slug: variables_kendothememeridian_dialog
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
    <td><code>k-translucency-bg(k-color(surface-alt))</code></td>
    <td><code>oklch(from var(--kendo-color-surface-alt) l c h / calc(100% - calc(var(--kendo-translucency-base))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Dialog titlebar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-titlebar-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface)</code></td>
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
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-buttongroup-border-width</td>
    <td>Number</td>
    <td><code>0</code></td>
    <td><code>0</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the top border of the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-button-spacing</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Dialog action buttons.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-dialog-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Dialog.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

