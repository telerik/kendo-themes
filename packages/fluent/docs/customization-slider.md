---
title: Customizing Slider
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_slider
position: 9
---

# Customizing Slider

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
    <td>$kendo-slider-size</td>
    <td></td>
    <td><code>200px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default slider size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-alt-size</td>
    <td></td>
    <td><code>26px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default slider track wrap size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-spacing</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-family</td>
    <td></td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font family of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size-sm, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Font size of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Line height of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-text</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-size</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-border-radius</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( on-app-surface, true ), .28 ), k-get-theme-color-var( neutral-60 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-border</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-hover-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( on-app-surface, true ), .28 ), k-get-theme-color-var( neutral-60 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-hover-border</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-focus-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( on-app-surface, true ), .28 ), k-get-theme-color-var( neutral-60 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-focus-border</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selection background color of the slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-size</td>
    <td></td>
    <td><code>16px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default border width of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border-radius</td>
    <td></td>
    <td><code>999em</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-scale</td>
    <td></td>
    <td><code>null</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active transition scale of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-size</td>
    <td></td>
    <td><code>null</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active size of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, transparent )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-text</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-gradient</td>
    <td></td>
    <td><code>transparent</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-bg</td>
    <td></td>
    <td><code>$kendo-slider-thumb-bg</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-text</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary-hover ), k-get-theme-color-var( primary-120 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-gradient</td>
    <td></td>
    <td><code>transparent</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The hover gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-bg</td>
    <td></td>
    <td><code>$kendo-slider-thumb-hover-bg</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-text</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary-active ), k-get-theme-color-var( primary-130 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-gradient</td>
    <td></td>
    <td><code>transparent</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The active gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-bg</td>
    <td></td>
    <td><code>$kendo-slider-thumb-hover-bg</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus background color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-text</td>
    <td></td>
    <td><code>inherit</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus text color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-border</td>
    <td></td>
    <td><code>$kendo-slider-thumb-active-border</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus border color of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-gradient</td>
    <td></td>
    <td><code>transparent</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The focus gradient of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-disabled-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( on-app-surface, true ), .7 ), k-get-theme-color-var( neutral-130 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-disabled-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( on-app-surface, true ), .06 ), k-get-theme-color-var( neutral-20 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-disabled-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( on-app-surface, true ), .46 ), k-get-theme-color-var( neutral-90 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The selection background color of the disabled slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-disabled-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, rgba( k-color( on-app-surface, true ), .28 ), k-get-theme-color-var( neutral-60 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-speed</td>
    <td></td>
    <td><code>.3s</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-function</td>
    <td></td>
    <td><code>ease-out</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function function.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-transition-speed</td>
    <td></td>
    <td><code>.4s</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-transition-function</td>
    <td></td>
    <td><code>cubic-bezier(.25, .8, .25, 1)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the slider thumb.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

