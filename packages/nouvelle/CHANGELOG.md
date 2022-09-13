# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [5.8.1](https://github.com/telerik/kendo-themes/compare/v5.8.0...v5.8.1) (2022-09-13)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





# [5.8.0](https://github.com/telerik/kendo-themes/compare/v5.7.0...v5.8.0) (2022-09-12)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





# [5.7.0](https://github.com/telerik/kendo-themes/compare/v5.6.0...v5.7.0) (2022-09-05)


### Bug Fixes

* add calc function when calculating line-height-em ([0f7a691](https://github.com/telerik/kendo-themes/commit/0f7a691cf2a2b3ca97c3757b9d72a265f68c16d2))


### Features

* streamline interactive class names ([041a9ee](https://github.com/telerik/kendo-themes/commit/041a9ee698a5c1c62f8d6cd2ed01b95e6d7c3b76))





# [5.6.0](https://github.com/telerik/kendo-themes/compare/v5.5.0...v5.6.0) (2022-07-25)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





# [5.5.0](https://github.com/telerik/kendo-themes/compare/v5.4.1...v5.5.0) (2022-06-13)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





## [5.4.1](https://github.com/telerik/kendo-themes/compare/v5.4.0...v5.4.1) (2022-05-05)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





# [5.4.0](https://github.com/telerik/kendo-themes/compare/v5.3.1...v5.4.0) (2022-05-02)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





## [5.3.1](https://github.com/telerik/kendo-themes/compare/v5.3.0...v5.3.1) (2022-04-07)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





# [5.3.0](https://github.com/telerik/kendo-themes/compare/v5.2.0...v5.3.0) (2022-04-04)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





# [5.2.0](https://github.com/telerik/kendo-themes/compare/v5.1.1...v5.2.0) (2022-02-21)


### Bug Fixes

* **input:** conditionally set spinner offset to calculated or auto ([04d5b35](https://github.com/telerik/kendo-themes/commit/04d5b3529870030ac38777be838680c1d7d0e8a5))





## [5.1.1](https://github.com/telerik/kendo-themes/compare/v5.1.0...v5.1.1) (2022-01-24)


### Bug Fixes

* scope theme colors variables to avoid conflicts with bootstrap ([3713876](https://github.com/telerik/kendo-themes/commit/37138761677d9ee14dc48a7a8b80209839e33be2))





# [5.1.0](https://github.com/telerik/kendo-themes/compare/v5.0.1...v5.1.0) (2022-01-24)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





## [5.0.1](https://github.com/telerik/kendo-themes/compare/v5.0.0...v5.0.1) (2022-01-19)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





# [5.0.0](https://github.com/telerik/kendo-themes/compare/v4.44.0...v5.0.0) (2022-01-18)


### Features

* **button:** add size, shape and color customization to button ([db31d3f](https://github.com/telerik/kendo-themes/commit/db31d3f2c5da75d8a02e16f4824835574af45e14))
* **input:** add new high-level input component ([6f45cf0](https://github.com/telerik/kendo-themes/commit/6f45cf0e1c4aeeca31cf8607e7f5b16f51dec598))
* **list:** add size customization to list ([1509542](https://github.com/telerik/kendo-themes/commit/15095429fba919f86a59e2f862b7b5415122f2b4))
* **masked-textbox:** add size, rounded and fill customization to masked textbox ([995dc3f](https://github.com/telerik/kendo-themes/commit/995dc3f9694f2bab387096e8ec4192515f4566ad))


### infra

* **publishing:** do not include flattened dependencies in distributions ([6dd9537](https://github.com/telerik/kendo-themes/commit/6dd95376dd86cd2182987195ee8b79938e19c285))


### BREAKING CHANGES

* **list:** List size is now applied by a dedicated class.
* **list:** Rename list state variables.
* **list:** Add kendo prefix to all list variables

Change variable name from `$list-*` to `$kendo-list-*`.
* **masked-textbox:** Use high-level input for masked textbox base

Masked textbox reuses the input base component size, rounded and fill
component options.
* **input:** Add new high-level input and picker component

Previously, the various form components did not share or reuse code.
Now, we have have to base components: input and picker, that
hold the bulk of styling needed. In addition, styles are split in multiple class names
with each being scoped to a single component appearance property:

* `size` controls the overall physical size of a component;
* `themeColor` controls which color is used to style a component;
* `fillMode` controls how the color is applied;
* `rounded` controls what border radius is applied to a component.

Each property generates component specific class name `k-input-{size}`,
`k-input-{fillMode}`, `k-input-{fillMode}-{themeColor}`.

Note: without `fillMode`, there is no way to apply themeColor, that's why
the `themeColor` class is composite.

The only notable exception is rounded, which sets the same class name
for all components -- `k-rounded-{rounded}`.

You can find more information about the values of each property in the
documentation of each respective component -- /docs/components/....
* **input:** Remove residual styles

No further customization is applied to input and picker components when
hosted inside other components, except in very few specific cases.
* **input:** Add kendo prefix to all variables

Change variable names from `$input-*` to `$kendo-input-*`.
* **button:** Convert monolithic button styles to multiple class names

Previously, `k-button` held all the styling information related to
the button component. Now, styles are split in multiple class names
with each being scoped to a single button appearance property:

* `shape` controls if the button is square or not;
* `size` controls the overall physical size of a button;
* `themeColor` controls which color is used to style a button;
* `fillMode` controls how the color is applied;
* `rounded` controls what border radius is applied to a button.

Each property generates component specific class name `k-button-square`,
`k-button-{size}`, `k-button-{fillMode}`, `k-button-{fillMode}-{themeColor}`.

Note: without `fillMode`, there is no way to apply themeColor, that's why
the `themeColor` class is composite.

The only notable exception is rounded, which sets the same class name
for all components -- `k-rounded-{rounded}`.

You can find more information about the values of each property in the
documentation of the button component -- /docs/components/button.
* **button:** Remove residual button styles

No further customization is applied to buttons when hosted inside other
components, except in very few specific cases.

For instance, in Material theme we would slightly dim the normal buttons
and remove the shadow, which may or may not be desired.
* **button:** Add kendo prefix to all button variables

Change variable names from `$button-*` to `$kendo-button-*`.
* **publishing:** Do not include flattened dependencies in distributions





# [4.44.0](https://github.com/telerik/kendo-themes/compare/v4.43.0...v4.44.0) (2022-01-18)


### Bug Fixes

* ensure correct font sizes for xs sm md lg and xl ([1615afa](https://github.com/telerik/kendo-themes/commit/1615afa6446fa827249776f70e6301f677fd251d))





# [4.43.0](https://github.com/telerik/kendo-themes/compare/v4.42.0...v4.43.0) (2021-11-29)


### Bug Fixes

* add global variables wcag-light and wcag-dark to work with contrast-wcag function ([c618118](https://github.com/telerik/kendo-themes/commit/c618118e099575fdf027ad06009f6f3c01d5c672))





# [4.42.0](https://github.com/telerik/kendo-themes/compare/v4.41.2...v4.42.0) (2021-10-18)


### Features

* add utils modules to nouvelle (only grid and flex) ([6d90e6f](https://github.com/telerik/kendo-themes/commit/6d90e6f55e3916b7c682a680cb72080a89f557af))
* **autocomplete:** use :where styles for autocomplete ([780f841](https://github.com/telerik/kendo-themes/commit/780f8413c0632698bb94486cccd5ec00e6e417cc))
* **button:** use :where styles for button ([176f2b2](https://github.com/telerik/kendo-themes/commit/176f2b27e62fa06f898aab6565c77b3e6c26ae79))
* **combobox:** use :where styles for combobox ([84a18e8](https://github.com/telerik/kendo-themes/commit/84a18e857d143b07492201359d5e8e1e8c9d1153))
* convert nouvelle to new module system ([c7d8b02](https://github.com/telerik/kendo-themes/commit/c7d8b02bb4e950e2d82588bbe0e62fe2101f305d))
* **dropdownlist:** use :where styles for dropdownlist ([dace4cc](https://github.com/telerik/kendo-themes/commit/dace4cc2230e95b304bfc6f0eae9076e5b5e59c2))
* introduce new module system for nouvelle theme ([914f3b4](https://github.com/telerik/kendo-themes/commit/914f3b4cccb08968fe816002d6ce5b2ca6d79ee5))
* **textbox:** extract textbox as a separate module ([6c98361](https://github.com/telerik/kendo-themes/commit/6c983611935750e4356a03b1f521a4d03807f637))
* use box-sizing border-box for all elements ([0b14ce9](https://github.com/telerik/kendo-themes/commit/0b14ce9206b0c8c46dd87431d493a1111c400b1b))





# [4.42.0-dev.0](https://github.com/telerik/kendo-themes/compare/v4.41.2...v4.42.0-dev.0) (2021-10-18)


### Features

* add utils modules to nouvelle (only grid and flex) ([6d90e6f](https://github.com/telerik/kendo-themes/commit/6d90e6f55e3916b7c682a680cb72080a89f557af))
* **autocomplete:** use :where styles for autocomplete ([780f841](https://github.com/telerik/kendo-themes/commit/780f8413c0632698bb94486cccd5ec00e6e417cc))
* **button:** use :where styles for button ([176f2b2](https://github.com/telerik/kendo-themes/commit/176f2b27e62fa06f898aab6565c77b3e6c26ae79))
* **combobox:** use :where styles for combobox ([84a18e8](https://github.com/telerik/kendo-themes/commit/84a18e857d143b07492201359d5e8e1e8c9d1153))
* convert nouvelle to new module system ([c7d8b02](https://github.com/telerik/kendo-themes/commit/c7d8b02bb4e950e2d82588bbe0e62fe2101f305d))
* **dropdownlist:** use :where styles for dropdownlist ([dace4cc](https://github.com/telerik/kendo-themes/commit/dace4cc2230e95b304bfc6f0eae9076e5b5e59c2))
* introduce new module system for nouvelle theme ([914f3b4](https://github.com/telerik/kendo-themes/commit/914f3b4cccb08968fe816002d6ce5b2ca6d79ee5))
* **textbox:** extract textbox as a separate module ([6c98361](https://github.com/telerik/kendo-themes/commit/6c983611935750e4356a03b1f521a4d03807f637))
* use box-sizing border-box for all elements ([0b14ce9](https://github.com/telerik/kendo-themes/commit/0b14ce9206b0c8c46dd87431d493a1111c400b1b))





## [4.41.2](https://github.com/telerik/kendo-themes/compare/v4.41.1...v4.41.2) (2021-09-13)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





## 4.41.2-dev.2 (2021-09-13)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





## 4.41.2-dev.1 (2021-09-11)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





## 4.41.2-dev.0 (2021-09-08)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





## 4.41.1 (2021-09-06)


### Bug Fixes

* **sheduler:** scheduler resource cells should not flex ([8e848d3](https://github.com/telerik/kendo-themes/commit/8e848d351452aa6eedf7c5336138991ebad4b4b1))





## 4.40.1 (2021-07-28)

**Note:** Version bump only for package @progress/kendo-theme-nouvelle





<a name="4.40.0"></a>
# 4.40.0 (2021-07-26)


### Bug Fixes

* extract styles for generic separator ([279e5d0](https://github.com/telerik/kendo-themes/commit/279e5d0))
* remove usages of background-clip styling ([accb3ef](https://github.com/telerik/kendo-themes/commit/accb3ef))
* update swatches schema ([b2fa497](https://github.com/telerik/kendo-themes/commit/b2fa497))




<a name="0.3.0"></a>
# 0.3.0 (2021-06-14)


### Features

* **core:** add styles for stack and grid layout ([171e9ae](https://github.com/telerik/kendo-themes/commit/171e9ae))
* **core:** extract extra scss file with common styles ([7697789](https://github.com/telerik/kendo-themes/commit/7697789))
* extract core module ([4d0cfda](https://github.com/telerik/kendo-themes/commit/4d0cfda))




<a name="0.2.6"></a>
## 0.2.6 (2021-05-04)




**Note:** Version bump only for package @progress/kendo-theme-nouvelle

<a name="0.2.5"></a>
## [0.2.5](https://github.com/telerik/kendo-themes/compare/@progress/kendo-theme-nouvelle@0.2.4...@progress/kendo-theme-nouvelle@0.2.5) (2020-11-16)


### Bug Fixes

* **window:** update window styles to match new font style metrics ([9c36541](https://github.com/telerik/kendo-themes/commit/9c36541))




<a name="0.2.4"></a>
## [0.2.4](https://github.com/telerik/kendo-themes/compare/@progress/kendo-theme-nouvelle@0.2.3...@progress/kendo-theme-nouvelle@0.2.4) (2020-11-05)




**Note:** Version bump only for package @progress/kendo-theme-nouvelle

<a name="0.2.3"></a>
## 0.2.3 (2020-11-02)




**Note:** Version bump only for package @progress/kendo-theme-nouvelle

<a name="0.2.2"></a>
## [0.2.2](https://github.com/telerik/kendo-themes/compare/@progress/kendo-theme-nouvelle@0.2.1...@progress/kendo-theme-nouvelle@0.2.2) (2020-10-20)




**Note:** Version bump only for package @progress/kendo-theme-nouvelle

<a name="0.2.1"></a>
## 0.2.1 (2020-10-13)




**Note:** Version bump only for package @progress/kendo-theme-nouvelle

<a name="0.2.0"></a>
# 0.2.0 (2020-09-08)


### Features

* **imageeditor:** add component styles ([00762f8](https://github.com/telerik/kendo-themes/commit/00762f8)), closes [#1801](https://github.com/telerik/kendo-themes/issues/1801)




<a name="0.1.1"></a>
## 0.1.1 (2020-08-06)




**Note:** Version bump only for package @progress/kendo-theme-nouvelle

<a name="0.1.0"></a>
# 0.1.0 (2020-07-22)


### Bug Fixes

* **button:** add initial styles for button ([9ba3940](https://github.com/telerik/kendo-themes/commit/9ba3940))
* **button:** add variables for border-radius ([471ce3d](https://github.com/telerik/kendo-themes/commit/471ce3d))
* **button:** add variables for font size ([b42af42](https://github.com/telerik/kendo-themes/commit/b42af42))
* **button:** do not define focus variables, use fallback instead ([58aeb58](https://github.com/telerik/kendo-themes/commit/58aeb58))


### Features

* add initial styles for auto complete ([2c0e1fb](https://github.com/telerik/kendo-themes/commit/2c0e1fb))
* **input:** add initial styles for input ([76b37d3](https://github.com/telerik/kendo-themes/commit/76b37d3))
