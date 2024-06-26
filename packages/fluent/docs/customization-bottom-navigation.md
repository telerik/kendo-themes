---
title: Customizing BottomNavigation
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_bottom-navigation
position: 9
---

# Customizing BottomNavigation

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
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-padding-y</td>
    <td>String</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-gap</td>
    <td>String</td>
    <td><code>$kendo-bottom-nav-padding-x</code></td>
    <td><code>var(--kendo-spacing-1\.5, 0.375rem)</code></td>
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
    <td><code>var( --kendo-font-size, 1rem )</code></td>
    <td><code>var(--kendo-font-size, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-xs, normal )</code></td>
    <td><code>var(--kendo-line-height-xs, normal)</code></td>
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
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
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
    <td><code>calc(var(--kendo-icon-size, 1.5rem) * 2 + var(--kendo-spacing-0\.5, 0.125rem) * 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the BottomNavigation item.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-item-focus-offset</td>
    <td>String</td>
    <td><code>k-spacing(0.5)</code></td>
    <td><code>var(--kendo-spacing-0\.5, 0.125rem)</code></td>
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
    secondary: if($kendo-enable-color-system, secondary, neutral),
    tertiary: tertiary,
 )</code></td>
    <td><ul><li>primary: primary</li><li>error: error</li><li>success: success</li><li>info: info</li><li>secondary: secondary</li><li>tertiary: tertiary</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The theme variations for the BottomNavigation.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-bottom-nav-theme-colors</td>
    <td>Map</td>
    <td><code>()</code></td>
    <td><ul><li>solid: "primary":{"bg":"var(--kendo-color-primary, #0078d4)","text":"var(--kendo-color-on-primary, #ffffff)","border":"var(--kendo-color-primary, #0078d4)","focus-bg":"var(--kendo-color-primary, #0078d4)","focus-text":"var(--kendo-color-on-primary, #ffffff)","focus-border":"var(--kendo-color-primary, #0078d4)","focus-outline":"inherit","active-bg":"var(--kendo-color-primary-active, #005a9e)","active-text":"var(--kendo-color-on-primary, #ffffff)","active-border":"var(--kendo-color-primary-active, #005a9e)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-primary, #ffffff) 46%, transparent)","disabled-border":"transparent"},"error":{"bg":"var(--kendo-color-error, #c2666b)","text":"var(--kendo-color-on-error, #ffffff)","border":"var(--kendo-color-error, #c2666b)","focus-bg":"var(--kendo-color-error, #c2666b)","focus-text":"var(--kendo-color-on-error, #ffffff)","focus-border":"var(--kendo-color-error, #c2666b)","focus-outline":"inherit","active-bg":"var(--kendo-color-error-active, #ae3b41)","active-text":"var(--kendo-color-on-error, #ffffff)","active-border":"var(--kendo-color-error-active, #ae3b41)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-error, #ffffff) 46%, transparent)","disabled-border":"transparent"},"success":{"bg":"var(--kendo-color-success, #55a554)","text":"var(--kendo-color-on-success, #ffffff)","border":"var(--kendo-color-success, #55a554)","focus-bg":"var(--kendo-color-success, #55a554)","focus-text":"var(--kendo-color-on-success, #ffffff)","focus-border":"var(--kendo-color-success, #55a554)","focus-outline":"inherit","active-bg":"var(--kendo-color-success-active, #278a27)","active-text":"var(--kendo-color-on-success, #ffffff)","active-border":"var(--kendo-color-success-active, #278a27)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-success, #ffffff) 46%, transparent)","disabled-border":"transparent"},"info":{"bg":"var(--kendo-color-info, #0a7eff)","text":"var(--kendo-color-on-info, #ffffff)","border":"var(--kendo-color-info, #0a7eff)","focus-bg":"var(--kendo-color-info, #0a7eff)","focus-text":"var(--kendo-color-on-info, #ffffff)","focus-border":"var(--kendo-color-info, #0a7eff)","focus-outline":"inherit","active-bg":"var(--kendo-color-info-active, #085ebf)","active-text":"var(--kendo-color-on-info, #ffffff)","active-border":"var(--kendo-color-info-active, #085ebf)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-info, #ffffff) 46%, transparent)","disabled-border":"transparent"},"secondary":{"bg":"var(--kendo-color-secondary, #979593)","text":"var(--kendo-color-on-secondary, #ffffff)","border":"var(--kendo-color-secondary, #979593)","focus-bg":"var(--kendo-color-secondary, #979593)","focus-text":"var(--kendo-color-on-secondary, #ffffff)","focus-border":"var(--kendo-color-secondary, #979593)","focus-outline":"inherit","active-bg":"var(--kendo-color-secondary-active, #797775)","active-text":"var(--kendo-color-on-secondary, #ffffff)","active-border":"var(--kendo-color-secondary-active, #797775)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-secondary, #ffffff) 46%, transparent)","disabled-border":"transparent"},"tertiary":{"bg":"var(--kendo-color-tertiary, #2b88d8)","text":"var(--kendo-color-on-tertiary, #ffffff)","border":"var(--kendo-color-tertiary, #2b88d8)","focus-bg":"var(--kendo-color-tertiary, #2b88d8)","focus-text":"var(--kendo-color-on-tertiary, #ffffff)","focus-border":"var(--kendo-color-tertiary, #2b88d8)","focus-outline":"inherit","active-bg":"var(--kendo-color-tertiary-active, #2473b7)","active-text":"var(--kendo-color-on-tertiary, #ffffff)","active-border":"var(--kendo-color-tertiary-active, #2473b7)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-tertiary, #ffffff) 46%, transparent)","disabled-border":"transparent"},"warning":{"bg":"var(--kendo-color-warning, #ffc80a)","text":"var(--kendo-color-on-warning, #323130)","border":"var(--kendo-color-warning, #ffc80a)","focus-bg":"var(--kendo-color-warning, #ffc80a)","focus-text":"var(--kendo-color-on-warning, #323130)","focus-border":"var(--kendo-color-warning, #ffc80a)","focus-outline":"var(--kendo-color-app-surface, #ffffff)","active-bg":"var(--kendo-color-warning-active, #e0b000)","active-text":"var(--kendo-color-on-warning, #323130)","active-border":"var(--kendo-color-warning-active, #e0b000)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-warning, #323130) 46%, transparent)","disabled-border":"transparent"},"dark":{"bg":"var(--kendo-color-dark, #323130)","text":"var(--kendo-color-on-dark, #ffffff)","border":"var(--kendo-color-dark, #323130)","focus-bg":"var(--kendo-color-dark, #323130)","focus-text":"var(--kendo-color-on-dark, #ffffff)","focus-border":"var(--kendo-color-dark, #323130)","focus-outline":"var(--kendo-color-on-dark, #ffffff)","active-bg":"var(--kendo-color-dark-active, #000000)","active-text":"var(--kendo-color-on-dark, #ffffff)","active-border":"var(--kendo-color-dark-active, #000000)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-dark, #ffffff) 46%, transparent)","disabled-border":"transparent"},"light":{"bg":"var(--kendo-color-light, #d2d0ce)","text":"var(--kendo-color-on-light, #323130)","border":"var(--kendo-color-light, #d2d0ce)","focus-bg":"var(--kendo-color-light, #d2d0ce)","focus-text":"var(--kendo-color-on-light, #323130)","focus-border":"var(--kendo-color-light, #d2d0ce)","focus-outline":"var(--kendo-color-app-surface, #ffffff)","active-bg":"var(--kendo-color-light-active, #a19f9d)","active-text":"var(--kendo-color-on-light, #323130)","active-border":"var(--kendo-color-light-active, #a19f9d)","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-light, #323130) 46%, transparent)","disabled-border":"transparent"}</li><li>flat: "primary":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)","focus-bg":"inherit","focus-text":"var(--kendo-color-primary, #0078d4)","focus-border":"transparent","focus-outline":"var(--kendo-color-primary, #0078d4)","active-bg":"inherit","active-text":"var(--kendo-color-primary, #0078d4)","active-border":"transparent","disabled-bg":"initial","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"error":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)","focus-bg":"inherit","focus-text":"var(--kendo-color-error, #c2666b)","focus-border":"transparent","focus-outline":"var(--kendo-color-error, #c2666b)","active-bg":"inherit","active-text":"var(--kendo-color-error, #c2666b)","active-border":"transparent","disabled-bg":"initial","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"success":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)","focus-bg":"inherit","focus-text":"var(--kendo-color-success, #55a554)","focus-border":"transparent","focus-outline":"var(--kendo-color-success, #55a554)","active-bg":"inherit","active-text":"var(--kendo-color-success, #55a554)","active-border":"transparent","disabled-bg":"initial","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"info":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)","focus-bg":"inherit","focus-text":"var(--kendo-color-info, #0a7eff)","focus-border":"transparent","focus-outline":"var(--kendo-color-info, #0a7eff)","active-bg":"inherit","active-text":"var(--kendo-color-info, #0a7eff)","active-border":"transparent","disabled-bg":"initial","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"secondary":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)","focus-bg":"inherit","focus-text":"var(--kendo-color-secondary, #979593)","focus-border":"transparent","focus-outline":"var(--kendo-color-secondary, #979593)","active-bg":"inherit","active-text":"var(--kendo-color-secondary, #979593)","active-border":"transparent","disabled-bg":"initial","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"tertiary":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent)","focus-bg":"inherit","focus-text":"var(--kendo-color-tertiary, #2b88d8)","focus-border":"transparent","focus-outline":"var(--kendo-color-tertiary, #2b88d8)","active-bg":"inherit","active-text":"var(--kendo-color-tertiary, #2b88d8)","active-border":"transparent","disabled-bg":"initial","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"warning":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"var(--kendo-color-warning, #ffc80a)","focus-bg":"inherit","focus-text":"var(--kendo-color-warning, #ffc80a)","focus-border":"transparent","focus-outline":"var(--kendo-color-warning, #ffc80a)","active-bg":"inherit","active-text":"var(--kendo-color-warning, #ffc80a)","active-border":"transparent","disabled-bg":"initial","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"dark":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"var(--kendo-color-dark, #323130)","focus-bg":"inherit","focus-text":"var(--kendo-color-dark, #323130)","focus-border":"transparent","focus-outline":"var(--kendo-color-dark, #323130)","active-bg":"inherit","active-text":"var(--kendo-color-dark, #323130)","active-border":"transparent","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"},"light":{"bg":"var(--kendo-color-app-surface, #ffffff)","text":"var(--kendo-color-on-app-surface, #323130)","border":"transparent","focus-bg":"inherit","focus-text":"var(--kendo-color-light, #d2d0ce)","focus-border":"transparent","focus-outline":"var(--kendo-color-light, #d2d0ce)","active-bg":"inherit","active-text":"var(--kendo-color-light, #d2d0ce)","active-border":"transparent","disabled-bg":"inherit","disabled-text":"color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent)","disabled-border":"initial"}</li></ul></td>
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

