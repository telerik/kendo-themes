---
title: Customizing Motion
description: "Refer to the list of the Kendo UI Bootstrap theme variables available for customization."
slug: variables_kendothemebootstrap_motion
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
    <td>$kendo-transitions</td>
    <td>Map</td>
    <td><code>$default-transitions</code></td>
    <td><ul><li>instant: "duration":"var(--kendo-duration-instant, 0ms)","easing":"var(--kendo-easing-linear, cubic-bezier(0, 0, 1, 1))"</li><li>rapid: "duration":"var(--kendo-duration-quick, 150ms)","easing":"var(--kendo-easing-decelerate, cubic-bezier(0, 0, 0.58, 1))"</li><li>snappy: "duration":"var(--kendo-duration-swift, 250ms)","easing":"var(--kendo-easing-decelerate, cubic-bezier(0, 0, 0.58, 1))"</li><li>energetic: "duration":"var(--kendo-duration-swift, 250ms)","easing":"var(--kendo-easing-elastic, cubic-bezier(0.5, -0.5, 0.5, 1.5))"</li><li>bouncy: "duration":"var(--kendo-duration-speedy, 300ms)","easing":"var(--kendo-easing-bounce, cubic-bezier(0.68, -0.55, 0.265, 1.55))"</li><li>subtle: "duration":"var(--kendo-duration-brisk, 350ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>gentle: "duration":"var(--kendo-duration-prompt, 400ms)","easing":"var(--kendo-easing-accelerate, cubic-bezier(0.42, 0, 1, 1))"</li><li>smooth: "duration":"var(--kendo-duration-moderate, 500ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>fluid: "duration":"var(--kendo-duration-steady, 600ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>enter: "duration":"var(--kendo-duration-speedy, 300ms)","easing":"var(--kendo-easing-decelerate, cubic-bezier(0, 0, 0.58, 1))"</li><li>exit: "duration":"var(--kendo-duration-rapid, 200ms)","easing":"var(--kendo-easing-accelerate, cubic-bezier(0.42, 0, 1, 1))"</li><li>settle: "duration":"var(--kendo-duration-brisk, 350ms)","easing":"var(--kendo-easing-decelerate, cubic-bezier(0, 0, 0.58, 1))"</li><li>scale-out: "duration":"var(--kendo-duration-quick, 150ms)","easing":"var(--kendo-easing-accelerate, cubic-bezier(0.42, 0, 1, 1))"</li><li>scale-in: "duration":"var(--kendo-duration-rapid, 200ms)","easing":"var(--kendo-easing-decelerate, cubic-bezier(0, 0, 0.58, 1))"</li><li>fade-out: "duration":"var(--kendo-duration-rapid, 200ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>fade-in: "duration":"var(--kendo-duration-swift, 250ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>slide-out: "duration":"var(--kendo-duration-swift, 250ms)","easing":"var(--kendo-easing-accelerate, cubic-bezier(0.42, 0, 1, 1))"</li><li>slide-in: "duration":"var(--kendo-duration-speedy, 300ms)","easing":"var(--kendo-easing-decelerate, cubic-bezier(0, 0, 0.58, 1))"</li><li>emphasis: "duration":"var(--kendo-duration-quick, 150ms)","easing":"var(--kendo-easing-sharp, cubic-bezier(0.75, 0, 0.25, 1))"</li><li>collapse: "duration":"var(--kendo-duration-speedy, 300ms)","easing":"var(--kendo-easing-accelerate, cubic-bezier(0.42, 0, 1, 1))"</li><li>expand: "duration":"var(--kendo-duration-prompt, 400ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>shrink: "duration":"var(--kendo-duration-brisk, 350ms)","easing":"var(--kendo-easing-accelerate, cubic-bezier(0.42, 0, 1, 1))"</li><li>grow: "duration":"var(--kendo-duration-prompt, 400ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>pulse: "duration":"var(--kendo-duration-brisk, 350ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li><li>flip: "duration":"var(--kendo-duration-measured, 550ms)","easing":"var(--kendo-easing-standard, cubic-bezier(0.42, 0, 0.58, 1))"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The global map of motion duration tokens.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-transition</td>
    <td>List</td>
    <td><code>color k-transition(rapid), background-color k-transition(rapid), border-color k-transition(rapid), box-shadow k-transition(rapid)</code></td>
    <td><code>(color var(--kendo-transition-rapid), background-color var(--kendo-transition-rapid), border-color var(--kendo-transition-rapid), box-shadow var(--kendo-transition-rapid))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">LEGACY, used across multiple components for consistent hover, focus, and state changes.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

