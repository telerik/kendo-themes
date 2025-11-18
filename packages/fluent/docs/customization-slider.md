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
    <td>String</td>
    <td><code>var( --kendo-slider-size, 200px )</code></td>
    <td><code>var(--kendo-slider-size, 200px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-alt-size</td>
    <td>String</td>
    <td><code>var( --kendo-slider-alt-size, 26px )</code></td>
    <td><code>var(--kendo-slider-alt-size, 26px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider's track wrap.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-spacing</td>
    <td>String</td>
    <td><code>var( --kendo-slider-spacing, #{k-spacing(2)} )</code></td>
    <td><code>var(--kendo-slider-spacing, var(--kendo-spacing-2, 0.5rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-slider-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-slider-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-slider-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-slider-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-slider-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-slider-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-text</td>
    <td>String</td>
    <td><code>var( --kendo-slider-text, inherit )</code></td>
    <td><code>var(--kendo-slider-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-size</td>
    <td>String</td>
    <td><code>var( --kendo-slider-track-size, #{k-spacing(1)} )</code></td>
    <td><code>var(--kendo-slider-track-size, var(--kendo-spacing-1, 0.25rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-slider-track-border-radius, #{k-spacing(0.5)} )</code></td>
    <td><code>var(--kendo-slider-track-border-radius, var(--kendo-spacing-0\.5, 0.125rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-track-bg, #{k-color(border)} )</code></td>
    <td><code>var(--kendo-slider-track-bg, var(--kendo-color-border, rgba(36, 36, 36, 0.72)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-border</td>
    <td>String</td>
    <td><code>var( --kendo-slider-track-border, inherit )</code></td>
    <td><code>var(--kendo-slider-track-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-selection-bg, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-slider-selection-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider's track selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-size</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-size, 18px )</code></td>
    <td><code>var(--kendo-slider-thumb-size, 18px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default size of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-border-width, 1px )</code></td>
    <td><code>var(--kendo-slider-thumb-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The default border width of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-border-radius, 999em )</code></td>
    <td><code>var(--kendo-slider-thumb-border-radius, 999em)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-scale</td>
    <td>Null</td>
    <td><code>null</code></td>
    <td><code>null</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition scale of the active Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-bg, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-slider-thumb-bg, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-text</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-text, inherit )</code></td>
    <td><code>var(--kendo-slider-thumb-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-border</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-border, color-mix(in srgb, k-color(border) 26%, transparent) )</code></td>
    <td><code>var(--kendo-slider-thumb-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-gradient, transparent )</code></td>
    <td><code>var(--kendo-slider-thumb-gradient, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-hover-bg, #{$kendo-slider-thumb-bg} )</code></td>
    <td><code>var(--kendo-slider-thumb-hover-bg, var(--kendo-slider-thumb-bg, var(--kendo-color-surface-alt, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the hovered Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-text</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-hover-text, inherit )</code></td>
    <td><code>var(--kendo-slider-thumb-hover-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the hovered Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-border</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-hover-border, color-mix( in srgb, k-color(border) 34%, transparent ) )</code></td>
    <td><code>var(--kendo-slider-thumb-hover-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 34%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the hovered Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-hover-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-hover-gradient, transparent )</code></td>
    <td><code>var(--kendo-slider-thumb-hover-gradient, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the hovered Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-active-bg, #{$kendo-slider-thumb-hover-bg} )</code></td>
    <td><code>var(--kendo-slider-thumb-active-bg, var(--kendo-slider-thumb-hover-bg, var(--kendo-slider-thumb-bg, var(--kendo-color-surface-alt, #ffffff))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the active Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-text</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-active-text, inherit )</code></td>
    <td><code>var(--kendo-slider-thumb-active-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the active Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-border</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-active-border, #{k-color(primary-active)} )</code></td>
    <td><code>var(--kendo-slider-thumb-active-border, var(--kendo-color-primary-active, #0f548c))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the active Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-active-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-active-gradient, transparent )</code></td>
    <td><code>var(--kendo-slider-thumb-active-gradient, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the active Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-focus-bg, #{$kendo-slider-thumb-hover-bg} )</code></td>
    <td><code>var(--kendo-slider-thumb-focus-bg, var(--kendo-slider-thumb-hover-bg, var(--kendo-slider-thumb-bg, var(--kendo-color-surface-alt, #ffffff))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the focused Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-text</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-focus-text, inherit )</code></td>
    <td><code>var(--kendo-slider-thumb-focus-text, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the focused Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-border</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-focus-border, #{$kendo-slider-thumb-active-border} )</code></td>
    <td><code>var(--kendo-slider-thumb-focus-border, var(--kendo-slider-thumb-active-border, var(--kendo-color-primary-active, #0f548c)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the focused Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-focus-gradient</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-focus-gradient, transparent )</code></td>
    <td><code>var(--kendo-slider-thumb-focus-gradient, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The gradient of the focused Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-slider-disabled-text, #{color-mix(in srgb, k-color(on-app-surface) 70%, transparent)} )</code></td>
    <td><code>var(--kendo-slider-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 70%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-track-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-track-disabled-bg, #{color-mix(in srgb, k-color(on-app-surface) 14%, transparent)} )</code></td>
    <td><code>var(--kendo-slider-track-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 14%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Slider track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-selection-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-slider-selection-disabled-bg, #{color-mix(in srgb, k-color(on-app-surface) 30%, transparent)} )</code></td>
    <td><code>var(--kendo-slider-selection-disabled-bg, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 30%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Slider's track selection.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-disabled-border, #{color-mix(in srgb, k-color(on-app-surface) 28%, transparent)} )</code></td>
    <td><code>var(--kendo-slider-thumb-disabled-border, color-mix(in srgb, var(--kendo-color-on-app-surface, #242424) 28%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-speed</td>
    <td>String</td>
    <td><code>var( --kendo-slider-transition-speed, k-duration(brisk) )</code></td>
    <td><code>var(--kendo-slider-transition-speed, var(--kendo-duration-brisk, 350ms))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-transition-function</td>
    <td>String</td>
    <td><code>var( --kendo-slider-transition-function, k-easing(standard) )</code></td>
    <td><code>var(--kendo-slider-transition-function, var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the Slider.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-transition-speed</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-transition-speed, k-duration(quick) )</code></td>
    <td><code>var(--kendo-slider-thumb-transition-speed, var(--kendo-duration-quick, 150ms))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition speed of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-thumb-transition-function</td>
    <td>String</td>
    <td><code>var( --kendo-slider-thumb-transition-function, k-easing(decelerate) )</code></td>
    <td><code>var(--kendo-slider-thumb-transition-function, var(--kendo-easing-decelerate, cubic-bezier(0, 0, 0.58, 1)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The transition function of the Slider thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-tick-h-image</td>
    <td>String</td>
    <td><code>"data:image/gif;base64,R0lGODlhAQC0AIABALi4uAAAACH5BAEAAAEALAAAAAABALQAAAIWjIGJxqzazlux2ovlzND2rAHgSIZWAQA7"</code></td>
    <td><code>"data:image/gif;base64,R0lGODlhAQC0AIABALi4uAAAACH5BAEAAAEALAAAAAABALQAAAIWjIGJxqzazlux2ovlzND2rAHgSIZWAQA7"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background image of the horizontal Slider tick.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-slider-tick-v-image</td>
    <td>String</td>
    <td><code>"data:image/gif;base64,R0lGODlhtAABAIABALi4uAAAACH5BAEAAAEALAAAAAC0AAEAAAIWjIGJxqzazlux2ovlzND2rAHgSIZWAQA7"</code></td>
    <td><code>"data:image/gif;base64,R0lGODlhtAABAIABALi4uAAAACH5BAEAAAEALAAAAAC0AAEAAAIWjIGJxqzazlux2ovlzND2rAHgSIZWAQA7"</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background image of the vertical Slider tick.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

