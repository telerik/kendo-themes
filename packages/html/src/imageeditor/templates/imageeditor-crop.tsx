import { ImageEditor, ImageEditorPane, ImageEditorAspectRatioPreview } from "..";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { NumericTextbox } from "../../numerictextbox";
import { FormField } from "../../form";
import { Icon } from "../../icon";
import { Autocomplete } from "../../autocomplete";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";
import { ToolbarSeparator, ToolbarItem } from "../../toolbar";

export const ImageEditorCrop = (props: any) => (
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
            <ImageEditorPane title="Crop" actions={
                <>
                    <Button>Reset</Button>
                    <Button themeColor="primary">Apply</Button>
                </>
            }>
                <FormField
                    className="k-imageeditor-pane-field"
                    label="Orientation"
                    editor={
                        <RadioGroup layout="horizontal">
                            <RadioItem>
                                <RadioButtonWithLabelAfter id="crop-orientation-landscape" name="crop-orientation" checked>Landscape</RadioButtonWithLabelAfter>
                            </RadioItem>
                            <RadioItem>
                                <RadioButtonWithLabelAfter id="crop-orientation-portrait" name="crop-orientation">Portrait</RadioButtonWithLabelAfter>
                            </RadioItem>
                        </RadioGroup>
                    }
                />
                <FormField
                    className="k-imageeditor-pane-field"
                    label="Aspect Ratio"
                    editor={
                        <div className="k-imageeditor-aspect-ratio-options k-imageeditor-aspect-ratio-options-scrollable k-imageeditor-aspect-ratio-options-scrollable-end">
                            <div className="k-imageeditor-aspect-ratio-options-list">
                                <ImageEditorAspectRatioPreview label="Original" />
                                <ImageEditorAspectRatioPreview label="1:1" />
                                <ImageEditorAspectRatioPreview label="3:2" />
                                <ImageEditorAspectRatioPreview label="4:3" />
                                <ImageEditorAspectRatioPreview label="5:4" />
                                <ImageEditorAspectRatioPreview label="7:5" />
                                <ImageEditorAspectRatioPreview label="16:9" />
                                <ImageEditorAspectRatioPreview label="Custom" />
                            </div>
                        </div>
                    }
                />
                <div className="k-imageeditor-pane-field-row">
                    <FormField
                        className="k-imageeditor-pane-field"
                        label="Width"
                        editorId="crop-width"
                        editor={ <NumericTextbox id="crop-width" showClearButton={false} value="400" prefix={<Icon icon="arrows-left-right" />} /> }
                    />
                    <FormField
                        className="k-imageeditor-pane-field"
                        label="Height"
                        editorId="crop-height"
                        editor={ <NumericTextbox id="crop-height" showClearButton={false} value="360" prefix={<Icon icon="arrows-top-bottom" />} /> }
                    />
                </div>
                <CheckboxWithLabelAfter id="crop-lock" checked>Lock Aspect Ratio</CheckboxWithLabelAfter>
            </ImageEditorPane>
        }

        children={
            <>
                <canvas width="61" height="68" role="img" aria-label="Image being edited"></canvas>
                <div className="k-imageeditor-crop-overlay">
                    <div className="k-imageeditor-crop" style={{ width: "61px", height: "68px" }}>
                        <div className="k-imageeditor-crop-grid"></div>
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
            </>
        }
        {...props} />
);

