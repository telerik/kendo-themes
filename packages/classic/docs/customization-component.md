---
title: Customizing Component
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_component
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
    <td><code>if($kendo-enable-color-system, k-color( surface-alt ), $kendo-body-bg)</code></td>
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
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$kendo-grid-text: $kendo-component-text !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-border</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, $kendo-app-border, $kendo-base-border)</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$kendo-grid-border: $kendo-component-border !default;`.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-bg</td>
    <td>String</td>
    <td><code>$kendo-base-bg</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the component header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-component-header-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
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
    <td><code>var(--kendo-color-error, #d92800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the invalid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-invalid-border</td>
    <td>String</td>
    <td><code>$kendo-color-error</code></td>
    <td><code>var(--kendo-color-error, #d92800)</code></td>
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
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #3ea44e)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the valid items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-valid-border</td>
    <td>String</td>
    <td><code>$kendo-color-success</code></td>
    <td><code>var(--kendo-color-success, #3ea44e)</code></td>
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
<tr>
    <td>$kendo-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border color of the disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-opacity</td>
    <td>Number</td>
    <td><code>.6</code></td>
    <td><code>0.6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity of the disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-filter</td>
    <td>String</td>
    <td><code>grayscale(.1)</code></td>
    <td><code>grayscale(0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Filter color of the disabled items.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

