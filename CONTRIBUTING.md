# Contributing to the Kendo UI Themes

Thank you for your interest in contributing to Kendo UI!

## Ways to Contribute

You can contribute by:

* Submitting bug-fixes.
* Proposing changes in the documentation or updates to existing code.
* Adding features or missing functionality.

## Steps to Contribute

To submit a pull request:

1. If this is your first contribution to Kendo UI, read and sign the [Kendo UI Contribution License Agreement (CLA)](https://docs.google.com/forms/d/e/1FAIpQLSdSzuLLij8dtytTeiXCzlHcTmHYZIxgrAa7BSaO_fno79ua1A/viewform?c=0&w=1). The CLA confirms that you acknowledge the legal aspects of your contributions.
1. Fork the repo
1. Make changes in a git branch, dedicated to the issue you are fixing:

     ```shell
     git checkout -b my-fix-branch develop
     ```

1. Add your contribution, following the [coding guidelines](#coding-guidelines) and [commit message guidelines](#commit-message-guidelines).
1. [Submit a Pull Request](https://help.github.com/articles/creating-a-pull-request/).
1. Address any feedback to the Pull Request until the PR is approved.
1. Rebase your PR onto the latest changes from the `develop` branch.

### <a name="coding-guidelines"></a> Coding Guidelines

#### Include visual tests whenever possible

Whenever the styles of a component change, the build agent creates screenshots of the updated look and commits them to the repository. This allows changes to the styles to be visible directly in the Pull Request. The screenshots are created from the HTML pages inside the `tests/visual` directory.

Before changing the styles, make sure that the targeted markup exists in the test pages. If not, add it in a commit and push it. While you are fixing the issue, the build agent will submit the screenshot of the broken state. After pushing a fix, the build agent will push a display of the fixed state. This will allow reviewers to see how the theme was improved. Afterwards, all commits can be squashed into a single commit that adds the fix, test, and new screenshots.

For more information about the reasoning behind the process, [see this issue](https://github.com/telerik/kendo-theme-default/issues/720).

#### Wrap all code in modules

All styles should be wrapped inside SASS module declarations, implemented by the `exports` mixin. For example, here is the `button/layout` module:

```scss
// scss/button/_layout.scss
@include exports("button/layout") {
    .k-button {
        border-radius: $border-radius;
    }
}
```

Module names should be unique inside a theme. If a module is included by several files, it will be added to the output CSS just once, from its first ocurrance. This allows us to list dependencies for different components, without worrying that they will be included multiple times in the output.

For example, both the Slider and Grid components require the Button module:

```scss
// --- scss/button.scss ---
@import "button/layout";

// --- scss/slider.scss ---
// dependencies
@import "button";

// slider styles
@import "slider/layout";
@import "slider/theme";


// --- scss/grid.scss ---
// dependencies
@import "button";
@import "dropdownlist";

// grid styles
@import "grid/layout";
@import "grid/theme";
```

No matter how the components are included in the customer code, the button styles will be imported first, before any slider or grid styles.

For more details, see the article [Managing dependencies in SASS](https://www.ofcodeandcolor.com/2017/01/28/managing-dependencies-in-sass/) and the [source of the `exports` mixin](packages/default/scss/mixins/core/_import-once.scss).

#### Split layout styles from theming styles

Each component directory has a minimum of `_layout.scss` and `_theme.scss`:

- `_layout.scss` adds styles for the layout of the component. Don't use color variables in this file.
- `_theme.scss` adds color to the layout and defines the states of the component.

For example:

```scss
// _layout.scss
@include exports("colorpicker/layout") {
    .k-colorpicker {
        border-width: $input-border-size;
        border-style: solid;
    }
}

// _theme.scss
@include exports("colorpicker/theme") {
    .k-colorpicker {
        border-color: $input-border-color;
    }
}
```

#### Avoid use of `!important`

CSS rules that use the `!important` modifier are hard to maintain and very hard to override by customer code.
Using `!important` styles should be avoided unless absolutely necessary, in favor of meaningful selectors, even if that means changes in rendering.

The exception for this rule are cases where overrides to a style can break the functionality of the component, and are easily overwritten. For example:

- The upload component uses `font: 200px monochrome` on a hidden `<input type=file>`. Changing this would break the upload functionality, but it is very easy for customers to add a rule `#my-container input { font-size: 20px; }` that breaks this.
- The grid column autofitting columns measure text through a table that needs to have `table-layout: auto` and no column widths.

Every use of `!important` must be documented with an inline comment, describing why it exists.

```scss
// from upload/_layout.scss

// font should not depend on outside styles, otherwise the upload may break
font: 170px monospace !important; // sass-lint:disable-line no-important
```

#### Reuse identical theme code

It is very likely that the rules for a theme are not that different from another. You can reuse another theme by adding linking to it:

```scss
// --- packages/default/scss/button/_layout.scss (Default theme) ---
@include exports("button/layout") {
    .k-button {
        border-radius: $button-radius;
    }
}


// --- packages/material/scss/button/_layout.scss (Material theme) ---
// reuse default theme
@import "~@progress/kendo-theme-default/scss/button/layout";
```

#### Avoid overrides in derived themes

Try using variables to share code beween themes.

For example:

```scss
// BAD

// --- packages/default/scss/button/_layout.scss (Default theme) ---
@include exports("button/layout") {
    .k-button {
        border-radius: $button-radius;
    }
}


// --- packages/material/scss/button/_layout.scss (Material theme) ---

// reuse default theme
@import "~@progress/kendo-theme-default/scss/button/layout";

// override styles from the default theme
@include exports("button/layout/material") {
    .k-button {
        border-radius: $input-border-radius;
    }
}
```

This code will output two button rules for the Material theme. Instead, a variable that allows the button border radius to be changed can be used:

```scss
// GOOD

// Default theme, packages/default/scss/button/_layout.scss
$button-border-radius: $border-radius !default;

@include exports("button/layout") {
    .k-button {
        border-radius: $button-border-radius;
    }
}


// Material theme, packages/material/scss/button/_layout.scss

// change the default value of the button-border-radius variable
$button-border-radius: $input-border-radius !default;

// reuse the default theme
@import "~@progress/kendo-theme-default/scss/button/layout";
```

The new SASS variable acts as a public API of the theme, and allows the theme to be configured in the derived theme. This also gives customers more control over the theme.

#### Allow overrides of variables

Variables should be declared with a `!default` specifier. This allows them to be overwritten by derived themes or customer code:

```scss
$widget-boder-color: red !default;
```

An exception to this rule is when a variable is used as an intermediate result when performing calculations, and its value should not be controllable by the consuming code. For example:

```scss
// public variable that can be overwritten
$icon-size: 24px !important;

// variable for easier computation
$half-icon-size: $icon-size / 2;
```

#### Use consistent variable naming

Use the following suffixes when naming variables, depending on their purpose:

- for backgrounds, use `-bg`
- for border colors, use `-border`
- for text colors, use `-text`

When naming variables that are specific to a component, they should be prefixed with the component name, for example `$button-border` or `$grid-selected-text`.

Avoid specific property names when naming variables. For example, `$splitter-splitbar-width` may work fine for a horizontal splitter, but makes little sense in the vertical splitter, where the same variable will set the splitbar height. Consider the following subtitutions:

- `size` instead of `width` or `height`
- `offset` instead of `margin-left`

#### Document variables for public use

Adding a triple-slash comment above a variable marks it as a public variable and lists it in the customization help topic.

```scss
/// The background of alternating rows.
$grid-alt-bg: fuchsia !default;
```

To group variables under a same section, use the `@group` tag:

```scss
/// The background of alternating rows.
/// @group grid
$grid-alt-bg: fuchsia !default;
```

### <a name="commit-message-guidelines"></a> Commit Message Guidelines

We have precise rules over how our git commit messages are formatted.  This leads to **readable messages** that are easy to follow when looking through the project history. These commit messages also generate the project history.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The complete first line should be less than 50 characters.

### Type

Must be one of the following:

* **docs**: Documentation only changes
* **feat**: A new feature. This will increment the theme version by 0.1
* **fix**: A bug fix. This will increment the theme version by 0.0.1
* **perf**: A code change that improves performance
* **refactor**: A code change that improves the code maintainability or internal logic, without fixing a bug or implementing a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests cases or correcting existing tests

### Scope

The scope should be the name of the component affected.

### Subject

The subject contains a succinct description of the change:

* use the imperative present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end
* strive to limit the subject to 50 characters. The Github UI hides the rest of the info.

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior, any related issues or support ticket numbers.

For more information, see this [guide on how to write good commit messages](https://chris.beams.io/posts/git-commit/).
