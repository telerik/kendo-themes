---
title: Overview
description: "Preview and install the Kendo UI Nouvelle theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemenouvelle
position: 1
---

# Nouvelle Theme Overview

> The Kendo UI Nouvelle Theme is currently experimental and covers base components such as buttons, inputs, etc. You can vote for it in this [Feedback Portal feature request](https://feedback.telerik.com/themes/1432136-add-theme-based-on-css-variables) if you want full coverage. Any updates will be posted in [this public issue](https://github.com/telerik/kendo-themes/issues/798).

In its essence, the Kendo UI Nouvelle Theme is a theme based on CSS variables that can be used with the Kendo UI component libraries. [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are properties you set in your stylesheets that can be reused throughout the application.

Unlike the Kendo UI Nouvelle Theme, the other three themes (Default, Bootstrap and Material) are based on [SCSS variables](https://sass-lang.com/documentation/variables).

{% platform_content angular %}
The Kendo UI for Angular Nouvelle theme is part of the Kendo UI for Angular library of UI components. It is distributed through NPM under the [kendo-theme-nouvelle package](https://www.npmjs.com/package/@progress/kendo-theme-nouvelle).
{% endplatform_content %}
{% platform_content react %}
The KendoReact Nouvelle theme is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-theme-nouvelle package](https://www.npmjs.com/package/@progress/kendo-theme-nouvelle).
{% endplatform_content %}

## Installation

1. Download and install the Kendo UI Nouvelle theme package.

    ```sh
    npm install --save @progress/kendo-theme-nouvelle
    ```

1. For the next steps that include alternative approaches for theme installation, refer to the instructions in the [article on styling in Kendo UI]({% slug themesandstyles %}).

## Suggested Links

* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
* [Kendo UI Theme Builder](https://themebuilder.telerik.com/)
