import { Button } from '../../button';
import { ColorEditorPaletteGroup } from '../../coloreditor';

const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <div className="k-child-animation-container" style= {{ width: "330px" }} >
                        <div className="k-popup k-spreadsheet-popup">
                            <span className="k-column-menu-group-header">
                                <span className="k-column-menu-group-header-text">Border type</span>
                            </span>
                            <div className="k-spreadsheet-border-type-palette">
                                <Button icon="borders-all"></Button>
                                <Button icon="borders-inside"></Button>
                                <Button icon="borders-inside-horizontal"></Button>
                                <Button icon="borders-inside-vertical"></Button>
                                <Button icon="borders-outside"></Button>
                                <Button icon="border-left"></Button>
                                <Button icon="border-top"></Button>
                                <Button icon="border-right"></Button>
                                <Button icon="border-bottom"></Button>
                                <Button icon="borders-none"></Button>
                            </div>
                            <span className="k-column-menu-group-header">
                                <span className="k-column-menu-group-header-text">Border color</span>
                            </span>

                            <ColorEditorPaletteGroup className="k-spreadsheet-border-color-palette" color="rgba(0,0,0, 0.5)" currentColor="fuchsia" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
