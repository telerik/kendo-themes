import { Button } from '../../button';
import { ColorEditorPaletteGroup } from '../../coloreditor';
import { Popup } from '../../popup';

const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Popup className="k-spreadsheet-popup" animationStyle={{ width: "330px" }}>
                    <span className="k-column-menu-group-header">
                        <span className="k-column-menu-group-header-text">Border type</span>
                    </span>
                    <div className="k-spreadsheet-border-type-palette">
                        <Button icon="borders-all" aria-label="All borders"></Button>
                        <Button icon="borders-inside" aria-label="Inside borders"></Button>
                        <Button icon="borders-inside-horizontal" aria-label="Inside horizontal borders"></Button>
                        <Button icon="borders-inside-vertical" aria-label="Inside vertical borders"></Button>
                        <Button icon="borders-outside" aria-label="Outside borders"></Button>
                        <Button icon="border-left" aria-label="Left border"></Button>
                        <Button icon="border-top" aria-label="Top border"></Button>
                        <Button icon="border-right" aria-label="Right border"></Button>
                        <Button icon="border-bottom" aria-label="Bottom border"></Button>
                        <Button icon="borders-none" aria-label="No borders"></Button>
                    </div>
                    <span className="k-column-menu-group-header">
                        <span className="k-column-menu-group-header-text">Border color</span>
                    </span>
                    <ColorEditorPaletteGroup className="k-spreadsheet-border-color-palette" color="rgba(0,0,0, 0.5)" currentColor="fuchsia" />
                </Popup>
            </section>
        </div>
    </>
);
