---
title: Customizing Timeline
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_timeline
position: 9
---

# Customizing Timeline

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
    <td>$kendo-timeline-spacing-x</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-spacing-x, k-spacing(10) )</code></td>
    <td><code>var(--kendo-timeline-spacing-x, var(--kendo-spacing-10))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-spacing-y</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-spacing-y, k-spacing(10) )</code></td>
    <td><code>var(--kendo-timeline-spacing-y, var(--kendo-spacing-10))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-items-padding</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-items-padding, k-spacing(4) )</code></td>
    <td><code>var(--kendo-timeline-items-padding, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding between the Timeline's track items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-font-family, var(--kendo-font-family) )</code></td>
    <td><code>var(--kendo-timeline-font-family, var(--kendo-font-family))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-font-size, var(--kendo-font-size) )</code></td>
    <td><code>var(--kendo-timeline-font-size, var(--kendo-font-size))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-line-height, var(--kendo-line-height) )</code></td>
    <td><code>var(--kendo-timeline-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-x</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-arrow-width, k-spacing(7.5) )</code></td>
    <td><code>var(--kendo-timeline-track-arrow-width, var(--kendo-spacing-7\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-height</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-arrow-height, k-spacing(7.5) )</code></td>
    <td><code>var(--kendo-timeline-track-arrow-height, var(--kendo-spacing-7\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-size</td>
    <td>String</td>
    <td><code>k-spacing(1.5)</code></td>
    <td><code>var(--kendo-spacing-1\.5)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-wrap-padding-bottom</td>
    <td>Calculation</td>
    <td><code>calc( #{$kendo-timeline-track-size} / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-1\.5) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom padding of the Timeline's track wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-border-width, 1px )</code></td>
    <td><code>var(--kendo-timeline-track-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-margin-bottom</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-margin-bottom, k-spacing(4) )</code></td>
    <td><code>var(--kendo-timeline-track-margin-bottom, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bottom-calc</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-bottom-calc, calc( ( #{ $kendo-timeline-track-arrow-height } / 2 ) + #{ $kendo-timeline-track-wrap-padding-bottom } ) )</code></td>
    <td><code>var(--kendo-timeline-track-bottom-calc, calc(var(--kendo-timeline-track-arrow-height, var(--kendo-spacing-7\.5)) / 2 + calc(var(--kendo-spacing-1\.5) / 2)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-start-calc</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-start-calc, calc( #{ $kendo-timeline-track-arrow-width } - 2 * #{ $kendo-timeline-track-border-width } ) )</code></td>
    <td><code>var(--kendo-timeline-track-start-calc, calc(var(--kendo-timeline-track-arrow-width, var(--kendo-spacing-7\.5)) - 2 * var(--kendo-timeline-track-border-width, 1px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-end-calc</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-end-calc, calc( #{ $kendo-timeline-track-arrow-width } - 2 * #{ $kendo-timeline-track-border-width } ) )</code></td>
    <td><code>var(--kendo-timeline-track-end-calc, calc(var(--kendo-timeline-track-arrow-width, var(--kendo-spacing-7\.5)) - 2 * var(--kendo-timeline-track-border-width, 1px)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The right offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bg</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-bg, k-color(surface) )</code></td>
    <td><code>var(--kendo-timeline-track-bg, var(--kendo-color-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-color</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-border-color, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-timeline-track-border-color, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-bg</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-arrow-disabled-bg, k-color(base-subtle) )</code></td>
    <td><code>var(--kendo-timeline-track-arrow-disabled-bg, var(--kendo-color-base-subtle))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Timeline arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-text</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-arrow-disabled-text, color-mix(in srgb, k-color(on-app-surface) 46%, transparent) )</code></td>
    <td><code>var(--kendo-timeline-track-arrow-disabled-text, color-mix(in srgb, var(--kendo-color-on-app-surface) 46%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Timeline arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-border</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-arrow-disabled-border, transparent )</code></td>
    <td><code>var(--kendo-timeline-track-arrow-disabled-border, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Timeline arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-event-offset</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-track-event-offset, k-spacing(8) )</code></td>
    <td><code>var(--kendo-timeline-track-event-offset, var(--kendo-spacing-8))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Timeline track event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-padding-x, k-spacing(2) )</code></td>
    <td><code>var(--kendo-timeline-flag-padding-x, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-y</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-padding-y, k-spacing(2) )</code></td>
    <td><code>var(--kendo-timeline-flag-padding-y, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-border-radius, k-border-radius(md) )</code></td>
    <td><code>var(--kendo-timeline-flag-border-radius, var(--kendo-border-radius-md))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-line-height, var(--kendo-line-height) )</code></td>
    <td><code>var(--kendo-timeline-flag-line-height, var(--kendo-line-height))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-box-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-box-shadow, k-elevation(2) )</code></td>
    <td><code>var(--kendo-timeline-flag-box-shadow, var(--kendo-elevation-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-min-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-min-width, k-spacing(20) )</code></td>
    <td><code>var(--kendo-timeline-flag-min-width, var(--kendo-spacing-20))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-max-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-max-width, calc( #{ $kendo-timeline-flag-min-width } + 2 * #{ $kendo-timeline-spacing-x } ) )</code></td>
    <td><code>var(--kendo-timeline-flag-max-width, calc(var(--kendo-timeline-flag-min-width, var(--kendo-spacing-20)) + 2 * var(--kendo-timeline-spacing-x, var(--kendo-spacing-10))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-flag-max-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-mobile-flag-max-width, calc( #{ $kendo-timeline-flag-min-width } + 2 * #{ $kendo-timeline-mobile-spacing-x } ) )</code></td>
    <td><code>var(--kendo-timeline-mobile-flag-max-width, calc(var(--kendo-timeline-flag-min-width, var(--kendo-spacing-20)) + 2 * var(--kendo-spacing-4)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the mobile Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-horizontal-flag-min-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-horizontal-flag-min-width, k-spacing(15) )</code></td>
    <td><code>var(--kendo-timeline-horizontal-flag-min-width, var(--kendo-spacing-15))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the horizontal Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-bg</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-bg, k-color(primary) )</code></td>
    <td><code>var(--kendo-timeline-flag-bg, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-text</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-text, k-color(on-primary) )</code></td>
    <td><code>var(--kendo-timeline-flag-text, var(--kendo-color-on-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-callout-width, k-spacing(2.5) )</code></td>
    <td><code>var(--kendo-timeline-flag-callout-width, var(--kendo-spacing-2\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-height</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-callout-height, k-spacing(2.5) )</code></td>
    <td><code>var(--kendo-timeline-flag-callout-height, var(--kendo-spacing-2\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-offset-bottom</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-offset-bottom, k-spacing(1) )</code></td>
    <td><code>var(--kendo-timeline-flag-offset-bottom, var(--kendo-spacing-1))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-margin-bottom-calc</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-flag-margin-bottom-calc, calc( #{ $kendo-timeline-track-size } + 2 * #{ $kendo-timeline-track-border-width } + #{ $kendo-timeline-flag-offset-bottom } + #{ $kendo-timeline-flag-callout-height } ) )</code></td>
    <td><code>var(--kendo-timeline-flag-margin-bottom-calc, calc(var(--kendo-spacing-1\.5) + 2 * var(--kendo-timeline-track-border-width, 1px) + var(--kendo-timeline-flag-offset-bottom, var(--kendo-spacing-1)) + var(--kendo-timeline-flag-callout-height, var(--kendo-spacing-2\.5))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-header-bg</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-card-header-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-timeline-card-header-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline's Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-header-text</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-card-header-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-timeline-card-header-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline's Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-body-scroll-border</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-card-body-scroll-border, color-mix(in srgb, k-color(border) 16%, transparent) )</code></td>
    <td><code>var(--kendo-timeline-card-body-scroll-border, color-mix(in srgb, var(--kendo-color-border) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the Timeline's Card body scroll.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-body-scroll-bg</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-card-body-scroll-bg, k-color(surface-alt) )</code></td>
    <td><code>var(--kendo-timeline-card-body-scroll-bg, var(--kendo-color-surface-alt))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline's Card body scroll.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-scroll-thumb-hover</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-card-scroll-thumb-hover, color-mix(in srgb, k-color(border) 10%, transparent) )</code></td>
    <td><code>var(--kendo-timeline-card-scroll-thumb-hover, color-mix(in srgb, var(--kendo-color-border) 10%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Timeline's hovered card scroll thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-body-text</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-date-body-text, k-color(on-app-surface) )</code></td>
    <td><code>var(--kendo-timeline-date-body-text, var(--kendo-color-on-app-surface))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline date body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-width</td>
    <td>Calculation</td>
    <td><code>calc( #{k-spacing(12)} + #{k-spacing(0.5)} )</code></td>
    <td><code>calc(var(--kendo-spacing-12) + var(--kendo-spacing-0\.5))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-margin-bottom</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-date-margin-bottom, k-spacing(2) )</code></td>
    <td><code>var(--kendo-timeline-date-margin-bottom, var(--kendo-spacing-2))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-calc</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-timeline-spacing-x } + ( #{ $kendo-timeline-flag-min-width } - #{ $kendo-timeline-track-size } ) / 2 )</code></td>
    <td><code>calc(var(--kendo-timeline-spacing-x, var(--kendo-spacing-10)) + (var(--kendo-timeline-flag-min-width, var(--kendo-spacing-20)) - var(--kendo-spacing-1\.5)) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-with-dates-calc</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-timeline-vertical-padding-calc } + #{ $kendo-timeline-date-width } )</code></td>
    <td><code>calc(calc(var(--kendo-timeline-spacing-x, var(--kendo-spacing-10)) + (var(--kendo-timeline-flag-min-width, var(--kendo-spacing-20)) - var(--kendo-spacing-1\.5)) / 2) + calc(var(--kendo-spacing-12) + var(--kendo-spacing-0\.5)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-border-radius</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-vertical-border-radius, k-border-radius(lg) )</code></td>
    <td><code>var(--kendo-timeline-vertical-border-radius, var(--kendo-border-radius-lg))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the vertical Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-calc</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-timeline-mobile-spacing-x } + ( #{ $kendo-timeline-flag-min-width } - #{ $kendo-timeline-track-size } ) / 2 )</code></td>
    <td><code>calc(var(--kendo-spacing-4) + (var(--kendo-timeline-flag-min-width, var(--kendo-spacing-20)) - var(--kendo-spacing-1\.5)) / 2)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-with-dates-calc</td>
    <td>Calculation</td>
    <td><code>calc( #{ $kendo-timeline-mobile-vertical-padding-calc } + #{ $kendo-timeline-date-width } )</code></td>
    <td><code>calc(calc(var(--kendo-spacing-4) + (var(--kendo-timeline-flag-min-width, var(--kendo-spacing-20)) - var(--kendo-spacing-1\.5)) / 2) + calc(var(--kendo-spacing-12) + var(--kendo-spacing-0\.5)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-circle-width, k-spacing(4) )</code></td>
    <td><code>var(--kendo-timeline-circle-width, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-height</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-circle-height, k-spacing(4) )</code></td>
    <td><code>var(--kendo-timeline-circle-height, var(--kendo-spacing-4))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-bg</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-circle-bg, k-color(primary) )</code></td>
    <td><code>var(--kendo-timeline-circle-bg, var(--kendo-color-primary))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-width</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-event-width, 400px )</code></td>
    <td><code>var(--kendo-timeline-event-width, 400px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-height</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-event-height, 600px )</code></td>
    <td><code>var(--kendo-timeline-event-height, 600px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-min-height-calc</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-event-min-height-calc, calc( 2 * ( #{ $kendo-timeline-track-event-offset } - #{ $kendo-card-border-width } ) ) )</code></td>
    <td><code>var(--kendo-timeline-event-min-height-calc, calc(2 * (var(--kendo-timeline-track-event-offset, var(--kendo-spacing-8)) - var(--kendo-card-border-width, 0px))))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-shadow</td>
    <td>String</td>
    <td><code>var( --kendo-timeline-card-shadow, $kendo-card-shadow )</code></td>
    <td><code>var(--kendo-timeline-card-shadow, var(--kendo-card-shadow, var(--kendo-elevation-1, none)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Timeline card.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

