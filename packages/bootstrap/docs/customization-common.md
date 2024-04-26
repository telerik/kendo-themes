---
title: Customizing Common
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_common
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
    <td>$kendo-base-bg</td>
    <td>String</td>
    <td><code>$gray-100</code></td>
    <td><code>var(--kendo-color-surface, #f8f9fa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>String</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-base-bg, 1 )</code></td>
    <td><code>var(--kendo-color-border, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>String</td>
    <td><code>$gray-200</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-hover-bg, 1 )</code></td>
    <td><code>var(--kendo-color-border, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
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
    <td><code>var(--kendo-color-primary, #0d6efd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>String</td>
    <td><code>k-contrast-color( $kendo-selected-bg )</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>String</td>
    <td><code>k-try-shade( $kendo-selected-bg, 1 )</code></td>
    <td><code>var(--kendo-color-primary, #0d6efd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>String</td>
    <td><code>if( $kendo-is-dark-theme, $gray-600, $gray-500)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-display</td>
    <td>Map</td>
    <td><code>(
    1: (
        font-size: $kendo-display1-font-size,
        font-family: $kendo-display1-font-family,
        line-height: $kendo-display1-line-height,
        font-weight: $kendo-display1-font-weight,
        letter-spacing: $kendo-display1-letter-spacing
    ),
    2: (
        font-size: $kendo-display2-font-size,
        font-family: $kendo-display2-font-family,
        line-height: $kendo-display2-line-height,
        font-weight: $kendo-display2-font-weight,
        letter-spacing: $kendo-display2-letter-spacing
    ),
    3: (
        font-size: $kendo-display3-font-size,
        font-family: $kendo-display3-font-family,
        line-height: $kendo-display3-line-height,
        font-weight: $kendo-display3-font-weight,
        letter-spacing: $kendo-display3-letter-spacing
    ),
    4: (
        font-size: $kendo-display4-font-size,
        font-family: $kendo-display4-font-family,
        line-height: $kendo-display4-line-height,
        font-weight: $kendo-display4-font-weight,
        letter-spacing: $kendo-display4-letter-spacing
    ),
)</code></td>
    <td><code>(1: (font-size: 5rem, font-family: null, line-height: 1.2, font-weight: 300, letter-spacing: null), 2: (font-size: 4.5rem, font-family: null, line-height: 1.2, font-weight: 300, letter-spacing: null), 3: (font-size: 4rem, font-family: null, line-height: 1.2, font-weight: 300, letter-spacing: null), 4: (font-size: 3.5rem, font-family: null, line-height: 1.2, font-weight: 300, letter-spacing: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The displays Map</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

