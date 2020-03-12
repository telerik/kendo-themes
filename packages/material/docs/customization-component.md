---
title: Customizing Component
description: "Refer to the list of the Kendo UI Material theme variables available for customization."
slug: variables_kendothemematerial_component
position: 9
---

# Customizing Component

The following table lists the available variables for customization.

<style>
.theme-variables th,
.theme-variables td {
  vertical-align: top;
}

.color-preview {
  border-radius: 50%;
  width: 1em;
  height: 1em;
  vertical-align: middle;
  display: inline-block;
  border: 1px solid rgba(0,0,0,.08);
}
</style>




<table class="theme-variables">
  <colgroup>
    <col style="width: 200px; white-space:nowrap;" />
    <col style="width: 250px" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th>Name</th>
      <th>Default value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$component-bg</td>
      <td>
          map-get($theme, component-bg)
      </td>
      <td>Background color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-bg` e.g. `$grid-bg: $component-bg !defualt;`.</td>
    </tr>
    <tr>
      <td>$component-text</td>
      <td>
          map-get($theme, component-text)
      </td>
      <td>Text color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-text` e.g. `$grid-text: component-text !default;`.</td>
    </tr>
    <tr>
      <td>$component-border</td>
      <td>
          map-get($theme, component-border)
      </td>
      <td>Border color of a component.<br />Note: do not use this variable directly. Instead derive it as `$component-name-border` e.g. `$grid-border: component-border !default;`.</td>
    </tr>
    <tr>
      <td>$widget-bg</td>
      <td>
          $component-bg
      </td>
      <td>Deprecated. Will be removed in v5. Use `$component-bg` variable instead.</td>
    </tr>
    <tr>
      <td>$widget-text</td>
      <td>
          $component-text
      </td>
      <td>Deprecated. Will be removed in v5. Use `$component-text` variable instead.</td>
    </tr>
    <tr>
      <td>$widget-border</td>
      <td>
          $component-border
      </td>
      <td>Deprecated. Will be removed in v5. Use `$component-border` variable instead.</td>
    </tr>
  </tbody>
</table>




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
