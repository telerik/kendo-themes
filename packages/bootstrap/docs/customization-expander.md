---
title: Customizing Expander
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_expander
position: 9
---

# Customizing Expander

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
    <td>$kendo-expander-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td><code>var(--kendo-font-size, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td><code>var(--kendo-line-height, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hine height of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-bg</td>
    <td>String</td>
    <td><code>k-color(surface-alt)</code></td>
    <td><code>var(--kendo-color-surface-alt, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border</td>
    <td>String</td>
    <td><code>k-color(border)</code></td>
    <td><code>var(--kendo-color-border, rgba(33, 37, 41, 0.13))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>(inset 0 0 0 3px color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 15%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-text</td>
    <td>String</td>
    <td><code>$kendo-expander-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212529)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-hover-bg</td>
    <td>String</td>
    <td><code>$kendo-list-item-hover-bg</code></td>
    <td><code>var(--kendo-color-base-subtle-hover, #dee2e6)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-focus-shadow</td>
    <td>List</td>
    <td><code>$kendo-list-item-focus-shadow</code></td>
    <td><code>(inset 0 0 0 3px color-mix(in srgb, var(--kendo-color-on-app-surface, #212529) 15%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-title-text</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #0d6efd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-sub-title-text</td>
    <td>String</td>
    <td><code>k-color(subtle)</code></td>
    <td><code>var(--kendo-color-subtle, #565e64)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel sub-title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-indicator-margin-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ExpansionPanel indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(6)</code></td>
    <td><code>var(--kendo-spacing-6, 1.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ExpansionPanel content.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

