```html
<!-- default rendering -->
<span class="k-colorpicker k-icon-picker k-picker k-picker-md k-rounded-md k-picker-solid">
    <span class="k-input-inner">
        <span class="k-value-icon k-color-preview k-no-color">
            <span class="k-color-preview-mask" style="background-color: red;"></span>
        </span>
    </span>
    <button type="button" class="k-input-button k-button k-button-md k-button-solid k-button-solid-base k-icon-button">
        <span class="k-button-icon k-icon k-i-arrow-s"></span>
    </button>
</span>

<!-- canonical rendering -->
<span class="
    k-colorpicker
    k-picker
    k-icon-picker
    k-picker-{size}
    k-rounded-{rounded}
    k-picker-{fillMode}

    {valid && 'k-valid'}
    {invalid && 'k-invalid'}
    {required && 'k-required'}
    {disabled && 'k-disabled'}
">
    {inputPrefix && <span class="k-input-prefix">...</span>}
    <span class="k-input-inner">
        <span class="k-value-icon k-color-preview k-no-color">
            <span class="k-color-preview-mask" style={value}></span>
        </span>
    </span>
    {inputSuffix && <span class="k-input-suffix">...</span>}
    <button type="button" class="k-input-button k-button k-icon-button k-button-{size} k-button-{fillMode} k-button-{fillMode}-base">
        <span class="k-button-icon k-icon k-i-arrow-s"></span>
    </button>
</span>
```
