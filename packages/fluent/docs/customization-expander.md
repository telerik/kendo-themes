---
title: Customizing Expander
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_expander
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
    <td>$kendo-expander-margin-y</td>
    <td>String</td>
    <td><code>var( --kendo-expander-margin-y, k-spacing(2) )</code></td>
    <td><code>var(--kendo-expander-margin-y, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-expander-border-width, 1px )</code></td>
    <td><code>var(--kendo-expander-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the border around the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-expander-font-family, var(--kendo-font-family, inherit) )</code></td>
    <td><code>var(--kendo-expander-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-expander-font-size, var(--kendo-font-size, inherit) )</code></td>
    <td><code>var(--kendo-expander-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-expander-line-height, var(--kendo-line-height, normal) )</code></td>
    <td><code>var(--kendo-expander-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hine height of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-text</td>
    <td>String</td>
    <td><code>var( --kendo-expander-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-expander-text, var(--kendo-color-on-app-surface, #323130))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-bg</td>
    <td>String</td>
    <td><code>var( --kendo-expander-bg, k-color(surface) )</code></td>
    <td><code>var(--kendo-expander-bg, var(--kendo-color-surface, #faf9f8))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-border</td>
    <td>String</td>
    <td><code>var( --kendo-expander-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-expander-border, color-mix(in srgb, var(--kendo-color-border, #8a8886) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-expanded-bg</td>
    <td>String</td>
    <td><code>var( --kendo-expander-expanded-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-expander-expanded-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the expanded ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-expander-disabled-text, color-mix(in srgb, k-color(on-app-surface) 46%, transparent) )</code></td>
    <td><code>var(--kendo-expander-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #323130) 46%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-expander-disabled-bg, k-color(base-subtle) )</code></td>
    <td><code>var(--kendo-expander-disabled-bg, var(--kendo-color-base-subtle, #edebe9))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-offset</td>
    <td>String</td>
    <td><code>var( --kendo-expander-focus-offset, 1px )</code></td>
    <td><code>var(--kendo-expander-focus-offset, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-outline-width</td>
    <td>String</td>
    <td><code>var( --kendo-expander-focus-outline-width, 1px )</code></td>
    <td><code>var(--kendo-expander-focus-outline-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline width of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-outline-style</td>
    <td>String</td>
    <td><code>var( --kendo-expander-focus-outline-style, solid )</code></td>
    <td><code>var(--kendo-expander-focus-outline-style, solid)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline style of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-outline</td>
    <td>String</td>
    <td><code>var( --kendo-expander-focus-outline, k-color(base-emphasis) )</code></td>
    <td><code>var(--kendo-expander-focus-outline, var(--kendo-color-base-emphasis, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The outline color of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-expander-focus-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-expander-focus-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-focus-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-expander-focus-shadow, inset 0px 0px 0px 2px k-color(base-emphasis) )</code></td>
    <td><code>var(--kendo-expander-focus-shadow, inset 0px 0px 0px 2px var(--kendo-color-base-emphasis, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the focused ExpansionPanel.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-expander-header-padding-x, k-spacing(4) )</code></td>
    <td><code>var(--kendo-expander-header-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-expander-header-padding-y, k-spacing(3) )</code></td>
    <td><code>var(--kendo-expander-header-padding-y, var(--kendo-spacing-3, 0.75rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-expander-header-text, k-color(primary) )</code></td>
    <td><code>var(--kendo-expander-header-text, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-expander-header-bg, inherit )</code></td>
    <td><code>var(--kendo-expander-header-bg, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-expander-header-hover-bg, k-color(base-hover) )</code></td>
    <td><code>var(--kendo-expander-header-hover-bg, var(--kendo-color-base-hover, #f3f2f1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered ExpansionPanel header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-title-text</td>
    <td>String</td>
    <td><code>var( --kendo-expander-title-text, k-color(primary) )</code></td>
    <td><code>var(--kendo-expander-title-text, var(--kendo-color-primary, #0078d4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-header-sub-title-text</td>
    <td>String</td>
    <td><code>var( --kendo-expander-header-sub-title-text, k-color(subtle) )</code></td>
    <td><code>var(--kendo-expander-header-sub-title-text, var(--kendo-color-subtle, #605e5c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel sub-title.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-indicator-margin-x</td>
    <td>String</td>
    <td><code>var( --kendo-expander-indicator-margin-x, k-spacing(2.5) )</code></td>
    <td><code>var(--kendo-expander-indicator-margin-x, var(--kendo-spacing-2\.5, 0.625rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal margin of the ExpansionPanel indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-indicator-text</td>
    <td>String</td>
    <td><code>var( --kendo-expander-indicator-text, $kendo-expander-text )</code></td>
    <td><code>var(--kendo-expander-indicator-text, var(--kendo-expander-text, var(--kendo-color-on-app-surface, #323130)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the ExpansionPanel indicator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-expander-content-padding-x, k-spacing(4) )</code></td>
    <td><code>var(--kendo-expander-content-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the ExpansionPanel content.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-expander-content-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-expander-content-padding-y, k-spacing(4) )</code></td>
    <td><code>var(--kendo-expander-content-padding-y, var(--kendo-spacing-4, 1rem))</code></td>
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

