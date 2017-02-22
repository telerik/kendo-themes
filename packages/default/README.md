[![Build Status](https://travis-ci.org/telerik/kendo-theme-default.svg?branch=master)](https://travis-ci.org/telerik/kendo-theme-default)


# Kendo UI Default Theme

* [Overview](https://github.com/telerik/kendo-default-theme#overview)
* [Basic Usage](https://github.com/telerik/kendo-default-theme#basic-usage)

## Overview

The Kendo UI Default Theme is a SCSS-based theme for the Kendo UI components.

Currently, it is available for the following suites:  

* Kendo UI for React.
* Kendo UI for Angular 2.

We are working on providing support for the Default Theme in Kendo UI jQuery suite too.

## Basic Usage

For more information on how to use the Default Theme in Angular 2 and React projects, refer to [its introductory topic](docs/index.md).

## Customization

To customize the Default Theme in one swoop, use the colors defined in the [`styles/_variables.scss` file](styles/_variables.scss). Any change in this file is propagated to every component.

To style a specific component, use the variables used in its specific `.scss` file.

The theme is built by running `npm run build`. The `dist/all.css` file contains the complete theme that you can use in your project.

## Development

Styles are split into components and the dependencies are managed by the [`import-once` mixin](styles/mixins/_import-once.scss). When configuring the styles, define them within an `import-once` block so that they are bundled once when required from multiple files.

During development, the SCSS files are linted on every `commit` and built on every `push` command. The theme package can be tested against a component by linking the theme in the components package.

Upon build, browser-specific properties are generated through the [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).

### Embedding resources

When updating resources (images or fonts), run the `npm run embed-assets` task. This will generate a file with the same name, which registers a base64-encoded version in the `$data-uris` SCSS map. For example, the font file `foo.woff` will receive a `foo.scss` file, which can later be imported via `@import './font/foo';`. Then the base64 version can be inlined via `map-get( $data-uris, 'WebComponentsIcons.woff' )`. This is done in order to workaround problems with hosting resources when consuming the theme. See [issue #41](https://github.com/telerik/kendo-theme-default/issues/41#issuecomment-258472183) for more details.

### Writing API docs

The `docs/customization.md` help topic lists the theme variables that can be used for customization.
Running `npm run api` will generate this topic from theme variables source, rendering them via the `build/customization.md.hbs` template.

Document variables with triple-slash comments (`///`):

    /// Variable description
    $foo: 42 !default;

You can group variables with the `@group` directive:

    /// Variable description
    /// @group random
    $foo: 42 !default;

The build process checks if the documentation is up-to-date, so make sure to commit documentation changes along with source files.

