# Kendo UI Default Theme

The Kendo UI Default Theme is a SCSS-based theme for the Kendo UI components.

* [License](#license)
* [Basic Usage](#basic-usage)
* [Customization](#customization)
* [Development](#development)
    * [Embedding Resources](#embedding-resources)
    * [Documenting Variables](#documenting-variables)

## License

This package is part of the following suites:

* [Kendo UI for Angular](http://www.telerik.com/kendo-angular-ui/)
* [Kendo UI for jQuery](http://www.telerik.com/kendo-ui)
* [UI for ASP.NET MVC](http://www.telerik.com/aspnet-mvc)
* [UI for ASP.NET Core](http://www.telerik.com/aspnet-core-ui)

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

If you do not own a commercial license, the usage of this software shall be governed by the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

## Basic Usage

For more information on how to implement the Default theme in your project, refer to the following articles:

* [Using the Default Theme in Angular Projects](http://www.telerik.com/kendo-angular-ui/components/styling/)
* [Using the Default Theme in jQuery Projects](http://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)

## Customization

To customize the Default Theme in one swoop, use the colors which are defined in the [`scss/_variables.scss`](scss/_variables.scss) file. Any change you make to the content of this file is propagated to every component.

To style a specific component, apply the variables which are used in its specific `.scss` file.

After you build the theme by running the `npm run build` command, the complete theme that you can use in your project will be available in the `dist/all.css` file.

## Development

The styles are split into components and the dependencies are managed by the [`import-once`](scss/mixins/core/_import-once.scss) mixin. When you configure the styles, define them within an `import-once` block. In this way, when required from multiple files, they are bundled once.

During development, the SCSS files are linted on every `commit` and built on every `push` command. To test the theme package against a component, link the theme in the components package.

Browser-specific properties are generated at build-time through the [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).

### Embedding Resources

The embedding of resources, such as images or fonts, avoids hosting-related issues when your project consumes the theme. For more details, refer to [issue #41](https://github.com/telerik/kendo-theme-default/issues/41#issuecomment-258472183).

To update the embedded resources in your project:

1. Run the `npm run embed-assets` task. As a result, the task generates a file with the same name, which registers a Base64-encoded version in the `$data-uris` SCSS map. For example, the `foo.woff` font file will receive a `foo.scss` file, which can later be imported through `@import './font/foo';`.
1. Inline the Base64 version through `map-get( $data-uris, 'WebComponentsIcons.woff' )`.

### Documenting Variables

The available variables for customizing the Default theme are listed in the article on [Default variables](https://github.com/telerik/kendo-theme-default/blob/develop/docs/customization.md). The file is generated from the SCSS source files by running the `npm run api` command.

To document a variable, use triple-slash comments (`///`) before its definition.

    /// Variable description
    $foo: 42 !default;

To group variables, use the `@group` directive.

    /// Variable description
    /// @group random
    $foo: 42 !default;

    /// Another variable description
    /// @group random
    $bar: 1024 !default;

To change the layout or the front meter of the generated help topic, change the [`build/customization.md.hbs`](/build/customization.md.hbs) source file.

*Copyright © 2017 Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.*

*Progress, Telerik, and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries.*
