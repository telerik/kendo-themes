---
title: Radio Button
category: components
slug: button
position: 3
---

# Radio Button

A radio button is one type of selection indicator in a list of options. Only one option may be selected at any time.

Radio Buttons may render the following content:

## Sizes

Radio Buttons can have various sizes. Use the smaller ones to create a compact theme or the larger ones on mobile devices.

<div class="k-d-flex k-gap-2">
    <input 
        type="radio"
        class="k-radio k-radio-sm k-roundend-md"
    >
     <input 
        type="radio"
        class="k-radio k-radio-md k-roundend-md"
    >
     <input 
        type="radio"
        class="k-radio k-radio-lg k-roundend-md"
    >
</div>

> Note: When a radio is placed inside a label and the `size` is set differently than `medium`, the `line-height` of the `.k-radio-label` class has to be adjusted.

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/radio/_variables.scss" />

## Theme-specific content

<import file="./packages/$THEME_NAME/scss/radio/index.md" />

