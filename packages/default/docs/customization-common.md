---
title: Customizing Common
description: "Refer to the list of the Kendo UI Default theme variables available for customization."
slug: variables_kendothemedefault_common
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
      <td>$base-text</td>
      <td>
          <span class="color-preview" style="background-color: #656565"></span>
          #656565
      </td>
      <td>The text color of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$base-bg</td>
      <td>
          <span class="color-preview" style="background-color: #f6f6f6"></span>
          #f6f6f6
      </td>
      <td>The background of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$base-border</td>
      <td>
          rgba( black, .08 )
      </td>
      <td>The border color of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$base-gradient</td>
      <td>
          $base-bg, darken( $base-bg, 2% )
      </td>
      <td>The gradient background of the components' chrome area.</td>
    </tr>
    <tr>
      <td>$hovered-text</td>
      <td>
          <span class="color-preview" style="background-color: #656565"></span>
          #656565
      </td>
      <td>The text color of hovered items.</td>
    </tr>
    <tr>
      <td>$hovered-bg</td>
      <td>
          <span class="color-preview" style="background-color: #ededed"></span>
          #ededed
      </td>
      <td>The background of hovered items.</td>
    </tr>
    <tr>
      <td>$hovered-border</td>
      <td>
          rgba( black, .15 )
      </td>
      <td>The border color of hovered items.</td>
    </tr>
    <tr>
      <td>$hovered-gradient</td>
      <td>
          $hovered-bg, darken( $hovered-bg, 2% )
      </td>
      <td>The gradient background of hovered items.</td>
    </tr>
    <tr>
      <td>$selected-bg</td>
      <td>
          $primary
      </td>
      <td>The background of selected items.</td>
    </tr>
    <tr>
      <td>$selected-text</td>
      <td>
          contrast-wcag( $selected-bg )
      </td>
      <td>The text color of selected items.</td>
    </tr>
    <tr>
      <td>$selected-border</td>
      <td>
          rgba( black, .1 )
      </td>
      <td>The border color of selected items.</td>
    </tr>
    <tr>
      <td>$selected-gradient</td>
      <td>
          none
      </td>
      <td>The gradient background of selected items.</td>
    </tr>
  </tbody>
</table>




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
