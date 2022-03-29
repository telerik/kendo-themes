# ColorPalette

```html
<!-- default rendering -->
<div class="k-colorpalette">
    <div class="k-colorpalette-table-wrap">
        <table class="k-colorpalette-table k-palette">
            <tr>
                <td class="k-colorpalette-tile" style="background-color: #ffffff;"></td>
                <td class="k-colorpalette-tile" style="background-color: #000000;"></td>
            </tr>
        </table>
    </div>
</div>


<!-- canonical rendering -->
<div class="k-colorpalette {disabled && 'k-disabled'}">
    <div class="k-colorpalette-table-wrap">
        <table class="k-colorpalette-table k-palette">
            <tr>
                <td class="k-colorpalette-tile
                    style="background-color: {color}
                    {hover && 'k-hover'}
                    {focus && 'k-focus'}
                    {selected && 'k-selected'}
                ">
                </td>
            </tr>
        </table>
    </div>
</div>
```
