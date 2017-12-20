---
title: Overview
description: "Preview and install the Kendo UI Default theme and style the Kendo UI components in Angular and React projects."
slug: preview_kendothemedefault
position: 1
---

# Overview

The Kendo UI Default theme is available through the @progress/kendo-theme-default NPM module.

## Installation

1. Download and install the package of the Default theme.

    ```bash
    npm install --save @progress/kendo-theme-default
    ```

1. Apply the Default theme options according to the instructions in the article on [styling]({% slug themesandstyles %}).

## Preview

The following example previews Kendo UI components which are styled with the Default theme.

{% theme_preview theme:default %}
{% platform_content angular %}
<script async src="{% asset_path theme-preview.js %}"></script>
{% endplatform_content %}
{% platform_content react %}
<script async src="{% asset_path react-theme-preview.js %}"></script>
{% endplatform_content %}

## Suggested Links

* [Styling the Kendo UI Components]({% slug themesandstyles %})
* [Kendo UI Font Icons]({% slug icons %})
