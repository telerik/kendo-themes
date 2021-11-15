```html
<!-- default rendering -->
<input type="radio" class="k-radio k-radio-md k-rounded-md" />

<!-- canonical rendering -->
<input type="radio"
    class="
        k-radio
        k-radio-{size}
        k-rounded-{rounded}

        {checked && 'k-checked'}

        {valid && 'k-valid'}
        {invalid && 'k-invalid'}
        {required && 'k-required'}
        {disabled && 'k-disabled'}
    "
    disabled={disabled}
/>
```
