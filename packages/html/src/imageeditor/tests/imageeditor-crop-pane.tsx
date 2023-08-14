import { Button } from '../../button';
import { Checkbox } from '../../checkbox';
import { DropdownList } from '../../dropdownlist';
import { NumericTextbox } from '../../numerictextbox';
import { Toolbar, ToolbarSeparator } from '../../toolbar';
import { ButtonGroup } from '../../button-group';
import { Form, FormField, Fieldset } from '../../form';
import { FormButtons } from '../../form/form-buttons.spec';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor Crop Pane</h4>
            <div className="k-widget k-imageeditor">

                {/* Header */}
                <div className="k-imageeditor-header">
                    <Toolbar className="k-imageeditor-toolbar">
                        <Button icon="upload"></Button>
                        <Button icon="download"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="undo"></Button>
                        <Button icon="redo"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="crop"></Button>
                        <Button icon="image-resize"></Button>
                        <Button icon="zoom-in"></Button>
                        <Button icon="zoom-out"></Button>
                        <div>
                            <DropdownList value="Zoom options" />
                        </div>
                    </Toolbar>
                </div>

                {/* Content */}
                <div className="k-imageeditor-content" style={{ height: "482px" }}>

                    {/* Canvas */}
                    <div className="k-imageeditor-canvas-container">
                        <div className="k-imageeditor-canvas">
                            <canvas width="700" height="400" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundPosition: "50px -350px" }}></canvas>
                            <div className="k-imageeditor-crop-overlay">
                                <div className="k-imageeditor-crop" style={{ width: "400px", height: "400px", backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundClip: "content-box", backgroundPosition: "748px -350px" }}>
                                    <span className="k-resize-handle k-resize-nw"></span>
                                    <span className="k-resize-handle k-resize-n"></span>
                                    <span className="k-resize-handle k-resize-ne"></span>
                                    <span className="k-resize-handle k-resize-w"></span>
                                    <span className="k-resize-handle k-resize-e"></span>
                                    <span className="k-resize-handle k-resize-sw"></span>
                                    <span className="k-resize-handle k-resize-s"></span>
                                    <span className="k-resize-handle k-resize-se"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Crop Pane */}
                    <div className="k-imageeditor-action-pane">
                        <Form as="div" className="k-imageeditor-pane-form" FormButtons={
                            <FormButtons>
                                <Button themeColor="primary">Confirm</Button>
                                <Button>Cancel</Button>
                            </FormButtons>
                        }>
                            <Fieldset layout="grid" legend="Crop Image" cols={2} gapX={2}>
                                <FormField
                                    colSpan="2"
                                    label="Aspect Ratio:"
                                    editor={ <DropdownList value="Original ratio" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Orientation:"
                                    editor={
                                        <ButtonGroup>
                                            <Button selected>Portrait</Button>
                                            <Button>Landscape</Button>
                                        </ButtonGroup>
                                    }
                                />
                                <FormField
                                    colSpan="1"
                                    label="Width:"
                                    editor={ <NumericTextbox showClearButton={false} value="61" /> }
                                />
                                <FormField
                                    colSpan="1"
                                    label="Height:"
                                    editor={ <NumericTextbox showClearButton={false} value="68" /> }
                                />
                                <FormField
                                    colSpan="2"
                                    label="Lock aspect ratio:"
                                    editor={ <Checkbox /> }
                                />
                            </Fieldset>
                        </Form>
                    </div>
                </div>

            </div>

        </div>
    </>
);
