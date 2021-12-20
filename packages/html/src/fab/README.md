```html
<!-- default rendering -->
<button type="button" class="k-fab k-fab-rectangle k-fab-md k-rounded-full k-fab-solid k-fab-solid-primary">
    <span class="k-fab-icon k-icon k-i-plus"></span>
    <span class="k-fab-text">Create</span>
</button>

<!-- canonical rendering -->
<button class="
    k-fab
    k-fab-{size}
    k-fab-{rounded}
    k-fab-{fillMode}
    k-fab-{fillMode}-{themeColor}
">
    {icon !== '' && <span class="k-fab-icon k-icon k-i-{icon}"></span>}
    {text !== '' && <span class="k-fab-text">{text}</span>}
</button>
```
