```html
<!-- default rendering -->
<li class="k-item k-menu-item">
     <span class="k-link k-menu-link">
        {icon !== '' && <span class="k-icon k-i-${icon}"></span>}
        {text !== '' && <span class="k-menu-link-text">Text</span>}
        <span className="k-menu-expand-arrow k-icon k-i-${arrowIconName || 'none'}"></span>
     </span>
</li>

<!-- canonical rendering -->
<li class="
    k-item
    k-menu-item
    ${hover && 'k-hover'}
    ${focus && 'k-focus'}
    ${active && 'k-active'}
    ${disabled && 'k-disabled'}
" disabled={disabled}>
     <span class="k-link k-menu-link">
        {icon !== '' && <span class="k-icon k-i-${icon}"></span>}
        {text !== '' && <span class="k-menu-link-text">Text</span>}
        {showArrow && <span className="k-menu-expand-arrow">
           <span className="k-icon k-i-${arrowIconName || 'none'}"></span>
        </span>}
     </span>
</li>
```
