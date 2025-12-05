---
title: Customizing Motion
description: "Refer to the list of the Kendo UI Classic theme variables available for customization."
slug: variables_kendothemeclassic_motion
position: 9
---

# Customizing Motion

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
    <td>$kendo-easings</td>
    <td>Map</td>
    <td><code>$default-easings</code></td>
    <td><ul><li>linear: cubic-bezier(0, 0, 1, 1)</li><li>accelerate: cubic-bezier(0.42, 0, 1, 1)</li><li>decelerate: cubic-bezier(0, 0, 0.58, 1)</li><li>standard: cubic-bezier(0.42, 0, 0.58, 1)</li><li>sharp: cubic-bezier(0.75, 0, 0.25, 1)</li><li>bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)</li><li>elastic: cubic-bezier(0.5, -0.5, 0.5, 1.5)</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global map of motion easing tokens.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-durations</td>
    <td>Map</td>
    <td><code>$default-durations</code></td>
    <td><ul><li>instant: 0ms</li><li>immediate: 50ms</li><li>brief: 100ms</li><li>quick: 150ms</li><li>rapid: 200ms</li><li>swift: 250ms</li><li>speedy: 300ms</li><li>brisk: 350ms</li><li>prompt: 400ms</li><li>timely: 450ms</li><li>moderate: 500ms</li><li>measured: 550ms</li><li>steady: 600ms</li><li>leisurely: 700ms</li><li>slow: 800ms</li><li>languid: 900ms</li><li>sluggish: 1000ms</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global map of motion duration tokens.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-transitions</td>
    <td>Map</td>
    <td><code>$default-transitions</code></td>
    <td><ul><li>instant: "duration":"var(--kendo-duration-instant)","easing":"var(--kendo-easing-linear)"</li><li>rapid: "duration":"var(--kendo-duration-quick)","easing":"var(--kendo-easing-decelerate)"</li><li>snappy: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-decelerate)"</li><li>energetic: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-elastic)"</li><li>bouncy: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-bounce)"</li><li>subtle: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-standard)"</li><li>gentle: "duration":"var(--kendo-duration-prompt)","easing":"var(--kendo-easing-accelerate)"</li><li>enter: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-decelerate)"</li><li>exit: "duration":"var(--kendo-duration-rapid)","easing":"var(--kendo-easing-accelerate)"</li><li>settle: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-decelerate)"</li><li>scale-out: "duration":"var(--kendo-duration-quick)","easing":"var(--kendo-easing-accelerate)"</li><li>scale-in: "duration":"var(--kendo-duration-rapid)","easing":"var(--kendo-easing-decelerate)"</li><li>fade-out: "duration":"var(--kendo-duration-rapid)","easing":"var(--kendo-easing-standard)"</li><li>fade-in: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-standard)"</li><li>slide-out: "duration":"var(--kendo-duration-swift)","easing":"var(--kendo-easing-accelerate)"</li><li>slide-in: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-decelerate)"</li><li>emphasis: "duration":"var(--kendo-duration-quick)","easing":"var(--kendo-easing-sharp)"</li><li>collapse: "duration":"var(--kendo-duration-speedy)","easing":"var(--kendo-easing-accelerate)"</li><li>expand: "duration":"var(--kendo-duration-prompt)","easing":"var(--kendo-easing-standard)"</li><li>shrink: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-accelerate)"</li><li>grow: "duration":"var(--kendo-duration-prompt)","easing":"var(--kendo-easing-standard)"</li><li>pulse: "duration":"var(--kendo-duration-brisk)","easing":"var(--kendo-easing-standard)"</li><li>smooth: "duration":"var(--kendo-duration-moderate)","easing":"var(--kendo-easing-standard)"</li><li>flip: "duration":"var(--kendo-duration-measured)","easing":"var(--kendo-easing-standard)"</li><li>fluid: "duration":"var(--kendo-duration-steady)","easing":"var(--kendo-easing-standard)"</li><li>deliberate: "duration":"var(--kendo-duration-slow)","easing":"var(--kendo-easing-standard)"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global map of motion transition tokens.</div></div>
    </td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container">
        <div><b>Groups</b><div class="theme-variables-description">The groups of the $kendo-transitions Map</div></div>
    </td>
</tr>
<tr>
    <td>Group</td>
    <td colspan="2">Values</td>
    <td>Description</td>
</tr>
<tr>
    <td>fast</td>
    <td colspan="2"> instant, rapid, snappy, energetic</td>
    <td>Speed and Responsiveness</td>
</tr>
<tr>
    <td>expressive</td>
    <td colspan="2"> emphasis, bouncy, pulse, flip</td>
    <td>Personality and Playfulness</td>
</tr>
<tr>
    <td>calm</td>
    <td colspan="2"> subtle, gentle, settle, smooth, fluid, deliberate</td>
    <td>Subtle & Natural</td>
</tr>
<tr>
    <td>visibility</td>
    <td colspan="2"> slide-in, slide-out, fade-in, fade-out, enter, exit</td>
    <td>Visibility & Movement Change</td>
</tr>
<tr>
    <td>size</td>
    <td colspan="2"> scale-in, scale-out, grow, shrink, expand, collapse</td>
    <td>Size & Scale Adjustments</td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

