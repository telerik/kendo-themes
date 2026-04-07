---
title: Customizing Component
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_component
position: 9
---

# Customizing Component

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
    <td>$kendo-component-bg</td>
    <td>String</td>
    <td><code>$kendo-body-bg</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$kendo-grid-bg: $kendo-component-bg !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-text</td>
    <td>String</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$kendo-grid-text: $kendo-component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-border</td>
    <td>String</td>
    <td><code>rgba(if($kendo-is-dark-theme, $kendo-color-white, $kendo-color-black), 0.08)</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$kendo-grid-border: $kendo-component-border !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Gradient of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-text</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #f31700)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #f31700)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-text</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-border</td>
    <td>Color</td>
    <td><code>$kendo-color-success</code></td>
    <td><span class="color-preview" style="background-color: #37b400"></span><code>#37b400</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-shadow</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Shadow of the valid items.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

