---
title: Customizing ColorPreview
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_color-preview
position: 9
---

# Customizing ColorPreview

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
    <td>$kendo-color-preview-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default background color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-text</td>
    <td>String</td>
    <td><code>inherit</code></td>
    <td><code>inherit</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 28%, transparent), k-get-theme-color-var( neutral-60 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-hover-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 28%, transparent), k-get-theme-color-var( neutral-60 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 28%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), $kendo-color-white)</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-text</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( error-on-surface ), k-get-theme-color( error, 190 ))</code></td>
    <td><code>var(--kendo-color-error-on-surface, #a4262c)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-border</td>
    <td>String</td>
    <td><code>currentColor</code></td>
    <td><code>currentColor</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color preview when no color is selected.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

