---
title: Customizing Switch
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_switch
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
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Switch.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-track-border-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-thumb-border-width</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Switch thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-text-transform</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-label-display</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The display of the Switch label.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-sizes</td>
    <td>Map</td>
    <td><code>(
    sm: ( font-size: null, track-width: 26px, track-height:  12px, thumb-width: 16px, thumb-height: 16px, thumb-offset: -2px, label-offset: 0px ),
    md: ( font-size: null, track-width: 32px, track-height:  14px, thumb-width: 20px, thumb-height: 20px, thumb-offset: -3px, label-offset: 0px ),
    lg: ( font-size: null, track-width: 38px, track-height:  16px, thumb-width: 24px, thumb-height: 24px, thumb-offset: -4px, label-offset: 0px )
)</code></td>
    <td><ul><li>sm: "font-size":null,"track-width":"26px","track-height":"12px","thumb-width":"16px","thumb-height":"16px","thumb-offset":"-2px","label-offset":"0px"</li><li>md: "font-size":null,"track-width":"32px","track-height":"14px","thumb-width":"20px","thumb-height":"20px","thumb-offset":"-3px","label-offset":"0px"</li><li>lg: "font-size":null,"track-width":"38px","track-height":"16px","thumb-width":"24px","thumb-height":"24px","thumb-offset":"-4px","label-offset":"0px"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The map with the different Switch sizes.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( on-app-surface ) 38%, transparent), rgba( if( $kendo-is-dark-theme, $kendo-color-white, $kendo-color-black ), .38 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-app-surface, #212121) 38%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is not checked</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-focus-ring</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track when the focused Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-track-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the disabled Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, k-color( app-surface ), if( $kendo-is-dark-theme, $kendo-color-black, $kendo-color-white ))</code></td>
    <td><code>var(--kendo-color-app-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-off-thumb-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered Switch is not checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-bg</td>
    <td>String</td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( primary ) 44%, transparent), rgba( $kendo-color-primary, .54 ))</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-primary, #3f51b5) 44%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-focus-ring</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The ring around the track when the focused Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-track-disabled-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the track when the disabled Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-bg</td>
    <td>String</td>
    <td><code>$kendo-color-primary</code></td>
    <td><code>var(--kendo-color-primary, #3f51b5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-bg</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-text</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-border</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-switch-on-thumb-hover-gradient</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background gradient of the thumb when the hovered Switch is checked.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

