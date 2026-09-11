import { ImageEditor, ImageEditorPane } from "..";
import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { InputSuffixText } from "../../input";
import { Form, FormField, Fieldset } from "../../form";
import { Autocomplete } from "../../autocomplete";
import { Slider } from "../../slider";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

export const ImageEditorRotate = (props: any) => (
    <ImageEditor
        toolbarItems={[
    <Button fillMode="flat" key="toolbar-button-1" icon="image-add" aria-label="Image Add"></Button>,
    <ToolbarSeparator key="toolbar-separator-1"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-2" icon="undo" aria-label="Undo"></Button>,
    <Button fillMode="flat" key="toolbar-button-3" icon="redo" aria-label="Redo"></Button>,
    <ToolbarSeparator key="toolbar-separator-2"></ToolbarSeparator>,
    <Button fillMode="flat" key="toolbar-button-4" icon="download" aria-label="Download"></Button>,
    <div className="k-spacer" key="toolbar-spacer"></div>,
     <Button fillMode="flat" key="toolbar-button-5" icon="zoom-in" aria-label="Zoom In"></Button>,
    <ToolbarItem key="toolbar-item-1">
        <Autocomplete fillMode="flat" value="Fit" aria-label="Zoom options" />
    </ToolbarItem>,
     <Button fillMode="flat" key="toolbar-button-6" icon="zoom-out" aria-label="Zoom Out"></Button>
        ]}
        actionPane={
            <ImageEditorPane title="Rotate" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
                        label="Rotation"
                        editor={
                            <div className="k-d-flex k-gap-4 k-align-items-center">
                                <Slider
                                    style={{ width: "170px", flex: "none" }}
                                    aria-label="Rotation"
                                    showButtons={false}
                                    showTicks={false}
                                    value={85}
                                    min={0}
                                    max={360}
                                />
                                <NumericTextbox
                                    style={{ width: "72px", flex: "none" }}
                                    showClearButton={false}
                                    showSpinButton={false}
                                    separators={false}
                                    value="85"
                                    suffix={<InputSuffixText>°</InputSuffixText>}
                                />
                            </div>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "16px" }}>
                        <FormField
                            label="Rotate Options"
                            editor={
                                <div className="k-d-flex k-gap-2">
                                    <Button icon="rotate-right" aria-label="Rotate Right"></Button>
                                    <Button icon="rotate-left" aria-label="Rotate Left"></Button>
                                </div>
                            }
                        />
                        <FormField
                            label="Flip Options"
                            editor={
                                <div className="k-d-flex k-gap-2">
                                    <Button icon="flip-horizontal" aria-label="Flip Horizontal"></Button>
                                    <Button icon="flip-vertical" aria-label="Flip Vertical"></Button>
                                </div>
                            }
                        />
                    </Fieldset>
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="494" height="307" role="img" aria-label="Image being edited" style={{ backgroundImage: "url('/packages/html/assets/sofia.jpg')", backgroundSize: "cover" }}></canvas>
                <div className="k-imageeditor-rotate">
                    <div className="k-imageeditor-crop-grid"></div>
                    <span className="k-scale-handle k-resize-nw"></span>
                    <span className="k-scale-handle k-resize-n"></span>
                    <span className="k-scale-handle k-resize-ne"></span>
                    <span className="k-scale-handle k-resize-w"></span>
                    <span className="k-scale-handle k-resize-e"></span>
                    <span className="k-scale-handle k-resize-sw"></span>
                    <span className="k-scale-handle k-resize-s"></span>
                    <span className="k-scale-handle k-resize-se"></span>
                </div>
            </>
        }
        {...props} />
);
