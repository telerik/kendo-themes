import { ImageEditor, ImageEditorPane, ImageEditorOptionList, ImageEditorOptionPreview, ImageEditorResizeHandles, ImageEditorCanvas } from "..";
import { IMAGEEDITOR_ADAPTIVE_CANVAS_SIZE, IMAGEEDITOR_CANVAS_SIZE } from "../constants";
import { Button } from "../../button";
import { CheckboxWithLabelAfter } from "../../checkbox";
import { NumericTextbox } from "../../numerictextbox";
import { Form, FormField, Fieldset } from "../../form";
import { Icon } from "../../icon";
import { RadioGroup, RadioItem, RadioButtonWithLabelAfter } from "../../radio";

export const ImageEditorCrop = ({
    cropWidth = 494,
    cropHeight = 307,
    isPristine = cropWidth === 494 && cropHeight === 307,
    adaptive,
    canvas = adaptive ? IMAGEEDITOR_ADAPTIVE_CANVAS_SIZE : IMAGEEDITOR_CANVAS_SIZE,
    imageSrc,
    ...props
}: any) => (
    <ImageEditor
        adaptive={adaptive}
        activeTool="Crop"
        actionPane={
            <ImageEditorPane title="Crop" adaptive={adaptive} confirmDisabled={isPristine} actions={
                <>
                    <Button disabled={isPristine}>Reset</Button>
                    <Button themeColor="primary" disabled={isPristine}>Apply</Button>
                </>
            }>
                <Form tag="div">
                    <FormField
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
                        label="Aspect Ratio"
                        editor={
                            <ImageEditorOptionList scrollable>
                                <ImageEditorOptionPreview selected><span className="k-imageeditor-option-label">Original</span></ImageEditorOptionPreview>
                                <ImageEditorOptionPreview><span className="k-imageeditor-option-label">1:1</span></ImageEditorOptionPreview>
                                <ImageEditorOptionPreview><span className="k-imageeditor-option-label">3:2</span></ImageEditorOptionPreview>
                                <ImageEditorOptionPreview><span className="k-imageeditor-option-label">4:3</span></ImageEditorOptionPreview>
                                <ImageEditorOptionPreview><span className="k-imageeditor-option-label">5:4</span></ImageEditorOptionPreview>
                                <ImageEditorOptionPreview><span className="k-imageeditor-option-label">7:5</span></ImageEditorOptionPreview>
                                <ImageEditorOptionPreview><span className="k-imageeditor-option-label">16:9</span></ImageEditorOptionPreview>
                                <ImageEditorOptionPreview><span className="k-imageeditor-option-label">Custom</span></ImageEditorOptionPreview>
                            </ImageEditorOptionList>
                        }
                    />
                    <Fieldset layout="grid" cols={2} gutters={{ cols: "8px" }}>
                        <FormField
                            label="Width"
                            editorId="crop-width"
                            editor={ <NumericTextbox id="crop-width" showClearButton={false} showSpinButton={false} value={String(cropWidth)} prefix={<Icon icon="arrows-left-right" />} /> }
                        />
                        <FormField
                            label="Height"
                            editorId="crop-height"
                            editor={ <NumericTextbox id="crop-height" showClearButton={false} showSpinButton={false} value={String(cropHeight)} prefix={<Icon icon="arrows-top-bottom" />} /> }
                        />
                    </Fieldset>
                    <FormField editor={ <CheckboxWithLabelAfter id="crop-lock" checked>Lock Aspect Ratio</CheckboxWithLabelAfter> } />
                </Form>
            </ImageEditorPane>
        }

        children={
            <>
                <ImageEditorCanvas {...canvas} imageSrc={imageSrc} />
                <div className="k-imageeditor-crop-overlay" style={{ "--crop-x": "0px", "--crop-y": "0px", "--crop-w": `${canvas.width}px`, "--crop-h": `${canvas.height}px` } as React.CSSProperties}>
                    <div className="k-imageeditor-crop-dim"></div>
                    <div className="k-imageeditor-crop" style={{ width: `${canvas.width}px`, height: `${canvas.height}px` }}>
                        <ImageEditorResizeHandles variant="crop" grid />
                    </div>
                </div>
            </>
        }
        {...props} />
);

