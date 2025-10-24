---
title: Customizing Chat
description: "Refer to the list of the Kendo UI Fluent theme variables available for customization."
slug: variables_kendothemefluent_chat
position: 9
---

# Customizing Chat

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
    <td>$kendo-chat-padding-x</td>
    <td>String</td>
    <td><code>var( --kendo-chat-padding-x, #{k-spacing(4)} )</code></td>
    <td><code>var(--kendo-chat-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-width</td>
    <td>Number</td>
    <td><code>280px</code></td>
    <td><code>280px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-height</td>
    <td>String</td>
    <td><code>var( --kendo-chat-height, 600px )</code></td>
    <td><code>var(--kendo-chat-height, 600px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum height of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border-width</td>
    <td>String</td>
    <td><code>var( --kendo-chat-border-width, 1px )</code></td>
    <td><code>var(--kendo-chat-border-width, 1px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-family</td>
    <td>String</td>
    <td><code>var( --kendo-chat-font-family, var( --kendo-font-family, inherit ) )</code></td>
    <td><code>var(--kendo-chat-font-family, var(--kendo-font-family, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font family of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-chat-font-size, var( --kendo-font-size, inherit ) )</code></td>
    <td><code>var(--kendo-chat-font-size, var(--kendo-font-size, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-chat-line-height, var( --kendo-line-height, normal ) )</code></td>
    <td><code>var(--kendo-chat-line-height, var(--kendo-line-height, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-item-spacing-y</td>
    <td>String</td>
    <td><code>k-spacing(4)</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical spacing between the items of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-max-width</td>
    <td>Calculation</td>
    <td><code>min(75%, 460px)</code></td>
    <td><code>min(75%, 460px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of the Chat message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-gap</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the items of the Chat message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-x</td>
    <td>String</td>
    <td><code>$kendo-chat-padding-x</code></td>
    <td><code>var(--kendo-chat-padding-x, var(--kendo-spacing-4, 1rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-padding-y</td>
    <td>String</td>
    <td><code>$kendo-chat-padding-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-list-spacing</td>
    <td>String</td>
    <td><code>$kendo-chat-item-spacing-y</code></td>
    <td><code>var(--kendo-spacing-4, 1rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat message list.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-status-min-size</td>
    <td>String</td>
    <td><code>var(--kendo-chat-status-min-size, #{k-spacing(1.5)})</code></td>
    <td><code>var(--kendo-chat-status-min-size, var(--kendo-spacing-1\.5, 0.375rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum size of the Chat message status.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-status-max-size</td>
    <td>String</td>
    <td><code>var(--kendo-chat-status-max-size, #{k-spacing(8)})</code></td>
    <td><code>var(--kendo-chat-status-max-size, var(--kendo-spacing-8, 2rem))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum size of the Chat message status.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-status-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the icon and text in the Chat message status.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-chat-timestamp-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-chat-timestamp-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-chat-timestamp-line-height, var( --kendo-line-height-lg, normal ) )</code></td>
    <td><code>var(--kendo-chat-timestamp-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-transform</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text transform of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-text</td>
    <td>String</td>
    <td><code>var( --kendo-chat-timestamp-text, #{k-color(subtle)} )</code></td>
    <td><code>var(--kendo-chat-timestamp-text, var(--kendo-color-subtle, #707070))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-bg</td>
    <td>Color</td>
    <td><code>transparent</code></td>
    <td><span class="color-preview" style="background-color: transparent"></span><code>transparent</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat timestamp.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-separator-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 26%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 26%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat timestamp separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-timestamp-separator-spacing</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the Chat timestamp and its separator.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-meta-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-chat-message-meta-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-chat-message-meta-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat message meta text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-meta-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-chat-message-meta-line-height, var( --kendo-line-height-lg, normal ) )</code></td>
    <td><code>var(--kendo-chat-message-meta-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat message meta text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-author-font-size</td>
    <td>String</td>
    <td><code>var( --kendo-chat-author-font-size, var( --kendo-font-size-sm, inherit ) )</code></td>
    <td><code>var(--kendo-chat-author-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat author text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-author-line-height</td>
    <td>String</td>
    <td><code>var( --kendo-line-height-xs, normal )</code></td>
    <td><code>var(--kendo-line-height-xs, normal)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat author text.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-status-text</td>
    <td>String</td>
    <td><code>k-color(subtle)</code></td>
    <td><code>var(--kendo-color-subtle, #707070)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat status.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bubble-spacing</td>
    <td>String</td>
    <td><code>k-spacing(2)</code></td>
    <td><code>var(--kendo-spacing-2, 0.5rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing of the Chat bubble message.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chat-toolbar-bg, #{$kendo-toolbar-bg} )</code></td>
    <td><code>var(--kendo-chat-toolbar-bg, var(--kendo-toolbar-bg, var(--kendo-color-surface, #ffffff)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-text</td>
    <td>String</td>
    <td><code>var( --kendo-chat-toolbar-text, #{$kendo-toolbar-text} )</code></td>
    <td><code>var(--kendo-chat-toolbar-text, var(--kendo-toolbar-text, var(--kendo-color-on-app-surface, #242424)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-toolbar-border</td>
    <td>String</td>
    <td><code>var( --kendo-chat-toolbar-border, inherit )</code></td>
    <td><code>var(--kendo-chat-toolbar-border, inherit)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat Toolbar.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chat-bg, #{k-color(surface)} )</code></td>
    <td><code>var(--kendo-chat-bg, var(--kendo-color-surface, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-text</td>
    <td>String</td>
    <td><code>var( --kendo-chat-text, #{k-color(on-app-surface)} )</code></td>
    <td><code>var(--kendo-chat-text, var(--kendo-color-on-app-surface, #242424))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-border</td>
    <td>String</td>
    <td><code>var( --kendo-chat-border, #{color-mix(in srgb, k-color(border) 16%, transparent)} )</code></td>
    <td><code>var(--kendo-chat-border, color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-bg</td>
    <td>String</td>
    <td><code>var( --kendo-chat-alt-bubble-bg, #{k-color(primary)} )</code></td>
    <td><code>var(--kendo-chat-alt-bubble-bg, var(--kendo-color-primary, #0f6cbd))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-text</td>
    <td>String</td>
    <td><code>var( --kendo-chat-alt-bubble-text, #{k-color(surface-alt)} )</code></td>
    <td><code>var(--kendo-chat-alt-bubble-text, var(--kendo-color-surface-alt, #ffffff))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-border</td>
    <td>String</td>
    <td><code>var( --kendo-chat-alt-bubble-border, #{$kendo-chat-alt-bubble-bg} )</code></td>
    <td><code>var(--kendo-chat-alt-bubble-border, var(--kendo-chat-alt-bubble-bg, var(--kendo-color-primary, #0f6cbd)))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-alt-bubble-shadow</td>
    <td>String</td>
    <td><code>none</code></td>
    <td><code>none</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The shadow of the Chat alt bubble.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-typing-indicator-text</td>
    <td>String</td>
    <td><code>k-color(base-on-subtle)</code></td>
    <td><code>var(--kendo-color-base-on-subtle, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The color of the typing indicator dots.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-min-width</td>
    <td>String</td>
    <td><code>var(--kendo-chat-file-min-width, 96px)</code></td>
    <td><code>var(--kendo-chat-file-min-width, 96px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The minimum width of a file in the Chat Textarea.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-max-width</td>
    <td>String</td>
    <td><code>var(--kendo-chat-file-max-width, 160px)</code></td>
    <td><code>var(--kendo-chat-file-max-width, 160px)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The maximum width of a file in the Chat Textarea.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-name-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-chat-file-name-font-size, var( --kendo-font-size-sm, inherit ))</code></td>
    <td><code>var(--kendo-chat-file-name-font-size, var(--kendo-font-size-sm, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat file name.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-name-line-height</td>
    <td>String</td>
    <td><code>var(--kendo-chat-file-name-line-height, var( --kendo-line-height-lg, normal ))</code></td>
    <td><code>var(--kendo-chat-file-name-line-height, var(--kendo-line-height-lg, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat file name.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-size-font-size</td>
    <td>String</td>
    <td><code>var(--kendo-chat-file-size-font-size, var( --kendo-font-size-xs, inherit ))</code></td>
    <td><code>var(--kendo-chat-file-size-font-size, var(--kendo-font-size-xs, inherit))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The font size of the Chat file size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-size-line-height</td>
    <td>String</td>
    <td><code>var(--kendo-chat-file-size-line-height, var( --kendo-line-height-xs, normal ))</code></td>
    <td><code>var(--kendo-chat-file-size-line-height, var(--kendo-line-height-xs, normal))</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The line height of the Chat file size.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-gap</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The spacing between the elements of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(base-on-subtle) 8%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-base-on-subtle, #242424) 8%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-text</td>
    <td>String</td>
    <td><code>k-color(base-on-subtle)</code></td>
    <td><code>var(--kendo-color-base-on-subtle, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-border</td>
    <td>String</td>
    <td><code>$kendo-chat-file-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-base-on-subtle, #242424) 8%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-file-border-radius</td>
    <td>String</td>
    <td><code>k-border-radius(md)</code></td>
    <td><code>var(--kendo-border-radius-md, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border-radius of the Chat file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-sender-file-bg</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(on-primary) 14%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-primary, #ffffff) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat sender file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-sender-file-text</td>
    <td>String</td>
    <td><code>k-color(on-primary)</code></td>
    <td><code>var(--kendo-color-on-primary, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat sender file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-sender-file-border</td>
    <td>String</td>
    <td><code>$kendo-chat-sender-file-bg</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-on-primary, #ffffff) 14%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat sender file.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-pinned-border-width</td>
    <td>Number</td>
    <td><code>1px</code></td>
    <td><code>1px</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border width of the Chat pinned message;</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-pinned-border-style</td>
    <td>String</td>
    <td><code>solid</code></td>
    <td><code>solid</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border style of the Chat pinned message;</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-pinned-border-color</td>
    <td>String</td>
    <td><code>color-mix(in srgb, k-color(border) 16%, transparent)</code></td>
    <td><code>color-mix(in srgb, var(--kendo-color-border, rgba(36, 36, 36, 0.72)) 16%, transparent)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The border color of the Chat pinned message;</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-reference-padding-x</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The horizontal padding of the Chat message reference.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-reference-padding-y</td>
    <td>String</td>
    <td><code>k-spacing(1)</code></td>
    <td><code>var(--kendo-spacing-1, 0.25rem)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The vertical padding of the Chat message reference.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-reference-bg</td>
    <td>String</td>
    <td><code>k-color(surface)</code></td>
    <td><code>var(--kendo-color-surface, #ffffff)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the Chat message reference.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-reference-text</td>
    <td>String</td>
    <td><code>k-color(on-app-surface)</code></td>
    <td><code>var(--kendo-color-on-app-surface, #242424)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The text color of the Chat message reference.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-reference-marker-bg</td>
    <td>String</td>
    <td><code>k-color(base-emphasis)</code></td>
    <td><code>var(--kendo-color-base-emphasis, #d1d1d1)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the message reference marker.</div></div>
    </td>
</tr>
<tr>
    <td>$kendo-chat-message-reference-marker-alt-bg</td>
    <td>String</td>
    <td><code>k-color(primary)</code></td>
    <td><code>var(--kendo-color-primary, #0f6cbd)</code></td>
</tr>
<tr>
    <td colspan="4" class="theme-variables-description-container"><div><b>Description</b><div class="theme-variables-description">The background color of the message reference alt marker.</div></div>
    </td>
</tr>
</tbody>
</table>

## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)

