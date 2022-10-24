---
title: Pager
category: components
slug: pager
position: 3
---

# Pager

The Pager enables the user to split a set of data into pages.

## Rendering

The Pager has two types:

### Numeric

```html
<div class="k-pager k-pager-md">
    <div class="k-pager-numbers-wrap">
        <button class="k-pager-nav k-pager-first k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-to-left"></span>
        </button>
        <button class="k-pager-nav k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-left"></span>
        </button>
        <select class="k-picker k-dropdown-list k-dropdown k-rounded-md k-picker-md">
            <option></option>
        </select>
        <div class="k-pager-numbers">
            <button class="k-button k-button-md k-button-flat k-button-flat-primary">
                <span class="k-button-text"></span>
            </button>
            <button class="k-button k-button-md k-button-flat k-button-flat-primary">
                <span class="k-button-text"></span>
            </button>
            <button class="k-button k-button-md k-button-flat k-button-flat-primary">
                <span class="k-button-text"></span>
            </button>
            <button class="k-button k-button-md k-button-flat k-button-flat-primary">
                <span class="k-button-text"></span>
            </button>
            <button class="k-button k-button-md k-button-flat k-button-flat-primary">
                <span class="k-button-text"></span>
            </button>
            <button class="k-button k-button-md k-button-flat k-button-flat-primary">
                <span class="k-button-text"></span>
            </button>
        </div>
        <button class="k-pager-nav k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-right"></span>
        </button>
        <button class="k-pager-nav k-pager-last k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-to-right"></span>
        </button>
    </div>
    <span class="k-pager-sizes">
        <span class="k-dropdown k-picker k-picker-md k-picker-solid k-rounded-md">
            <span class="k-input-inner">
                <span class="k-input-value-text"></span>
            </span>
            <button class="k-input-button k-button k-button-md k-button-solid k-button-solid-base k-icon-button">
                <span class="k-button-icon k-icon k-i-arrow-s"></span>
            </button>
        </span>
    </span>
    <button class="k-pager-refresh k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
        <span class="k-button-icon k-icon k-i-arrow-rotate-cw"></span>
    </button>
    <span class="k-pager-info"></span>
</div>
```

### Input

```html
<div class="k-pager k-pager-md">
    <div class="k-pager-numbers-wrap">
        <button class="k-pager-nav k-pager-first k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-to-left"></span>
        </button>
        <button class="k-pager-nav k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-left"></span>
        </button>
        <select class="k-picker k-dropdown-list k-dropdown k-rounded-md k-picker-md">
            <option></option>
        </select>
        <span class="k-pager-input">
            <span class="k-textbox k-input k-input-md k-input-solid k-rounded-md">
                <input type="text" class="k-input-inner">
            </span>
        </span>
        <button class="k-pager-nav k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-right"></span>
        </button>
        <button class="k-pager-nav k-pager-last k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
            <span class="k-button-icon k-icon k-i-caret-alt-to-right"></span>
        </button>
    </div>
    <span class="k-pager-sizes">
        <span class="k-dropdown k-picker k-picker-md k-picker-solid k-rounded-md">
            <span class="k-input-inner">
                <span class="k-input-value-text"></span>
            </span>
            <button class="k-input-button k-button k-button-md k-button-solid k-button-solid-base k-icon-button">
                <span class="k-button-icon k-icon k-i-arrow-s"></span>
            </button>
        </span>
    </span>
    <button class="k-pager-refresh k-button k-button-md k-button-flat k-button-flat-base k-icon-button">
        <span class="k-button-icon k-icon k-i-arrow-rotate-cw"></span>
    </button>
    <span class="k-pager-info"></span>
</div>
```

## Sizes

The Pager has three predefined sizes - small, medium and large.

By default, the size property of the pager propagates to all of it's elements - buttons, dropdowns and inputs.

```html
<!-- small -->
<div class="k-pager k-pager-sm">
    <div class="k-pager-numbers-wrap">
        ...
        <select class="k-dropdown k-picker k-picker-sm ...">...</select>
        <div class="k-pager-numbers">
            <button class="k-button k-button-sm ..."></button>
        </div>
    </div>
    <span class="k-pager-sizes">
        <span class="k-dropdown k-picker k-picker-sm ...">...</span>
    </span>
</div>

<!-- medium -->
<div class="k-pager k-pager-md">
    <div class="k-pager-numbers-wrap">
        ...
        <select class="k-dropdown k-picker k-picker-md ...">...</select>
        <span class="k-pager-input">
            <span class="k-textbox k-input k-input-md ...">...</span>
        </span>
        <div class="k-pager-numbers">
            <button class="k-button k-button-md ..."></button>
        </div>
    </div>
    <span class="k-pager-sizes">
        <span class="k-dropdown k-picker k-picker-md ...">...</span>
    </span>
</div>

<!-- large -->
<div class="k-pager k-pager-lg">
    <div class="k-pager-numbers-wrap">
        ...
        <select class="k-dropdown k-picker k-picker-lg ...">...</select>
        <span class="k-pager-input">
            <span class="k-textbox k-input k-input-lg ...">...</span>
        </span>
        <div class="k-pager-numbers">
            <button class="k-button k-button-lg ..."></button>
        </div>
    </div>
    <span class="k-pager-sizes">
        <span class="k-dropdown k-picker k-picker-lg ...">...</span>
    </span>
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/pager/_variables.scss" />


## Theme-specific content

<import file="./packages/$THEME_NAME/scss/pager/index.md" />
