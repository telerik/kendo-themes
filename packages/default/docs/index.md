---
title: Overview
description: "Use themes to style the appearance of your project with Kendo UI for Angular 2."
slug: themesandstyles_kendouiforangular
position: 1
---

# Themes & Styling

Kendo UI for Angular 2 provides two main options to include the Kendo UI theme in your project.

You can either use a precompiled theme that styles all components or load the theme source files through Webpack to modify and customize its styles.

## Installation

To start using a theme, install it through npm.

```sh
npm install --save @telerik/kendo-theme-default
```

## Styling Options

Currently, the available themes are:

- Default ([@telerik/kendo-theme-default](https://www.npmjs.com/package/@telerik/kendo-theme-default))
- Bootstrap ([@telerik/kendo-theme-bootstrap](https://www.npmjs.com/package/@telerik/kendo-theme-bootstrap))

After its installation, the theme needs to be referenced in the project.

### Use Precompiled Themes

The example below demonstrates how to include the complete CSS of the default theme by using `styleUrls`. This configuration includes the styles for all components in Kendo UI for Angular 2.

```ts-no-run
@Component({
    selector: 'my-app',
    styleUrls: [
        // load the default theme (use correct path to modules)
        'node_modules/@telerik/kendo-theme-default/dist/all.css'
    ],
    template: `
        <h1>My First Kendo UI Angular 2 App</h1>
        <button kendoButton [primary]=true>
            My Kendo UI Button
        </button>
    `,

})
export class AppComponent { }
```

### Build Custom Themes

To change the theme colors or sizes, build a custom theme from its SCSS sources. To achieve this result, use a build system such as Webpack.

```ts-no-run
@Component({
    selector: 'my-app',
    styleUrls: [
        // load the default theme (use correct path to modules)
        'styles.scss'
    ],
    template: `
        <h1>My First Kendo UI Angular 2 App</h1>
        <button kendoButton [primary]=true>
            My Kendo UI Button
        </button>
    `,

})
export class AppComponent { }
```
```scss
@import "~@telerik/kendo-theme-default/styles/packages/all";
```

The setup described above allows for the theme variables to be changed directly in your application. To style the button in a lovely pink color, change the `$accent` variable before importing the theme.

```scss
$accent: #ff69b4;

@import "~@telerik/kendo-theme-default/styles/packages/all";
```

The basic set of variables is located in the [`\_variables.scss` file](https://github.com/telerik/kendo-theme-default/blob/master/styles/_variables.scss). Projects that are not built using the Angular CLI Tool require additional Webpack configuration to process SCSS files.

```json-no-run
{ test: /\.scss$/,
  loaders: [
    'css-loader?sourceMap',
    'sass-loader?sourceMap'
  ]
},
{
  test: /\.(gif|png|woff|woff2|eot|ttf|svg)$/,
  loader: 'url-loader?limit=100000'
}
```

For a working demo that demonstrates this approach, refer to the [ng2-dashboard sample application](https://github.com/telerik/ng2-dashboard).

## Suggested Links

* [Get Started with Kendo UI for Angular 2]({% slug getting_started_kendouiforangular %})
* [Browse the Components](http://www.telerik.com/kendo-angular-ui/components)
