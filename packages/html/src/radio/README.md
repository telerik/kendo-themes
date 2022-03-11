```html
<!-- default rendering -->
<input type="radio" class="k-radio k-radio-md" />

<!-- canonical rendering -->
<input type="radio"
    class="
        k-radio
        k-radio-{size}

        {checked && 'k-checked'}

        {valid && 'k-valid'}
        {invalid && 'k-invalid'}
        {required && 'k-required'}
        {disabled && 'k-disabled'}
    "
    disabled={disabled}
/>
```
