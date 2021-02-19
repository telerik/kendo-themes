---
title: Themebuilder
category: customization
slug: themebuilder
position: 4
---

# Themebuilder
The Kendo UI Theme Builder is a web application which enables you to create new or customize existing themes.

The Theme Builder renders the same look and feel as all other components in the Kendo UI suites and delivers full control over their visual elements.

Complex Kendo UI components, such as the Grid, rely on other components to deliver their full set of features. The Theme Builder automatically updates the styling on all required components so that you do not need to customize each of them separately.

## Creating New Themes
To create a new theme with the Theme Builder follow the steps below:

    1. Go to the [Theme Builder application](https://themebuilder.telerik.com/kendo-angular-ui).
    2. Select the Start Theming option.
    3. Choose one of the themes - Default, Bootstrap or Material, to serve as a starting point.
    4. Select Components to be Styled.
    5. Press the "Create" button.

    [theme-builder-create-and-download-1.png]

### Customizing New Themes
To customize a theme, use any of the following styling options that the Theme Builder delivers:

* Color pickers.
* Manual updates of the component elements.
* Predefined color swatches.

The changes are instantly applied and can be observe on the fly. [theme-builder-create-and-download-3.png]

## Editing Existing Theme
To edit an existing theme:

    1. Go to the [Theme Builder application](https://themebuilder.telerik.com/kendo-angular-ui).
    2. Select Import Theme.
    3. Upload a `variables.scss` file. It contains your current updates of the customized theme. As a result, the selected components and styling elements are loaded.
    3. Start customizing your theme by using the Theme Builder features your project requires.
[theme-builder-import-existing-theme.png]

### Using the Themes in Your Project
When you complete the customization of the theme, you can start using it in your project:

    1. Download the theme files by clicking the Download button.
    2. Register the downloaded theme in your project:
        * To use the complete theme for all components, include the all.css file as precompiled CSS.
        * To use the theme as SCSS, include the variables.scss file in the build process of your application:
    ```
    // import configuration from the theme builder
    @import 'variables.scss';

    // import the base theme
    @import '~@progress/kendo-theme-default/dist/all.scss';
    ```

    * If you include the bootstrap framework from its source, make sure to include kendo-theme-bootstrap and any ThemeBuilder output before you import the bootstrap framework:
    ```
    @import "variables";
    @import "~@progress/kendo-theme-bootstrap/dist/all.scss";
    @import "~bootstrap/scss/bootstrap";
    ```
