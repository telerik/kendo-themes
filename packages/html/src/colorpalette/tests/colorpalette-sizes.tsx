import { ColorPalette, ColorPaletteNormal } from '../../colorpalette';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            { ColorPalette.options.size.filter((size) => size !== undefined).map((size) => (
                <>
                    <section>
                        <ColorPaletteNormal size={size} />
                    </section>
                </>
            ))}

        </div>
    </>
);
