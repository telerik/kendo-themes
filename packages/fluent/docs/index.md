---
title: Overview
description: "Preview and install the Kendo UI Fluent theme and style the Kendo UI components in Angular, React and Vue projects."
slug: preview_kendothemefluent
position: 1
---

# Fluent Theme Overview

{% platform_content angular %}
The Kendo UI for Angular Fluent theme is part of the Kendo UI for Angular library of UI components. It is distributed through NPM under the [kendo-theme-fluent package](https://www.npmjs.com/package/@progress/kendo-theme-fluent).
{% endplatform_content %}
{% platform_content react %}
The KendoReact Fluent theme is part of the KendoReact library of React UI components. It is distributed through NPM under the [kendo-theme-fluent package](https://www.npmjs.com/package/@progress/kendo-theme-fluent).
{% endplatform_content %}
{% platform_content vue %}
The Kendo UI for Vue Fluent theme is part of the Kendo UI for Vue library of UI components. It is distributed through NPM under the [kendo-theme-fluent package](https://www.npmjs.com/package/@progress/kendo-theme-fluent).
{% endplatform_content %}

## Installation

1. Download and install the Kendo UI Fluent theme package.

    ```sh
    npm install --save @progress/kendo-theme-fluent
    ```

1. For the next steps that include alternative approaches for theme installation, refer to the instructions in the [article on styling in Kendo UI]({% slug themesandstyles %}).

## Dependencies

For the Kendo UI Fluent theme to closely implement the [Fluent Design System](https://www.microsoft.com/design/fluent/#/), provide [the Segoe UI font family](#toc-fonts).

By default, the Fluent theme uses the Segoe UI font family but the font itself is not included in the theme package.

You can [download](https://aka.ms/webfluentfonts) and add the font in the following way:

```html-no-run
<style>
  body { font-family: "Segoe UI", sans-serif; }
</style>
```
## Preview

To apply the Fluent theme to any of the examples on this website, use the theme chooser drop-down at the top-right corner of the example. The {% platform_content angular %}Default{% endplatform_content %}{% platform_content react %}Material{% endplatform_content %}{% platform_content vue %}Material{% endplatform_content %} theme styling is loaded by default.

To simultaneously preview multiple components from different packages, to build your own theme, or to customize any of the available Kendo UI ones, use the capabilities of the [Kendo UI Theme Builder](https://themebuilder.telerik.com/) web application.

## Suggested Links

* [Fluent Design System](https://www.microsoft.com/design/fluent/#/)
* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
* [Kendo UI Theme Builder](https://themebuilder.telerik.com/)
