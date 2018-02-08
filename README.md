# Kendo UI Themes Monorepo

Theis is a monorepo that holds the SCSS-based themes for the Kendo UI components.

* [License](#license)
* [Basic Usage](#basic-usage)
* [Development](#development)
    * [Embedding Resources](#embedding-resources)
    * [Documenting Variables](#documenting-variables)

## License

This package is part of the following suites:

* [Kendo UI for Angular](http://www.telerik.com/kendo-angular-ui/)
* [Kendo UI for React](http://www.telerik.com/kendo-react-ui/)
* [Kendo UI for Vue](http://www.telerik.com/kendo-vue-ui/)
* [Kendo UI for jQuery](http://www.telerik.com/kendo-ui)
* [UI for ASP.NET MVC](http://www.telerik.com/aspnet-mvc)
* [UI for ASP.NET Core](http://www.telerik.com/aspnet-core-ui)

All available Kendo UI commercial licenses may be obtained at http://www.telerik.com/purchase/kendo-ui.

If you do not own a commercial license, the usage of this software shall be governed by the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

## Basic Usage

For more information on how to add one of the themes in your project, refer to the following articles:

* [Using the Kendo UI themes in Angular Projects](http://www.telerik.com/kendo-angular-ui/components/styling/)
* [Using the Kendo UI themes in jQuery Projects](http://docs.telerik.com/kendo-ui/styles-and-layout/sass-themes)

## Development

The styles are split into components and the dependencies are managed by the [`import-once`](scss/mixins/core/_import-once.scss) mixin. When you configure the styles, define them within an `import-once` block. In this way, when required from multiple files, they are bundled once.

During development, the SCSS files are linted on every `commit` and built on every `push` command. To test the theme package against a component, link the theme in the components package.

Browser-specific properties are generated at build-time through the [PostCSS autoprefixer](https://github.com/postcss/autoprefixer).

### Working with the themes monorepo

The repository uses [lerna](https://github.com/lerna/lerna/) to ship the multiple theme packages from a single git repository. For details why this is a good idea for the themes, see [this issue](https://github.com/telerik/kendo-theme-default/issues/720).

To set up the repository and cross-link the theme packages, run the following commands:

```bash
# install root-level dependencies
npm install

# installs theme dependencies and cross-links theme packages
npx lerna bootstrap
```

> `npx` runs packages from `./node_modules/.bin`, without requiring a global install

After running these, you can use the following commands in the root of the repository:

```bash
# runs linting over all themes
npx lerna run lint

# builds all themes
npx lerna run build

# runs tests (lint + js tests + build)
npm test
```

Changes in the `develop` branch will release a new package version on the `dev` channel, in the format `(version)-dev.(hash)`. The latest development version of a given theme can be installed with `npm install (themename)@dev`, for example `npm install @progress/kendo-theme-default@dev`.

### Embedding Resources

To avoid hosting-related issues in projects that use the themes, we embed resources by encoding them in the output CSS. For more details, refer to [this issue](https://github.com/telerik/kendo-theme-default/issues/41#issuecomment-258472183).

To embed the latest resources in a given theme:

1. Run the `npm run embed-assets` task in the theme subfolder. The task generates a file with the same name, which registers a Base64-encoded version in the `$data-uris` SCSS map. For example, the `foo.woff` font file will be encoded in a `foo.scss` file, which can later be imported through `@import './font/foo';`.
1. Inline the encoded file inside the CSS through `map-get( $data-uris, 'foo.woff' )`. For example:

    ```scss
    @font-face {
        font-family: 'WebComponentsIcons';
        src: url(map-get( $data-uris, 'WebComponentsIcons.woff' )) format( "woff" );
    }
    ```

### Documenting Variables

The available variables for customizing each theme are listed in the article on customization for each theme (`docs/customization.md`) The file is generated from the SCSS source files by running the `npm run api` command.

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

*Copyright © 2018 Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.*

*Progress, Telerik, and certain product names used herein are trademarks or registered trademarks of Progress Software Corporation and/or one of its subsidiaries or affiliates in the U.S. and/or other countries.*
