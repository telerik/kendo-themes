---
title: Customizing Common
description: "Refer to the list of the Kendo UI  theme variables available for customization."
slug: variables_kendotheme
position: 9
---

# Customizing Common

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
      <td>$border-radius</td>
      <td>
          2px
      </td>
      <td>Border radius for all components.</td>
    </tr>
    <tr>
      <td>$base-bg</td>
      <td>
          map-get( $theme, base-bg )
      </td>
      <td>The background of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$base-text</td>
      <td>
          map-get($theme, component-text)
      </td>
      <td>The text color of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$base-border</td>
      <td>
          rgba( if($theme-type == dark, white, black), .08 )
      </td>
      <td>The border of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$base-gradient</td>
      <td>
          null
      </td>
      <td>The gradient background of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$hovered-bg</td>
      <td>
          map-get( $theme, hover-bg )
      </td>
      <td>The background of hovered items.</td>
    </tr>
    <tr>
      <td>$hovered-text</td>
      <td>
          $base-text
      </td>
      <td>The text color of hovered items.</td>
    </tr>
    <tr>
      <td>$hovered-border</td>
      <td>
          rgba( if($theme-type == dark, white, black), .15 )
      </td>
      <td>The border color of hovered items.</td>
    </tr>
    <tr>
      <td>$hovered-gradient</td>
      <td>
          null
      </td>
      <td>The gradient background of hovered items.</td>
    </tr>
    <tr>
      <td>$selected-bg</td>
      <td>
          $secondary
      </td>
      <td>The background of selected items.</td>
    </tr>
    <tr>
      <td>$selected-text</td>
      <td>
          $secondary-contrast
      </td>
      <td>The text color of selected items.</td>
    </tr>
    <tr>
      <td>$selected-border</td>
      <td>
          rgba( if($theme-type == dark, white, black), .1 )
      </td>
      <td>The border color of selected items.</td>
    </tr>
    <tr>
      <td>$selected-gradient</td>
      <td>
          null
      </td>
      <td>The gradient background of selected items.</td>
    </tr>
  </tbody>
</table>




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
