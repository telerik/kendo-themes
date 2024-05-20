---
title: Customizing Common
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_common
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
    <td>$kendo-icon-size</td>
    <td>Number</td>
    <td><code>16px</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xs</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * .75 )</code></td>
    <td><code>calc(16px * 0.75)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">xtra small icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-sm</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * .875 )</code></td>
    <td><code>calc(16px * 0.875)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-md</td>
    <td>Number</td>
    <td><code>$kendo-icon-size</code></td>
    <td><code>16px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-lg</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 1.25 )</code></td>
    <td><code>calc(16px * 1.25)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xl</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 1.5 )</code></td>
    <td><code>calc(16px * 1.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Extra large icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xxl</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 2 )</code></td>
    <td><code>calc(16px * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Double extra large icon size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-icon-size-xxxl</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-icon-size} * 3 )</code></td>
    <td><code>calc(16px * 3)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Triple extra large icon size.</div></div>
    </td>
</tr>
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
    <td><span class="color-preview" style="background-color: #424242"></span><code>#424242</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-subtle-text</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #666666"></span><code>#666666</code></td>
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
    <td><code>var(--kendo-color-primary, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-link-hover-text</td>
    <td>String</td>
    <td><code>$kendo-color-primary-darker</code></td>
    <td><code>var(--kendo-color-primary-hover, #ea5a51)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Text color of the links on hover.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-sm-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-sm-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Small vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-md-x</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-md-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Medium vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-lg-x</td>
    <td>String</td>
    <td><code>k-spacing(3)</code></td>
    <td><code>var(--kendo-spacing-3, 0.75rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large horizontal padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-padding-lg-y</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Large vertical padding.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, .13)</code></td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, 0.13)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-transition</td>
    <td>List</td>
    <td><code>color .2s ease-in-out, background-color .2s ease-in-out, border-color .2s ease-in-out, box-shadow .2s ease-in-out</code></td>
    <td><code>color 0.2s ease-in-out, background-color 0.2s ease-in-out, border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Transition used across all components.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-filter</td>
    <td>String</td>
    <td><code>grayscale(.1)</code></td>
    <td><code>grayscale(0.1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Filter used for disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-opacity</td>
    <td>Number</td>
    <td><code>.6</code></td>
    <td><code>0.6</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Opacity used for disabled items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-bg</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #fafafa"></span><code>#fafafa</code></td>
    <td><code>var(--kendo-color-surface, #fafafa)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-text</td>
    <td>String</td>
    <td><code>$kendo-body-text</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-border</td>
    <td>String</td>
    <td><code>rgba(black, 0.08)</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-base-gradient</td>
    <td>Null</td>
    <td><code>rgba(black, 0), rgba(black, 0.02)</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient background of the components' chrome area.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-bg</td>
    <td>String</td>
    <td><code>k-try-shade($kendo-base-bg, 0.5)</code></td>
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
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-hover-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
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
    <td><code>var(--kendo-color-primary, #ff6358)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-text</td>
    <td>String</td>
    <td><code>k-contrast-legacy($kendo-selected-bg)</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
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
    <td><code>k-try-shade($kendo-selected-bg, 0.5)</code></td>
    <td><code>var(--kendo-color-primary-hover, #ea5a51)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-text</td>
    <td>String</td>
    <td><code>$kendo-selected-text</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-border</td>
    <td>String</td>
    <td><code>$kendo-base-border</code></td>
    <td><code>var(--kendo-color-border, rgba(0, 0, 0, 0.08))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-selected-hover-gradient</td>
    <td>Null</td>
    <td><code>$kendo-base-gradient</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of selected and hovered items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-disabled-text</td>
    <td>String</td>
    <td><span class="color-preview" style="background-color: #8f8f8f"></span><code>#8f8f8f</code></td>
    <td><code>var(--kendo-color-on-app-surface, #3d3d3d)</code></td>
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
    )
)</code></td>
    <td><code>(1: (font-size: calc(var(--kendo-font-size, 0.875rem) * 8), font-family: var(--kendo-font-family, inherit), line-height: 1.2, font-weight: var(--kendo-font-weight-light, normal), letter-spacing: null), 2: (font-size: calc(var(--kendo-font-size, 0.875rem) * 7), font-family: var(--kendo-font-family, inherit), line-height: 1.2, font-weight: var(--kendo-font-weight-light, normal), letter-spacing: null), 3: (font-size: calc(var(--kendo-font-size, 0.875rem) * 6), font-family: var(--kendo-font-family, inherit), line-height: 1.2, font-weight: var(--kendo-font-weight-light, normal), letter-spacing: null), 4: (font-size: calc(var(--kendo-font-size, 0.875rem) * 5), font-family: var(--kendo-font-family, inherit), line-height: 1.2, font-weight: var(--kendo-font-weight-light, normal), letter-spacing: null))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The displays Map.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

