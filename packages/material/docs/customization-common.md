---
title: Customizing Common
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_common
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
    <td>$kendo-border-radius</td>
    <td>Number</td>
    <td><code>4px</code></td>
    <td><code>4px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border radius for all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-weekend-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the weekend cells in the Calendar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-calendar-navigation-hover-text</td>
    <td>String</td>
    <td><code>$kendo-link-hover-text</code></td>
    <td><code>var(--kendo-color-secondary-hover, #d31857)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered items in the Calendar navigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>String</td>
    <td><code>k-map-get( $theme, base-bg )</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>String</td>
    <td><code>k-map-get( $theme, component-text )</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212121)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>String</td>
    <td><code>rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .08 )</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.12))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the components' chrome area.</div></div>
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
    <td><code>k-map-get( $theme, hover-bg )</code></td>
    <td><code>var(--kendo-color-base-hover, #ebebeb)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-text</td>
    <td>String</td>
    <td><code>$kendo-base-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212121)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>String</td>
    <td><code>rgba( $kendo-base-border, .15 )</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.12))</code></td>
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
    <td><code>$kendo-color-secondary</code></td>
    <td><code>var(--kendo-color-secondary, #e51a5f)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>String</td>
    <td><code>$kendo-color-secondary-contrast</code></td>
    <td><code>var(--kendo-color-on-secondary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>String</td>
    <td><code>rgba( $kendo-base-border, .1 )</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.12))</code></td>
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
    <td><code>k-map-get( $theme, disabled-text )</code></td>
    <td><code>var(--kendo-color-on-app-surface, #212121)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-list-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: (
        font-size: $kendo-list-sm-font-size,
        line-height: $kendo-list-sm-line-height,
        header-padding-x: $kendo-list-sm-header-padding-x,
        header-padding-y: $kendo-list-sm-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-sm-item-padding-x,
        item-padding-y: $kendo-list-sm-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-sm-group-item-padding-x,
        group-item-padding-y: $kendo-list-sm-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    ),
    md: (
        font-size: $kendo-list-md-font-size,
        line-height: $kendo-list-md-line-height,
        header-padding-x: $kendo-list-md-header-padding-x,
        header-padding-y: $kendo-list-md-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-md-item-padding-x,
        item-padding-y: $kendo-list-md-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-md-group-item-padding-x,
        group-item-padding-y: $kendo-list-md-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    ),
    lg: (
        font-size: $kendo-list-lg-font-size,
        line-height: $kendo-list-lg-line-height,
        header-padding-x: $kendo-list-lg-header-padding-x,
        header-padding-y: $kendo-list-lg-header-padding-y,
        header-font-size: null,
        header-line-height: null,
        item-padding-x: $kendo-list-lg-item-padding-x,
        item-padding-y: $kendo-list-lg-item-padding-y,
        item-font-size: null,
        item-line-height: null,
        group-item-padding-x: $kendo-list-lg-group-item-padding-x,
        group-item-padding-y: $kendo-list-lg-group-item-padding-y,
        group-item-font-size: null,
        group-item-line-height: null
    )
)</code></td>
    <td><code>(sm: (font-size: var(--kendo-font-size, inherit), line-height: 1.4285714286, header-padding-x: var(--kendo-spacing-4, 1rem), header-padding-y: var(--kendo-spacing-1\.5, 0.375rem), header-font-size: null, header-line-height: null, item-padding-x: var(--kendo-spacing-4, 1rem), item-padding-y: var(--kendo-spacing-1\.5, 0.375rem), item-font-size: null, item-line-height: null, group-item-padding-x: var(--kendo-spacing-4, 1rem), group-item-padding-y: var(--kendo-spacing-1\.5, 0.375rem), group-item-font-size: null, group-item-line-height: null), md: (font-size: var(--kendo-font-size, inherit), line-height: 1.4285714286, header-padding-x: var(--kendo-spacing-4, 1rem), header-padding-y: var(--kendo-spacing-2, 0.5rem), header-font-size: null, header-line-height: null, item-padding-x: var(--kendo-spacing-4, 1rem), item-padding-y: var(--kendo-spacing-2, 0.5rem), item-font-size: null, item-line-height: null, group-item-padding-x: var(--kendo-spacing-4, 1rem), group-item-padding-y: var(--kendo-spacing-2, 0.5rem), group-item-font-size: null, group-item-line-height: null), lg: (font-size: var(--kendo-font-size-lg, inherit), line-height: 1.5, header-padding-x: var(--kendo-spacing-4, 1rem), header-padding-y: var(--kendo-spacing-2, 0.5rem), header-font-size: null, header-line-height: null, item-padding-x: var(--kendo-spacing-4, 1rem), item-padding-y: var(--kendo-spacing-2, 0.5rem), item-font-size: null, item-line-height: null, group-item-padding-x: var(--kendo-spacing-4, 1rem), group-item-padding-y: var(--kendo-spacing-2\.5, 0.625rem), group-item-font-size: null, group-item-line-height: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the sizes of the List.<br /> @group list</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

