---
title: Customizing Color-preview
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_color-preview
position: 9
---

# Customizing Color-preview

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
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td><code>var(--kendo-border-radius-md, 0.125rem)</code></td>
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
    <td><code>k-get-theme-color-var( neutral-60 )</code></td>
    <td><code>var(--kendo-neutral-60, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-hover-border</td>
    <td>String</td>
    <td><code>k-get-theme-color-var( neutral-60 )</code></td>
    <td><code>var(--kendo-neutral-60, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-bg</td>
    <td>Color</td>
    <td><code>$kendo-color-white</code></td>
    <td><span class="color-preview" style="background-color: #ffffff"></span><code>#ffffff</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-text</td>
    <td>Color</td>
    <td><code>k-get-theme-color( error, 190 )</code></td>
    <td><span class="color-preview" style="background-color: #a80000"></span><code>#a80000</code></td>
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

