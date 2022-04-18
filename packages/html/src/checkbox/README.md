```html
<!-- default rendering -->
<span class="k-checkbox-wrap">
    <input type="checkbox" class="k-checkbox k-checkbox-md k-rounded-md" />
</span>

<!-- canonical rendering -->
<span class="k-checkbox-wrap">
    <input type="checkbox"
        class="
            k-checkbox
            k-checkbox-{size}
            k-rounded-{rounded}

            {checked && 'k-checked'}
            {indeterminate && 'k-indeterminate'}

            {valid && 'k-valid'}
            {invalid && 'k-invalid'}
            {required && 'k-required'}
            {disabled && 'k-disabled'}
        "
        disabled={disabled}
    />
</span>
```
