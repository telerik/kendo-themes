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
    <td><code>var(--kendo-color-preview-border-radius, k-border-radius(md))</code></td>
    <td><code>var(--kendo-color-preview-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-border-width</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-border-width, 1px)</code></td>
    <td><code>var(--kendo-color-preview-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border width of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-bg</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-bg, transparent)</code></td>
    <td><code>var(--kendo-color-preview-bg, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Default background color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-text</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-text, inherit)</code></td>
    <td><code>var(--kendo-color-preview-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-border, color-mix(in srgb, k-color(on-app-surface) 28%, transparent))</code></td>
    <td><code>var(--kendo-color-preview-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 28%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-hover-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-hover-border, color-mix(in srgb, k-color(on-app-surface) 28%, transparent))</code></td>
    <td><code>var(--kendo-color-preview-hover-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 28%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Hover Border color of the color preview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-bg</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-no-color-bg, k-color(app-surface))</code></td>
    <td><code>var(--kendo-color-preview-no-color-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-text</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-no-color-text, k-color(error-on-surface))</code></td>
    <td><code>var(--kendo-color-preview-no-color-text, var(--kendo-color-error-on-surface, #c50f1f))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-border</td>
    <td>String</td>
    <td><code>var(--kendo-color-preview-no-color-border, currentColor)</code></td>
    <td><code>var(--kendo-color-preview-no-color-border, currentColor)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the color preview when no color is selected.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-no-color-image</td>
    <td>String</td>
    <td><code>k-escape-svg( url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' version='1.1'><line x1='0' x2='20' y1='0' y2='20' stroke='#{$kendo-color-preview-no-color-text}' stroke-width='1'/></svg>") )</code></td>
    <td><code>url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' version='1.1'%3e%3cline x1='0' x2='20' y1='0' y2='20' stroke='var%28--kendo-color-preview-no-color-text, var%28--kendo-color-error-on-surface, %23c50f1f%29%29' stroke-width='1'/%3e%3c/svg%3e")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The preview no color image of the ColorPreview.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-color-preview-transparent-color-image</td>
    <td>String</td>
    <td><code>url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAuSURBVHgBxYyxDQAwDMJIL+YT+DjtzFRliUfLcklqBCRT4eCTxbD6kdL2/LgYXqpvCbs3kBv/AAAAAElFTkSuQmCC")</code></td>
    <td><code>url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAuSURBVHgBxYyxDQAwDMJIL+YT+DjtzFRliUfLcklqBCRT4eCTxbD6kdL2/LgYXqpvCbs3kBv/AAAAAElFTkSuQmCC")</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The preview transparent color image of the ColorPreview.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

