---
title: Checkbox
category: components
slug: checkbox
position: 3
---

# Checkbox

A checkbox is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice.

Checkboxes may render the following content:

## Sizes
Checkboxes can have various sizes. Use the smaller ones to create a compact theme or the larger ones on mobile devices.

```html
<div class="k-d-flex k-gap-2">
    <input 
        type="checkbox"
        class="k-checkbox k-checkbox-sm k-roundend-md"
    >
     <input 
        type="checkbox"
        class="k-checkbox k-checkbox-md k-roundend-md"
    >
     <input 
        type="checkbox"
        class="k-checkbox k-checkbox-lg k-roundend-md"
    >
</div>
```

> Note: When a checkbox is placed inside a label and the `size` is set differently than `medium`, the `line-height` of the `.k-checkbox-label` class has to be adjusted.

## Roundend

Checkboxes can have various rounded states depending on the border radius customizations.

```html
<div class="k-d-flex k-gap-2">
    <input 
        type="checkbox"
        class="k-checkbox k-checkbox-md k-roundend-sm"
    >
     <input 
        type="checkbox"
        class="k-checkbox k-checkbox-md k-roundend-md"
    >
     <input 
        type="checkbox"
        class="k-checkbox k-checkbox-md k-roundend-lg"
    >
</div>
```

## Customization

> TODO: write down specific customization use-cases

## SASS Variables

<import file="./packages/$THEME_NAME/scss/checkbox/_variables.scss" />

## Theme-specific content

<import file="./packages/$THEME_NAME/scss/checkbox/index.md" />
