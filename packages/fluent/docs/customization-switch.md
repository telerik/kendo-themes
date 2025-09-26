---
title: Customizing Switch
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_switch
position: 9
---

# Customizing Switch

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
    <td>$kendo-switch-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-switch-font-family, var( --kendo-font-family, normal ) )</code></td>
    <td><code>var(--kendo-switch-font-family, var(--kendo-font-family, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-switch-track-border-width, 1px )</code></td>
    <td><code>var(--kendo-switch-track-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-switch-thumb-border-width, 0 )</code></td>
    <td><code>var(--kendo-switch-thumb-border-width, 0)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-switch-border-radius, #{k-border-radius(md)} )</code></td>
    <td><code>var(--kendo-switch-border-radius, var(--kendo-border-radius-md, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-text-transform</td>
    <td>String</td>
    <td><code>var( --kendo-switch-label-text-transform, uppercase )</code></td>
    <td><code>var(--kendo-switch-label-text-transform, uppercase)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-display</td>
    <td>String</td>
    <td><code>var( --kendo-switch-label-display, none )</code></td>
    <td><code>var(--kendo-switch-label-display, none)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The display of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: ( font-size: 10px, track-width: 36px, track-height: 16px, thumb-width: 10px, thumb-height: 10px, thumb-offset: 3px, label-offset: 4px ),
    md: ( font-size: 10px, track-width: 40px, track-height: 20px, thumb-width: 14px, thumb-height: 14px, thumb-offset: 4px, label-offset: 5px ),
    lg: ( font-size: 10px, track-width: 44px, track-height: 24px, thumb-width: 18px, thumb-height: 18px, thumb-offset: 5px, label-offset: 6px )
)</code></td>
    <td><ul><li>sm: "font-size":"10px","track-width":"36px","track-height":"16px","thumb-width":"10px","thumb-height":"10px","thumb-offset":"3px","label-offset":"4px"</li><li>md: "font-size":"10px","track-width":"40px","track-height":"20px","thumb-width":"14px","thumb-height":"14px","thumb-offset":"4px","label-offset":"5px"</li><li>lg: "font-size":"10px","track-width":"44px","track-height":"24px","thumb-width":"18px","thumb-height":"18px","thumb-offset":"5px","label-offset":"6px"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different Switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-focus-ring</td>
    <td>String</td>
    <td><code>var( --kendo-switch-focus-ring, 2px solid k-color(border-alt) )</code></td>
    <td><code>var(--kendo-switch-focus-ring, 2px solid var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the focused Switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-switch-off-track-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-switch-off-track-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-border, k-color(border) )</code></td>
    <td><code>var(--kendo-switch-off-track-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-hover-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-switch-off-track-hover-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-hover-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-switch-off-track-hover-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-hover-border, k-color(border-alt) )</code></td>
    <td><code>var(--kendo-switch-off-track-hover-border, var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-focus-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-switch-off-track-focus-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-focus-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-switch-off-track-focus-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-focus-border, k-color(border) )</code></td>
    <td><code>var(--kendo-switch-off-track-focus-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-disabled-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-switch-off-track-disabled-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-disabled-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-switch-off-track-disabled-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-track-disabled-border, color-mix(in srgb, k-color(on-app-surface) 14%, transparent) )</code></td>
    <td><code>var(--kendo-switch-off-track-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-bg, k-color(subtle) )</code></td>
    <td><code>var(--kendo-switch-off-thumb-bg, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-text, inherit )</code></td>
    <td><code>var(--kendo-switch-off-thumb-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-border, k-color(border) )</code></td>
    <td><code>var(--kendo-switch-off-thumb-border, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-hover-bg, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-switch-off-thumb-hover-bg, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-hover-text, inherit )</code></td>
    <td><code>var(--kendo-switch-off-thumb-hover-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-hover-border, k-color(border-alt) )</code></td>
    <td><code>var(--kendo-switch-off-thumb-hover-border, var(--kendo-color-border-alt, #000000))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-disabled-bg, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-switch-off-thumb-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-disabled-text, inherit )</code></td>
    <td><code>var(--kendo-switch-off-thumb-disabled-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-off-thumb-disabled-border, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-switch-off-thumb-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-bg, k-color(primary) )</code></td>
    <td><code>var(--kendo-switch-on-track-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-text, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-switch-on-track-text, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-border, $kendo-switch-on-track-bg )</code></td>
    <td><code>var(--kendo-switch-on-track-border, var(--kendo-switch-on-track-bg, var(--kendo-color-primary, #0f6cbd)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-hover-bg, k-color(primary-hover) )</code></td>
    <td><code>var(--kendo-switch-on-track-hover-bg, var(--kendo-color-primary-hover, #115ea3))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-hover-text, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-switch-on-track-hover-text, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-hover-border, $kendo-switch-on-track-hover-bg )</code></td>
    <td><code>var(--kendo-switch-on-track-hover-border, var(--kendo-switch-on-track-hover-bg, var(--kendo-color-primary-hover, #115ea3)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-focus-bg, k-color(primary) )</code></td>
    <td><code>var(--kendo-switch-on-track-focus-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-focus-text, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-switch-on-track-focus-text, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-focus-border, $kendo-switch-on-track-focus-bg )</code></td>
    <td><code>var(--kendo-switch-on-track-focus-border, var(--kendo-switch-on-track-focus-bg, var(--kendo-color-primary, #0f6cbd)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-disabled-bg, color-mix(in srgb, k-color(on-app-surface) 7%, transparent) )</code></td>
    <td><code>var(--kendo-switch-on-track-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 7%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-disabled-text, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-switch-on-track-disabled-text, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-track-disabled-border, transparent )</code></td>
    <td><code>var(--kendo-switch-on-track-disabled-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-switch-on-thumb-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-text, inherit )</code></td>
    <td><code>var(--kendo-switch-on-thumb-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-border, inherit )</code></td>
    <td><code>var(--kendo-switch-on-thumb-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-hover-bg, k-color(app-surface) )</code></td>
    <td><code>var(--kendo-switch-on-thumb-hover-bg, var(--kendo-color-app-surface, #fafafa))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-hover-text, inherit )</code></td>
    <td><code>var(--kendo-switch-on-thumb-hover-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-hover-border, inherit )</code></td>
    <td><code>var(--kendo-switch-on-thumb-hover-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-disabled-bg, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-switch-on-thumb-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-disabled-text, inherit )</code></td>
    <td><code>var(--kendo-switch-on-thumb-disabled-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-switch-on-thumb-disabled-border, color-mix(in srgb, k-color(on-app-surface) 30%, transparent) )</code></td>
    <td><code>var(--kendo-switch-on-thumb-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the disabled Switch is checked.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

