---
title: Customizing Common
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_common
position: 9
---

# Customizing Common

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
    <td>$kendo-body-bg</td>
    <td>String</td>
    <td><code>$kendo-color-white</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-body-text</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #272727"></span><code>#272727</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-subtle-text</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #646464"></span><code>#646464</code></td>
    <td><code>var(--kendo-color-subtle, #666666)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Subtle text color.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-hover-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links on hover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #f0f0f0"></span><code>#f0f0f0</code></td>
    <td><code>var(--kendo-color-surface, #f0f0f0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>String</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-base-bg, 2 )</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>Null</td>
    <td><code>rgba( white, .1 ), rgba( white, 0 )</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-base-bg, 1 )</code></td>
    <td><code>var(--kendo-color-base-hover, #dddddd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #272727)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-hover-bg, 2 )</code></td>
    <td><code>var(--kendo-color-border, #cacaca)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>String</td>
    <td><code>k-contrast-legacy( $kendo-selected-bg )</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-selected-bg, 2 )</code></td>
    <td><code>var(--kendo-color-primary, #f35800)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-bg</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-selected-bg, 1 )</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-text</td>
    <td>String</td>
    <td><code>k-contrast-legacy( $kendo-selected-hover-bg )</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-border</td>
    <td>String</td>
    <td><code>$kendo-selected-border</code></td>
    <td><code>var(--kendo-color-primary-hover, #e05100)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-selected-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-opacity</td>
    <td>Number</td>
    <td><code>null</code></td>
    <td><code>0.6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The opacity of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-filter</td>
    <td>String</td>
    <td><code>null</code></td>
    <td><code>grayscale(0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The filter of disabled items.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

