---
title: Customizing Shadows
description: "Refer to the list of the Kendo UI  theme variables available for customization."
slug: variables_kendotheme
position: 9
---

# Customizing Shadows

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
      <td>$elevation</td>
      <td>
          map-get( $theme, elevation )
      </td>
      <td>Color of shadows</td>
    </tr>
    <tr>
      <td>$box-shadow-depth-1</td>
      <td>
          0 2px 1px -1px rgba( $elevation, .2 ), 0 1px 1px 0 rgba( $elevation, .14 ), 0 1px 3px 0 rgba( $elevation, .12 )
      </td>
      <td>Shadow for switch.<br />Equivalent to material elevation 1.</td>
    </tr>
    <tr>
      <td>$box-shadow-depth-2</td>
      <td>
          0 3px 1px -2px rgba( $elevation, .2 ), 0 2px 2px 0 rgba( $elevation, .14 ), 0 1px 5px 0 rgba( $elevation, .12 )
      </td>
      <td>Shadow for resting state of button, card and other widgets.<br />Equivalent to material elevation 2.</td>
    </tr>
    <tr>
      <td>$box-shadow-depth-3</td>
      <td>
          0 5px 5px -3px rgba( $elevation, .2 ), 0 8px 10px 1px rgba( $elevation, .14 ), 0 3px 14px 2px rgba( $elevation, .12 )
      </td>
      <td>Shadow for menu, popups and raised state of button and card.<br />Equivalent to material elevation 8.</td>
    </tr>
    <tr>
      <td>$box-shadow-depth-4</td>
      <td>
          0 8px 10px -5px rgba( $elevation, .2 ), 0 16px 24px 2px rgba( $elevation, .14 ), 0 6px 30px 5px rgba( $elevation, .12 )
      </td>
      <td>Shadow for drawers and other overlaying elements.<br />Equivalent to material elevation 16.</td>
    </tr>
    <tr>
      <td>$box-shadow-depth-5</td>
      <td>
          0 11px 15px -7px rgba( $elevation, .2 ), 0 24px 38px 3px rgba( $elevation, .14 ), 0 9px 46px 8px rgba( $elevation, .12 )
      </td>
      <td>Shadow for window and dialog.<br />Equivalent to material elevation 24.</td>
    </tr>
  </tbody>
</table>




## Suggested Links

* [Styling Overview]({% slug themesandstyles %})
* [Web Font Icons]({% slug icons %})
* [Preview of the Themed Components](../)
