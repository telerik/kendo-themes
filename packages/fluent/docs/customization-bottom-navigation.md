---
title: Customizing Bottom-navigation
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_bottom-navigation
position: 9
---

# Customizing Bottom-navigation

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
    <td>$kendo-bottom-nav-padding-x</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 1.5 )</code></td>
    <td><code>0.375rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-padding-y</td>
    <td>Number</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>0.375rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-gap</td>
    <td>Number</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>0.375rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the BottomNavigation items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-border-width</td>
    <td>List</td>
    <td><code>1px 0px 0px 0px</code></td>
    <td><code>1px 0px 0px 0px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-font-family, inherit)</code></td>
    <td><code>var(--kendo-font-family, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-font-size-md, 1rem )</code></td>
    <td><code>var(--kendo-font-size-md, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-md, normal )</code></td>
    <td><code>var(--kendo-line-height-md, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-letter-spacing</td>
    <td>Number</td>
    <td><code>.2px</code></td>
    <td><code>0.2px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The letter spacing of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-x</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td><code>0.5rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-y</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-width</td>
    <td>Number</td>
    <td><code>72px</code></td>
    <td><code>72px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-max-width</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-min-height</td>
    <td>Calculation</td>
    <td><code>calc( var( --kendo-icon-size, 1.5rem ) * 2 + (#{$kendo-bottom-nav-item-padding-y} * 2) )</code></td>
    <td><code>calc(var(--kendo-icon-size, 1.5rem) * 2 + 0.125rem * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-md} )</code></td>
    <td><code>var(--kendo-border-radius-md, 0.125rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-gap</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td><code>0.25rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-focus-offset</td>
    <td>Number</td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td><code>0.125rem</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the focused BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-focus-outline-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-focus-outline-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-box-shadow-depth-4, none )</code></td>
    <td><code>var(--kendo-box-shadow-depth-4, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-brand-colors</td>
    <td>Map</td>
    <td><code>(
    primary: primary,
    error: error,
    success: success,
    info: info,
    secondary: neutral,
    tertiary: tertiary,
 )</code></td>
    <td><code>(primary: primary, error: error, success: success, info: info, secondary: neutral, tertiary: tertiary)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme variations for the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-theme-colors</td>
    <td>Map</td>
    <td><code>()</code></td>
    <td><code>(solid: (primary: (bg: var(--kendo-primary-100, inherit), text: #ffffff, border: var(--kendo-primary-100, inherit), focus-bg: var(--kendo-primary-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-primary-100, inherit), focus-outline: inherit, active-bg: var(--kendo-primary-120, inherit), active-text: #ffffff, active-border: var(--kendo-primary-120, inherit), disabled-bg: inherit, disabled-text: var(--kendo-primary-40, inherit), disabled-border: var(--kendo-disabled-border, inherit)), error: (bg: var(--kendo-error-100, inherit), text: #ffffff, border: var(--kendo-error-100, inherit), focus-bg: var(--kendo-error-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-error-100, inherit), focus-outline: inherit, active-bg: var(--kendo-error-120, inherit), active-text: #ffffff, active-border: var(--kendo-error-120, inherit), disabled-bg: inherit, disabled-text: var(--kendo-error-40, inherit), disabled-border: var(--kendo-disabled-border, inherit)), success: (bg: var(--kendo-success-100, inherit), text: #ffffff, border: var(--kendo-success-100, inherit), focus-bg: var(--kendo-success-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-success-100, inherit), focus-outline: inherit, active-bg: var(--kendo-success-120, inherit), active-text: #ffffff, active-border: var(--kendo-success-120, inherit), disabled-bg: inherit, disabled-text: var(--kendo-success-40, inherit), disabled-border: var(--kendo-disabled-border, inherit)), info: (bg: var(--kendo-info-100, inherit), text: #ffffff, border: var(--kendo-info-100, inherit), focus-bg: var(--kendo-info-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-info-100, inherit), focus-outline: inherit, active-bg: var(--kendo-info-120, inherit), active-text: #ffffff, active-border: var(--kendo-info-120, inherit), disabled-bg: inherit, disabled-text: var(--kendo-info-40, inherit), disabled-border: var(--kendo-disabled-border, inherit)), secondary: (bg: var(--kendo-neutral-100, inherit), text: #ffffff, border: var(--kendo-neutral-100, inherit), focus-bg: var(--kendo-neutral-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-neutral-100, inherit), focus-outline: inherit, active-bg: var(--kendo-neutral-120, inherit), active-text: #ffffff, active-border: var(--kendo-neutral-120, inherit), disabled-bg: inherit, disabled-text: var(--kendo-neutral-40, inherit), disabled-border: var(--kendo-disabled-border, inherit)), tertiary: (bg: var(--kendo-tertiary-100, inherit), text: #ffffff, border: var(--kendo-tertiary-100, inherit), focus-bg: var(--kendo-tertiary-100, inherit), focus-text: #ffffff, focus-border: var(--kendo-tertiary-100, inherit), focus-outline: inherit, active-bg: var(--kendo-tertiary-120, inherit), active-text: #ffffff, active-border: var(--kendo-tertiary-120, inherit), disabled-bg: inherit, disabled-text: var(--kendo-tertiary-40, inherit), disabled-border: var(--kendo-disabled-border, inherit)), warning: (bg: var(--kendo-warning-100, inherit), text: var(--kendo-neutral-160, inherit), border: var(--kendo-warning-100, inherit), focus-bg: var(--kendo-warning-100, inherit), focus-text: var(--kendo-neutral-160, inherit), focus-border: var(--kendo-warning-100, inherit), focus-outline: #ffffff, active-bg: var(--kendo-warning-120, inherit), active-text: var(--kendo-neutral-190, inherit), active-border: var(--kendo-warning-120, inherit), disabled-bg: inherit, disabled-text: var(--kendo-neutral-120, inherit), disabled-border: var(--kendo-disabled-border, inherit)), dark: (bg: var(--kendo-neutral-160, inherit), text: #ffffff, border: var(--kendo-neutral-160, inherit), focus-bg: var(--kendo-neutral-160, inherit), focus-text: #ffffff, focus-border: var(--kendo-neutral-160, inherit), focus-outline: #ffffff, active-bg: var(--kendo-neutral-180, inherit), active-text: #ffffff, active-border: var(--kendo-neutral-180, inherit), disabled-bg: inherit, disabled-text: var(--kendo-neutral-60, inherit), disabled-border: var(--kendo-disabled-border, inherit)), light: (bg: var(--kendo-neutral-50, inherit), text: var(--kendo-neutral-160, inherit), border: var(--kendo-neutral-50, inherit), focus-bg: var(--kendo-neutral-50, inherit), focus-text: var(--kendo-neutral-190, inherit), focus-border: var(--kendo-neutral-50, inherit), focus-outline: #ffffff, active-bg: var(--kendo-neutral-70, inherit), active-text: var(--kendo-neutral-190, inherit), active-border: var(--kendo-neutral-70, inherit), disabled-bg: inherit, disabled-text: var(--kendo-neutral-120, inherit), disabled-border: var(--kendo-disabled-border, inherit))), flat: (primary: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-neutral-30, inherit), focus-bg: inherit, focus-text: var(--kendo-primary-100, inherit), focus-border: transparent, focus-outline: var(--kendo-primary-100, inherit), active-bg: inherit, active-text: var(--kendo-primary-100, inherit), active-border: transparent, disabled-bg: initial, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), error: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-neutral-30, inherit), focus-bg: inherit, focus-text: var(--kendo-error-100, inherit), focus-border: transparent, focus-outline: var(--kendo-error-100, inherit), active-bg: inherit, active-text: var(--kendo-error-100, inherit), active-border: transparent, disabled-bg: initial, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), success: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-neutral-30, inherit), focus-bg: inherit, focus-text: var(--kendo-success-100, inherit), focus-border: transparent, focus-outline: var(--kendo-success-100, inherit), active-bg: inherit, active-text: var(--kendo-success-100, inherit), active-border: transparent, disabled-bg: initial, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), info: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-neutral-30, inherit), focus-bg: inherit, focus-text: var(--kendo-info-100, inherit), focus-border: transparent, focus-outline: var(--kendo-info-100, inherit), active-bg: inherit, active-text: var(--kendo-info-100, inherit), active-border: transparent, disabled-bg: initial, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), secondary: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-neutral-30, inherit), focus-bg: inherit, focus-text: var(--kendo-neutral-100, inherit), focus-border: transparent, focus-outline: var(--kendo-neutral-100, inherit), active-bg: inherit, active-text: var(--kendo-neutral-100, inherit), active-border: transparent, disabled-bg: initial, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), tertiary: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-neutral-30, inherit), focus-bg: inherit, focus-text: var(--kendo-tertiary-100, inherit), focus-border: transparent, focus-outline: var(--kendo-tertiary-100, inherit), active-bg: inherit, active-text: var(--kendo-tertiary-100, inherit), active-border: transparent, disabled-bg: initial, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), warning: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-warning-100, inherit), focus-bg: inherit, focus-text: var(--kendo-warning-100, inherit), focus-border: transparent, focus-outline: var(--kendo-warning-100, inherit), active-bg: inherit, active-text: var(--kendo-warning-100, inherit), active-border: transparent, disabled-bg: initial, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), dark: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: var(--kendo-neutral-140, inherit), focus-bg: inherit, focus-text: var(--kendo-neutral-160, inherit), focus-border: transparent, focus-outline: var(--kendo-neutral-130, inherit), active-bg: inherit, active-text: var(--kendo-neutral-170, inherit), active-border: transparent, disabled-bg: inherit, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial), light: (bg: #ffffff, text: var(--kendo-neutral-130, inherit), border: transparent, focus-bg: inherit, focus-text: var(--kendo-neutral-130, inherit), focus-border: transparent, focus-outline: var(--kendo-neutral-130, inherit), active-bg: inherit, active-text: var(--kendo-neutral-130, inherit), active-border: transparent, disabled-bg: inherit, disabled-text: var(--kendo-disabled-text, inherit), disabled-border: initial)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme colors map for the BottomNavigation variations.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

