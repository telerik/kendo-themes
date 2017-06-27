# Kendo UI Default Theme

* [License](#license)
* [Overview](#overview)
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

*Copyright © 2017 Telerik AD. All rights reserved.*

## Overview

The Kendo UI Default Theme is a SCSS-based theme for the Kendo UI components.

## Basic Usage

For more information on how to use the Default Theme in Angular 2 and React projects, refer to [its introductory topic](docs/index.md).

## Customization

To customize the Default Theme in one swoop, use the colors defined in the [`scss/_variables.scss`](scss/_variables.scss) file. Any change in this file is propagated to every component.

To style a specific component, use the variables used in its specific `.scss` file.

The theme is built by running `npm run build`. The `dist/all.css` file contains the complete theme that you can use in your project.

## Development

Styles are split into components and the dependencies are managed by the [`import-once`](scss/mixins/core/_import-once.scss) mixin. When configuring the styles, define them within an `import-once` block so that they are bundled once when required from multiple files.

During development, the SCSS files are linted on every `commit` and built on every `push` command. The theme package can be tested against a component by linking the theme in the components package.

Upon build, browser-specific properties are generated through the [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).

### Embedding Resources

When you update resources (images or fonts), run the `npm run embed-assets` task. The task generates a file with the same name, which registers a base64-encoded version in the `$data-uris` SCSS map. For example, the `foo.woff` font file will receive a `foo.scss` file, which can later be imported through `@import './font/foo';`. Then, inline the base64 version through `map-get( $data-uris, 'WebComponentsIcons.woff' )`. The embedding of resources avoids issues related with their hosting when your project consumes the theme. For more details, refer to [issue #41](https://github.com/telerik/kendo-theme-default/issues/41#issuecomment-258472183).

### Documenting Variables

The variables for customizing the Default theme are listed in the `docs/customization.md` article. It is generated from the SCSS source files by running the `npm run api` command.  

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

To change the layout or the front meter of the generated help topic, change the `build/customization.md.hbs` source file.
