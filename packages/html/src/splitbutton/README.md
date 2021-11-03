```html
<!-- default rendering -->
<div class="k-split-button k-button-group">
  <button
    class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
    type="button"
  >
    <span className="k-button-text">Text</span>
  </button>
  <button class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button">
    <span class="k-icon k-i-arrow-s"></span>
  </button>
</div>

<!-- canonical rendering -->
<div class="k-split-button k-button-group">
    <button class="
        k-button
        ${text === '' && icon !== '' && 'k-icon-button'}
        k-button-${size}
        k-button-${shape}
        k-rounded-${rounded}
        k-button-${fillMode}
        k-button-${fillMode}-${themeColor}
        k-${state}
        ${disabled && 'k-disabled'}
    " type={type} disabled={disabled}>
        {icon !== '' && <span class="k-button-icon k-icon k-i-${icon}"></span>}
        {text !== '' && <span class="k-button-text">Text</span>}
    </button>
    <button class="
        k-button
        k-icon-button
        k-button-${size}
        k-button-${shape}
        k-rounded-${rounded}
        k-button-${fillMode}
        k-button-${fillMode}-${themeColor}
        k-${state}
        ${disabled && 'k-disabled'}
    " type={type} disabled={disabled}>
         <span class="k-icon k-i-${arrowIconName}"></span>
    </button>
</div>

<!-- popup menu items default rendering -->
<div class="k-animation-container k-animation-container-fixed k-animation-container-shown">
    <div class="k-popup k-menu-popup">
        <ul class="k-group k-menu-group k-reset k-menu-group-md">
            <li class="k-item k-menu-item">
                <span class="k-link k-menu-link">
                    <span class="k-menu-link-text">Text</span>
                </span>
            </li>
        </ul>
    </div>
</div>

<!-- popup menu items canonical rendering -->
<div class="k-animation-container k-animation-container-fixed k-animation-container-shown">
    <div class="k-popup k-menu-popup">
        <ul class="k-group k-menu-group k-reset k-menu-group-${size}">
            <li class="k-item k-menu-item">
                <span class="k-link k-menu-link k-${state}">
                    {icon !== '' && <span class="k-icon k-i-${icon}"></span>}
                    {text !== '' && <span class="k-menu-link-text">Text</span>}
                    {hasChildren ?
                        <span class="k-menu-expand-arrow k-icon k-i-${arrowIconName || 'arrow-60-right'}"></span> :
                        <span class="k-menu-expand-arrow k-icon k-i-none"></span>
                    }
                </span>
            </li>
        </ul>
    </div>
</div>
```
