---
title: Forms

category: components

slug: forms

position: 3

---

# Forms
The Form allows the user to provide information in a structured way.

## Rendering

### Default

```html

<div  class="k-form k-form-md">
	<div class="k-form-field">
		<label class="k-label k-form-label">Label</label>
		<div class="k-form-field-wrap">
			<input class="k-input k-input-md k-rounded-md k-input-solid">
		</div>
	</div>
	<div class="k-form-field">
		<label class="k-label k-form-label">Label</label>
		<div class="k-form-field-wrap">
			<input class="k-input k-input-md k-rounded-md k-input-solid">
		</div>
	</div>
	<div class="k-form-buttons">
		<button class="k-button k-button-md k-button-solid k-button-solid-primary k-rounded-md">
            <span class="k-button-text">Submit</span>
        </button>
		<button class="k-button k-button-md k-button-solid k-button-solid-base k-rounded-md">
            <span class="k-button-text">Clear</span>
        </button>
	</div>
</div>

```

### With Fieldsets

```html

<div class="k-form k-form-md">
	<div class="k-form-fieldset">
		<legend class="k-form-legend">Please fill in the fields:</legend>
		<div class="k-form-field">
			...
		</div>
	</div>
	<div class="k-form-fieldset">
		<legend class="k-form-legend">Please fill in the fields:</legend>
		<div class="k-form-field">
			...
		</div>
	</div>
         ...
</div>

```
## States
The form supports validation which shows an error message if the input is not valid.

```html
<div  class="k-form k-form-md">
	<div class="k-form-field k-form-field-error">
		<label class="k-label k-form-label k-text-error">Label</label>
		<div class="k-form-field-wrap">
			<input class="k-input k-input-md k-rounded-md k-input-solid k-invalid">
			<span class="k-form-error">Please enter valid data</span>
		</div>
	</div>
	...
</div>

```

## Sizes
The Form can have various sizes. You can choose between `small`, `medium` and `large`.

```html
<!-- small -->
<div  class="k-form k-form-sm">
...
</div>

<!-- medium -->
<div  class="k-form k-form-md">
...
</div>

<!-- large -->
<div  class="k-form k-form-lg">
...
</div>

```

```
## Customization
> TODO: write down specific customization use-cases

## SASS Variables
<import  file="./packages/$THEME_NAME/scss/forms/_variables.scss" />

## Theme-specific content
<import  file="./packages/$THEME_NAME/scss/forms/index.md" />
