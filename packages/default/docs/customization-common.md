---
title: Customizing Common
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_common
position: 9
---

# Customizing Common

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
    <td>$kendo-focus-shadow</td>
    <td>List</td>
    <td><code>inset 0 0 0 2px rgba(0, 0, 0, .13)</code></td>
    <td><code>(inset 0 0 0 2px rgba(0, 0, 0, 0.13))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Box shadow of focused items.</div></div>
    </td>
</tr>
<tr>
    <td>$default-backdrop-blur</td>
    <td>Map</td>
    <td><code>(
    none: 0px,
    sm: 4px,
    md: 8px,
    lg: 12px,
    xl: 20px
)</code></td>
    <td><ul><li>none: 0px</li><li>sm: 4px</li><li>md: 8px</li><li>lg: 12px</li><li>xl: 20px</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Defines the blur radius applied to the content behind a translucent surface.</div></div>
    </td>
</tr>
<tr>
    <td>$default-bg-opacity</td>
    <td>Map</td>
    <td><code>(
    solid: 100%,
    subtle: 90%,
    moderate: 80%,
    strong: 60%
)</code></td>
    <td><ul><li>solid: 100%</li><li>subtle: 90%</li><li>moderate: 80%</li><li>strong: 60%</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Background Opacity Scale<br />Defines the opacity percentage for surface backgrounds via color-mix.</div></div>
    </td>
</tr>
<tr>
    <td>$default-border-opacity</td>
    <td>Map</td>
    <td><code>(
    solid: 100%,
    subtle: 60%,
    moderate: 40%,
    strong: 20%
)</code></td>
    <td><ul><li>solid: 100%</li><li>subtle: 60%</li><li>moderate: 40%</li><li>strong: 20%</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Border Opacity Scale<br />Defines the opacity percentage for surface borders via color-mix.</div></div>
    </td>
</tr>
<tr>
    <td>$default-transparency-presets</td>
    <td>Map</td>
    <td><code>(
    clear: (
        blur: none,
        bg-opacity: solid,
        border-opacity: solid
    ),
    subtle: (
        blur: sm,
        bg-opacity: subtle,
        border-opacity: subtle
    ),
    frosted: (
        blur: md,
        bg-opacity: moderate,
        border-opacity: moderate
    ),
    glass: (
        blur: lg,
        bg-opacity: strong,
        border-opacity: strong
    ),
    heavy: (
        blur: xl,
        bg-opacity: strong,
        border-opacity: solid
    )
)</code></td>
    <td><ul><li>clear: "blur":"none","bg-opacity":"solid","border-opacity":"solid"</li><li>subtle: "blur":"sm","bg-opacity":"subtle","border-opacity":"subtle"</li><li>frosted: "blur":"md","bg-opacity":"moderate","border-opacity":"moderate"</li><li>glass: "blur":"lg","bg-opacity":"strong","border-opacity":"strong"</li><li>heavy: "blur":"xl","bg-opacity":"strong","border-opacity":"solid"</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Transparency visual behavior presets - combinations of blur and opacity settings.</div></div>
    </td>
</tr>
<tr>
    <td>$default-transparency-targets</td>
    <td>Map</td>
    <td><code>(
    // Chrome surfaces - parts of components
    header: glass,
    header-sticky: heavy,
    footer: glass,
    toolbar: subtle,
    // toolbar-floating: frosted,

    // Floating surfaces - entire floating elements
    popup: glass,
    // dropdown: glass,
    // menu: glass,
    // notification: frosted,
    // toast: frosted,

    // Blocking surfaces - overlays
    // overlay: clear,
    // overlay-light: clear
)</code></td>
    <td><ul><li>header: glass</li><li>header-sticky: heavy</li><li>footer: glass</li><li>toolbar: subtle</li><li>popup: glass</li></ul></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">Transparency Targets - Semantic UI parts mapped to presets<br />Only parts that need transparency are defined here.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

