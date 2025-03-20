import { ColorEditorPaletteGroup } from '../../coloreditor';
import { PALETTEPRESETS } from '../../colorpalette/colorpalette-presets';
import { Combobox } from '../../combobox';
import { FormNormal, FormField } from '../../form';
import { Popup } from '../../popup';

const styles = `
    #test-area {
        max-width: 860px;
    }

    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }

    .k-dialog-wrapper {
        max-width: 320px;
        height: 215px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>PDF Viewer Color Editor</span>
            <span>PDF Viewer Text and Color Editor</span>

            <div>
                <Popup className="k-pdf-viewer-annotation-editor">
                    <span className="k-column-menu-group-header">
                        <span className="k-column-menu-group-header-text">Color</span>
                    </span>
                    <ColorEditorPaletteGroup
                        palette={PALETTEPRESETS.basic}
                        actionButtons={false}
                        color="rgba(255, 99, 88, 0.8)"
                        currentColor="rgba(75, 95, 250, 1)"
                    />
                </Popup>
            </div>
            <div>
                <Popup className="k-pdf-viewer-annotation-editor">
                    <span className="k-column-menu-group-header">
                        <span className="k-column-menu-group-header-text">Text Style</span>
                    </span>
                        <FormNormal formButtons={null} layout="grid" cols={3}>
                            <FormField label="Font Size" colSpan="1" editor={ <Combobox placeholder="18" />}></FormField>
                        </FormNormal>
                    <span className="k-column-menu-group-header">
                        <span className="k-column-menu-group-header-text">Color</span>
                    </span>
                    <ColorEditorPaletteGroup
                        palette={PALETTEPRESETS.basic}
                        actionButtons={false}
                        color="rgba(255, 99, 88, 0.8)"
                        currentColor="rgba(75, 95, 250, 1)"
                    />
                </Popup>
            </div>
        </div>
    </>
);
