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
    <td></td>
    <td><code>map.get( $kendo-spacing, 10 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-spacing-y</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 10 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-items-padding</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding between the Timeline's track items.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-family</td>
    <td></td>
    <td><code>var( --kendo-font-family, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-font-size</td>
    <td></td>
    <td><code>var( --kendo-font-size, inherit )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-x</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-spacing-y</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing of the mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 7.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-height</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 7.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline track arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-size</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The size of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-wrap-padding-bottom</td>
    <td></td>
    <td><code>math.div( $kendo-timeline-track-size, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom padding of the Timeline's track wrapper.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-width</td>
    <td></td>
    <td><code>1px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-margin-bottom</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bottom-calc</td>
    <td></td>
    <td><code>calc( ( #{ $kendo-timeline-track-arrow-height } / 2 ) + #{ $kendo-timeline-track-wrap-padding-bottom } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-start-calc</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-track-arrow-width } - 2 * #{ $kendo-timeline-track-border-width } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The left offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-end-calc</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-track-arrow-width } - 2 * #{ $kendo-timeline-track-border-width } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The right offset of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( surface ), k-get-theme-color-var( neutral-10 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-border-color</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 16%, transparent), k-get-theme-color-var( neutral-30 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Timeline track.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-arrow-inset-block-end</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-track-size } + #{ $kendo-timeline-track-wrap-padding-bottom } + #{ $kendo-timeline-track-border-width } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The block end inset of the Timeline arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-bg</td>
    <td></td>
    <td><code>var( --kendo-disabled-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the disabled Timeline arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-text</td>
    <td></td>
    <td><code>var( --kendo-disabled-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the disabled Timeline arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-arrow-disabled-border</td>
    <td></td>
    <td><code>var( --kendo-disabled-border, initial)</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the disabled Timeline arrow.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-track-event-offset</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 8 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The offset of the Timeline track event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-x</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-padding-y</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-border-radius</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-line-height</td>
    <td></td>
    <td><code>var( --kendo-line-height, normal )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-box-shadow</td>
    <td></td>
    <td><code>var( --kendo-box-shadow-depth-2, none )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The box shadow of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-min-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 20 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-max-width</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-flag-min-width } + 2 * #{ $kendo-timeline-spacing-x } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-flag-max-width</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-flag-min-width } + 2 * #{ $kendo-timeline-mobile-spacing-x } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the mobile Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-horizontal-flag-min-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 15 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the horizontal Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-text</td>
    <td></td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-callout-height</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline's flag callout.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-offset-bottom</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 1 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom offset of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-flag-margin-bottom-calc</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-track-size } + 2 * #{ $kendo-timeline-track-border-width } + #{ $kendo-timeline-flag-offset-bottom } + #{ $kendo-timeline-flag-callout-height } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline flag.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-header-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline's Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-header-text</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( on-app-surface ), k-get-theme-color-var( neutral-160 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline's Card header.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-body-scroll-border</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, color-mix(in srgb, k-color( border ) 16%, transparent), k-get-theme-color-var( neutral-30 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border of the Timeline's Card body scroll.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-body-scroll-bg</td>
    <td></td>
    <td><code>var( --kendo-component-bg, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline's Card body scroll.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-card-scroll-thumb-hover</td>
    <td></td>
    <td><code>var( --kendo-hover-border, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the Timeline's hovered card scroll thumb.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-body-text</td>
    <td></td>
    <td><code>var( --kendo-body-text, initial )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Timeline date body.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 12 ) + map.get( $kendo-spacing, 0.5 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-date-margin-bottom</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The bottom margin of the Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-calc</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-spacing-x } + ( #{ $kendo-timeline-flag-min-width } - #{ $kendo-timeline-track-size } ) / 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-padding-with-dates-calc</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-vertical-padding-calc } + #{ $kendo-timeline-date-width } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-vertical-border-radius</td>
    <td></td>
    <td><code>var( --kendo-border-radius-md, #{$kendo-border-radius-lg} )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border radius of the vertical Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-calc</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-mobile-spacing-x } + ( #{ $kendo-timeline-flag-min-width } - #{ $kendo-timeline-track-size } ) / 2 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-mobile-vertical-padding-with-dates-calc</td>
    <td></td>
    <td><code>calc( #{ $kendo-timeline-mobile-vertical-padding-calc } + #{ $kendo-timeline-date-width } )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The padding of the vertical mobile Timeline date.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-width</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-height</td>
    <td></td>
    <td><code>map.get( $kendo-spacing, 4 )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-circle-bg</td>
    <td></td>
    <td><code>if($kendo-enable-color-system, k-color( primary ), k-get-theme-color-var( primary-100 ))</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Timeline circle.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-width</td>
    <td></td>
    <td><code>400px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The width of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-height</td>
    <td></td>
    <td><code>600px</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The height of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-event-min-height-calc</td>
    <td></td>
    <td><code>calc( 2 * ( #{ $kendo-timeline-track-event-offset } - #{ $kendo-card-border-width } ) )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the Timeline event.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-timeline-icon-spacing</td>
    <td></td>
    <td><code>var( --kendo-icon-spacing, .5rem )</code></td>
    <td></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Timeline icons.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

